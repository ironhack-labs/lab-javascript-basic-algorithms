// Iteration 1: Names and Input
let hacker1 = 'gsg-nt';
let hacker2 = 'Google Chrome';
console.log ("Estou pronto!");
console.log ("O nome do driver é ", hacker1);
console.log ("O nome do navegador é ", hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`O driver tem o nome mais longo, ele tem um total de ${hacker1.length} caracteres.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`Parece que o navegador tem o nome mais longo, ele tem ${hacker2.length} caracteres.`)
  } else { console.log(`Uau, vocês dois têm nomes igualmente longos, são ${hacker2.length} caracteres.`)
  }
// Iteration 3: Loops
let upDrName=hacker1.toUpperCase();
console.log(`Upper String mais espaço:${upDrName.split('').join(' ')}`);
console.log(`String reversa: ${upDrName.split('').reverse().join('')}`);
if (hacker1.localeCompare(hacker2)<0){
    console.log("O nome do motorista vai primeiro")
 } else if (hacker1.localeCompare(hacker2)>0){
    console.log("Ei, o navegador vai primeiro, definitivamente.")
 } else {console.log("O que?! Vocês dois têm o mesmo nome?")};

//bonus1
const strPrag=`O que é Lorem Ipsum?
Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou um modelo de impressão e embaralhou-o para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum.
Porque usamos isso?
É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao examinar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal, ao contrário de usar 'Conteúdo aqui, conteúdo aqui', fazendo com que pareça um inglês legível. Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam Lorem Ipsum como seu texto de modelo padrão, e uma pesquisa por 'lorem ipsum' revelará muitos sites ainda em sua infância. Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes de propósito (humor injetado e coisas do gênero).
De onde isso vem?
Ao contrário da crença popular, Lorem Ipsum não é simplesmente um texto aleatório. Tem raízes em uma peça da literatura clássica latina de 45 aC, com mais de 2.000 anos. Richard McClintock, um professor de latim no Hampden-Sydney College, na Virgínia, pesquisou uma das palavras latinas mais obscuras, consectetur, de uma passagem de Lorem Ipsum e, examinando as citações da palavra na literatura clássica, descobriu a fonte indubitável. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal) de Cícero, escrito em 45 aC. Este livro é um tratado sobre a teoria da ética, muito popular durante o Renascimento. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet ..", vem de uma linha na seção 1.10.32.
O pedaço padrão de Lorem Ipsum usado desde 1500 é reproduzido abaixo para os interessados. As seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cícero também são reproduzidas em sua forma original exata, acompanhadas por versões em inglês da tradução de 1914 de H. Rackham.`
console.log(`o número de palavras na string é: ${strPrag.split(" ").length}`);
console.log(`o número de et na string é:${strPrag.split(' ').filter(p=>p==='et').length}`);

//bonus2
const phraseToCheck ="Um homem, um plano, um sinal"
let a= phraseToCheck.split('').filter(p=>[' ','!','.',','].indexOf(p)==-1).join('').toLowerCase()

if(a.substr(0,Math.ceil( a.length/2))===a.substring(a.length/2).split('').reverse().join('')){
  console.log('esta variável é um palíndromo');
  } else{ console.log('esta variável não é um palíndromo')};