import { createTable } from "../modules/createTable.js"
import { width } from "./constants.js"
import { getRandomImages } from "./utils.js"


export const randomImages = getRandomImages(width*2)
export const table = createTable(width)
export const cardHistory = []
export const score = {
    points: 0,
    attempts: 0
}