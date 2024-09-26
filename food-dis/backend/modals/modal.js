import mongoose from "mongoose";

const fooddisSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  descripation: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true

  },
  category: {
    type: String,
    required: true
  }
})

const fooddismodal = mongoose.model('food-dis', fooddisSchema);

export default fooddismodal;