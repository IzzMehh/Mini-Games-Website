import { playImgEvent } from "./begin.js";


export let quizDataStored = accountStoredData

playImgEvent()


const startBtn = document.querySelector('#start-btn')

const aboutPage = document.querySelector('#about-quiz')
const section2 = document.querySelector('#section-2')

startBtn.addEventListener('click',()=>{
    aboutPage.style.display = 'none'
    section2.style.display = 'block'
})