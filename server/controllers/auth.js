import { connect } from "getstream";
import bcrypt from 'bcrypt';
import { StreamChat } from 'stream-chat';
import crypto from 'crypto';
import dotenv from "dotenv";
import { registerUser, signupUser } from "../utils/index.js";

dotenv.config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const userId = crypto.randomBytes(16).toString('hex');
        const feedClient = connect(api_key, api_secret, app_id);
        const chatClient = StreamChat.getInstance(api_key, api_secret);
        const hashedPassword = await bcrypt.hash(password, 10);
        chatClient.upsertUser({
            id: userId,
            fullName,
            email,
            hashedPassword,
        });
    
        const feedToken = feedClient.createUserToken(userId);
        const chatToken = chatClient.createToken(userId);
    
        res.status(200).json({ feedToken, chatToken, userId, fullName, email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });   
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const feedClient = connect(api_key, api_secret, app_id);
        const chatClient = StreamChat.getInstance(api_key, api_secret);
        const { users } = await chatClient.queryUsers({ email: { $eq: email } });

        if (!users.length) return res.status(400).json({ message: 'Username or password is incorrect!' });
        
        const success = await bcrypt.compare(password, users[0].hashedPassword);
        const feedToken = await feedClient.createUserToken(users[0].id);
        const chatToken = await chatClient.createToken(users[0].id);

        success ?
        await res.status(200).json({ feedToken, chatToken, userId: users[0].id, fullName: users[0].fullName, email}) :
        res.status(500).json({ message: 'Username or password is incorrect!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });   
    }
};
