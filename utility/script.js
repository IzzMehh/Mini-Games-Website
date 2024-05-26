const mainSection = document.querySelector('#section-2')
const mobileFooter = document.querySelector('#footer-row')


const navBar = document.querySelector('#nav-bar')
const sliderButtons = document.querySelectorAll('.slider-tab-btn')


import { redirect} from "./redirects.js"
import { themeToggle,storedTheme } from "./theme.js"
import { showSliderBar, hideSliderBar } from "./sidebar.js"
import { saveDataBeforeUnload } from "./saveData.js"
import { preLoader } from "./preloader.js"

redirect()
storedTheme()
preLoader()

const showPercentage = document.querySelector('#show-range')

function updateDisplayedPercentage(){
  let w = accountStoredData.userData.wins;
  let total = accountStoredData.userData.totalPlayed;
  if(w==0 && total==0){
    showPercentage.style.width = '0%'
    document.querySelector('#percentage-val').innerText = (`0%`)
  }
  else if(w>0 && total>0){
  let calculated = (w/total)*100;
  showPercentage.style.width = `${calculated + 7}%`
    document.querySelector('#percentage-val').innerText = (`${Math.round(calculated)}%`)
  }
}


const gameWonDisplay = document.querySelector('#game-won-count')
const totalGameDisplay = document.querySelector('#game-played-count')


if(gameWonDisplay && totalGameDisplay){
  gameWonDisplay.innerText = `Games Won:  ${accountStoredData.userData.wins}`
  totalGameDisplay.innerText = `Games played: ${accountStoredData.userData.totalPlayed}`
  
  updateDisplayedPercentage()
}




mainSection.addEventListener('click',()=>{
  if(slideBar.classList.contains('slide-property-show')){
    hideSliderBar();
    accountStoredData.isSlideBarActive = false
    localStorage.setItem('settings',JSON.stringify(accountStoredData))
  }
  // if(searchBar.classList.contains('search-bar-opened')){
  //   hideSearch()
  // }
})


// SLIDER

const sliderToggleBtn = document.querySelector('#slider-icon')
const slideBar = document.querySelector('#side-bar')

if(accountStoredData.isSlideBarActive == true){
  showSliderBar()
}
else if(accountStoredData.isSlideBarActive == false){
  hideSliderBar();
}

sliderButtons.forEach(element => {
  element.addEventListener('click',()=>{
  accountStoredData.isSlideBarActive = true
  localStorage.setItem('settings',JSON.stringify(accountStoredData))
})
});

// <-- Loaded data on reload


sliderToggleBtn.addEventListener('click', ()=>{
  if(slideBar.classList.contains('slide-property-show')){
    hideSliderBar();
    accountStoredData.isSlideBarActive = false
    localStorage.setItem('settings',JSON.stringify(accountStoredData))
  }
  else{
    showSliderBar();
  }
})

// Theme toggle

const themeBtn = document.querySelector('#theme-toggle-btn')

const mobileThemeToggler = document.querySelector('#mobile-theme-toggler')


themeBtn.addEventListener('click',themeToggle)

mobileThemeToggler.addEventListener('click',themeToggle)




// Search Bar

import { gameSearchBar } from "./searchGame.js"

gameSearchBar()




// Game redirects






// Functionsss



// function showSearch(){
//   searchBar.classList.remove('search-bar-closed')
//   searchBar.classList.add('search-bar-opened')
// }

// function hideSearch(){
//   searchBar.classList.replace('search-bar-opened','search-bar-closed')
// }


//to save data before unload

saveDataBeforeUnload(accountStoredData)


// handle Feedbacks
import { feedbackClass } from "./feedback.js"

feedbackClass.FeedBackEvents()
