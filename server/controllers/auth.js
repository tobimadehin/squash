import { connect } from "getstream";
import bcrypt from 'bcrypt';
import { StreamChat } from 'stream-chat';
import crypto from 'crypto';
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { registerUser, signupUser } from "../utils/index.js";

dotenv.config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;
const user_email = process.env.USER_EMAIL;
const user_password = process.env.USER_PASSWORD;

export const signup = async (req, res) => {
    try {
        const { fullName, email, username, password } = req.body;
        const userId = crypto.randomBytes(16).toString('hex');
        const feedClient = connect(api_key, api_secret, app_id);
        const chatClient = StreamChat.getInstance(api_key, api_secret);
        const hashedPassword = await bcrypt.hash(password, 10);
        const isEmailVerified = false;
        const otp = 999999;

        const { users } = await chatClient.queryUsers({
            $or: [{ email: { $eq: email }}, { username: { $eq: username }}]
        });

        if (users.length) return res.status(400).json({ message: 'This user already exists!' });

        chatClient.upsertUser({
            id: userId,
            fullName,
            email,
            username,
            hashedPassword,
            isEmailVerified,
            otp,
        });

        const feedToken = feedClient.createUserToken(userId);
        const chatToken = chatClient.createToken(userId);
    
        res.status(200).json({ feedToken, chatToken, userId, fullName, username, email, isEmailVerified, otp });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });   
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
        await res.status(200).json({ feedToken, chatToken, userId: users[0].id, 
                                    fullName: users[0].fullName, email, isEmailVerified: users[0].isEmailVerified, otp: users[0].otp }) :
        res.status(500).json({ message: 'Username or password is incorrect!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });   
    }
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: user_email,
        pass: user_password,
    }
});

export const sendMail = async (req, res) => {
    try {
        const { email } = req.body;
        const otpToSend = parseInt(Math.random() * 1000000);
        const chatClient = StreamChat.getInstance(api_key, api_secret);

        const mailOptions = {
            from: user_email,
            to: email,
            subject: "Verify your squash account",
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otpToSend + "</h1>",
        };

        const { users } = await chatClient.queryUsers({ email: { $eq: email } });

        await chatClient.partialUpdateUser({ 
            id: users[0].id,
            set: {
                otp: otpToSend,
            }
        });
    
        await transporter.sendMail(mailOptions);
        await res.status(200).json({ message: `OTP sent to ${email}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};

export const verify = async (req, res) => {
    try {
        const { otp, userId } = req.body;
        
        const chatClient = StreamChat.getInstance(api_key, api_secret);
        const { users } = await chatClient.queryUsers({ id: { $eq: userId } });
        
        console.log("The OTP is:", otp);
        console.log("The Server OTP is:", users[0].otp);
        if (otp !== users[0].otp) return res.status(400).json({ message: 'OTP is incorrect!' })
        
        chatClient.partialUpdateUser({ 
            id: userId,
            set: {
                isEmailVerified: true,
            }
        });
        res.status(200).json({ message: "You've been successfully verified" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};

export const checkVerificationStatus = async (req, res) => {
    try {
        const { email } = req.body;
        const chatClient = StreamChat.getInstance(api_key, api_secret);
        const { users } = await chatClient.queryUsers({ email: { $eq: email } });

        res.status(200).json({ isEmailVerified: users[0].isEmailVerified });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
}
