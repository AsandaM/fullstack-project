import {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb, getHomeRecentDb, getRecentDb} from '../model/productsDb.js'
// import { getUserDb } from '../model/usersDb.js'

const getProducts = async(req, res)=>{
    try{
        res.status(200).json(await getProductsDb())
    } catch(err){
        res.status(500).send('Error fetching products')
        throw err
        
    }
}
const getHomeRecent = async(req, res)=>{
    try {
        res.status(200).json(await getHomeRecentDb())    
    } catch (err) {
        res.status(500).send('Error fetching  3 products')
        throw err
    }
}
const getRecent = async(req, res)=>{
    try {
        res.status(200).json(await getRecentDb())
        
    } catch (err) {
        res.status(500).send('Error fetching  3 products')
        throw err
    }
}

const getProduct = async(req, res)=>{
    try {
        res.status(200).json(await getProductDb(req.params.id))
        
    } catch (err) {
        res.status(500).send('Error fetching  a single product')
        throw err
    }
}

const insertProduct = async(req, res)=>{
    let {prodName, quantity, amount, category, prodURL, prodDescription} = req.body

    try {
        await insertProductDb(prodName, quantity, amount, category, prodURL, prodDescription)
        res.status(200).json(await getProductsDb())
        
    } catch (err) {
        res.status(500).send('Error inserting a product')
        throw err
        
    }
}

const deleteProduct = async(req, res)=>{
    try {
        await deleteProductDb(req.params.id)
        res.status(200).json(await getProductsDb())
        
    } catch (err) {
        res.status(500).send('Error deleting a products')
        throw err
    }
}

const editProduct = async(req, res)=>{
    let {prodName, quantity, amount, category, prodURL, prodDescription} = req.body
    let product = await getProductDb(req.params.id)

    if(!product){
        res.status(404).send('Product not found')
    }
    
    // prodName? prodName = prodName: prodName = product.prodName
    // quantity? quantity = quantity: quantity = product.quantity
    // amount? amount = amount: amount = product.amount
    // category? category = category: category = product.category
    // prodURL? prodURL = prodURL: prodURL = product.prodURL
    // prodDescription? prodDescription = prodDescription: prodDescription = product.prodDescription

    try {
        await editProductDb(prodName, quantity, amount, category, prodURL, prodDescription, req.params.id)    
        res.status(200).send(await getProductsDb())
    } catch (error) {
        res.status(500).send('Error editing a product')
        throw err
    }
    

}



export {getProducts, getProduct, insertProduct, deleteProduct, editProduct, getRecent, getHomeRecent}