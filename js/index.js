console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Ramón';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nicolas';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.localeCompare(hacker2) === 1){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length}!`);
}
// Iteration 3: Loops
// Driver 
let driverCap = hacker1.split(''); 
driverCap = driverCap.join(" ");
console.log(driverCap.toUpperCase());
//Navigator 
let navigatorRev = hacker2.split(''); 
navigatorRev = navigatorRev.reverse();
console.log(navigatorRev.join(""));

//By lexicographic order

let names = [hacker1, hacker2];
// comparamos y ordenamos en el mismo array
let order = names.sort(function(a, b) {
    return a.localeCompare(b);
})

console.log(order[0]);
console.log(order);
if (order[0] === hacker1) {
    console.log(`The driver's name goes first.`);
} else if (order[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
}else{
    console.log(`What!? You both have the same name?`);
}
        
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac cursus lorem. Nulla fringilla dapibus lorem, ac porta diam dignissim eget. Maecenas fermentum elit arcu, ac tempor ante fermentum eget. Duis sit amet arcu nisi. Maecenas euismod pellentesque neque, quis tristique augue eleifend sed.  et Aliquam auctor sollicitudin turpis, at consequat ligula iaculis nec. Cras varius sem eu massa fermentum laoreet eu id neque.';
let paragraph1 = 'Duis malesuada, neque vel imperdiet tempor, et mi mi consectetur magna, blandit eleifend dui quam ornare lectus. Sed porttitor dolor est, at facilisis tellus luctus a. Nunc vehicula est odio, interdum pulvinar nunc accumsan sed. Proin lacinia congue diam, non bibendum lorem ullamcorper eget. Proin sit amet convallis orci. Vestibulum ac vehicula libero. Donec cursus eros vel velit hendrerit, eget tincidunt turpis pulvinar. Nunc sed nulla eu dolor tristique varius at pharetra sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
let paragraph2 = 'Integer iaculis, leo vel viverra euismod, et nibh augue ultricies augue, et mattis ex orci nec diam. Aliquam placerat orci vitae purus egestas, eget mattis orci bibendum. Nulla sit amet finibus purus, quis ultricies lectus. Aliquam lacinia rhoncus nibh eu suscipit. Vivamus ut massa et risus ullamcorper suscipit. Donec posuere orci vitae elementum convallis. Sed vel finibus lectus, a dictum dolor. Vivamus id tellus mauris.';

let parWords = paragraph.split(' ');
let parWdsLength = parWords.length;
let parWords1 = paragraph1.split(' ');
let parWords1LLength = parWords1.length;
let parWords2 = paragraph2.split(' ');
let parWords2LLength = parWords2.length;

function counterWords(parragraphs){
    let parWords = paragraph.split(' ');
    let parWdsLength = parWords.length;
    let parWords1 = paragraph1.split(' ');
    let parWords1LLength = parWords1.length;
    let parWords2 = paragraph2.split(' ');
    let parWords2LLength = parWords2.length;
    let totalWords = parWdsLength + parWords1.length + parWords2.length;
    return totalWords
}

let totalWords = counterWords(paragraph, paragraph1, paragraph2);
console.log(totalWords);
let counter = 0;
countEtInParagraph =(array) => {
    for (let i = 0; i < array.length; i++){
        if(array[i].includes("et")  || array[i].includes("et.") || array[i].includes("Et") || array[i].includes("Et.")){
            counter++;
        }
    }
    return counter
}

let totalEt = countEtInParagraph(parWords, parWords1, parWords2);
console.log(totalEt);
console.log(`The total number of et in text are: ${totalEt}`);

