const app=document.getElementById('app')
const gameBox=document.createElement('table')
const randomNum=Math.trunc(Math.random()*100+1) //random() is from 0 to 1, such as 0.67, etc
console.log(randomNum)

// add an alert or prompt for user to guess
let guess
console.log(guess)
let output=``
// setTimeout(()=>{console.log(`This is a throwaway message`)},2000)
window.alert(`Welcome! Please guess a number between 1-100`)


do{guess=parseInt(window.prompt('pick a number between 1-100'))
    if(randomNum === guess){
        output=`You are such a smart cookie`

    }
    else
    {output=`Sorry, the random number was ${randomNum}, try one more time`

    }
    window.alert(output)

}while(randomNum!==guess)
