//Importa o modulo fs do node para interagir com o sistema de arquivos.
const fs = require('fs');

// Ler os dados do arquivo exemplo.txt
fs.readFile('exemplo3.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    // Dividir os dados em um Array de strings.
    const numerosComoStrings = data.trim().split('\n');

    // Converter o Array de strings em números.
    const dados = numerosComoStrings.map(Number);

    // Calcular e imprimir o tempo médio entre os picos
    console.log("Tempo médio entre os picos:", tempoMedioEntrePicos(dados));
    console.log(dados);
});


// Função para calcular o tempo médio entre picos
function tempoMedioEntrePicos(dados) {
    let picos = []; // Array para armazenar os tempos dos picos
    
    // Encontrar os picos nos dados
    for (let i = 1; i < dados.length - 1; i++) {
        if (dados[i] > dados[i - 1] && dados[i] > dados[i + 1] && dados[i] >= 50) {
            picos.push(i); // Armazenar o tempo do pico
          
        }
    }
    console.log('Os picos são: ' + picos)
    let tempoEntrePicos = []; // Array para armazenar os tempos entre os picos
    
    // Calcular os tempos entre os picos em segundos
    for (let i = 1; i < picos.length; i++) {
        let tempoEntrePicosEmSegundos = picos[i] - picos[i - 1];
        tempoEntrePicos.push(tempoEntrePicosEmSegundos);
    }
    
    // Calcular o tempo médio entre os picos
    let tempoMedio = tempoEntrePicos.reduce((acc, curr) => acc + curr, 0) / (picos.length - 1);
    
    // Converter o tempo médio para minutos e segundos
    let minutos = Math.floor(tempoMedio / 60);
    let segundos = Math.floor(tempoMedio % 60);
    
    //Convertendo os números para string e formatando a saída de minutos e segundos.
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
