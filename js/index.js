// Iteration 1: Names and Input

const hacker1 = 'Marcos'
console.log("The driver's name is " + hacker1)

const hacker2 = 'Matias'
console.log("The navigator's name is " + hacker2)
// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else { (hacker1.length === hacker2.length)
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1

let driverUppercase = ""
for( let i = 0; i < hacker1.length; i++){
    driverUppercase+= hacker1[i].toUpperCase() + " ";
}
console.log(driverUppercase);

// 3.2

let hackerReversed = " ";

for( let i = hacker2.length - 1; i >= 0; i--){
     hackerReversed += hacker2[i];
  console.log(hackerReversed);
}

// 3.3

if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus!

let  paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id pellentesque nisl. Vestibulum lacinia nisl sed arcu vestibulum porta. Fusce sed pharetra ligula. Curabitur ut ex feugiat, viverra quam ut, eleifend mi. Sed eget venenatis orci. Proin at massa et felis tristique blandit et in sem. Duis euismod placerat turpis, ac porta mi scelerisque eu. Nullam accumsan ut dui scelerisque auctor. Sed vel ornare eros.

Aliquam eget odio eros. Nam libero massa, porta in dictum sed, elementum et arcu. Nulla tempus turpis nec eleifend gravida. Maecenas mollis dolor eget orci bibendum, ut auctor ex aliquam. Nullam ullamcorper id lorem vitae posuere. Ut ultricies mauris sit amet ultrices tincidunt. Nam sed lectus arcu. Proin facilisis fermentum gravida. Duis sed libero eu tellus laoreet suscipit. Quisque eu leo sed metus cursus pellentesque eu quis magna. Mauris urna nunc, eleifend eget condimentum vitae, tristique ut mi. Sed aliquet malesuada sollicitudin. Duis eros tortor, pretium vel nisi fringilla, congue suscipit nunc.

Nullam quis tortor venenatis, semper mi sit amet, tincidunt sem. Etiam vel erat nisi. Vestibulum quis purus leo. Donec tellus velit, tempus eu ligula et, feugiat lacinia ante. Phasellus non lectus semper, commodo tortor sit amet, auctor dolor. Phasellus rhoncus consectetur ligula vitae semper. Phasellus mi ex, vulputate non commodo at, bibendum nec velit. Curabitur purus orci, molestie in aliquet sit amet, dignissim non eros. Mauris egestas faucibus sem ut accumsan. Suspendisse potenti. Phasellus eu placerat metus. Maecenas pulvinar sodales tempor. Quisque rhoncus justo erat, vel aliquet metus dapibus non. Nullam sed rhoncus risus. In elit eros, consequat sit amet mi consectetur, fringilla finibus tortor.`;

let paragraphText =  paragraph.split(' ');
console.log(paragraphText.length);


let count = 0;

for (let i = 0; i < paragraph.length; i++) {
    let checkWord = paragraph[i] + paragraph [i + 1];

    if ( checkWord === "et") {
        count++
    }
}
console.log("the amount of times the word et appears is "+ count)
