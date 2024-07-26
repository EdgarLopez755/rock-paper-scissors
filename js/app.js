/*-------------------------------- Constants --------------------------------*/
// 1) 3 user choicew of "rock", "paper", "scissors"

const choices = ['rock', 'paper', 'scissors']










/*-------------------------------- Variables --------------------------------*/
// 2) Define any variables for state 
// the players
let playerChoice
// the comp choice
let computerChoice
// the match result - win/lose/draw
// A result message  - display the result / who won
let msg











/*------------------------ Cached Element References ------------------------*/
// 3) reference to the DOM element to display messages 
const resultDisplayEl = document.querySelector('#result-display')
// 3 button DOM references for the rock paper scissors










/*-------------------------------- Functions --------------------------------*/
// handle player click
const getPlayerChoice = (event) => {
    console.log('getPlayerChoice:', event);
    playerChoice = event.target.id
  }
// handle generating random selections for the computer 
const getComputerChoice = () => {
    const randomIdex = Math.floor(Math.random() * choices.length)
    computerChoice = choices[randomIdex]
   
}
// compare player and computer choices - check for a winner 
const compare = () => {
    msg = 'You lose! Try again?'
    // if/else comparison to all choices 
    // rock beats scissors/ scissors beat paper/ 
    // incuding player and comp choices in the message 
    // clearly indicating who won/result
    if(playerChoice === computerChoice){
        msg = "You Tied!"
    } else if(playerChoice === choices[0] && computerChoice === choices [2]){
        msg = "You Win!"
    } else if(playerChoice === choices[1] && computerChoice === choices[0]) {
        msg = "You Win!"
    } else if(playerChoice === choices[2] && computerChoice === choices[1]) {
        msg = "You Win"
    } else {
        msg = "You Lose! Try again?"
    }
    
}

//  render a wi/lose/draw message to the player 
const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`
}







const play = (event) => {
    getPlayerChoice(event);

    getPlayerChoice(event)
    getComputerChoice()
    compare()
    render()
}
    





// // const play = (event) => {
//     console.log(event.target)
// }



/*----------------------------- Event Listeners -----------------------------*/
// handle a player clicking a button 


document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);

// alt way to add event listeners to all buttons

// // document.querySelectorAll('button').forEach(function (button) {
//     button.addEventListener('click', play);
//   });
  
