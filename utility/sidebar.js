
const sliderToggleBtn = document.querySelector('#slider-icon')
const slideBar = document.querySelector('#side-bar')


export function showSliderBar(){
    slideBar.classList.replace('slide-property-hide','slide-property-show')
  
    sliderToggleBtn.style.transform = 'rotate(90deg)'
    sliderToggleBtn.style.transition = 'transform 500ms linear'
  }
  
  
export function hideSliderBar(){ 
    slideBar.classList.replace('slide-property-show','slide-property-hide')
  
    sliderToggleBtn.style.transform = 'rotate(180deg)'
    sliderToggleBtn.style.transition = 'transform 500ms linear'
  }
  
