export const betButton = document.querySelector('#bet-btn')

export let autoModeStarted = false

import { userChoice } from "./userChoice.js"
import { manualBet} from "./manualBet.js"
import { isBetValid, amountToUse } from "./input.js"
import { kenoDataStored } from "./keno.js"
import { gameReset } from "./gameReset.js"
import { autoMode, manualMode } from "./gameModeToggle.js"


let autoModeLoop;

const betButtonSound = new Audio('keno/src/sound/button.mp3')

export let showingComputerChoiceAnimation = false;

export function setShowingComputerChoiceAnimation(value) {
    showingComputerChoiceAnimation = value;
}

export function betButtonLogic(){
    betButton.addEventListener('click',()=>{

        if(isBetValid && userChoice.length > 0 && kenoDataStored.userData.amount>=0 && manualMode==true && showingComputerChoiceAnimation==false){

        betButtonSound.play()

        showingComputerChoiceAnimation = true
        gameReset()

        kenoDataStored.userData.amount -= amountToUse;
        localStorage.setItem('settings', JSON.stringify(kenoDataStored))
        updateDisplayedCoins()
        manualBet()
        
        }

        
        if(isBetValid && userChoice.length > 0 && kenoDataStored.userData.amount>=0 && autoMode==true && autoModeStarted==false && showingComputerChoiceAnimation==false){
        
        betButtonSound.play()
    
        autoModeStarted = true
        betButton.innerText = 'Stop !'
            
        autoModeLoop = setInterval(() => {
        if(kenoDataStored.userData.amount>=amountToUse && showingComputerChoiceAnimation==false){
        
        gameReset()

        kenoDataStored.userData.amount -= amountToUse;
        localStorage.setItem('settings', JSON.stringify(kenoDataStored))
        updateDisplayedCoins()
        manualBet()

    }
    else if(showingComputerChoiceAnimation==false){
        betButtonSound.play()
        clearInterval(autoModeLoop)
        autoModeStarted = false
        betButton.innerText = 'Start !'
    }
    
    }, 1000);

    }

    else if(autoModeStarted==true){
        
        betButtonSound.play()
        clearInterval(autoModeLoop)
        autoModeStarted = false
        betButton.innerText = 'Start !'
    }

})
}