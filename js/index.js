// Iteration 1: Names and Input
let hacker1 = "Yabelais";
console.log("The driver's name is: " + hacker1);

let hacker2 = "Mariona";
console.log("The navigator's name is: " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters." )

} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");

} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");

}

// Iteration 3: Loops


//1.

let hacker1Capitals = '';

for (let i=0; i < hacker1.length ; i++) {
    hacker1Capitals += hacker1.charAt(i);
    hacker1Capitals += ' ';
}

hacker1Capitals = hacker1Capitals.toUpperCase();
console.log(hacker1Capitals);

//2.

let hacker2Reverse = '';

for (let i=hacker2.length; i + 1 > 0; i--) {
    hacker2Reverse += hacker2.charAt(i);

}

console.log(hacker2Reverse);

//3.

hacker1 = 'Josep';
hacker2 = 'Google';

let longestNameLength = 0;
if(hacker1.length > hacker2.length){
    longestNameLength = hacker1.length;
} else {
    longestNameLength = hacker2.length;
}

for (i=0; i < longestNameLength; i++){
    if (hacker1 === hacker2){
        console.log("What? You both have the same name?");
        break;

    } else if (hacker1.charAt(i) < hacker2.charAt(i)){
        console.log("The driver's name " + hacker1 + " goes first.");
        break;

    } else if (hacker2.charAt(i) < hacker1.charAt(i)){
        console.log("Yo, the navigator " + hacker2 + " goes first definitely.");
        break;

    } else {
        continue;
    }
}


// Bonus 1

// 1.

let paragraph1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis neque nec augue ullamcorper hendrerit quis sit amet augue. 
Morbi ac finibus purus. Pellentesque non porta massa. Nullam diam nulla, suscipit eu rutrum non, pellentesque at purus. 
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Nulla sagittis eros nec purus efficitur, in placerat felis cursus. Donec vitae feugiat dui. 
Mauris vitae blandit enim. Integer eget metus leo. Proin maximus viverra nulla, eget vehicula diam aliquet ut.`;
let paragraph2 = `Quisque sit amet ex vitae sem efficitur dapibus sed non eros. In fringilla accumsan turpis vel vehicula. 
Aliquam iaculis nisi urna, vitae aliquet massa consectetur non. Praesent facilisis pretium dui, a suscipit enim iaculis eget. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
Sed sit amet bibendum massa. Ut a finibus enim. Nulla vehicula neque eu ligula molestie, vitae eleifend dui pulvinar. 
Nullam quis scelerisque est. Aliquam a quam sem. Fusce eleifend massa orci, ac venenatis augue tempor in. 
Maecenas neque ligula, bibendum et risus a, egestas ullamcorper dui.`;
let paragraph3 = `Ut lacus dolor, egestas eu ex volutpat, faucibus rutrum urna. 
Proin in tristique nulla. In malesuada interdum risus, in mattis eros fringilla nec. 
Donec vitae ligula neque. Aenean sit amet metus ac urna aliquam dictum volutpat ac est. 
Praesent blandit faucibus condimentum. Proin suscipit ipsum mauris, et congue felis euismod non. 
Suspendisse maximus sit amet nulla sit amet imperdiet. Maecenas suscipit dignissim consequat.`;
let text = paragraph1 + paragraph2 + paragraph3;

// 2.

let counterWord = 0;


for (i=0; i < text.length; i++){
    if ((/[a-zA-Z]/).test(text[i])){
        while((/[a-zA-Z]/).test(text[i]) && i < text.length){
            i++;
        }
        counterWord++;
    } else {
        i++;
    }
}

console.log(`Number of words in text are: ${counterWord}`);

// 3.

let etWord = " et ";
let counterEtWord = 0;
// let textEt = "et et et etetmon";


for (i=0; i < text.length; i++){
    if(text[i] === " "){
        let tempEtWord = '';
        for(j=0; text[(i+j)] === etWord[j] && j < etWord.length + 1; j++){
            tempEtWord += text[i+j];
        }
        if(tempEtWord === etWord){
        counterEtWord++;
        }
    } 
        
    
}

console.log("Number of et in text: " + counterEtWord);