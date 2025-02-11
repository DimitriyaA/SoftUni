import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

//!!!! MODIFY USER SCHEMA!!!
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters long!'],
        maxLength: [20, 'Name should be no more than 20 characters long!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email should be at least 10 characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [4, 'Password should be at least 4 characters long!']
    }
});

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;