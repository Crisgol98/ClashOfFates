import { score } from "../../utils/variables.js"


export const renderEnding = () => {
    // Function to render the ending screen
    // Parameters: none
    // Return: none
    document.body.style.backgroundImage = "url(./app/images/ending.webp)"
    const main = document.querySelector("main")
    main.style.display = "flex"
    main.style.alignItems = "center"
    main.style.justifyContent = "center"
    main.innerHTML = `
        <section id="start-container">
            <div id="game-title-container">
                <h1>YOU WIN</h1>
                <h2>Attempts: ${score.attempts}</h2>
            </div>
            <button id="start-button">Restart</button>
            <audio id="endMusic" src="./app/sounds/endMusic.mp3" autoplay loop></audio>
        </section>
    `
    const btn = document.getElementById("start-button")
    btn.addEventListener("click", () => {
        window.location.reload()
        localStorage.removeItem("score")
        localStorage.removeItem("table")
    })
}