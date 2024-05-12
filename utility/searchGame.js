
const gameTitle = document.querySelectorAll('.card-title')
const searchBar = document.querySelector('#game-page-input-id')


export function gameSearchBar(){
  try{
searchBar.addEventListener('click',()=>{
  searchBar.addEventListener('input',(event)=>{
    const valueGiven = (event.target.value).toLowerCase();

    gameTitle.forEach(element => {
      
      if((element.innerText.toLowerCase()).includes(valueGiven)){
        let mainDiv = (((element.parentElement).parentElement).parentElement)
          mainDiv.style.display ='block'
      }
      else{
        let mainDiv = (((element.parentElement).parentElement).parentElement)
          mainDiv.style.display ='none'
      }
    });
  } )
})
  }
  catch(e){
    console.log(e)
  }
}