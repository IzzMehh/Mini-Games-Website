
const GemAudio = new Audio('mine/src/utility/sound/GemFound.mp3');

const bombAudio = new Audio('mine/src/utility/sound/BombClicked.mp3')

function showGem(div){
    div.style.backgroundImage = "url('mine/img/gem.png')";
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundPosition = 'center'
    div.style.backgroundSize = '90%'
        GemAudio.currentTime = 0;
        GemAudio.play()
    }
    

function reveal(div){
  div.style.backgroundImage = "url('mine/img/bomb.png')";
  div.style.backgroundRepeat = 'no-repeat'
  div.style.backgroundPosition = 'center'
  div.style.backgroundSize = '90%'
}
function showBomb(div){
    div.style.backgroundImage = "url('mine/img/explosion.png')";
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