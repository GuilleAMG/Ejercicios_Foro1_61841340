const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`¿Cual es tu edad? \n`, Age => {
    if(Age >= 18){
        console.log("Tienes edad suficiente para valerte solo.");
     }
     else{
        console.log("Aún eres un niño de mami y papi, castigado.");
     }
    readline.close();
  });