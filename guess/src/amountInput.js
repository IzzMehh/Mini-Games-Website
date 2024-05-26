import { guessDataStored } from "./guess.js";

const amountInput = document.querySelector('#amt-input')
const amountToUse = 0

let isValid = true

export function amountInputFn(){
    amountInput.addEventListener('input',(event)=>{
        let value = event.target.value.replace(/\D/g, '');
        event.target.value = value
        amountInputHandler(value,event.target)
    })
}

function amountInputHandler(amount,inputDiv){
    if(amount>guessDataStored.userData.amount){
        amount=guessDataStored.userData.amount
        isValid = true
        inputDiv.value = amount
    }
    amount = amountToUse
}