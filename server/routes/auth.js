import express from "express";
import { signup, login, sendMail, verify, checkVerificationStatus } from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/sendmail', sendMail);
router.post('/verify', verify);
router.post('/checkverificationstatus', checkVerificationStatus);

export default router;
