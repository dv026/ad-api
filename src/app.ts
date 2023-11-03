import * as dotenv from "dotenv"
dotenv.config()
var cors = require("cors")

import express from "express"

import { routes } from "./routes"
import { tryCatch } from "./utils/try-catch"
import { errorMiddleware } from "./middlewares/error-middleware"
import { adController } from "./controllers/ad-controller"

const app = express()
const port = 3000

const url = process.env.MONGODB_URL

// to allow every origin to connect
app.use(cors())
// get body from request
app.use(express.json())
app.use(errorMiddleware)

app.post(
  routes.ad.create,
  tryCatch(async (req, res) => {
    const { name } = req.body
    const { id } = req.params

    const user = await adController.update({
      id,
      name
    })
    return res.json(user)
  })
)
