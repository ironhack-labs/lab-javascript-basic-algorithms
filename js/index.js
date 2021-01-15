// Iteration 1: Names and Input

const hacker1 = 'Joseph';
const hacker2 = 'Paul';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

//Hacker 1 em uppercase e separado

let string = hacker1[0];
for(var i = 1; i < hacker1.length; i++){
    string = string + " " + hacker1[i] ;
}
console.log(string.toUpperCase());


//Hacker 2 oposto

var rev = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    rev += hacker2[i];
}
console.log(rev);

//console.log(hacker2.split("").reverse().join(""));

//Compare order

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}

if(hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
}

if(hacker1.localeCompare(hacker2) === 0){
    console.log("What?! You both have the same name?")
}

//Bonus 1

let var1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada risus in ipsum blandit, in iaculis orci iaculis. Curabitur ex lacus, bibendum id efficitur quis, efficitur vel felis. Mauris tincidunt eget nulla semper rhoncus. Aliquam tristique risus nulla, et vehicula ipsum egestas sit amet. Donec dictum ut enim eget euismod. Nunc consequat quam quis tellus finibus, in tincidunt elit varius. Sed nibh erat, gravida in justo eget, lobortis posuere metus. Aliquam erat volutpat. Cras ac suscipit lacus, eget finibus sapien. Curabitur tempor purus et hendrerit bibendum. Integer nec ante elit. Pellentesque fermentum, leo non aliquam mollis, quam arcu elementum orci, aliquam facilisis magna ex vitae eros. Vestibulum et ligula purus. Etiam egestas vulputate sem nec efficitur. Vivamus vel dolor dignissim metus fermentum luctus. Quisque turpis neque, ornare et ipsum ut, pulvinar mollis urna. Phasellus ultrices varius faucibus. Sed at nisl ac est bibendum lacinia. Vivamus nibh orci, dictum et nunc vel, consequat ultricies odio. Phasellus viverra sapien nunc, ac auctor ex feugiat ut. Pellentesque viverra cursus elit et lacinia. Fusce porta rutrum elit suscipit aliquet. Aenean quis laoreet orci. Maecenas a mi mauris. Duis dui justo, egestas sit amet sagittis at, faucibus nec nisi. Donec ac vehicula sem. Praesent molestie interdum ultricies. Donec sodales gravida eros, quis fringilla purus venenatis vitae. Mauris feugiat, sapien at feugiat imperdiet, libero sapien cursus justo, quis hendrerit enim arcu non nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sollicitudin pulvinar orci, sed tristique mi feugiat eget. Etiam varius sit amet elit ac facilisis. Fusce hendrerit arcu sed turpis luctus, in bibendum risus venenatis. Proin sit amet lorem risus. Aliquam commodo ligula ex, a tincidunt ipsum sollicitudin sit amet. Vivamus nec erat ut lorem tincidunt fermentum. In nec nunc a dui luctus commodo. Donec in ex fermentum, volutpat nunc venenatis, porttitor justo. Vestibulum sit amet turpis lacus. Curabitur in dui nec urna interdum commodo. Vestibulum rutrum turpis accumsan consequat rutrum. Pellentesque dignissim lacus non lectus blandit convallis. Mauris egestas quis justo vel auctor. Donec vulputate purus ut rhoncus euismod. Integer pulvinar convallis sapien, vitae dictum orci rhoncus sollicitudin.`;

console.log(var1.length);

let count = 0;
let substring = "et";
for (let y = 0; y < var1.length; y++) {
    if (var1.charAt(y) == substring[0] || var1.charAt(y+1) == substring[1]){
        count++;
    }
}

console.log(count);

//bonus 2

let phraseToCheck = `Was it a car or a cat I saw?`;
let rev1 = "";
for (i = phraseToCheck.length - 1; i >= 0; i--) {
    rev1 += phraseToCheck[i];
}
let a = /\W/gi;
rev1.toLowerCase().replace(a, '') === phraseToCheck.toLowerCase().replace(a, '') ? console.log(true) : console.log(false);
