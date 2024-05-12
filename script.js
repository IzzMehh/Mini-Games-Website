const mainSection = document.querySelector('#section-2')
const navBar = document.querySelector('#nav-bar')
const sliderButtons = document.querySelectorAll('.slider-tab-btn')


let data = {
  isSlideBarActive: false,
  profile: {
    wins: 0,
    totalPlayed: 0,
    amount: 2000,
    theme: 'dark'
  },
}

let storedData = JSON.parse(localStorage.getItem('settings')) || data
localStorage.setItem('settings',JSON.stringify(storedData))


// DATA LOAD ON RELOAD ->

const displayCash = document.querySelector('#cashAmount')
displayCash.innerHTML = `<img id='nav-currency-logo' height="20px" src="images/currency-logo.jpg" alt=""> ${storedData.profile.amount} Coins`


// LOADER 

let loader = document.querySelector('.preloader')

window.addEventListener('load', ()=> loader.style.display = 'none')



// displaying User Profile ---



const showPercentage = document.querySelector('#show-range')

function updateDisplayedPercentage(){
  let w = storedData.profile.wins;
  let total = storedData.profile.totalPlayed;
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
  gameWonDisplay.innerText = `Games Won:  ${storedData.profile.wins}`
  totalGameDisplay.innerText = `Games played: ${storedData.profile.totalPlayed}`
  
  updateDisplayedPercentage()
}


const mobileFooter = document.querySelector('#footer-row')


if(storedData.profile.theme === 'blue'){
  mainSection.classList.replace('section-2-dark','section-2-blue');
  document.documentElement.style.setProperty('--bg-col', '#042233');
  // document.documentElement.style.setProperty('--cash-bg-col', '#273b47ce');
  document.documentElement.style.setProperty('--card-col', '#0F1011');
  mobileFooter.style.backgroundColor = '#182030';
  mobileFooter.style.backgroundColor = 'transparent';

}
else if (storedData.profile.theme === 'dark'){
  mainSection.classList.replace('section-2-blue','section-2-dark');
  document.documentElement.style.setProperty('--bg-col', '#020202');
  // document.documentElement.style.setProperty('--cash-bg-col', '#151717ce'); 
  mobileFooter.style.backgroundColor = 'rgba(49, 47, 47, 0.693)';
}


mainSection.addEventListener('click',()=>{
  if(slideBar.classList.contains('slide-property-show')){
    hideSliderBar();
    storedData.isSlideBarActive = false
    localStorage.setItem('settings',JSON.stringify(storedData))
  }
  if(searchBar.classList.contains('search-bar-opened')){
    hideSearch()
  }
})


// SLIDER

const sliderToggleBtn = document.querySelector('#slider-icon')
const slideBar = document.querySelector('#side-bar')

if(storedData.isSlideBarActive == true){
  showSliderBar()
}
else if(storedData.isSlideBarActive == false){
  hideSliderBar();
}

sliderButtons.forEach(element => {
  element.addEventListener('click',()=>{
  storedData.isSlideBarActive = true
  localStorage.setItem('settings',JSON.stringify(storedData))
})
});

// <-- Loaded data on reload


sliderToggleBtn.addEventListener('click', ()=>{
  if(slideBar.classList.contains('slide-property-show')){
    hideSliderBar();
    storedData.isSlideBarActive = false
    localStorage.setItem('settings',JSON.stringify(storedData))
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

const gameTitle = document.querySelectorAll('.card-title')
const searchBar = document.querySelector('#search-bar')
const resultBox = document.querySelector('#result-box')

searchBar.addEventListener('click',()=>{
  showSearch()
  searchBar.addEventListener('input',(event)=>{
    const valueGiven = (event.target.value).toLowerCase();
    console.log(valueGiven)

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




// Game redirects

const sps = document.querySelector('#sps')

if(sps){
sps.addEventListener('click',()=>{
    window.location.assign('sps.html')
})
}


const mines = document.querySelector('#mines')
if(mines){
  mines.addEventListener('click',()=>{
    window.location.assign('mine.html')
})
}


// Functionsss

function showSliderBar(){
  slideBar.classList.replace('slide-property-hide','slide-property-show')

  sliderToggleBtn.style.transform = 'rotate(90deg)'
  sliderToggleBtn.style.transition = 'transform 500ms linear'
}


function hideSliderBar(){ 
  slideBar.classList.replace('slide-property-show','slide-property-hide')

  sliderToggleBtn.style.transform = 'rotate(180deg)'
  sliderToggleBtn.style.transition = 'transform 500ms linear'
}


function showSearch(){
  searchBar.classList.remove('search-bar-closed')
  searchBar.classList.add('search-bar-opened')
}

function hideSearch(){
  searchBar.classList.replace('search-bar-opened','search-bar-closed')
}




const elementToAddTransition = ['cashAmount','nav-bar','side-bar','section-2','footer-row']
const cardDescription = document.querySelectorAll('.discription')

function themeToggle(){
  if(storedData.profile.theme=='blue'){
    mainSection.classList.replace('section-2-blue','section-2-dark');
    document.documentElement.style.setProperty('--bg-col', '#020202');
    document.documentElement.style.setProperty('--cash-bg-col', '#151717ce'); 
    
    storedData.profile.theme = 'dark'
    localStorage.setItem('settings',JSON.stringify(storedData))



    elementToAddTransition.forEach((element) => {
      document.getElementById(element).style.transition = 'all 500ms linear'
    });

    cardDescription.forEach(element => {
      element.style.transition = 'all 500ms linear'
    });

    mobileFooter.style.backgroundColor = 'rgba(49, 47, 47, 0.693)';

  }
  else if(storedData.profile.theme=='dark'){
    mainSection.classList.replace('section-2-dark','section-2-blue');
    document.documentElement.style.setProperty('--bg-col', '#042233');
    document.documentElement.style.setProperty('--cash-bg-col', '#273b47ce');
    document.documentElement.style.setProperty('--card-col', '#0F1011');

    document.body.style.transition = 'all 500ms linear'
    
    storedData.profile.theme = 'blue'
    localStorage.setItem('settings',JSON.stringify(storedData))

    elementToAddTransition.forEach((element) => {
      document.getElementById(element).style.transition = 'all 500ms linear'
    });
    cardDescription.forEach(element => {
      element.style.transition = 'all 500ms linear'
    });

    mobileFooter.style.backgroundColor = '#182030';

  }

}