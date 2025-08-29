// require('dotenv').config({path: './env'})   //-----> Works but inconsistent with our importing format
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`🛞 Server is running on ${process.env.PORT}`)
    })
)
.catch((err)=>{
    console.error("Failed to connect. Error: " , err);
})



// Following also works fine.
// import express from 'express'
// const app = express()

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//     }
//     catch(error){
//         console.error("ERROR: ", error)
//         throw error
//     }

//     app.on("error", (err)=>{
//         console.error(err);
//         throw error
//     })
//     app.listen(process.env.PORT , ()=>{
//         console.log(`App is listening on port: ${process.env.PORT}`);
//     })
// })()