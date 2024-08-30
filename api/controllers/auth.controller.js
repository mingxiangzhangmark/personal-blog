import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username === '' || email === '' || password ==='') {
        // return res.status(400).json({ message: "Please fill in all fields" });
        next(errorHandler(400, "Please fill in all fields"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 12);
    
    const newUser = new User({ 
        username, 
        email, 
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json({ message: "User created successfully" });
    } catch (error) {
       next(error);
    }
    
};