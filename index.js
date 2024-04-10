// Iteration 1: Names and Input
const hacker1 = "Alexandre";
console.log( "The driver's name is " + hacker1);
const hacker2 = "David";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
let longerHacker
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let upperCaseName = ""
for (i = 0; i < hacker1.length; i++){
    upperCaseName = upperCaseName + hacker1[i].toUpperCase() + " "   
}
console.log(upperCaseName.substring(0, upperCaseName.length -1))

let reverseName = ""
for (i = hacker2.length -1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i] 
}
console.log(reverseName)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
}else {
    console.log("What?! You both have the same name?")
}

/* BONUS TIME 1*/

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in elementum ipsum. Donec eu consectetur arcu. Morbi non libero ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nulla dapibus, hendrerit lacus non, fermentum arcu. Mauris a enim libero. Proin vulputate rhoncus sapien quis hendrerit. Cras sed justo efficitur purus vestibulum finibus ac vel odio. Mauris eu molestie odio. Morbi vestibulum varius quam non finibus. Pellentesque blandit convallis lorem, id lobortis velit venenatis vitae. Nam pharetra suscipit sollicitudin. Donec tellus arcu, ornare pharetra pulvinar et, volutpat vitae sem. Proin vel neque aliquam, fermentum ante ut, dictum nisl. Etiam imperdiet ipsum vel velit pharetra pellentesque.\nFusce malesuada iaculis erat, nec placerat tellus. Integer non est odio. Vivamus id dolor a orci feugiat lacinia. Integer tristique aliquet leo, vel lobortis tortor ullamcorper at. Pellentesque ut erat ullamcorper neque elementum lacinia. Ut porta euismod ante ut elementum. Duis lacinia lorem non lorem fringilla, ac tristique lorem consequat. Phasellus ac sollicitudin sem. Donec at mi a erat imperdiet dapibus. Phasellus auctor felis justo, ut varius eros congue ut. Suspendisse sodales, elit a ultrices ultricies, dolor dolor scelerisque metus, vitae porta tortor magna nec enim.\nDonec eu nibh vel tortor porttitor sagittis. Maecenas sed urna suscipit, luctus neque in, fermentum turpis. Sed nisi tellus, laoreet id venenatis a, placerat eget augue. Etiam bibendum laoreet nulla, in sollicitudin sapien auctor sed. In dapibus tellus ante, a pretium eros pellentesque id. Pellentesque sit amet aliquet ipsum. Donec vel tempor mauris, vel lobortis quam. Aenean ac accumsan orci, ac mollis ante. Suspendisse quam libero, mollis eu leo a, tempus blandit orci."
let separado = longText.split (" ")
console.log(separado.length)

console.log((longText.match(" et") || []).length)

/* BONUS TIME 2*/

const phraseToCheck = "A man, a plan, a canal, Panama!";
let parsedPhrase = "";
for (i = 0; i < phraseToCheck.length; i++) {
    if ((phraseToCheck[i] >= "a" && phraseToCheck[i] <= "z") || (phraseToCheck[i] >= "A" && phraseToCheck[i] <= "Z")) {
        parsedPhrase = parsedPhrase + phraseToCheck[i].toLowerCase();
    }
}


let isPalindrome = true
/*amanaplanacanalpanama*/
for (i = 0; i <= parsedPhrase.length / 2; i++) {
    if (!(parsedPhrase[i] === parsedPhrase[parsedPhrase.length - 1 - i])) {
        isPalindrome = false
        break
    }

}
if (isPalindrome) {
    console.log("it is Palindrome")
} else {
    console.log("its no Palindrome")
}


