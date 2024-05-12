
const GemAudio = new Audio('mine/src/utility/sound/GemFound.mp3');

const bombAudio = new Audio('mine/src/utility/sound/BombClicked.mp3')

function showGem(div){
    div.style.backgroundImage = "url('mine/mines/gem.png')";
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundPosition = 'center'
    div.style.backgroundSize = '90%'
        GemAudio.currentTime = 0;
        GemAudio.play()
    }
    

function reveal(div){
  div.style.backgroundImage = "url('mine/mines/bomb.png')";
  div.style.backgroundRepeat = 'no-repeat'
  div.style.backgroundPosition = 'center'
  div.style.backgroundSize = '90%'
}
function showBomb(div){
    div.style.backgroundImage = "url('mine/mines/explosion.png')";
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundPosition = 'center'
    div.style.backgroundSize = '90%'
    bombAudio.currentTime = 0
    bombAudio.play()
}


export{
    showBomb,
    reveal,
    showGem,
}