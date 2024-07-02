//variabili globali
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const resultDiv = document.querySelector("#resultDiv");
const buttonDiv = document.querySelector("#buttonDiv");
let resultDivContent = document.querySelector(".resultP");
const scissorButton = document.querySelector("#scissorButton");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
//aggiunge classe button ai pulsanti
scissorButton.classList.add("button");
rockButton.classList.add("button");
paperButton.classList.add("button");

//event listener:
buttonDiv.addEventListener("click", (e)=>{
    let target = e.target;
    switch(target.id){
        case "scissorButton":
            playMatch("Forbici");
            break;
        case "paperButton":
            playMatch("Carta");
            break;
        case "rockButton":
            playMatch("Sasso");
            break;
    }
});

buttonDiv.addEventListener("mouseover", (e)=>{
    let target = e.target;
    switch(target.id){
        case "scissorButton":
            scissorButton.style.backgroundColor = "hotpink";
            break;
        case "paperButton":  
            paperButton.style.backgroundColor = "lightblue";
            break;
        case "rockButton":
            rockButton.style.backgroundColor = "rgb(143,254,9)";
            break;

    }
});

buttonDiv.addEventListener("mouseout", (e)=>{
    let target = e.target;
    switch(target.id){
        case "scissorButton":
            scissorButton.style.backgroundColor = "rgb(255, 46, 46)";
            break;
        case "paperButton":  
            paperButton.style.backgroundColor = "rgb(0, 89, 255)";
            break;
        case "rockButton":
            rockButton.style.backgroundColor = "rgb(92, 241, 92)";
            break;

    }
});








//funzione che controlla la scelta del computer
function getComputerChoice(){
    let sceltaComputer ="";
    let randomNumber = Math.floor((Math.random()* 3)+ 1); //genero un numero casuale
    switch (randomNumber) {
        case 1:
             sceltaComputer = "Sasso";
              break;
           
        case 2:
            sceltaComputer = "Carta";
            break;
        
        case 3:
            sceltaComputer =  "Forbici";
            break;
        
        default:
            console.log("Errore nella generazione del numero casuale");

       }
    
    return sceltaComputer;
}



function match(playerChoice, computerChoice){
    
    resultDivContent.textContent = `Scelta computer: ${computerChoice}\nScelta Giocatore: ${playerChoice}
            `;
    if(playerChoice === computerChoice){
        resultDivContent.textContent += "\nPari!\n";
        
        
    }else if(playerChoice === "Carta" && computerChoice === "Forbici"){
       resultDivContent.textContent += "\nForbici batte Carta! Vince il Computer!\n";
      
       computerScore++;
    }else if(playerChoice === "Forbici" && computerChoice === "Sasso" ){
        resultDivContent.textContent +="\nSasso batte Forbici! Vince il Computer!\n";
        
        computerScore++;
    }else if(playerChoice === "Sasso" && computerChoice === "Carta" ){
        resultDivContent.textContent += "\nCarta batte Sasso! Vince il Computer!\n";
        
        computerScore++;
    }else if(playerChoice === "Sasso" && computerChoice === "Forbici" ){
        resultDivContent.textContent += "\nSasso batte Forbici! Hai vinto!\n";
       
        playerScore++;
    }else if(playerChoice === "Carta" && computerChoice === "Sasso" ){
        resultDivContent.textContent += "\nCarta batte sasso! Hai vinto!\n";
        
        playerScore++;
    }else if(playerChoice === "Forbici" && computerChoice === "Carta" ){
        resultDivContent.textContent += "\nForbici batte Carta! Hai vinto!\n";
        
        playerScore++;

    }

    
    if(rounds >= 5){
        if(computerScore > playerScore){
            resultDivContent.textContent += `\nRISULTATO FINALE: Vince il Computer ${computerScore} a ${playerScore}!\n\nScegli per giocare ancora`;
            rounds = 0;
       
        }else if(computerScore < playerScore){
            resultDivContent.textContent += `\nRISULTATO FINALE: Hai vinto ${playerScore} a ${computerScore}!\n\nScegli per giocare ancora`;
            rounds = 0;
        }else{
            resultDivContent.textContent += `\nRISULTATO FINALE: Pari! ${playerScore} a ${computerScore}!\n\nScegli per giocare ancora`;
            rounds = 0;
        }
        playerScore = 0;
        computerScore = 0;
    }else{
        
        resultDivContent.textContent += `\nPunteggio Computer : ${computerScore}\nPunteggio Giocatore: ${playerScore}\n\nRound giocati: ${rounds} `;
        
    }
            
}

function playMatch(playerChoice){
    
    
    
    
        rounds++;
        match(playerChoice, getComputerChoice());
        
    
    
    
        
}