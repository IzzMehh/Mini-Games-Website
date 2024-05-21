import { computerChoice, endLogic } from "./manualBet.js"
import { userChoice } from "./userChoice.js";

import { setShowingComputerChoiceAnimation } from "./betButton.js";
export let matched = 0

// const revealSound = new Audio('keno/src/sound/revelSound.mp3')

export function checkIsSelected(){
    setShowingComputerChoiceAnimation(true)
    if(endLogic){
        matched = 0
    }

    for(let i=0;i<computerChoice.length;i++){
        
        setTimeout(() => {
        document.getElementById(`${computerChoice[i]}`).classList.add('box-selected-computer')

        // revealSound.play()
        if(i==(computerChoice.length-1)){
            setShowingComputerChoiceAnimation(false)
        }
        }, 150 * i);

    }

    for(let i=0;i<computerChoice.length;i++){

        if(userChoice.includes(computerChoice[i])){
            document.getElementById(`${computerChoice[i]}`).classList.add('box-matched')
            matched++
        }
    }
}