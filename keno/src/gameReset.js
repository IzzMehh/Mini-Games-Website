import { endLogic, computerChoice, showResult} from "./manualBet.js"
import { amountInput, amountToUse } from "./input.js"
import { userChoice } from "./userChoice.js"

export function gameReset(){
if(endLogic){
    amountInput(amountToUse)
    computerChoice.forEach(element => {
        document.getElementById(element).className = 'box box-default';
    });
    
    userChoice.forEach(element => {
        document.getElementById(element).className = 'box box-selected';
    });
    
    showResult.style.display = 'none'
}
}