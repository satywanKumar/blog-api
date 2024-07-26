const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('../Blog API/routes/user')
const catRoute = require('../Blog API/routes/category')
const blogRoute = require('../Blog API/routes/blog')
const commentRoute = require('../Blog API/routes/comment')

mongoose.connect('mongodb+srv://sbs:sbs123@sbs.smjhuzl.mongodb.net/?retryWrites=true&w=majority&appName=sbs')
.then(res=>{console.log("connected to database")})
.catch(err=>{console.log(err)})

app.use(bodyParser.json())


app.use('/user',userRoute)
app.use('/category',catRoute)
app.use('/blog',blogRoute)
app.use('/comment',commentRoute)

app.use('*',(req,res)=>{
    res.status(404).json({
        msg:'bad request'
    })
})

module.exports = app