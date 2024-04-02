import { Database } from "./database/Database"
import { getFileModel } from "./database/models"


export default async(): Promise<FileUpload> => {
    const database = await Database.getInstance()
    return new FileUpload(database)
}
class FileUpload {
    private database: Database
    constructor(database: Database){
        this.database = database
    }
    //@ts-ignore
    public readonly uploadFile = async (file: any): Promise<File> => {

    }
}