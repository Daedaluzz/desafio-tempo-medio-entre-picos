# Desafio-tempo-medio-entre-picos 


# Como você implementou a sua solução (suas ideias e estratégias)
Primeiramente, importei o módulo fs do Node.js para pode ler o arquivo exemplo.txt.
Utilizando o método readFile do módulo fs foi possível ler os dados do arquivo exemplo.txt. Em seguida os número foram divididos em um array de string baseados na quebra de linha. Finalmente as strings foram convertidas em números com o método map.
A função tempoMedioEntrePicos encontra os picos nos dados e calcula o tempo médio da seguinte forma:
Primeiramente a função compara o dado do array com os dados adjacentes, caso o dado seja maior que seus adjacentes e maior que 50, o índice desse dado é registrado no array "picos". Como a diferença entre um ponto do gráfico e o ponto seguinte é sempre de 1 segundo, podemos utilizar os índices do array para medir o tempo em segundos.
Após o preenchimento do array de "picos" podemos calcular o tempo médio entre picos da seguinte forma:
Primeiro iteramos pelo array de picos onde para cada iteração, a diferença de tempo entre picos vai ser calculada e inserida no array tempoEntrePicos. Com isso esse array vai conter todas as diferenças de tempo entre todos os picos do array "picos".
Com o método reduce() conseguimos reduzir todo o array a um único valor utilizando um acumulador que começa em 0. Após todos os intervalos entre picos somados, este então é dividido pelo tamanho do array picos -1 como indicado na fórmula do enunciado.
Após isso, bastou converter o tempo médio para minutos e segundos utilizando o a função Math.floor() para obter um número inteiro.


# Como você gerou os dados para validar a sua solução
Para gerar os dados utilizei um gerador de datasets com valores variando de 0 a 100 como descrito no enunciado.


# Exemplos de entradas para testar a sua implementação
Para validar a solução, utilizei um arquivo de texto chamado "exemplo.txt", que contém os dados de entrada. Este arquivo deve estar presente no mesmo diretório do script. Para mais testes, basta criar um arquivo de texto com o mesmo formato de dados no diretório do script e alterar o nome do arquivo "exemplo.txt" na linha 5 do código da solução.

# Quais as maiores dificuldades ou dúvidas que você encontrou quando estava desenvolvendo a sua solução

A lógica para calcular o intervalo entre os picos foi a maior dificuldade deste desafio junto com as dúvidas de como formatar o resultado de forma correta para minutos e segundos.

# Como executar a sua solução (compilar? Instalar algum interpretador?)
Para executar a solução, você precisa ter o node instalado na sua máquina para executar scripts de javascript.
O instalador do node pode ser encontrado em:
https://nodejs.org/en/download
Após a instalação, basta abrir o terminal do diretório da solução e executar o comando: node solution.js
