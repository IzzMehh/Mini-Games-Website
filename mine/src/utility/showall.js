import * as game from "./end.js"
import { allBoxes, bomb } from "./mine.js";

export function showAll(){
    allBoxes.forEach(element => {
        if(bomb.includes(Number(element.id))){
            game.reveal(element)
        }
    });
  }