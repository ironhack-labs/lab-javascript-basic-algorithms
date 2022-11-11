// Iteration 1: Names and Input
console.log("\n------ Iteration 1 --------");
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY" 
let hacker1 = "Hamilton"
let hacker2 = "Nemo"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
console.log("\n------ Iteration 2 --------");
// 2.1.Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters.or
// - It seems that the navigator has the longest name, it has XX characters.or
// - Wow, you both have equally long names, XX characters!. 
let H1Length = hacker1.length;
let H2Length = hacker2.length;

if (H1Length > H2Length) {
    console.log(`The driver has the longest name, it has a ${H1Length} characters`);
} else if (H2Length > H1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${H2Length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${H1Length} characters!`)
}
// Iteration 3: Loops
console.log("\n------ Iteration 3 --------");
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
/* -------------Using Loop For ---------------- */
let stringCap = hacker1.split("").join(" ").toUpperCase();
console.log(stringCap);
/* -------------Using For Loop inside a Function---------------- */
function stringToCap(str) {
    let newStr = "";
    for (const i of str) {
        newStr += i.toUpperCase() + " ";
    }
    return newStr;
}
console.log(stringToCap(hacker1))
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseDriver = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseDriver += hacker1[i];
}
console.log(reverseDriver);

let reverseNavigator = hacker2.split("").reverse().join("");
console.log(reverseNavigator);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
//     - Yo, the navigator goes first definitely.
// - What ? !You both have the same name ?
let words = (`${hacker1} ${hacker2}`).toLowerCase().split(" ");
console.log(words.sort());
if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
    console.log(`The driver's name goes first.`)
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1:
console.log("\n------ BONUS 1 --------");
// Go to lorem ipsum generator and:
// Generate 3 paragraphs.Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
let loremTxt = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam pellentesque eget sapien ut commodo.Sed luctus aliquet rutrum.Etiam sed tristique odio.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Cras ac erat bibendum, pulvinar felis vitae, semper lectus.Aliquam eget nibh augue.Mauris interdum, velit et vestibulum tristique, lorem ante varius magna, nec hendrerit lorem sapien quis felis.Vestibulum molestie, massa sit amet consectetur volutpat, turpis arcu accumsan libero, malesuada interdum mauris erat at urna.Cras bibendum tempor ipsum, sed interdum lacus rhoncus sed.

Suspendisse a lacus dolor.Nam vulputate ante leo, quis volutpat arcu dictum quis.Curabitur molestie varius augue, in auctor libero semper eget.Aenean luctus, tellus a faucibus varius, mi est dapibus augue, vitae vehicula mauris lorem eu magna.Quisque non maximus nunc.Vivamus ac mollis sem.Morbi molestie, tortor a luctus gravida, magna libero lobortis dui, in laoreet enim nibh et sapien.Donec egestas eget lorem ac scelerisque.Ut sagittis sodales metus non dictum.Nullam consectetur nulla at pharetra efficitur.Morbi efficitur orci non est porttitor, convallis commodo ligula tempus.In pellentesque nisi eu turpis porta, et bibendum nulla sollicitudin.Morbi consectetur, risus eget volutpat porttitor, sapien turpis facilisis lectus, quis consectetur eros augue at eros.Integer suscipit pharetra bibendum.

Curabitur semper eleifend dolor vitae mattis.Vestibulum justo magna, ullamcorper vel erat in, efficitur pellentesque dui.Nullam tempus mi nisi, consequat tempus nunc consectetur quis.Sed ex neque, tincidunt non porttitor sit amet, hendrerit eget sem.Etiam dignissim laoreet convallis.Donec mattis efficitur lacinia.Nam finibus nisl elementum odio tempus laoreet.Donec diam enim, malesuada tincidunt aliquet non, auctor quis leo.Nulla facilisi.Aenean varius nunc eu dictum ultrices.In aliquet tempus dui, at porttitor orci.In nisl elit, placerat vel enim ut, ornare lobortis felis.Etiam sed pellentesque sem.Suspendisse porta quam at quam feugiat egestas.`;
//307 words

let separateByDots = loremTxt.split(/[\.\,\s]+/).filter(element => element !== "");
console.log(`The lorem String has ${separateByDots.length} words`);
//  replace puntos y comas por espacios
// eliminar espacios extras 
//hacer split por espacio


let joinSeparateByDots = separateByDots.join(" ");
let count = 1;
let wordLatin = 0;
for (const i of separateByDots) {
    if (i === "et") {
        wordLatin++
    }
    // console.log(`${count}.- ${i} `);
    count++;
}
console.log(`The word "et" appears ${wordLatin} times`);

// Bonus 2:
console.log("\n------ BONUS 2 --------");
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon". 
// program to check if the string is palindrome or not