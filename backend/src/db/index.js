import mongoose from "mongoose"
import DB_NAME from "./constants"


const connectDb=(async()=>{
    try {
     const connect=  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

       
        console.log(`"\n user connect to the database `);
        

      
    } catch (error) {
        console.log("mongoDb connection Error:",error);
        process.exit(1)
    }
})