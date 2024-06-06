import mongoose from "mongoose"

const connectToDatabase = async () =>{
  try{
    const connection = await mongoose.connect("mongodb+srv://gautamakansha312:A5KJ9gPVW2JiCihd@cluster0.rp3i2lh.mongodb.net/?retryWrites=true&w=majority&appName=blossom-app")
    if(connection){
      console.log("Connection established")
    }
  }catch(error){
    console.log("Error occurred ",error)
    throw error
  }
}
export default connectToDatabase