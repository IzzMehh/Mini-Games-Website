let boxes = document.querySelectorAll('.box')

export let userChoice = []

import { gameReset } from "./gameReset.js";
import { autoModeStarted } from "./betButton.js";
import { showingComputerChoiceAnimation } from "./betButton.js";

const betButton = document.querySelector('#bet-btn')

const clickSound = new Audio('keno/src/sound/selectSound.mp3')

export function userClickDiv(){
    boxes.forEach(box => {
        box.addEventListener('click', event =>{
            if(autoModeStarted==false && showingComputerChoiceAnimation==false){

            gameReset()


            if(userChoice.length<10 && !event.target.clicked){
            event.target.clicked = true
            userChoice.push(Number(event.target.id))
            document.getElementById(`${event.target.id}`).classList.remove('box-default')
            document.getElementById(`${event.target.id}`).classList.add('box-selected')
            clickSound.currentTime = 0;
            clickSound.play()
            }
            else if(event.target.clicked){
                event.target.clicked = false
                let index = userChoice.indexOf(Number(event.target.id))
                userChoice.splice(index,1)
                document.getElementById(`${event.target.id}`).classList.add('box-default')
                document.getElementById(`${event.target.id}`).classList.remove('box-selected')
                
                clickSound.play()
            }

            betButton.classList.add('bet-button-active')
                
            if(userChoice.length>0){
                betButton.classList.add('bet-button-active')
            }
            else{
                betButton.classList.remove('bet-button-active')
            }

        }
        })
    });

}