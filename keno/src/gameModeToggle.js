export let autoMode = false
export let manualMode = true


let autoModeBtn = document.querySelector('#auto-btn')
let manualModeBtn = document.querySelector('#manual-btn')

import { autoModeStarted, betButton } from "./betButton.js"

export function GameModeToggler(){
    autoModeBtn.addEventListener('click',()=>{
        autoMode = true
        manualMode = false
        autoModeBtn.classList.add('game-type-active')
        manualModeBtn.classList.remove('game-type-active')
        betButton.innerText = 'Start !'
    })

    manualModeBtn.addEventListener('click',()=>{
        if(!autoModeStarted){
        autoMode = false
        manualMode = true
        autoModeBtn.classList.remove('game-type-active')
        manualModeBtn.classList.add('game-type-active')
        betButton.innerText = 'Bet'
        }
    })
}
