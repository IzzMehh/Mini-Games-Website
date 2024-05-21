export const winningPercentage = document.querySelector('#multiply');
export const winningAmount = document.querySelector('#winning-amount');

import { userChoice } from "./userChoice.js";
import { kenoDataStored } from "./keno.js";
import { endLogic } from "./manualBet.js";

let percent = 0;
let won = 0;

export function checkout(amount,riskLevel, boxMatched) {
    if(endLogic){
        percent = 0
        won = 0
    }
    
    if (riskLevel == "low") {
        if (userChoice.length > 5 && boxMatched > 1) {
            percent = (1 + boxMatched * 0.12).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;  
        }

        if (userChoice.length < 5  && boxMatched>0 || boxMatched > 4) {
            percent = (1 + boxMatched * 0.8).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;
        }
    } else if (riskLevel == "medium") {
        if (userChoice.length > 5 && boxMatched > 2) {
            percent = (1 + boxMatched * 0.3).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;
        }

        if (userChoice.length < 5 && boxMatched>0 || boxMatched > 5) {
            percent = (1 + boxMatched * 1.3).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;
        }
    } else if (riskLevel == "high") {
        if (userChoice.length > 5 && boxMatched > 4) {
            percent = (1 + boxMatched * 1.8).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;
        }

        if (userChoice.length < 5 && boxMatched>1 || boxMatched > 6) {
            percent = (1 + boxMatched * 2.6).toFixed(2);
            won = parseInt(amount * percent);
            kenoDataStored.userData.amount += won;
            kenoDataStored.userData.wins++;
        }
    }
    

    winningPercentage.innerText = `${percent}x`;
    winningAmount.innerText = `${won} Coins`;
    kenoDataStored.userData.totalPlayed++;
    localStorage.setItem('settings', JSON.stringify(kenoDataStored));
    updateDisplayedCoins();
}
