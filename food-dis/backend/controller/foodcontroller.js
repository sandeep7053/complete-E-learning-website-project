import fooddismodal from "../modals/modal.js";
import fs from 'fs'

const addfood = async (req, res) => {

  let image_filename = `${req.file.filename}`;

  const food =  fooddismodal({
    name: req.body.name,
    descripation: req.body.descripation,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  })

  try {
    await food.save();
    res.json({ success: true, message: "food added" })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "error" })

  }


}

export { addfood }