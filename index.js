// Iteration 1: Names and Input
const hacker1 = "Pedro";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Juan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length && hacker2.length} characters!`)
}

// Iteration 3: Loops
let hacker1Capitalized = "";

for (let i = 0; i < hacker1.length; i++) {
    hacker1Capitalized += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Capitalized);

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}


//BONUS 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pulvinar lorem in interdum. Duis vitae semper elit, a elementum felis. Phasellus at varius felis. Donec ultrices in risus sit amet molestie. Etiam eleifend neque tellus, eget viverra velit eleifend sit amet. Sed urna nisl, sagittis eu leo non, semper placerat risus. Quisque ut consectetur urna. Sed non quam nulla. Morbi tempus gravida nunc, vitae scelerisque justo vulputate sed. Vivamus sit amet fermentum ex, vel molestie massa. Pellentesque pretium in mi id fringilla. Suspendisse finibus, est a cursus elementum, quam odio feugiat mi, eu consequat nibh massa eu diam. Donec sed ullamcorper lorem. Mauris venenatis feugiat volutpat. Praesent quis risus turpis. Integer volutpat, nisi a ultricies vehicula, dui felis tempus arcu, vitae viverra mauris felis sit amet risus. Nam fringilla purus a libero placerat sagittis. In sit amet blandit odio, in tempor leo. Nunc nisl tellus, suscipit vitae vehicula et, tincidunt nec justo. Aenean molestie quam vel lacus tempus posuere. Vestibulum porttitor ligula ac neque lacinia vulputate. Curabitur sit amet est eu leo laoreet mollis. In aliquet risus eget enim sagittis, vitae suscipit risus convallis. Nulla et mauris elit. Nunc maximus commodo sodales. Donec pellentesque at felis eget faucibus. Curabitur semper, diam in malesuada egestas, urna velit ultrices ipsum, nec lobortis eros orci id massa. Praesent egestas placerat sem quis placerat. Sed sed nisl varius, aliquam tellus sit amet, suscipit eros. Nam consequat, massa et maximus varius, tellus velit aliquet magna, in sagittis velit nulla id urna. Ut at tortor sed lacus egestas efficitur. Nullam at velit suscipit, iaculis arcu eu, facilisis dolor. Sed non nibh dictum nunc scelerisque varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris dapibus ut arcu eget convallis. Aenean blandit enim ante, eu luctus metus faucibus vitae. In hac habitasse platea dictumst. Proin at tortor nibh. Aenean at risus vel est convallis volutpat. Mauris vitae fringilla lacus. Praesent consectetur rutrum sem, a ultricies dui congue sed. Duis vitae ornare nisl. Mauris posuere elementum blandit. Etiam posuere luctus massa, et congue sapien posuere eget. Nulla facilisi. Integer pellentesque turpis vel nulla vehicula viverra."

let countWords = longText.split(' ' || ".").length;

console.log(countWords)

//BONUS 2
let phraseToCheck = `Was it a car or a cat I saw?`;
let phraseModified = ""
let fraseReversed = "";

phraseModified += phraseToCheck.toLowerCase().replaceAll("[^a-z-0-9]", "")

for (let j = phraseToCheck.length - 1; j >= 0; j--) {
    fraseReversed += phraseToCheck[j].toLowerCase()
}

console.log(fraseReversed)

if (phraseToCheck === fraseReversed) {
    console.log("it's a Palindrome")
} else {
    console.log("It is not a palindrome")
}


