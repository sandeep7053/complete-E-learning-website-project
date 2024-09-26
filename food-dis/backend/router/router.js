import express from 'express'
import { addfood } from '../controller/foodcontroller.js'
import multer from 'multer'

const foodrouter = express.Router()

//image storage function

const storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`)

  }
})

const upload = multer({ storage: storage })

foodrouter.post("/add", upload.single("image"), addfood)


export default foodrouter;

