import { renderMain } from "./renderMain.js"
import { table, score } from "../../utils/variables.js"


export const renderModal = () => {
    // Function to render the modal
    // Parameters: none
    // Return: none
    const main = document.querySelector("main")
    main.style.filter = "blur(5px)"
    const container = document.createElement("section")
    container.classList.add("modal-container")
    container.innerHTML = `
        <div class="modal">
            <h2>You have an unfinished game</h2>
            <h3>Would you like to continue?</h3>
            <div class="modal-buttons">
                <button id="yes">Yes</button>
                <button id="no">No</button>
            </div>
        </div>
    `
    document.body.appendChild(container)
    const yes = document.getElementById("yes")
    const no = document.getElementById("no")
    yes.addEventListener("click", () => {
        if (localStorage.getItem("score") !== null) {
            const newScore = JSON.parse(localStorage.getItem("score"))
            score.attempts = newScore.attempts
        }
        if (localStorage.getItem("table") !== null) {
            const newTable = JSON.parse(localStorage.getItem("table"))
            table.forEach((row, i) => {
                row.forEach((card, j) => {
                    card.id = newTable[i][j].id
                    card.image = newTable[i][j].image
                    card.assignImage(card.image)
                    if (newTable[i][j].flipped) {
                        card.flip()
                        card.removeEvent()
                    }
                })
            })
        }
        main.style.filter = "none"
        container.remove()
        renderMain()
    })
    no.addEventListener("click", () => {
        main.style.filter = "none"
        localStorage.removeItem("score")
        localStorage.removeItem("table")    
        container.remove()
    })
}