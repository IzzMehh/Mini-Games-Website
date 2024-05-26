import { randomPick } from "./pickRandom.js";
import { logic } from "./logic.js";
import { isGameStarted } from "./begin.js";
import { HandelDiv } from "./modeDisplay.js";

export let mediumQuestionArray = []
export let mediumModeData

export async function mediumMode(){
    if(isGameStarted){
    console.log('mediumMode Started !!!')

    if(mediumModeData==null){
    let fetchedData = await fetch('https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple')
    mediumModeData = await fetchedData.json()
    }

    mediumQuestionArray = []
    
    randomPick(mediumQuestionArray, 49)

    logic(mediumQuestionArray, mediumModeData)

    await HandelDiv('Easy Mode !!', 'none')
    }
}