//funzione che controlla la scelta del computer
function getComputerChoiche(){
    let valore = "";
    let randomNumber = (Math.random() * 4).toFixed(0); //genero un numero casuale
    console.log(randomNumber);
    switch(randomNumber){
        case 1:
             valore ="Sasso";
             break;
           
        case 2:
            valore ="Carta";
            break;
        
        case 3:
            valore =  "Forbice";
            break;
        

    }

    return valore;
}

console.log(getComputerChoiche());
