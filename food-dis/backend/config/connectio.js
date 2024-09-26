import mongoose from "mongoose";

export  const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/foood-dis");
    console.log(`connection mongodb database `);
  } catch (error) {
    console.log(`mongodb database error ${error}`)

  }

};

 
