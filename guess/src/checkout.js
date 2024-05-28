import { gameToggler } from "./betButton.js";
import { amountToUse } from "./inputHandler.js";
import { guessDataStored } from "./guess.js";
import { userChatInput } from "./inputHandler.js";

let winningAmount = 0

export function checkout(tried){
    if (tried<5){
        winningAmount = amountToUse*2
    }
    else if(tried>5){
        winningAmount = parseInt(amountToUse*1.5)
    }
    else if(tried>15){
        winningAmount = 0
    }
    gameToggler(false)

    guessDataStored.userData.amount += winningAmount
    localStorage.setItem('settings',JSON.stringify(guessDataStored))
    updateDisplayedCoins()

    
    userChatInput.classList.add('user-input-style-not-allowed')
    userChatInput.blur()
    
    return winningAmount
}