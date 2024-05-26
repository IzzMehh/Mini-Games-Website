import { shuffle } from "./optionShuffle.js"
import { userChoice } from "./userChoice.js";
import { isGameStarted } from "./begin.js";

export let index
let optionArray = []


export function logic(questionArray, apiData){
    index = document.querySelectorAll('#question-div>.q-wrapper').length

    if(isGameStarted){

    console.log(questionArray)
    console.log(apiData)

    optionArray = []

    shuffle(optionArray, questionArray, apiData)
    console.log(optionArray)

    const questionHtml = `
    <div class="q-wrapper">
        <div class="question-wrapper">
            <div class="question">${index+1}) ${(apiData.results[questionArray[index]]).question}</div>
        </div>
        <div class="options-div" id='q${index}'>
            <button class="options options-style option0">1) ${optionArray[0]}</button>
            <button class="options options-style option1">2) ${optionArray[1]}</button>
            <button class="options options-style option2">3) ${optionArray[2]}</button>
            <button class="options options-style option3">4) ${optionArray[3]}</button>
        </div>
    </div>
    `;
    document.getElementById('question-div').insertAdjacentHTML('beforeend', questionHtml);0
    index++
    
    userChoice()
    }

}