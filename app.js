const express =require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const productos = require('./routers/productos')
app.use(productos)

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

app.listen(3021, ()=>{
    console.log('Server UP! en http://localhost:3021')
})
