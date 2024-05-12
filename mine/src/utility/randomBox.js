
export function randomNum(number,storage){
    let p = 1
    for(let i=0;p<=number;i++){
        let random = Math.round(Math.random()*24)
        if(!storage.includes(random)){ // to avoid repeating number
        storage.push(random)
        p++
        }
    }

}