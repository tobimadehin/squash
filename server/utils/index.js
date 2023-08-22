import bcrypt from 'bcrypt';
import StreamChat from 'stream-chat';
import crypto from 'crypto';

export const registerUser = async (fullName, email, password, callback) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // const sql = "INSERT INTO users (fullName, email, hashedPassword) VALUES (?,?,?)";
        // const params = [fullName, email, hashedPassword];
        // db.run(sql, params, (err, innerResult) => {
        //     err ?
        //     callback(err, innerResult) :
        //     callback(null, { fullName, email, hashedPassword })
        // });
    } catch (error) {
        console.error(error);
    }
};

export const signupUser = async (req, res) => {
    try {
        const { fullName, email } = req.body;
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