import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Ankki:Ankit%40457@cluster0.le82jcw.mongodb.net/Food_Application').then(()=>console.log("DB connected"));
}
