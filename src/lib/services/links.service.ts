import dbConnection from '$lib/db'
import linksModel from '$lib/models/links.model'

export const getAllPublicLinks = async () => {
  await dbConnection()
  return await linksModel.find()
}
