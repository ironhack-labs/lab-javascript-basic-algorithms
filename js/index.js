console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "john";
const hacker2 = "johny";


console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e.

let driverName = "";

for (i = 0; i < hacker1.length; i++){
   driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName.trim());

//3.2 Print all the characters of the navigator's name, in reverse order.

let reverse = "";

for (i = hacker1.length - 1; i >= 0; i--){
    hacker1[i];
    reverse += hacker1[i];
 }

 console.log(reverse);

//3.3 Depending on the lexicographic order of the strings.
/*
// first try
    while (hacker1 < hacker2){
    console.log("The driver's name goes first.");
    break;
} 
    while(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely");
    break;
} 
    while (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
    break;
}
*/

// secund try

let longName = Math.max(hacker1.length, hacker2.length);
let output;

for (let i = 0; i < longName; i++){
    if (hacker1 === hacker2){

        output = "What?! You both have the same name?";

    } else if ( hacker1[i] < hacker2[i] || hacker1[i] === undefined){
        
        output = "The driver's name goes first.";

    } else if ( hacker1[i] > hacker2[i] || hacker2[i] === undefined){
        
        output = "Yo, the navigator goes first definitely.";

}   else if (hacker1 === hacker2){
    continue;
}
}
console.log(output);

// bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac erat eleifend, vehicula arcu eu, ullamcorper ex. Nam aliquam nisl ut justo auctor faucibus. Pellentesque sapien arcu, rutrum eget sagittis commodo, rhoncus eget enim. Aliquam nec vestibulum lectus, vel sollicitudin neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam condimentum ultrices est et consequat. Pellentesque dolor sem, auctor et mollis in, fermentum sed neque. In in sem nec erat vehicula lacinia. Pellentesque faucibus enim eget enim feugiat, a molestie felis accumsan.

Nulla ultrices sagittis mi in blandit. Cras scelerisque, magna id tincidunt vestibulum, justo leo molestie sem, non imperdiet lacus justo efficitur mauris. Donec et mauris nec libero dapibus aliquam vitae at mauris. Proin mattis efficitur lectus quis dictum. Curabitur a est posuere, dapibus nibh imperdiet, cursus justo. Nulla venenatis nunc non ante maximus iaculis. Nam tristique maximus felis ut semper. Aenean sagittis libero nibh, sit amet porttitor ante volutpat eu. Donec consectetur molestie venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed eros odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam facilisis diam vulputate justo porttitor congue. Suspendisse iaculis nulla id leo dapibus convallis.

Nunc in elementum risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ligula purus, id vehicula sem elementum nec. Mauris at gravida odio. Morbi tincidunt leo vitae odio gravida, sed semper diam accumsan. Nulla dictum eros nunc, id vehicula turpis cursus et. Ut euismod neque quis fermentum tincidunt. Maecenas efficitur tortor nec nibh hendrerit, ut convallis ipsum consequat. Vivamus hendrerit sem eu fermentum efficitur. Nam rhoncus neque tortor, vitae efficitur diam vehicula ac. Mauris tristique urna sed venenatis placerat.`;

const arr = paragraph.split(' ');
const filterWords = arr.filter(element => element !== '');

let totalWords;

for(x = 0; x < filterWords.length; x++){

}
totalWords = x;
console.log(`The number of words is : ${totalWords}.`);

const filterEtWord = arr.filter(caracter => caracter === 'et');

let totalEtWord = filterEtWord.length;

console.log(`The number of "et" is ${totalEtWord}`);