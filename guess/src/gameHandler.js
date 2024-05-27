import { valueSelected } from "./logic.js";
import { isGameStarted } from "./betButton.js";
import { checkout } from "./checkout.js";
import { amountToUse, inputHandler } from "./inputHandler.js";

const chatDiv = document.querySelector('#convo-div')

let diffrence = 0
let totalTries = 0

export function autoScroll(Div) {
  Div.scrollTop = Div.scrollHeight;
}

export function chatHandler(userChoice){
  userChat(userChoice)
  totalTries++
  inputHandler.timeoutToggle(true)
  if(totalTries>15){
    botChat(`Whoa, tough luck! You've hit the limit of 15 tries. You have lost your ${amountToUse} Coins. Better luck next time!`)
    checkout()
    totalTries = 0
  }
  else if(totalTries<=15){
  setTimeout(()=>{
    diffrence = Math.abs(userChoice-valueSelected)

    if(userChoice>valueSelected && diffrence<10){
      botChat(`You're tooo close to the number. Think a little smaller number than ${userChoice} `)
    }
    else if(userChoice>valueSelected && diffrence<50){
      botChat(`You're close to the number. Think of a smaller number than ${userChoice} `)
    }
    else if(userChoice>valueSelected && diffrence<=100){
      botChat(`You're went far the number. Think of a smaller number than ${userChoice} `)
    }
    else if(userChoice>valueSelected && diffrence>100){
      botChat(`Oh no! You went too far from the number. Think of a smaller number than ${userChoice}`)
    }

    else if(userChoice<valueSelected && diffrence<10){
      botChat(`You're tooo close to the number. Think a little bigger number than ${userChoice} `)
    }
    else if(userChoice<valueSelected && diffrence<50){
      botChat(`You're close to the number. Think of a bigger number than ${userChoice} `)
    }
    else if(userChoice<valueSelected && diffrence<=100){
      botChat(`You're little close to the number. Think of a bigger number than ${userChoice} `)
    }
    else if(userChoice<valueSelected && diffrence>100){
      botChat(`Oh! You're too farr from the number. Think of a bigger number than ${userChoice}`)
    }
    else if(userChoice==valueSelected){
      botChat("Yay! You guessed it right! the number was: "+ valueSelected + `. You got it in just ${totalTries} Try and You won ${checkout(totalTries)} Coins`) 
    }
  autoScroll(chatDiv)
  inputHandler.timeoutToggle(false)
  },700)
}
  autoScroll(chatDiv)

}

export function botChat(text){
    const botText = `
    <div class="bot-text-div convo">
    <div class="bot-profile">
      <img src="guess/imgs/botIcon.png" alt="" width="35px" height="25px">
      <div class="bot-name">Carl</div>
    </div>
    <div class="bot-text">
      ${text}
    </div>
  </div>
    `

    chatDiv.insertAdjacentHTML('beforeend',botText)
}

export function userChat(text){
    const userText = `
    <div class="user-text-div convo">
    <div class="user-profile">
      <div class="user-name">User</div>
      <img src="guess/imgs/userIcon.png" alt="" width="25px" height="25px">
    </div>
    <div class="user-text">
      ${text}
    </div>
  </div>
    `

    chatDiv.insertAdjacentHTML('beforeend',userText)
}

export function clearConvo(){
    const allConvo = document.querySelectorAll(".convo")
    allConvo.forEach(element=>element.remove())
}