import { inputHandler } from "./inputHandler.js";
import { betButtonFn } from "./betButton.js";

export let guessDataStored = accountStoredData

inputHandler.amountInputFn()
inputHandler.userChatInputFn()
betButtonFn()


const startBtn = document.querySelector('#start-btn')
const section2 = document.querySelector('#section-2')
const aboutpage = document.querySelector("#about-guess")

startBtn.addEventListener('click',()=>{
    section2.style.display = 'block'
    aboutpage.style.display = 'none'
})