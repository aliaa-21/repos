
function computer()
{
    let options = ["rock", "scissors", "paper"];
    let index = Math.floor(Math.random()*3);
    let computerSelection = options[index];
    return computerSelection;
}

let computerSelection = computer()
let player = 0;
let opponent = 0;

while(opponent < 5 && player < 5)
{
    let userSelection = prompt("").toLowerCase();



if (userSelection === "paper" && computerSelection === "scissors")
{
    opponent++;
    console.log("You lose! Scissors beat paper!");
}
else if (userSelection === "rock" && computerSelection === "scissors")
{
    player++;
    console.log("You win! Rock wins against scissors");
}
else if (userSelection === "rock" && computerSelection === "paper")
{
    opponent++;
    console.log("You Lose! Paper wins against rock!");
}
else if (userSelection === "paper" && computerSelection === "rock")
{
    player++;
    console.log("You win! Paper wins against rock!");
}
else if (userSelection === "scissors" && computerSelection === "rock")
{
    opponent++;
    console.log("You lose! Rock wins against scissors!")
}
else if (userSelection === "scissors" && computerSelection === "paper")
{
    player++;
    console.log("You win! Scissors win against paper!");
}
console.log(opponent, player);
}