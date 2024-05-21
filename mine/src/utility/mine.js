import * as game from "./end.js"
import { showAll } from "./showall.js"

import { randomNum } from "./randomBox.js"



let mineDataStored = accountStoredData

 

//  

export let totalAmountWon = 0;

// 


  let totalAmountGot = 0

  let autoMode = false
  
  
  let isBetValid = true
  
  let noOfMines  = 1
  
  const amountInput = document.querySelector('#amt-input') // input div
  
  
  
  const betsInput = document.querySelector('#bets-input') //auto bet input
  
  const mineInput = document.querySelector('#mine-input')
  
  const betButton = document.querySelector('#bet-btn')
  
  const checkoutBtn = document.querySelector('#checkout-btn')
  
  const betInfo = document.querySelector('#bet-started')
  
  const NumberOfBoxes = document.querySelector('#box-number')
  let boxToOpen = 1
  // -->>
  
 export let bomb = []
 export let gems = []
  

  let selectedAutoBox = []
  

  let startBtn = document.querySelector('#start-btn')


startBtn.addEventListener('click', () =>{
    document.querySelector('#about-mines').style.display='none';
    document.querySelector('#section-2').style.display = 'block';
})


  
  

  
  

  
  let amountToUse = 0
  amountInput.value = 0


  let endLogic = true

  let gemFound = 0
  
  let resultBoxDiv = document.querySelector('#game-covering')
  let amountResultBox = document.querySelector('#game-result')
  
  let winDisplay = document.querySelector('#winning-amount')
  let multiplyDisplay = document.querySelector('#multiply')

  let clickedBomb = '';
  
  export const allBoxes = document.querySelectorAll('.box')
  
  

  class manualBetInfos{
      constructor(amount){
          this.amount = amount
      }
  
      amountInput(value=this.amount){
          if(value != ''){ 
              value = parseInt(value)
              if(value>mineDataStored.userData.amount){
                amountInput.value = mineDataStored.userData.amount
                amountToUse = mineDataStored.userData.amount 
                isBetValid=true
              }
              else if(value<0){ 
                  isBetValid=false
              }
              else if(value>=0 && endLogic===true){
                  isBetValid=true
                  amountToUse = parseInt(value)
                  
              }}
              else{
                amountToUse=0
              }
        
    }


          logic(){
            
            allBoxes.forEach(element => {
                if(!bomb.includes(Number(element.id))){
                    gems.push(Number(element.id))
                }
            });
            allBoxes.forEach(element => {
              element.clicked = false;
          
              element.addEventListener('click', (event) => {
                  if(endLogic == false) {
                      let clickedDiv = event.target;
          
                      if (!clickedDiv.clicked) {
                          if (gems.includes(Number(clickedDiv.id))) {
                            game.showGem(clickedDiv); 
                              gemFound++;
                              
                              clickedDiv.clicked = true;
                              
                          } else if (bomb.includes(Number(clickedDiv.id))) {
                              endLogic = true;

                              clickedBomb = clickedDiv
                              
                              showAll()
                              game.showBomb(clickedDiv)



                              totalAmountWon -= amountToUse
                              
                              
          
                              multiplyDisplay.innerText = `0x`;
                              winDisplay.innerText = `0 Coins`;
          
                              resultBoxDiv.style.display = 'block';
                              amountResultBox.style.display = 'block';
          
                              betButton.style.display = 'block';
                              checkoutBtn.style.display = 'none';
                              betInfo.style.display = 'none';
          
                              noOfMines = 1;
                              gemFound = 0;
                            document.querySelector('#mine-container').style.display ='block'
                          }
                      }
                  }
              });
          })
        }

      checkout(){
        if(gemFound>0){
            betButton.style.display = 'block'
            checkoutBtn.style.display = 'none'
            betInfo.style.display = 'none' 
  
        multiplyDisplay.innerText = `${((1+(noOfMines*0.04*gemFound)).toFixed(2))}x`
        console.log(amountToUse)
        let wonAmount = parseInt(((noOfMines*0.04)*gemFound*amountToUse)+amountToUse)
        winDisplay.innerText = `${wonAmount} Coins`
        resultBoxDiv.style.display = 'block'
        amountResultBox.style.display = 'block'

        totalAmountGot += wonAmount

        
        document.querySelector('#mine-container').style.display ='block'
        console.log(wonAmount)
    
        mineDataStored.userData.amount += wonAmount
        mineDataStored.userData.wins++

        
      localStorage.setItem('settings', JSON.stringify(mineDataStored))
        
        
         updateDisplayedCoins()

        endLogic = true

        totalAmountWon += wonAmount
  
    
        noOfMines = 1
        gemFound = 0
        }

      }
      }
  
  const manualBet = new manualBetInfos()
  

  
  // -> EVENT LISTENERS....
function onstart(){
  for(let i=1; i<25;i++){
      let mineOptions = document.createElement('option')
      mineOptions.innerText = `${i}`
      mineInput.appendChild(mineOptions)
      let BoxSelect = document.createElement('option')
      BoxSelect.innerText = `${i}`
      NumberOfBoxes.appendChild(BoxSelect)
  }
}
onstart()
  
  mineInput.value = 3

  function autoBtnInputsUpdate(){
    mineInput.options.length = 0
    NumberOfBoxes.options.length = 0
    let toggle = false
    let val1 = 0, val2 =0;
    for(let i=1; i<25;i++){
        if(toggle==false){
        val1++
        let mineOptions = document.createElement('option')
        mineOptions.innerText = `${val1}`
        mineInput.appendChild(mineOptions)
        toggle=true
        val2++
        }
        else{
        let BoxSelect = document.createElement('option')
        BoxSelect.innerText = `${val2}`
        NumberOfBoxes.appendChild(BoxSelect)
        toggle=false
        }
    }
    
  }
  

  const autoBtn = document.querySelector('#auto-btn')
  const manualBtn = document.querySelector('#manual-btn')
  
  autoBtn.addEventListener('click',()=>{

      document.querySelector('#box-no-to-open').style.display = 'block'
      autoBtn.classList.add('game-type-active')
      manualBtn.classList.remove('game-type-active')
      autoMode = true

      betButton.innerText = 'Start'
       autoBtnInputsUpdate()
  })
  
  manualBtn.addEventListener('click',()=>{
      document.querySelector('#box-no-to-open').style.display = 'none'
      autoBtn.classList.remove('game-type-active')
      manualBtn.classList.add('game-type-active')
      autoMode = false

      betButton.innerText = 'Bet'
      onstart()
  })
  
  amountInput.addEventListener('input',(event)=>{
    if(endLogic==true && autoBetStarted==false){
      const input = event.target
      input.value = input.value.replace(/[^0-9]/g,'')
      manualBet.amountInput(input.value)
    }
    else{
        event.target.value = 0
    }
  })
  
  mineInput.addEventListener('change',(event)=>{
      noOfMines = Number(event.target.value);
  })
  

  function betBtnLogic(){
    gems = []
    gemFound = 0

    bomb=[]
    noOfMines=mineInput.value

    allBoxes.forEach(element => {
        element.style.backgroundImage = ''
    });

    endLogic = false

    resultBoxDiv.style.display = 'none'
    amountResultBox.style.display = 'none'

    randomNum(noOfMines,bomb) //to get random bomb

    betButton.style.display = 'none'
    checkoutBtn.style.display = 'block'
    betInfo.style.display = 'block'

    document.querySelector('#mine-container').style.display ='none'

    document.querySelector('#totalbomb').innerText = `${bomb.length}`
    document.querySelector('#totalgem').innerText = `${25-bomb.length}`

    mineDataStored.userData.amount -= amountToUse
    mineDataStored.userData.totalPlayed++


    
    localStorage.setItem('settings', JSON.stringify(mineDataStored))

    
     updateDisplayedCoins()
  }

  


let divToBlast;

class autoBetInfos{

    logic(){
        allBoxes.forEach(element => {
            if(!bomb.includes(Number(element.id))){
                gems.push(Number(element.id))
            }
        });

        for(let i=0;i<boxToOpen;i++){

          let element = selectedAutoBox[i]
        if(bomb.includes(element)){
          divToBlast = element

            break
        }
        else if(gems.includes(element)){
          game.showGem(document.getElementById(element))
            gemFound++
        }
    };
    
    showAll()
    
    if(divToBlast==null){
        manualBet.checkout()
    }
    else{
        game.showBomb(document.getElementById(divToBlast))

        totalAmountWon -= amountToUse

        multiplyDisplay.innerText = `0x`;
        winDisplay.innerText = `0 Coins`;

        resultBoxDiv.style.display = 'block';
        amountResultBox.style.display = 'block';

        betButton.style.display = 'block';
        checkoutBtn.style.display = 'none';
        betInfo.style.display = 'none';

        noOfMines = 1;
        gemFound = 0;
       document.querySelector('#mine-container').style.display ='block'
    }


    }
}

let autobetclass = new autoBetInfos()

let autoBetStarted = false

let autoPlay;

  //   Auto bet and manual bet ->>

  NumberOfBoxes.addEventListener('change',(event)=>{
    boxToOpen= event.target.value
  })

  
  betButton.addEventListener('click',()=>{
    if(autoBetStarted == false && autoMode==true){
        autoBetStarted=true
    }
      if(isBetValid==true && autoMode==false && amountInput.value<=mineDataStored.userData.amount){

          betBtnLogic()

          manualBet.logic()

      }

      else if(isBetValid==true && autoMode==true && autoBetStarted==true){
        
        betButton.style.display = 'none'
        checkoutBtn.innerText = 'Stop!'
        checkoutBtn.style.display = 'block'
        NumberOfBoxes.style.display = 'none'
        document.querySelector('#box-no-container').style.display ='none'
        document.querySelector('#mine-container').style.display ='none'

        autoPlay = setInterval( () => {
            if(amountInput.value<=mineDataStored.userData.amount){

        betBtnLogic()

        randomNum(boxToOpen,selectedAutoBox)



        autobetclass.logic()

        betButton.style.display = 'none'
        checkoutBtn.innerText = 'Stop!'
        checkoutBtn.style.display = 'block'
        NumberOfBoxes.style.display = 'none'
        document.querySelector('#box-no-container').style.display ='none'
        document.querySelector('#mine-container').style.display ='none'

        divToBlast = null

      
    localStorage.setItem('settings', JSON.stringify(mineDataStored))


    
        selectedAutoBox=[]
          
    }
    
    
    else{
        checkoutBtn.click()
    }
},1500)
        

}

     else{
            amountInput.value = mineDataStored.userData.amount // just to diplay it to user
            amountToUse = mineDataStored.userData.amount // actually using this amout var
            isBetValid=true
            betButton.innerText = `Bet`
            betButton.style.fontSize = '16px'
          }
    
      
  })
  
  checkoutBtn.addEventListener('click',()=>{
    if(autoMode==false && gemFound>0){
    manualBet.checkout()
    showAll()
    }
    else if(autoBetStarted==true){
        autoBetStarted=false
        clearInterval(autoPlay)
        betButton.style.display = 'block'
        checkoutBtn.style.display = 'none'
        checkoutBtn.innerText = 'CheckOut'
        NumberOfBoxes.style.display = 'block'
        document.querySelector('#box-no-container').style.display ='block'
        document.querySelector('#mine-container').style.display ='block'    
        endLogic=true
    }
  })


