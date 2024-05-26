import { rightOption } from "./optionShuffle.js"
import { index } from "./logic.js"
import { isGameStarted } from "./begin.js"
class HelpOptions{
    constructor(){
    
        this.profileImg = document.querySelector('.profile>img')
        this.profileName = document.querySelector('.profile>h3')
        this.profileData = {
            name: ['Alex','Jamie','Taylor','Morgan','Casey'],
            profileImg : ['quiz/src/usersProfile/user1.jpg','quiz/src/usersProfile/user2.jpg','quiz/src/usersProfile/user3.jpg','quiz/src/usersProfile/user4.jpg'],
        }
        
        this.optionUsed = {
            call:false,
            half:false,
            poll:false,
            skip:false,
        }

        this.percentage = {
            poll1: 0,
            poll2: 0,
            poll3: 0,
            poll4: 0,
        }
        this.convoDiv = document.querySelector('.convo-text-div')
        this.callDeclineImg = document.querySelector('.call-footer>img')
    }

   callFn(){
        if(this.optionUsed.call==false && isGameStarted==true){
            document.querySelector('.call-option-box').style.display='block'
            this.profileName.innerText = `${this.profileData.name[this.randomNum(4)]}`
            this.profileImg.src = `${this.profileData.profileImg[this.randomNum(3)]}`
            this.handelConvo()
            this.optionUsed.call=true
        }
    }

    endCallFn(){
        if(this.optionUsed.call==true){
            document.querySelector('.call-option-box').style.display='none'
        }
    }

   async handelConvo(){
        let ans = document.querySelector(`#q${index-1}>.option${rightOption}`)
        this.convoDiv.innerText = `Me: Hellow can you answer me the question .... \n`
        await new Promise(resolve => setTimeout(resolve, 1300));
        this.convoDiv.innerText = `${this.convoDiv.innerText} ${this.profileName.innerText}: the answer is probably \n ${ans.innerText}`
        this.callDeclineImg.addEventListener('click',()=>{
            document.querySelector('.call-option-box').style.display='none'
        })
    }

    randomNum(maxValue){
        return Math.round(Math.random()*maxValue)
    }



    pollFn(){
        if(this.optionUsed.poll==false && isGameStarted==true){
        document.querySelector('.poll-option-box').style.display='block'
        this.optionUsed.poll=true
         console.log(rightOption)  
         this.pollPercentageHandler()
         const exitBtn = document.querySelector('.close-btn>img')
         exitBtn.addEventListener('click',()=>document.querySelector('.poll-option-box').style.display='none')
        }
    }

    pollPercentageHandler(){
        let totVal = 50
        for(let p=0;p<3;p++){
            let val = Math.round(Math.random()*totVal)
            totVal-= val
            document.querySelector(`#poll${p}>.percentage`).innerText = `${val}%`
            document.querySelector(`#poll${p}>.percentage-show`).style.height = `${val}%`
    }
    document.querySelector(`#poll${3}>.percentage`).innerText = `${totVal}%`
    document.querySelector(`#poll${3}>.percentage-show`).style.height = `${totVal}%`
    let pp = document.querySelector(`#poll${rightOption[0]}>.percentage-show`).style.height
    console.log(pp.slice(0,-1))
    document.querySelector(`#poll${rightOption[0]}>.percentage-show`).style.height = `${Number(pp.slice(0,-1))+50}%`
    document.querySelector(`#poll${rightOption[0]}>.percentage`).innerText = `${Number(pp.slice(0,-1))+50}%`
    }




    halfOptionFn(){
        if(this.optionUsed.half==false && isGameStarted==true){
            this.halfOptionHandler()
            this.optionUsed.half = true
        }
        
    }

    halfOptionHandler(){
        let divCounter = 0;
        let tempArr = []
        while(divCounter < 2) {
            let randomDiv = Math.floor(Math.random() * 4); // Math.floor is more common for 0-3 range
            if(randomDiv != rightOption[0] && !tempArr.includes(randomDiv)) {
                tempArr.push(randomDiv)
                document.querySelector(`#q${index-1} .option${randomDiv}`).style.display = 'none';
                divCounter++;
            }
        }
    }


    skipFn(){
        if(this.optionUsed.skip==false && isGameStarted==true){
            document.querySelector(`#q${index-1}>.option${rightOption[0]}`).click()
            this.optionUsed.skip=true
        }
    }


    reset(){
        this.optionUsed.call = false
        this.optionUsed.half = false
        this.optionUsed.poll = false
        this.optionUsed.skip = false
        // this.optionUsed.e
    }
}

export const helpButtonFunctions = new HelpOptions()