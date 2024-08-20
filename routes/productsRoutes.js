import express from 'express'
import { getProducts, getProduct, insertProduct, deleteProduct, editProduct, getRecent, getHomeRecent} from '../controller/productsController.js'
// import {verifyAToken} from '../middleware/authenticate.js'

const router = express.Router()

router.get('/',  getProducts)
router.get('/recent',  getRecent)
router.get('/homeRecent',  getHomeRecent)
router.post('/', insertProduct)

router
    .route('/:id')
        .get(getProduct)
        .delete(deleteProduct)
        .patch(editProduct)

export default router