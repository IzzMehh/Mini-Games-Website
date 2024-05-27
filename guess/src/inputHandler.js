import { guessDataStored } from "./guess.js";
import { isGameStarted } from "./betButton.js";

export let amountToUse = 0
const amountInput = document.querySelector('#amt-input')
export const userChatInput = document.querySelector('#number-input-box')
let isValid = true

amountInput.value = 0
export let userChatInputValue = 0

export let timeOut = false

class inputHandlerClass {
    amountInputFn() {
        amountInput.addEventListener('input', (event) => {
            if(!isGameStarted){
            let value = event.target.value.replace(/\D/g, '');
            event.target.value = value
            this.amountInputHandler(value, event.target)
            }
            else{
                event.target.value = amountToUse
            }
        })
    }

    amountInputHandler(amount, inputDiv) {
        if (amount > guessDataStored.userData.amount) {
            amount = guessDataStored.userData.amount
            isValid = true
            inputDiv.value = amount
        }
        amountToUse = Number(amount)
    }

    userChatInputFn(){
        userChatInput.addEventListener('input',(event)=>{
            if(isGameStarted && !timeOut){
            userChatInputValue = event.target.value.replace(/\D/g, '');
            event.target.value = userChatInputValue
            userChatInputValue = Number(userChatInputValue)
            this.userChatInputHandler(userChatInputValue,event.target)
            }
            else{
                event.target.value = ''
            }
        })
    }

    userChatInputHandler(userChoice, inputDiv){
        if(userChoice>1000 || userChoice<0){
            inputDiv.value = 1000
            userChatInputValue =  1000
        }
        
    }


    clearUserChatInput(){
        userChatInput.value = ''
        userChatInputValue = userChatInput.value
    }

    timeoutToggle(value){
        timeOut = value
    }
}

export const inputHandler = new inputHandlerClass()