import { renderMain } from "./renderMain.js"
import { renderModal } from "./renderModal.js"


export const renderStart = () => {
    // Function to render the start screen
    // Parameters: none
    // Return: none
    const main = document.querySelector("main")
    main.style.display = "flex"
    main.style.alignItems = "center"
    main.style.justifyContent = "center"
    main.innerHTML = `
        <section id="start-container">
            <div id="game-title-container">
                <h1>Dragon Ball: Clash of Fates</h1>
                <h2>Can you conquer the challenge?</h2>
            </div>
            <button id="start-button">Begin</button>
            <audio id="introMusic" src="./app/sounds/introMusic.mp3" autoplay loop></audio>
        </section>
    `
    document.body.style.backgroundImage = "url(./app/images/intro.jpg)"
    const btn = document.getElementById("start-button")
    btn.addEventListener("click", () => {
        renderMain()
    })
    if (localStorage.getItem("score") !== null || localStorage.getItem("table") !== null) {
        renderModal()
    }
}