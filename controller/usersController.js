import {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    try {
        res.json(await getUsersDb())   
    } catch (err) {
        res.send('Error fetching users')
        throw err
    }
}

const getUser = async(req, res)=>{
    try{
        res.json(await getUserDb(req.params.id))   
    } catch(err){
        res.send('Error fetching products')
        throw err
    }
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
    
    res.status(200).send('Data was inserted successfully')
}


const deleteUser = async(req, res)=>{
    try {
        await deleteUserDb(req.params.id)
        res.send('User has been deleted')
        
    } catch (err) {
        res.send('Error deleting a user')
    }
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
    userProfile? userProfile = userProfile: userProfile = user.userProfile


    
    
    
    try {
        if(userPass!=''){
        hash(userPass, 10, async(err, hashedP)=>{
            if(err) throw err
            userPass = hashedP
            console.log(userPass);
            await editUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile, req.params.id)    
        })
    }   else{
        userPass = user.userPass
        await editUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, req.params.id)    
    }
         res.send(await getUsersDb())
        
    } catch (err) {
        res.send('Error fetching products')
        throw err
    }

}

const loginUser = (req,res)=>{
    res.json({message:"You have signed in ", token:req.body.token})
}

export {getUsers, getUser, insertUser, deleteUser, editUser, loginUser}