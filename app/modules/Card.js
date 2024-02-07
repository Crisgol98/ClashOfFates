import { cardHistory, score, table } from "../utils/variables.js"
import { checkWinner } from "../utils/utils.js"
import { renderEnding } from "./render/renderEnding.js"


export class Card {

    static canFlip = true

    constructor(id, card, image) {
        this.imageType = "back"
        this.image = image
        this.id = id
        this.cardElement = card
        this.boundEventFunction = this.eventFunction.bind(this)
        this.cardElement.addEventListener('click', this.boundEventFunction)
        this.cardElement.addEventListener('dragstart', (event) => event.preventDefault())
        this.assignImage(this.image)
    }

    flip() {
        // Function to flip the card
        // Parameters: none
        // Returns: none
        this.imageType = this.imageType === "front" ? "back" : "front"
        this.cardElement.classList.contains("flipped") ? this.cardElement.classList.remove("flipped") : this.cardElement.classList.add("flipped")
    }

    assignImage(image) {
        // Function to assign an image to the card
        // Parameters: image(string)
        // Returns: none
        this.cardElement.querySelector(".front img").src = image
    }

    eventFunction() {
        // Event function for the card
        // Parameters: none
        // Returns: none
        if (!Card.canFlip || this.imageType === "front") return
        this.flip()
        cardHistory.push(this)
        if (cardHistory.length === 2) {
            Card.canFlip = false
            if (cardHistory[0].id === cardHistory[1].id) {
                cardHistory[0].removeEvent()
                cardHistory[1].removeEvent()
                cardHistory.splice(0, cardHistory.length)
                localStorage.setItem("score", JSON.stringify(score))
                let copyTable = []
                for (let i = 0; i < table.length; i++) {
                    let row = []
                    for (let j = 0; j < table[i].length; j++) {
                        let card = table[i][j]
                        row.push({
                            id: card.id,
                            image: card.image,
                            flipped: card.cardElement.classList.contains("flipped")
                        })
                    }
                    copyTable.push(row)
                }
                localStorage.setItem("table", JSON.stringify(copyTable))
                setTimeout(() => {
                    Card.canFlip = true
                }, 300)
            } else {
                setTimeout(() => {
                    cardHistory[0].flip()
                    cardHistory[1].flip()
                    cardHistory.splice(0, cardHistory.length)
                    setTimeout(() => {
                        Card.canFlip = true
                    }, 100)
                }, 1000)
            }
        }
        score.attempts++
        document.getElementById("attempts").innerText = score.attempts
        if (checkWinner()) {
            setTimeout(() => {
                renderEnding()
            }, 250)
        }
    }

    removeEvent() {
        // Function to remove the event from the card
        // Parameters: none
        // Returns: none
        this.cardElement.removeEventListener('click', this.boundEventFunction)
    }

}