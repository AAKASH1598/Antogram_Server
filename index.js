import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express()
app.use(bodyParser.json({limit: "50mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))
app.use(cors())
//Middleware
app.use('/posts', postRoutes)


const CONNECTION_URL ='mongodb+srv://aakash:mongo@123@cluster0.pxi6u.mongodb.net/Antogram'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
  .then(()=> app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
  .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false)