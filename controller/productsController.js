import {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb, getHomeRecentDb, getRecentDb} from '../model/productsDb.js'
// import { getUserDb } from '../model/usersDb.js'

const getProducts = async(req, res)=>{
    try{
        res.json(await getProductsDb())
    } catch(err){
        res.send('Error fetching products')
        throw err
        
    }
}
const getHomeRecent = async(req, res)=>{
    try {
        res.json(await getHomeRecentDb())    
    } catch (err) {
        res.send('Error fetching  3 products')
        throw err
    }
}
const getRecent = async(req, res)=>{
    try {
        res.json(await getRecentDb())
        
    } catch (err) {
        res.send('Error fetching  3 products')
        throw err
    }
}

const getProduct = async(req, res)=>{
    try {
        res.json(await getProductDb(req.params.id))
        
    } catch (err) {
        res.send('Error fetching  a single product')
        throw err
    }
}

const insertProduct = async(req, res)=>{
    let {prodName, quantity, amount, category, prodURL, prodDescription} = req.body

    try {
        await insertProductDb(prodName, quantity, amount, category, prodURL, prodDescription)
        res.json(await getProductsDb())
        
    } catch (err) {
        res.send('Error inserting a product')
        throw err
        
    }
}

const deleteProduct = async(req, res)=>{
    try {
        await deleteProductDb(req.params.id)
        res.json(await getProductsDb())
        
    } catch (err) {
        res.send('Error deleting a products')
        throw err
    }
}

const editProduct = async(req, res)=>{
    let {prodName, quantity, amount, category, prodURL, prodDescription} = req.body
    let product = await getProductDb(req.params.id)
    prodName? prodName = prodName: prodName = product.prodName
    quantity? quantity = quantity: quantity = product.quantity
    amount? amount = amount: amount = product.amount
    category? category = category: category = product.category
    prodURL? prodURL = prodURL: prodURL = product.prodURL
    prodDescription? prodDescription = prodDescription: prodDescription = product.prodDescription

    try {
        await editProductDb(prodName, quantity, amount, category, prodURL, prodDescription, req.params.id)    
        res.send(await getProductsDb())
    } catch (error) {
        res.send('Error editing a product')
        throw err
    }
    

}



export {getProducts, getProduct, insertProduct, deleteProduct, editProduct, getRecent, getHomeRecent}