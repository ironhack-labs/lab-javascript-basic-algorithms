// Iteration 1: Names and Input
//

const hacker1 = "Olga";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Jessica";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops

// 3.1

let result = "";

for (let i = 0; i < hacker1.length; i++){
    if (i === hacker1.length-1){
        result += hacker1[i].toUpperCase();
    } 
    else {
        result += hacker1[i].toUpperCase() + " ";
    }
}
console.log(result)
// console.log(result.length)

// 3.2

let hacker2Reverse = "";

for (let j = hacker2.length-1; j >= 0; j--) {
    hacker2Reverse += hacker2[j];
}
console.log(hacker2Reverse);



// 3.3
/*Depending on the lexicographic order of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`*/

/* in th first variant there is a mistake, but I don't know where*/

/*const hackerArr = [hacker1, hacker2];

for (let k = 0; k < hackerArr.length, k++) {
    if (hackerArr[0] < hackerArr[1]){
        console.log("The driver's name goes first");
    } else if (hackerArr[0] > hackerArr[1]){
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}*/

// alternative

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

/* Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears. */


const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Praesent ultrices neque nulla, ac suscipit tortor euismod vitae. Fusce lorem nunc, 
semper at quam ac, accumsan maximus mauris. Donec tortor magna, convallis sed 
vestibulum non, commodo fermentum nibh. Phasellus eros risus, consequat ac arcu vitae, 
placerat pulvinar libero. Sed viverra metus eu nisi consequat porttitor. Curabitur 
varius viverra elementum. Cras eget mauris sit amet ante vulputate dapibus. Ut 
lectus mauris, accumsan sit amet varius vel, aliquet commodo tortor. Sed ut condimentum 
justo. Quisque et dolor a nisi facilisis ultrices. Sed in elementum enim, ut mollis ipsum. 
Sed nisl ligula, rutrum vitae iaculis sed, tincidunt pharetra lectus. Suspendisse nulla 
dui, venenatis non faucibus sit amet, venenatis nec neque. Quisque a nunc a enim laoreet 
tempus. Curabitur varius convallis odio at tempus. Phasellus vel metus vel tellus condimentum laoreet. Fusce non turpis laoreet, efficitur libero a, blandit ligula. Quisque fringilla, quam eget facilisis sodales, libero sapien mollis nulla, eu aliquet lacus erat consequat arcu. Pellentesque nec magna sapien. Sed quis nisl ultrices, pretium neque porta, ullamcorper enim. Nullam at aliquet lectus. Nullam scelerisque ipsum vel aliquam bibendum. Nunc eu velit ligula. Nam ac mi lectus. In fringilla urna at enim accumsan mattis. Nulla auctor nisi quis semper auctor. Nunc ut ligula ac nulla rhoncus consequat. Nulla eget blandit sem, ut congue purus. Suspendisse tempor tempus posuere. Curabitur molestie, tortor vitae suscipit ultricies, dui ante egestas urna, ac efficitur ligula sem eget libero. Sed ullamcorper nisl ac enim fermentum luctus. Proin a arcu sed felis semper venenatis. Nullam gravida, nunc vel feugiat maximus, diam libero iaculis turpis, non venenatis leo tellus ut odio. Nullam sodales congue dolor a consequat. Aliquam sodales tortor vitae consectetur imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ultrices vel lorem id faucibus. Curabitur feugiat urna vel hendrerit vestibulum. Aliquam accumsan mattis diam eu porta. Aliquam pellentesque lectus nunc, nec rutrum mauris tincidunt quis. Nam fermentum, risus eget pulvinar eleifend, mauris purus porttitor mauris, id euismod quam enim non metus. Pellentesque ultrices mauris id turpis elementum, vel mollis est sollicitudin."


const words = loremIpsumText.split();
console.log(words)
