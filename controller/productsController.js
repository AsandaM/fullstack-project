import {getProductsDb, getProductDb, deleteProductDb, insertProductDb, editProductDb} from '../model/productsDb.js'
// import { getUserDb } from '../model/usersDb.js'

const getProducts = async(req, res)=>{
    res.json(await getProductsDb())
}

const getProduct = async(req, res)=>{
    res.json(await getProductDb(req.params.id))
}

const insertProduct = async(req, res)=>{
    let {prodName, quantity, amount, category, prodURL, prodDescription} = req.body
        await insertProductDb(prodName, quantity, amount, category, prodURL, prodDescription)
        res.send('Data was inserted successfully')
}

const deleteProduct = async(req, res)=>{
    await deleteProductDb(req.params.id)
    res.send('Product has been deleted')
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
    
    await editProductDb(prodName, quantity, amount, category, prodURL, prodDescription, req.params.id)
    res.send(await getProductsDb())

}



export {getProducts, getProduct, insertProduct, deleteProduct, editProduct}