// Iteration 1: Names and Input
/*
1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = 'xxxx'
let hacker2 = 'yyyy'

console.log(`The driver's name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


//Iteration 3: Loops

/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
 */
let arrayName = [];
for (let i = 0; i < hacker1.length; i++) {
    let letter = hacker1[i];
    letter = letter.toUpperCase();
    //console.log(`${letter}`);
    arrayName.push(letter);
}
console.log(arrayName.join(' '));
/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let arrayName2 = [];
for (let a = hacker2.length; a >= 0; a--) {
    let letter2 = hacker2[a];
    //console.log(`${letter}`);
    arrayName2.push(letter2);
}
console.log(arrayName2.join(''))
    /*
    3.3 Depending on the lexicographic order of the strings, print:
    - The driver's name goes first.
    - Yo, the navigator goes first definitely.
    - What?! You both have the same name?*/

let array3 = []
hacker1 = hacker1.toUpperCase()
hacker2 = hacker2.toUpperCase();

array3.push(hacker1[0])
array3.push(hacker2[0])
array3.sort()
    //console.log(array3) To make sure of the order
if (array3[0] === array3[1]) {
    console.log(`What?! You both have the same name?`);
} else if (array3[0] === hacker1[0]) {
    console.log(`The driver's name goes first.`);
} else if (array3[0] === hacker2[0]) {
    console.log(`Yo, the navigator goes first definitely.`);
}



/*
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt felis magna, et vestibulum risus tincidunt eu. Aenean faucibus varius tortor, sit amet consectetur mi ultricies non. Sed vehicula sollicitudin scelerisque. Nulla iaculis mi nisl, eget condimentum sapien tincidunt id. Cras mattis ante non accumsan scelerisque. Nam hendrerit fringilla purus. Aenean convallis accumsan diam, sit amet lobortis risus convallis eu. Fusce purus erat, sollicitudin eget ante vel, eleifend porttitor orci. Curabitur a ex vestibulum, hendrerit augue blandit, viverra enim. Fusce at convallis magna. Suspendisse erat tellus, feugiat sit amet sodales sit amet, porta nec massa. Nulla rhoncus convallis dapibus. Nam aliquam tortor nec lorem eleifend fringilla. In eget nisl iaculis tortor efficitur pulvinar. Quisque blandit vestibulum odio non commodo. Nulla posuere euismod bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce convallis lacus sed tellus vehicula ultricies. Vestibulum ac interdum nulla, eu laoreet ligula. Ut eget enim lacinia, congue nulla ut, eleifend neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fermentum vitae erat at condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac tellus ac magna facilisis tincidunt a et neque. Aenean ex tortor, lobortis eu ligula at, semper vulputate tortor. In rhoncus rutrum finibus. Integer eu augue ante. Etiam eget tortor risus. Nulla at ante ut enim imperdiet venenatis. Maecenas porttitor urna vel nibh consectetur viverra. Quisque at mollis arcu, at bibendum ligula. Proin nibh felis, egestas ut porttitor sed, eleifend nec nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus lectus orci, laoreet a elit eget, molestie lacinia lacus. Nam orci purus, venenatis sit amet massa vitae, fermentum maximus nisi. Mauris porta mi risus, sit amet imperdiet nulla fermentum id.';

paragraph1 = paragraph1.toUpperCase();
let countwords1 = paragraph1.trim().split(" ");
console.log(`First paragraph has ${countwords1.length+1} words`);
let foundEt = 'et';
foundEt = foundEt.toUpperCase();
count1 = 0;

for (let o = 0; o < countwords1.length; o++) {
    if (countwords1[o] === foundEt) {
        count1++;
    }
};
console.log(`Found "et" word ${count1} times on this three paragraphs`);