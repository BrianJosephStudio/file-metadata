require("dotenv").config()
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import multer from "multer"
import router from "./routes/routes"
import { startDatabase } from "util/database/Database"

const app = express()
const upload = multer({ dest: "uploads/" })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.single(("upfile")))
app.use(startDatabase)
app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`))