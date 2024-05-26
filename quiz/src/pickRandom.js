export function randomPick(array,totalValue){
    while(array.length<=totalValue){

    let num = Math.round(Math.random()*49)
    if(!array.includes(num)){
        array.push(num)
    }

}
}