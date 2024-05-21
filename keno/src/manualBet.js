import { amountToUse, isBetValid } from "./input.js";
import { selectRandom } from "./randomBox.js";
import { checkIsSelected, matched } from "./showBox.js";
import { checkout } from "./checkout.js";

export const showResult = document.querySelector('#game-result')

const riskInput = document.querySelector('#risk-input')

let boxesMatched;


export let endLogic = false

export let computerChoice = []

export function manualBet(){

    if(isBetValid==true){

    computerChoice = []
    selectRandom(10,computerChoice)

    
    checkIsSelected() // from showBox.js
    
    boxesMatched = matched

    checkout(amountToUse,riskInput.value,boxesMatched)
    
    showResult.style.display = 'block'

    endLogic = true


    }
}