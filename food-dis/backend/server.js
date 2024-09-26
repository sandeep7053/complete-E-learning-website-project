import express from 'express'
import cors from 'cors'
import { connectdb } from './config/connectio.js'
import foodrouter from './router/router.js';


// config

const app = express();
const port = 9090

//middleware

app.use(express.json());
app.use(cors())

//connnect mongodb database
connectdb();

app.use("/api/food", foodrouter)
app.use("/images", express.static('uploads'))


app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`surver running port  on the http://localhost:${port}`)
})