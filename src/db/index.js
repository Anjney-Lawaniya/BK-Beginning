import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI); //Just storiong the object;
        console.log("MongoDB connected Successfully !  \n HOST:" , connectionInstance.connection.host)
    }
    catch(error){
        console.error(error);
        process.exit(1)
    }
}

export default connectDB