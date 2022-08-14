const getComputerChoice = () => {
 const options = ['rock', 'paper', 'scissors']
 return options[Math.floor(Math.random() * 3)]
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
 button.addEventListener('click', () => {
  console.log(playRound(button.id, getComputerChoice()))
  
 })
})

const playRound = (playerChoice, computerChoice) => {
 const player = playerChoice.toLowerCase()

 if(player === computerChoice) return `tie (${player})`
 if(player === 'rock' && computerChoice === 'scissors'){
  return `you win rock beats scissors`
 }else if (player === 'rock' && computerChoice === 'paper'){
  return `you lose, paper beats rock`
 }else if (player === 'scissors' && computerChoice === 'paper'){
  return `you win, scissors cut paper`
 }else if (player === 'paper' && computerChoice === 'scissors'){
  return `you lose, scissors cuts paper`
 }else if (player === 'paper' && computerChoice === 'rock'){
  return `you win, paper beats rock`
 }else {
  return `you lose, rock crushes scissors`
 }


}


const game = () => {
 let userWins = 0;
 let cpuWins = 0;

 let userChoice = prompt('enter your choice: rock, paper, or scissors')
 let outcome = playRound(userChoice, getComputerChoice())
 
 if(outcome.slice(0,7) === 'you win'){
  userWins++
 }else if (outcome.slice(0,8) === 'you lose'){
  cpuWins++
 }
 console.log(outcome, `user wins:${userWins} | cpu wins:${cpuWins}`)
 
 if (userWins > cpuWins){
  console.log(`you win!!! ${userWins} to ${cpuWins}`) 
 }else if (cpuWins > userWins){
  console.log(`you lose ${userWins} to ${cpuWins}`) 
 }else console.log(`tie:  ${userWins} to ${cpuWins}`) 
}

