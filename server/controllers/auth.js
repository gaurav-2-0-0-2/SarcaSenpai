import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


/*REGISTER USER*/
export const signup = async (req, res) => {

    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: error.message})
    }
};


/*LOGGING USER*/

export const signin = async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user) return res.status(400).json({msg: "User does not exist"});
        
        const isMatch = await bcrypt.compare(password, passwordHash);
        if(!isMatch) return res.status(400).json({msg: "Invalid Credentials"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token,user});
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
















