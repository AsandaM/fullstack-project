import { compare } from "bcrypt"
import { loginDb } from "../model/usersDb.js"
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()


const emailCheck = async(req, res, next)=>{
    const {emailAdd} = req.body
    let user = await loginDb(emailAdd)
    if(user){
        next()
        return
    }
    res.send('Email not found')
}


const checkUser = async(req, res, next)=>{
    const {emailAdd, userPass} = req.body
    let hashedPassword = (await loginDb(emailAdd)).userPass
   
    compare(userPass, hashedPassword, (err, result)=>{
        if(result == true){
            let token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})
            // console.log(token);  
            req.body.token = token
            next()
            return
        }
        res.send('Password incorrect')

    })

}

const verifyAToken = (req, res, next)=>{
    let {cookie} = req.headers
    //checks if the token exits first
    let token = cookie && cookie.split('=')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
        if(err){
            res.json({message: 'Token is invalid'})
            return
        }
        req.body.user = decoded.username
        next()       
    })
}




export {checkUser, verifyAToken, emailCheck}