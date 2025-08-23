let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#computerscore");



//Generate computerchoice

const generateCompChoice=()=>
{
    //rock, paper, scissors
    const options=["rock","scissors", "paper"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=()=>{
    console.log("The Game got Draw");
    msg.innerText="DRAW!";
    msg.style.backgroundColor="black";
};

const showWinner=(userwin,userchoice, computerChoice)=>{
  if(userwin)
  {
    userscore++;
    userscorepara.innerText=userscore;
    console.log("You win");
    msg.innerText=`YOU WIN! your ${userchoice} beats ${computerChoice}`;
    msg.style.backgroundColor="green";
  }
  else
  {
    computerscore++;
    compscorepara.innerText=computerscore;
    console.log("You lose");

    msg.innerText=`YOU LOSE!  ${computerChoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
  }
}
const playGame=(userchoice)=>{
    console.log("user choice is ", userchoice);
   const computerChoice=generateCompChoice();
   console.log("Computer choice is ", computerChoice);
   if(userchoice===computerChoice)
   {
    drawGame();
   }
   else {
    let userwin=true;
    if(userchoice=== "rock")
    {
        //scissprs or paper
        userwin=computerChoice==="paper"?  false:true;
    }else if (userchoice==="paper")
    {
        userwin=computerChoice==="scissors"?false:true;
    }
    else
    {
        userwin=computerChoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,computerChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        console.log("choice was clicked");
        playGame(userchoice);
    });
});



