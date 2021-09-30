import express from "express"
import mongoose from "mongoose"
import Cors from "cors"
import Product from "./products.js"
import User from "./users.js"
import Bycrypt from "bcryptjs"
import { Timestamp } from "mongodb"


//App config
const app = express();
const port = process.env.PORT || 8001
//const authController = require('./controller/auth');
//const bcrypt = require('bcryptjs');

const connection_url ="mongodb+srv://admin:1234@cluster0.srur7.mongodb.net/shopping?retryWrites=true&w=majority"

//Middleware
app.use(express.json())
app.use(Cors())

//DB configs
mongoose.connect(connection_url)

//API endpoint
app.get('/', (req, res)=> res.status(200).send("Hello all"));

app.post('/products', (req, res)=> {
    const dbProduct = req.body;
    Product.create(dbProduct, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.get('/products', (req, res)=> {
    Product.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

// edit this user to add auth

app.post('/users', (req, res)=> {
    const dbUser = req.body;
    User.create(dbUser, (err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
})

app.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.');
                error.statusCode = 401;
                res.status(401).json({email: null });
                console.log(error);
            }
            loadedUser = user;
            return Bycrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!');
                error.statusCode = 401;
                console.log(error);
                res.status(200).json({ verified: false, userId: null });
            }
            else {
                res.status(200).json({ verified: true, email: loadedUser._id.toString() });
            }

        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            console.log(err);
        });
})


app.post('/signup', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const postal_code=req.body.postal_code;
    const gender=req.body.gender;
    console.log(password);
    console.log(email);
    Bycrypt
        .hash(password, 12)
        .then(hashedPw => {
            const user = new User({
                email: email,
                password: hashedPw,
                first_name: first_name,
                last_name: last_name,
                postal_code: postal_code,
                gender: gender
            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({ message: 'User created!', userId: result._id });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            console.log(err);
        });
})



app.get('/users', (req, res)=> {
    User.find((err, data)=> {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, ()=> console.log("listening on localhost: " + port))