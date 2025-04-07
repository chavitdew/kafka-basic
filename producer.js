const express = require('express')
const {Order, Product, sequelize} = require('./schema')
const app = express()
app.use(express.json())
const port = 8000

//API สร้าง product
app.post('/api/create-product',async (req,res)=>{
    const productData = req.body
    try {
        const result = await Product.create(productData)
        res.json(result)
    } catch (error) {
        res.status(500).json({error})
    }
})

app.listen(port,async ()=> {
    await sequelize.sync()
    console.log(`Express app listening at http://localhost:${port}`)
})