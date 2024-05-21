export function selectRandom(Number, arrayName){
    let arrayFilled = false
    for(let i=0; arrayFilled==false;i++){
    let randomNum = Math.round(Math.random()*39)
    if(!arrayName.includes(randomNum) && arrayName.length <= Number){
    arrayName.push(randomNum)
    }
    if(arrayName.length == Number){
        arrayFilled=true
    }
}   
}