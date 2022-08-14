

const getComputerChoice = () => {
 const options = ['rock', 'paper', 'scissors']
 return options[Math.floor(Math.random() * 3)]
}

let userScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
 button.addEventListener('click', () => {
  playRound(button.id)
  
 })
})

const playRound = (playerChoice) => {
 
 const computerChoice = getComputerChoice()
 let result = ''

 if((playerChoice === 'rock' && computerChoice === 'scissors') ||
 (playerChoice === 'scissors' && computerChoice === 'paper') ||
 (playerChoice === 'paper' && computerChoice === 'rock')) {
  userScore++;
  result += `You win ${playerChoice} beats ${computerChoice} \n your score: ${userScore} \n computer score: ${cpuScore}`

  if(userScore === 5){
   result += `you are the first to 5 wins!`
  }
  
 }else if (playerChoice === computerChoice){
  result += `tie with ${computerChoice}  \n your score: ${userScore}  \n computer score: ${cpuScore}`
 }else{
  cpuScore++;
  result += `you lose ${computerChoice} beats ${playerChoice} \n your score: ${userScore}  \n computer score: ${cpuScore}`

  if(cpuScore === 5){
   result += '\n computer wins, reload to play again'
  }
 }

 document.getElementById('results').innerText = result;
 return;

}



