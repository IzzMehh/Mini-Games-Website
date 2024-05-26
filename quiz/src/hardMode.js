import { randomPick } from "./pickRandom.js";
import { logic } from "./logic.js";
import { isGameStarted } from "./begin.js";
import { HandelDiv } from "./modeDisplay.js";

export let hardQuestionArray = [];
export let hardModeData;

export async function hardMode() {
  if(isGameStarted){
    console.log("hard Mode Started !!!");

    if (hardModeData == null) {
      let fetchedData = await fetch("https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple");
      hardModeData = await fetchedData.json();
    }

    hardQuestionArray = []

    randomPick(hardQuestionArray, 49);

    logic(hardQuestionArray, hardModeData);

    await HandelDiv("Hard Mode !!", "none");
  }
}
