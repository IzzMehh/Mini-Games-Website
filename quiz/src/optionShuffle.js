import { index } from "./logic.js"

let tempArr = []

export let rightOption = []

export function shuffle(optionShuffledArray, questionArray, apiData){
    tempArr = []  // to avoid repeating numbers

    for(let i=0;optionShuffledArray.length < 4;i++){
        let num = (Math.floor(Math.random()*4))+1

        if(!tempArr.includes(num)){
            switch(num){
                case 1:
                    optionShuffledArray.push((apiData.results[questionArray[index]]).incorrect_answers[0])
                    tempArr.push(num)
                    break
                case 2:
                    optionShuffledArray.push((apiData.results[questionArray[index]]).incorrect_answers[1])
                    tempArr.push(num)
                    break
                case 3:
                    optionShuffledArray.push((apiData.results[questionArray[index]]).correct_answer)
                    tempArr.push(num)
                    rightOption = []
                    rightOption.push(tempArr.indexOf(num))
                    console.log(rightOption[0])
                    break
                case 4:
                    optionShuffledArray.push((apiData.results[questionArray[index]]).incorrect_answers[2])
                    tempArr.push(num)
                    break       
                default:
                    console.log('Invalid' + num)
            }
        }

    }
}