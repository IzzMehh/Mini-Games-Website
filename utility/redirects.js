const sps = document.querySelector('#sps')

export function redirect(){
try{
sps.addEventListener('click',()=>{
    window.location.assign('sps.html')
})
}
catch(e){
  console.log(e)
}


const mines = document.querySelector('#mines')

try{
  mines.addEventListener('click',()=>{
    window.location.assign('mine.html')
})
}
catch(e){
  console.log(e)
}


const kino = document.querySelector('#keno')

try{
  kino.addEventListener('click',()=>{
    window.location.assign('keno.html')
})
}
catch(e){
  console.log(e)
}
}

