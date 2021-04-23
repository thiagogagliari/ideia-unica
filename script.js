const participantes = ['Caio','Sarah','Fiuk','Thaís','Rodolffo','Pocah','Arthur','Gilberto','Viih','Camilla','Juliette','João'];

const sorteioAleatorio = participantes[Math.floor(Math.random() * participantes.length)];

document.write('<h1> O Ganhador é: <br>', sorteioAleatorio + '<h1>');

