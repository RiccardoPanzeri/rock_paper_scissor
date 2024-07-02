//variabili globali
let playerScore = 0;
let computerScore = 0;
//codice per la creazione degli elementidella pagina
const resultDiv = document.querySelector("#resultDiv");
const scissorButton = document.querySelector("#scissorButton");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
scissorButton.classList.add("button");
rockButton.classList.add("button");
paperButton.classList.add("button");







/*do{
    playerScore = 0;
    computerScore = 0;
    playMatch();

}while(confirm("Vuoi giocare ancora?"));
*/


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

//funzione che implementa la scelta da parte del giocatore
function getPlayerChoice(){
    let sceltaPlayer = "";
    let input = 0; 
    do{
        
        //input = parseInt(prompt("Scegli: 1-Sasso, 2-Carta, 3-Forbici"));

        switch(input){
            case 1:
                sceltaPlayer = "Sasso";
                break;
            case 2:
                sceltaPlayer = "Carta";
                break;
            case 3:
                sceltaPlayer = "Forbici";
                break;
            default:
                console.log("Attenzione! input non valido");
                sceltaPlayer = "non valido";
                break;
            

            }
        
    }while(sceltaPlayer == "non valido" || input < 1 || input > 3)
        
        
    return sceltaPlayer;    

}


function match(playerChoice, computerChoice){
    
    console.log(`Scelta computer: ${computerChoice}\nScelta Giocatore: ${playerChoice}
            `)
    if(playerChoice === computerChoice){
        console.log("Pari!");
        
        
    }else if(playerChoice === "Carta" && computerChoice === "Forbici"){
       console.log("Forbici batte Carta! Vince il Computer!");
      
       computerScore++;
    }else if(playerChoice === "Forbici" && computerChoice === "Sasso" ){
        console.log("Sasso batte Forbici! Vince il Computer!");
        
        computerScore++;
    }else if(playerChoice === "Sasso" && computerChoice === "Carta" ){
        console.log("Carta batte Sasso! Vince il Computer!");
        
        computerScore++;
    }else if(playerChoice === "Sasso" && computerChoice === "Forbici" ){
        console.log("Sasso batte Forbici! Hai vinto!");
       
        playerScore++;
    }else if(playerChoice === "Carta" && computerChoice === "Sasso" ){
        console.log("Carta batte sasso! Hai vinto!");
        
        playerScore++;
    }else if(playerChoice === "Forbici" && computerChoice === "Carta" ){
        console.log("Forbici batte Carta! Hai vinto!");
        
        playerScore++;

    }

    console.log(`Punteggio Computer : ${computerScore}\nPunteggio Giocatore: ${playerScore}`);
       
            
}

function playMatch(){
    let rounds = 0;
    
    console.log("Alla meglio di cinque! via!");
    
    while(rounds < 5){
        match(getPlayerChoice(), getComputerChoice());
        rounds++;
    }

    if(computerScore > playerScore){
        console.log(`Vince il Computer ${computerScore} a ${playerScore}!`);
   
    }else if(computerScore < playerScore){
        console.log(`Hai vinto ${playerScore} a ${computerScore}!`);
    
    }else{
        console.log(`Pari! ${playerScore} a ${computerScore}!`);
    
    }
        
}