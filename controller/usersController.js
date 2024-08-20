import {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    res.json(await getUsersDb())
}

const getUser = async(req, res)=>{
    res.json(await getUserDb(req.params.id))
}

const insertUser = async(req, res)=>{
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    if(userRole == undefined){
        userRole = "user"
    }
    hash(userPass, 10, async(err, hashedP)=>{
        if(err) throw err
        await insertUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile)
    })
    
    res.send('Data was inserted successfully')
}


const deleteUser = async(req, res)=>{
    await deleteUserDb(req.params.id)
    res.send('User has been deleted')
}

const editUser = async(req, res)=>{
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUserDb(req.params.id)
    firstName? firstName = firstName: firstName = user.firstName
    lastName? lastName = lastName: lastName = user.lastName
    userAge? userAge = userAge: userAge = user.userAge
    gender? gender = gender: gender = user.gender
    userRole? userRole = userRole: userRole = user.userRole
    emailAdd? emailAdd = emailAdd: emailAdd = user.emailAdd
    userPass? userPass = userPass: userPass = user.userPass
    userProfile? userProfile = userProfile: userProfile = user.userProfile
    await editUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, req.params.id)
    res.send(await getUsersDb())

}

const loginUser = (req,res)=>{
    res.json({message:"You have signed in ", token:req.body.token})
}

export {getUsers, getUser, insertUser, deleteUser, editUser, loginUser}