const userChoiceDisplay = document.querySelector('#human-display>p:nth-child(3)')
const computerChoiceDisplay = document.querySelector('#computer-display>p:nth-child(3)')
const userPointsDisplay = document.querySelector('#human-display>p:nth-child(1)')
const computerPointsDisplay = document.querySelector('#computer-display>p:nth-child(1)')


let pts = {
    user:0,
    computer:0,
};

let gameData = {
    win : 0,
    lose: 0,
    tie: 0,
};

let updateData = gameData

let points = pts

let userResponse = 0;

function algorithm(){
    let computerChoice = Math.random()*3;
    
    if(computerChoice<=1 && userResponse==1){
        userChoiceDisplay.innerText = 'Rock';
        computerChoiceDisplay.innerText = 'Scissors';
        document.querySelector('#result').innerText ='You Won'
        document.querySelector('#result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
       else if(computerChoice<=2 && userResponse==1){
        userChoiceDisplay.innerText = 'Rock';
        computerChoiceDisplay.innerText = 'Paper';
        document.querySelector('#result').innerText ='You Lose'
        document.querySelector('#result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==1){
        userChoiceDisplay.innerText = 'Rock';
        computerChoiceDisplay.innerText = 'Rock';
        document.querySelector('#result').innerText ='Draw'
        document.querySelector('#result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }
    else if(computerChoice<=1 && userResponse==2){
        userChoiceDisplay.innerText = 'Paper';
        computerChoiceDisplay.innerText = 'Rock';
        document.querySelector('#result').innerText ='You Won'
        document.querySelector('#result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
    else if(computerChoice<=2 && userResponse==2){
        userChoiceDisplay.innerText = 'Paper';
        computerChoiceDisplay.innerText = 'Scissors';
        document.querySelector('#result').innerText ='You Lose'
        document.querySelector('#result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==2){
        userChoiceDisplay.innerText = 'Paper';
        computerChoiceDisplay.innerText = 'Paper';
        document.querySelector('#result').innerText ='Draw'
        document.querySelector('#result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }
    else if(computerChoice<=1 && userResponse==3){
        userChoiceDisplay.innerText = 'Scissors';
        computerChoiceDisplay.innerText = 'Paper';
        document.querySelector('#result').innerText ='You Won'
        document.querySelector('#result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
    else if(computerChoice<=2 && userResponse==3){
        userChoiceDisplay.innerText = 'Scissors';
        computerChoiceDisplay.innerText = 'Rock';
        document.querySelector('#result').innerText ='You Lose'
        document.querySelector('#result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==3){
        userChoiceDisplay.innerText = 'Scissors';
        computerChoiceDisplay.innerText = 'Scissors';
        document.querySelector('#result').innerText ='Draw'
        document.querySelector('#result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }

    userPointsDisplay.innerText = `${points.user}`;
    computerPointsDisplay.innerText = `${points.computer}`;
};


let stone = document.querySelectorAll('.control-sto-btns')
let paper = document.querySelectorAll('.control-pap-btns')
let scissors = document.querySelectorAll('.control-sci-btns')
let reset = document.querySelectorAll('.control-reset-btn')

let startBtn = document.querySelector('#start-btn')


startBtn.addEventListener('click', () =>{
    document.querySelector('#about-sps').style.display='none';
    document.querySelector('#section-2').style.display = 'block';
})



stone.forEach(element => {
element.addEventListener('click',()=>{
    userResponse = 1;
    algorithm();
})
});

paper.forEach(element => {
element.addEventListener('click',()=>{
    userResponse = 2;
    algorithm();
})
});

scissors.forEach(element => {
element.addEventListener('click',()=>{
    userResponse = 3;
    algorithm();
})
});

reset.forEach(element => {
element.addEventListener('click',()=>{
    updateData = { win: 0, lose: 0, tie: 0 };
    points = { user: 0, computer: 0 };
    userPointsDisplay.innerText = '0';
    computerPointsDisplay.innerText = '0';
    userChoiceDisplay.innerText = '..';
    computerChoiceDisplay.innerText = '..';
    document.querySelector('#result').innerText = 'Start Game'
    document.querySelector('#result').style.color = 'rgb(94, 107, 128)'
})
});
