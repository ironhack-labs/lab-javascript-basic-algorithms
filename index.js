// Iteration 1: Names and Input
let hacker1 = 'Jesús';
console.log(`The driver's name is ${hacker1}`);
let hacker2= 'Raffaella';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has XX characters")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters")
} else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops
let capitalized = '';
for (let i = 0; i < hacker1.length; i++) {
 let newLetter= hacker1[i].toLocaleUpperCase()
 capitalized = capitalized + newLetter + ' '
}
console.log(capitalized)

let reversed = '';
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
reversed = reversed + hacker2[i]
}
console.log(reversed)

let number = hacker1.localeCompare(hacker2);

if (number === -1) {
    console.log("The driver's name goes first.")
} else if (number === 0) {
    console.log("What?! You both have the same name?")
} else {
    console.log("Yo, the navigator goes first, definitely.")
}

//Bonus 1
let longText = "et. Lorem ipsum dolor sit consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt."

let textArray = longText.split(" ")
let counter = 0;
for (let i = 0; i < textArray.length; i++) {
    if ( textArray[i] === 'et' || textArray[i] === 'et,' || textArray[i] === 'et.') {
        counter ++
    }
}
console.log("Number of words:", textArray.length)
console.log("Word 'et': ", counter)

//Bonus 2
let word = "hannah"
let result= true;

for (let i = 0; i < word.length / 2; i++ ) {
    if (word[i] !== word[word.length - 1 - i] ) {
        result = false;
    } 
}

console.log("Is it a palindrome?", result)