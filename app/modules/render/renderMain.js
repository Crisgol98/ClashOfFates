import { table, score } from "../../utils/variables.js"
import { renderTable } from "./renderTable.js"


export const renderMain = () => {
    console.log(table)
    // Function to render the main page
    // Parameters: none
    // Return: none
    document.body.style.backgroundImage = "url(./app/images/background.png)"
    const main = document.querySelector("main")
    main.style.display = "grid"
    main.style.gridTemplateColumns = "2fr 1fr"
    main.style.gridTemplateRows = "1fr"
    const container = document.getElementById("start-container")
    container.innerHTML = `
        <div id="container" class="container"></div>
        <audio id="fightMusic" src="./app/sounds/fightMusic.mp3" autoplay loop></audio>
    `
    container.style.display = "grid"
    container.style.justifyItems = "end"
    main.appendChild(container)
    renderTable(table)
    const scoreContainer = document.createElement("section")
    scoreContainer.id = "score-container"
    scoreContainer.innerHTML = `
        <div>
            <h2>Score</h2>
            <p id="attemps">Attemps: ${score.attemps}</p>
        </div>
    `
    const volumeContainer = document.createElement("section")
    volumeContainer.id = "volume-container"
    volumeContainer.innerHTML = `
        <h2>Volume</h2>
        <input type="range" id="volume" min="0" max="1" step="0.1" value="1">
    `
    volumeContainer.querySelector("input").addEventListener("input", (event) => {
        const music = document.getElementById("fightMusic")
        music.volume = event.target.value
    })
    scoreContainer.appendChild(volumeContainer)
    main.appendChild(scoreContainer)
}