import {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb, getUserByEmailDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers = async(req, res)=>{
    try {
        res.status(200).json(await getUsersDb())   
    } catch (err) {
        res.status(500).send('Error fetching users')
        throw err
    }
}

const getUser = async(req, res)=>{
    try{
        const user = await getUserDb(req.params.id);
        if(!user){
            return res.status(404).json({message:'User does not exist.'})
        }
        res.status(200).json(await getUserDb(req.params.id))   
    } catch(err){
        res.status(500).send('Error fetching products')
        throw err
    }
}

const insertUser = async (req, res) => {
    let { firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile } = req.body;
    if (userRole == undefined) {
        userRole = "user";
    }

    try {
        // Check if the user already exists
        const existingUser = await getUserByEmailDb(emailAdd);

        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Try enter a different email address." });
        }
        // Hash the password and insert the new user
        hash(userPass, 10, async (err, hashedP) => {
            if (err) throw err;
            await insertUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile);
            res.status(200).json(await getUsersDb());
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        throw error
    }
}


const deleteUser = async(req, res)=>{
    try {

        const user = await getUserDb(req.params.id);
        if(!user){
            return res.status(404).json({message:'User does not exist.'})
        }

        await deleteUserDb(req.params.id)
        res.status(200).json(await getUsersDb())
        
    } catch (err) {
        res.status(500).send('Error deleting a user')
    }
}

const editUser = async(req, res)=>{
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUserDb(req.params.id)

    if(!user){
        res.status(404).send('User not found')
    }

    
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
            await editUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, hashedP, userProfile, req.params.id)    
        })
    }   else{
        userPass = user.userPass
        await editUserDb(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, req.params.id)    
    }
         res.status(200).send(await getUsersDb())
        
    } catch (err) {
        res.status(500).send('Error fetching products')
        throw err
    }

}

const loginUser = (req,res)=>{
    res.status(200).json({message:"You have signed in ", token:req.body.token})
}

export {getUsers, getUser, insertUser, deleteUser, editUser, loginUser}