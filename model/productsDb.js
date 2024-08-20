import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FFROM products')
    return data
}

const getRecentDb = async()=>{
    let [data] = await pool.query('SELECT * FROM products LIMIT 5')
    return data
}

const getHomeRecentDb =  async()=>{
    let [data] = await pool.query('SELECT * FROM products LIMIT 3')
    return data
} 

const getProductDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM products WHERE prodID = ?', [id])
    return data
}

const deleteProductDb = async(id)=>{
    await pool.query('DELETE FROM Products WHERE prodID = ?', [id])
}

const insertProductDb = async(prodName, quantity, amount, category, prodURL, prodDescription)=>{
    let [data] = await pool.query(`INSERT INTO Products (prodName, quantity, amount, category, prodURL, prodDescription) VALUES (?,?,?,?,?,?)`, [prodName, quantity, amount, category, prodURL, prodDescription])
    return data
}


const editProductDb = async(prodName, quantity, amount, category, prodURL, prodDescription, id)=>{
    await pool.query(`UPDATE Products 
        SET prodName = ?, quantity = ?, amount = ?, category = ?, prodURL = ?, prodDescription = ?
        WHERE prodID = ?`, [prodName, quantity, amount, category, prodURL, prodDescription, id])
}



export {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb, getRecentDb, getHomeRecentDb}