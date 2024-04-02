require("dotenv").config()
const axios = require("axios")
import { Database } from "../src/util/database/Database"

let database: Database

describe("Exercise Tracker", () => {
  /** -------------------------------- Arrange ------------------------------------ **/
  beforeAll(async () => {
    database = await Database.getInstance()
  })
  beforeEach(async () => {
    await database.removeAllDocuments(Database.fileModel)
  })
  afterAll(async () => {
    await database.disconnect()
  })
  const baseUrl = `http://localhost:${process.env.PORT}/api/users`

  test("You can submit a form that includes a file upload.", async () => {
    /** -------------------------------- Arrange ------------------------------------ **/

    /** ---------------------------------- Act -------------------------------------- **/

    /** --------------------------------- Assert ------------------------------------- **/
  })

  test("The form file input field has the name attribute set to upfile.", async () => {
    /** -------------------------------- Arrange ------------------------------------ **/

    /** ---------------------------------- Act -------------------------------------- **/

    /** --------------------------------- Assert ------------------------------------- **/
  })

  test("When you submit a file, you receive the file name, type, and size in bytes within the JSON response.", async () => {
    /** -------------------------------- Arrange ------------------------------------ **/

    /** ---------------------------------- Act -------------------------------------- **/

    /** --------------------------------- Assert ------------------------------------- **/
  })
})