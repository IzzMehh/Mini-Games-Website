import { logic } from "./logic.js";
import { rightOption } from "./optionShuffle.js";
import { HandelDiv } from "./modeDisplay.js";
import { checkoutLogic } from "./endLogic.js";
import { isGameStarted, toggleGameStart } from "./begin.js";

import { easyQuestionArray, easyModeData } from "./easyMode.js";
import { mediumQuestionArray, mediumModeData, mediumMode} from "./mediumMode.js";
import { hardQuestionArray, hardModeData, hardMode } from "./hardMode.js";

const correctOptionSound = new Audio("quiz/src/audio/success.mp3");

const wrongOptionSound = new Audio('quiz/src/audio/wrong.mp3')

export let correctAnswers = 0;

export function userChoice() {
  let allOptions = document.querySelectorAll(".options");
  allOptions.forEach((element) => {
    element.addEventListener("click", () => {
      if(isGameStarted==true){
      if (element.classList.contains(`option${String(rightOption[0])}`) && !element.clicked) {
        allOptions.forEach((element) => {
          element.clicked = true;
        });

        correctAnswers++;

        correctOptionSound.currentTime = 0;
        correctOptionSound.play();

        let parentDiv = element.parentNode.parentNode;
        parentDiv.classList.add("q-wrapper-right");

        element.style.backgroundColor = "#12F80F";

        if (correctAnswers < 5) {
          console.log("easy mode");
          logic(easyQuestionArray, easyModeData);
        }
        
        else if (correctAnswers < 10 && correctAnswers >= 5) {
          if (correctAnswers == 5) {
            console.log("medium mode");

            HandelDiv("Switching To Medium Level...", "block");
            mediumMode();
          } else {
            logic(mediumQuestionArray, mediumModeData);
          }
        } 
        
        else if (correctAnswers >= 10) {
          if (correctAnswers == 10) {
            HandelDiv("Switching To Hard Level...", "block");
            hardMode();
          } else if(correctAnswers<20){
            console.log("hard mode");
            logic(hardQuestionArray, hardModeData);
          }
          else if(correctAnswers>19){
            toggleGameStart(false)
            checkoutLogic()
            correctAnswers = 0
            console.log('Game Ended')
          }
        }
      }
      
      else if(!element.clicked){
        wrongOptionSound.volume = 0.6
        wrongOptionSound.play()
        toggleGameStart(false)
        element.style.backgroundColor = '#D60E0E'

        let allRightOption = document.querySelectorAll(`.option${rightOption[0]}`)
        console.log(allRightOption)
        allRightOption.forEach((option)=>{
            if(!option.clicked){
                option.style.backgroundColor = '#12F80F'
            }
        })

        allOptions.forEach(option => option.style.cursor = 'not-allowed')
        console.log("Wrong answer");
        checkoutLogic();
        correctAnswers = 0
      }
    }
    });
  });
}
