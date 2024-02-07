import { Card } from "./Card.js"
import { randomImages } from "../utils/variables.js"


export const createTable = (width) => {
    // Function to create a table
    // Parameters: width(number)
    // Returns: array(array)
    const table = []
    let count = 0
    for (let i = 0; i < width; i++) {
        const row = []
        if (i === width/2) count = 0
        for (let j = 0; j < width; j++) {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
                <div class="front"><img src="" alt="front"></div>
                <div class="back"><img class="back" src="./app/images/back.png" alt="back"></div>
            `
            row.push(new Card(count, card, `./app/images/${randomImages[count]}`))
            count++
        }
        table.push(row)
    }
    return scrambleTable(table)
}

const scrambleTable = (table) => {
    // Function to scramble a table
    // Parameters: table(array)
    // Returns: array(array)
    for (let i = 0; i < table.length; i++) {
      if (Array.isArray(table[i])) {
        scrambleTable(table[i])
      }
    }
    return scrambleArray(table)
}

const scrambleArray = (array) => {
    // Function to scramble an array
    // Parameters: array(array)
    // Returns: array(array)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}
