import { images } from './constants.js'
import { table } from './variables.js'


export const getRandomImages = (length) => {
    // Function to get random images
    // Parameters: length(number)
    // Returns: array
    let arrImages = [...images]
    let arrRandomImages = []
    for (let i = 0; i < length; i++) {
        const image = getRandomImage(arrImages)
        arrImages.splice(arrImages.indexOf(image), 1)
        arrRandomImages.push(image)
    }
    return arrRandomImages
}

export const checkWinner = () => {
    // Function to check if the game is over
    // Parameters: none
    // Returns: boolean
    let total = 0
    let count = 0
    table.forEach(row => row.forEach(card => {
        total++
        if (card.imageType === "front") {
            count++
        }
    }))
    return count === total
}


const getRandomNumber = (min, num) => {
    // Funcion que devuelve un numero aleatorio entre 0 y num
    // num: numero maximo
    // returns: numero aleatorio
    return Math.floor(Math.random() * (num - min + 1) + min);
}

const getRandomImage = (arr) => {
    return arr[getRandomNumber(0, arr.length-1)];
}