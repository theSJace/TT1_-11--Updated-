
import  Timestamp  from 'bson'
import mongoose from 'mongoose'
import { setFlagsFromString } from 'v8'

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String, 
    postal_code: String, 
    gender: String
 }, { timestamps: true }
);

export default mongoose.model('users', userSchema)