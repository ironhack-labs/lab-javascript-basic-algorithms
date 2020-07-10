// Iteration 1: Names and Input
let hacker1 = 'Isis';
    console.log(`The driver s name is ${hacker1}`);

let hacker2 = 'Jeferson';
    console.log(`The navigator s name is ${hacker2}`);



// Iteration 2: Conditionals
 if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);  
 } else if(hacker1.length < hacker2.length ){
    console.log(`It seems that the navigator has the longest name,it has ${hacker2.length} characters.`);
    
 }
 else {
     console.log(`Wow, you both have equally long names, ${hacker.length} characters.`);

 }


// Iteration 3: Loops
let nomeReverso =''
for (let i = hacker2.length-1; i>=0 ; i-- ){
  console.log(hacker2[i]);
  nomeReverso = nomeReverso+ hacker2[i] ;
}

console.log(nomeReverso);

let nomeComEspaco = ''
for (let i = 0; i< hacker1.length; i++){
    nomeComEspaco = nomeComEspaco + hacker1[i] + ' ' ;
    console.log(nomeComEspaco.toUpperCase());

}
if (hacker1.localeCompare(hacker2)=== 1){
    console.log('The drivers name goes first.')
} else if(hacker1.localeCompare(hacker2)=== -1){
    console.log('The navigator goes first definetly.')
} else {
    console.log('What? You both have the same name?')
}

// Bonus 1
let paragrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id semper tortor. Integer rhoncus leo velit, quis vulputate nisi pellentesque eget. Quisque vitae interdum nisi, id suscipit purus. Etiam bibendum mauris odio, sit amet porttitor orci vestibulum non. Nullam nec felis mattis diam interdum vehicula. Duis vehicula dolor ac arcu condimentum posuere. Donec ornare id magna quis porta. Maecenas elementum odio id leo mollis eleifend. Curabitur convallis dignissim orci id maximus. Ut fringilla, ligula sit amet interdum placerat, sem ligula laoreet nibh, sit amet ultrices ante velit id mi. Duis dapibus, neque at fermentum pulvinar, ipsum elit maximus eros, vel tristique sem neque sit amet arcu.

Maecenas vitae rhoncus lectus, sit amet tristique lacus. Suspendisse bibendum mattis iaculis. Nullam mollis urna eu mollis dapibus. Aliquam vel lacus ac velit facilisis feugiat vitae a enim. Nullam luctus sit amet nisi nec dapibus. Praesent a sem nec dui tristique tincidunt. Vestibulum quis augue massa. Cras rhoncus sit amet enim nec varius. Mauris non risus quis magna sollicitudin iaculis ac non libero. Sed ultricies nisi a libero varius, id viverra nibh efficitur. Praesent scelerisque, lectus vitae rhoncus egestas, lorem neque mattis purus, eget gravida sapien metus sed ex. Phasellus dictum augue porta, maximus sapien vel, pharetra elit. Pellentesque lacinia diam quam, vitae pulvinar lacus egestas sit amet. Etiam ultricies velit ac ex volutpat, sed ultrices enim rutrum.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ac sem et libero dictum pulvinar. Donec mattis neque in cursus tincidunt. Vivamus dictum laoreet diam molestie imperdiet. Proin quis libero maximus, ultrices dolor non, pellentesque lectus. Aenean ut luctus erat. Morbi ornare ullamcorper aliquet.`

novoParagrafo = paragrafo.split(' ');

console.log(novoParagrafo.length);

let contadorEt = 0
for (i=0; i< novoParagrafo.length; i++) {
    if (novoParagrafo[i] === 'et') {
        contadorEt+=1

    }
}
console.log(contadorEt);

// Bonus 2
let phraseToCheck = 'Race car'
let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`\s{|}~]/g;

  let phraseChecked = phraseToCheck.replace(regex, '').toLowerCase();
  console.log(phraseChecked);

let phraseCheckedReversed =''
for (let i = phraseChecked.length-1; i>=0 ; i-- ){
  phraseCheckedReversed = phraseCheckedReversed+ phraseChecked[i] ;
}
if (phraseCheckedReversed === phraseChecked){ 
    console.log('é um palindrome');

}else console.log('Its not a palindrome');

