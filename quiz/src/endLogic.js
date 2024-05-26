import { correctAnswers } from "./userChoice.js";
import { toggleGameStart } from "./begin.js";
import { HandelDiv, displayDiv } from "./modeDisplay.js";
import { quizDataStored } from "./quiz.js";
import { playImg } from "./begin.js";
import { helpButtonFunctions } from "./helpOptions.js";

let Coins = 0;

const eachQuestionReward = 15;

let div;

export function checkoutLogic() {
  toggleGameStart(false);

  winingAmountLogic();

  HandelDiv(`You won ${parseInt(Coins)} Coins`, "block");

  helpButtonFunctions.reset()
  
  if (div==null) {
    div = document.createElement("button");
    div.innerText = "Play Again";
    div.classList.add("retry-btn-style");
    div.id = "retry-btn";
    displayDiv.appendChild(div);
  }

  document.querySelector("#retry-btn").addEventListener("click", () => {
    let allQuestions = document.querySelectorAll("#question-div>.q-wrapper");
    allQuestions.forEach((question) => question.remove());
    playImg.click();
  });
}

export function winingAmountLogic() {
  if (correctAnswers <= 5) {
    Coins = correctAnswers * 0.2 * (eachQuestionReward * correctAnswers);
    //(correcyAnswers*0.3) is the reward bonus for easyMode
    //(eachQuestionReward is the constant amout the play will receive for each correct Answer)
  } else if (correctAnswers <= 10) {
    let midQuestions = correctAnswers - 5;
    Coins = midQuestions * 0.5 * (eachQuestionReward * correctAnswers);
  } else if (correctAnswers > 10) {
    let hardQuestions = correctAnswers - 10;
    Coins = hardQuestions * 1.5 * (eachQuestionReward * correctAnswers);
  }

  quizDataStored.userData.amount += parseInt(Coins);
  localStorage.setItem("settings", JSON.stringify(quizDataStored));
  updateDisplayedCoins()
}
