import { userChatInput, amountToUse, userChatInputValue, inputHandler } from "./inputHandler.js";
import { logic } from "./logic.js";
import { botChat, userChat, clearConvo, chatHandler } from "./gameHandler.js";
import { guessDataStored } from "./guess.js";
import { timeOut } from "./inputHandler.js";
import { autoScroll } from "./gameHandler.js";

export let isGameStarted = false
const betButton = document.querySelector('#bet-btn')

export function betButtonFn() {

    betButton.addEventListener('click', () => {
        if (isGameStarted == false) {

            guessDataStored.userData.amount -= amountToUse
            localStorage.setItem('settings', JSON.stringify(guessDataStored))
            updateDisplayedCoins() //from utility

            clearConvo()
            isGameStarted = true

            userChatInput.placeholder = "Value from 0 to 1000 are allowed"
            userChatInput.classList.remove('user-input-style-not-allowed')
            logic()
            botChat('I have chosen a number from 0 to 1000. Now you have to guess it in the next 20 tries, or you lose your bet!')

            document.querySelector('#send-btn').addEventListener('click',()=>{
                if(!timeOut && typeof userChatInputValue=="number"){
                chatHandler(userChatInputValue)
                inputHandler.clearUserChatInput()
                }
            })

            userChatInput.addEventListener('keydown', (event)=> {
                if (event.key === 'Enter' && isGameStarted && !timeOut && typeof userChatInputValue=="number") {
                    chatHandler(userChatInputValue)
                    inputHandler.clearUserChatInput()
                }
            });

            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    })
}

export function gameToggler(value){
    isGameStarted = value
}