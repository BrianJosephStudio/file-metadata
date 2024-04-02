import express from "express"
import fileUploadClient from "../util/FileUpload"

const router = express.Router()

router.post("/", async (req, res) => {
    const fileUpload = await fileUploadClient()

    //TODO: logic
})

export default router