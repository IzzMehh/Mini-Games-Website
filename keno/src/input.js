const amountInputBox = document.querySelector('#amt-input')

export let isBetValid = true

export let amountToUse = 0

import { kenoDataStored } from "./keno.js"
import { autoModeStarted } from "./betButton.js"

export function amountInput(value){
    if(value != null){ 
        value = parseInt(value)
        if(value>kenoDataStored.userData.amount){
          amountInputBox.value = kenoDataStored.userData.amount
          amountToUse = kenoDataStored.userData.amount 
          isBetValid=true
        }
        else if(value<0){ 
            isBetValid=false
        }
        else if(value>=0){
            isBetValid=true
            amountToUse = parseInt(value)

        }}
        else{
          amountToUse=0
        }
}


export function amountInputEvent(){
  amountInputBox.value = 0
amountInputBox.addEventListener('input',(event)=>{
    if(isBetValid==true && autoModeStarted==false){
      const input = event.target
      input.value = input.value.replace(/[^0-9]/g,'')
      amountInput(input.value)
    }
    else{
        event.target.value = 0
    }
  })

}