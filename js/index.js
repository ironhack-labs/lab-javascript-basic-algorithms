// Iteration 1: Names and Input
//console.log("I'm ready!");
let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}`)

let hacker2 =  "João and Chloé";
console.log(`The navigator's name are ${hacker2}`)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if ( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops
//Option 1:
let nameWithSpace = "";
for (letters in hacker1){
   // console.log(hacker1[letters].toUpperCase());
   // console.log(” “);
   nameWithSpace += hacker1[letters].toUpperCase();
   nameWithSpace += " ";
}
console.log(nameWithSpace);
let reversedNavigator ="";
for (i= hacker2.length-1; i >= 0; i--){
    reversedNavigator += hacker2[i];
    reversedNavigator+= " ";
}
console.log(reversedNavigator);
let phraseToPrint = "";
let lexicographicOrderResult = hacker1.localeCompare(hacker2)
switch(lexicographicOrderResult){
    case 1:
        phraseToPrint = `Yo, the navigator goes first definitely.`;
        break;
    case -1:
        phraseToPrint = `The driver's name goes first.`
        break;
    case 0:
        phraseToPrint = `What?! You both have the same name?`
        break;
}
console.log(phraseToPrint);



// Iteration 3: Loops
//Option 2:
let withSpace ="";
for (let i = 0; i<hacker1.length; i++){
    withSpace += hacker1[i].toUpperCase();
    withSpace += " ";
};
console.log(withSpace);
let navigator =""
for(let i= hacker2.length - 1; i >= 0; i--){
    navigator += hacker2[i]
};
console.log(navigator);
let result= hacker1.localeCompare(hacker2)
    if(result==1){
        console.log(`Yo, the navigator goes first definitely.`)
} else if(result==0){
    console.log(`What?! You both have the same name?`)
} else if(result==-1){
    console.log(`The driver's name goes first.`)
};




//Bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat tellus ligula. Praesent pellentesque urna ipsum, a venenatis ligula ultricies vitae. Fusce nisi risus, dignissim a pulvinar non, consectetur non augue. Nullam suscipit maximus vestibulum. Fusce pretium felis luctus ipsum semper, eu tincidunt sapien venenatis. Praesent et semper eros. Sed eu nisi sagittis, congue ex a, interdum augue. Integer suscipit arcu vel eleifend venenatis. Morbi hendrerit arcu velit, vitae commodo est molestie vulputate. Morbi ultricies tempor nibh. Cras commodo nunc vel porta sagittis. Vivamus orci metus, posuere in interdum ac, tristique sit amet eros. Proin nisl dolor, bibendum molestie dolor vel, dapibus pellentesque nulla. Nunc fringilla sem dictum lacinia porttitor. Nam eu efficitur augue, non mattis dolor. Nunc euismod elementum sagittis. Aenean vel est non nisi ornare ultrices. Vivamus eu scelerisque magna. Integer eget ante nec ante viverra pellentesque sit amet at lacus. Pellentesque dapibus sed ipsum eu tempor. In mollis erat et tincidunt aliquet. Ut neque nisi, varius sit amet velit vitae, posuere facilisis orci. Ut ultrices turpis accumsan nunc varius varius. Cras sed ullamcorper libero, sed facilisis nunc. Sed at vulputate nibh. Curabitur nec facilisis eros. Donec id aliquet lorem. Morbi non fringilla enim, id hendrerit sapien. Donec tempus id ante tristique luctus. Ut euismod nisi eros."
let wordCounter = 1;
for (let i=0; i < text.length; i++){
    if (text[i] === " "){
        wordCounter += 1;
    }
}
console.log(wordCounter)

let etCounter = 0;
for (let i=0; i<text.length; i++){
    if (text[i] === " " && text[i+1] === "e" && text[i+2] === "t" && text[i+3] === " "){
        etCounter += 1;
    }
}
console.log(etCounter)



//Bonus 2 NOT WORKING
let phraseToCheck = "Amor Roma";
let phrase = phraseToCheck.toLowerCase();
let array1 = [];
let array2 = [];

for (let i=0; i<phrase.length; i++){
    array1.push(phrase[i])
}
for (let j=phrase.length-1; j >= 0; j--){
    array2.push(phrase[j])
}

if (Arrays.equals(array1, array2)){
    console.log(`${phraseToCheck} is a palindrome!`)
}else{
    console.log(`${phraseToCheck} is not a palindrome!`)
}