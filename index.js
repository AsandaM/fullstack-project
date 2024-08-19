import express from 'express'
// import cors from 'cors'
// import usersRoutes from './routes/userRoutes.js'
import productsRoutes from './routes/productsRoutes.js'


let port = process.env.PORT || 5002

const app = express()
app.use(express.json())
// app.use(cors({origin:'http://localhost:8080', credentials:true}))
// app.use('/users', usersRoutes)
app.use('/products', productsRoutes)

app.use(express.static('public'))


app.listen(port, ()=>{
    console.log('http://localhost:' + port)
})