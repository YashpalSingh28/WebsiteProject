const express=require('express')//function
const app=express()//module
app.use(express.urlencoded({extended:false}))
const userRouter=require('./routers/usersrouter')
const adminRouter=require('./routers/admin')
const mongoose=require('mongoose')//module
mongoose.connect('mongodb://127.0.0.1:27017/websiteproject')



app.use(userRouter)
app.use('/admin',adminRouter)
app.use(express.static('public'))
app.set('view engine','ejs')
app.listen(5000)