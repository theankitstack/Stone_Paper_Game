let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoise = () =>{
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random()* 3);
  return option[randIdx];
}

const drawGame = () =>{
  msg.textContent = "Game was Draw. play Again."
  msg.style.backgroundColor = "orange";
}

const showWinner = (userWin) =>{
  if(userWin ){
    userScore++;
    userScorepara.innerText = userScore;
    msg.textContent = "You Win!"
     msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorepara.innerText = compScore;
    msg.textContent = "Yor lose"
     msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoise) =>{
  // console.log("user choose is =" , userChoise);
  const compChoise = genCompChoise();
  // console.log("Computer choose is = ", compChoise);

  if(userChoise === compChoise ){
    //Drow Game
    drawGame();
  }else {
    let userWin = true;
    if(userChoise === "rock"){
      // scissors , paper
     userWin = compChoise === "paper" ? false : true ;
    }else if(userChoise === "paper"){
      // scissors . rock
      userWin = compChoise === "scissors" ? false : true ;
    }else {
      //rock , paper
      userWin = compChoise === "rock" ? false :true ;    
    }
    showWinner(userWin);
  }
}

choises.forEach((choise)  => {
  choise.addEventListener("click" , () =>{
    const userChoise = choise.getAttribute("id");
    playGame(userChoise);
  });
});