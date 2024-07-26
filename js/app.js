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
// handle generating random selections for the computer 
// compare player and computer choices - check for a winner 
// if/else comparison to all choices 
// rock beats scissors/ scissors beat paper/ 
//  render a wi/lose/draw message to the player 
// incuding player and comp choices in the message 
// clearly indicating who won/result











/*----------------------------- Event Listeners -----------------------------*/
// handle a player clicking a button 


document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);

// alt way to add event listeners to all buttons

// // document.querySelectorAll('button').forEach(function (button) {
//     button.addEventListener('click', play);
//   });
  
