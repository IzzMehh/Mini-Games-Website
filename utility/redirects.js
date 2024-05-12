const sps = document.querySelector('#sps')
const mines = document.querySelector('#mines')


export function redirect(){
try{
sps.addEventListener('click',()=>{
    window.location.assign('sps.html')
})
}
catch(e){
  console.log(e)
}



try{
  mines.addEventListener('click',()=>{
    window.location.assign('mine.html')
})
}
catch(e){
  console.log(e)
}
}
