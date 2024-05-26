import { randomPick } from "./pickRandom.js";
import { logic } from "./logic.js";
import { isGameStarted } from "./begin.js";
import { HandelDiv } from "./modeDisplay.js";
import { helpButtonFunctions } from "./helpOptions.js";

export let easyQuestionArray = [];
export let easyModeData;
let fetchedData;


const gameBtns = document.querySelectorAll("#game-btns-div>button");


export async function easyMode() {
  if (isGameStarted) {
    try{
    HandelDiv("Fetching Questions.../", "block");

    if(easyModeData==null){
    fetchedData = await fetch("https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple");
    easyModeData = await fetchedData.json();
    }

    
    document.querySelector("#callHelpButton").addEventListener('click',()=>helpButtonFunctions.callFn())  
    document.querySelector("#majorityHelpButton").addEventListener('click',()=>helpButtonFunctions.pollFn())
    document.querySelector("#halfHelpButton").addEventListener('click',()=>helpButtonFunctions.halfOptionFn())
    document.querySelector('#skipHelpButton').addEventListener('click',()=>helpButtonFunctions.skipFn())

    gameBtns.forEach((elemet) => {
      elemet.classList.add("game-btns-started");
    });


    

    easyQuestionArray = []

    randomPick(easyQuestionArray, 49);

    logic(easyQuestionArray, easyModeData);

    HandelDiv("Easy Mode !!", "none");
  }
  catch(e){
    console.error(e)
  }
  }
}
