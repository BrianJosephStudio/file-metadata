require("dotenv").config()
const mongoose = require("mongoose")
import { Document, Model } from "mongoose"
import { File } from "types/schemas"
import { getFileModel } from "./models"
// import { getModels } from "./mongoose/models"
// import { User, Exercise, ExerciseResponse } from "@src/types/schemas"

export class Database {
    private static instance: Database
    public userModel: any
    public exerciseModel: any
    private static mongoose: any
    public static fileModel: Model<File>
    private constructor() {
        Database.mongoose = mongoose
    }

    private readonly connect = async (): Promise<any | Error> => {
        try {
            const dbUri = process.env.DB_URI
            if (!dbUri) { throw new Error("DB_URI env is not properly set.") }

            await Database.mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        } catch (e) {
            console.error("Error starting the database instance:", e);
        }
    }

    public static getInstance = async (): Promise<Database> => {
        if (!Database.instance) {
            Database.instance = new Database()
            console.log("Conencting to database...")
            await Database.instance.connect()
            Database.fileModel = getFileModel(Database.mongoose)
            console.log("Conenction to database successfull")
        }
        return Database.instance
    }

    public readonly disconnect = async (): Promise<void> => {
        await Database.mongoose.disconnect()
    }

    public readonly findById = async (id: string, model: Model<any>) => {
        const foundModel = await model.findById(id)
        if (!foundModel) {
            throw new Error("Could not find user")
        }

        return foundModel
    }

    public readonly createDocument = async (data: any, model: Model<any>): Promise<any> => {
        const newDocument = new model(data)
        await newDocument.save()
        return newDocument
    }

    public readonly updateDocument = async (id: string, newData: any, model: Model<any>): Promise<any> => {
        const document = await model.findById(id)
        const newDocument = new model({
            ...document.toObject(),
            ...newData
        })
        await newDocument.save()
        return newDocument.toObject()
    }
    public readonly removeDocument = (reqBody: any, model: Model<any>): any => {

    }

    public readonly removeAllDocuments = async (model: Model<any>): Promise<void> => {
        await model.deleteMany({})
    }
}

export const startDatabase = async () => {
    await Database.getInstance()
}