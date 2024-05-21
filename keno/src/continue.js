const startButton = document.querySelector('#start-btn')
const section2 = document.querySelector('#section-2')
const about = document.querySelector('#about-kino')


export function readedInfo(){
startButton.addEventListener('click', ()=>{
    about.style.display = 'none'
    section2.style.display = 'block'
})
}