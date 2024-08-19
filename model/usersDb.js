import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDb = async(username)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data
}

const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM users WHERE userID = ?', [id])
}

const insertUserDb = async(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile)=>{
    let [data] = await pool.query(`INSERT INTO users (firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?)`, [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile])
    return data
}

// console.log(await insertUserDb('John', 'Smith', 31, 'C++', 'Toyota', 'Green' ))

const editUserDb = async(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id)=>{
    await pool.query(`UPDATE users 
        SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, emailAdd = ? , userPass = ?, userProfile = ?
        WHERE userID = ?`, [firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile, id])
}

export {getUsersDb, getUserDb, deleteUserDb, insertUserDb, editUserDb}