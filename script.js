const participantes = ['Téo','Jonathan','Gleiton','Carlos','Miguel','Isabella','Luan','Ivanir','Boninho','Joãozinho','Marcos','Guilherme'];

const sorteioAleatorio = participantes[Math.floor(Math.random() * participantes.length)];

document.write('<h1> O Ganhador é: <br>', sorteioAleatorio + '<h1>');

