let numUsuario, numGanador, numIntentos = 0;
   
numGanador = Math.floor(Math.random() * 100);

do {       
        numUsuario = Number(prompt("Escriba un número entre 1 y 100")); 
        
        if(numUsuario < numGanador) {
            alert("Que el numero sea mayor");
        } else if(numUsuario > numGanador) {
            alert("Que el numero sea menor");
        } else if(numUsuario === numGanador) {
            alert("Ganaste, ¡Felicitaciones!");
        } 

        numIntentos++

        if (numIntentos === 3) {
            alert("Ese fue tu ultimo intento");
            break;
        }

} while (numUsuario !== numGanador);

alert(`Se acabo el juego, ¡Muchas gracias por participar!`);