// Iteration 1: Names and Input
let hacker1 = 'GoogleDriver'
console.log("The driver's name is", hacker1)
let hacker2 = 'Chrome'
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length+" characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
} else {
    console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")
}

// Iteration 3: Loops
let hacker1Up = hacker1.toUpperCase()
let hacker1SpaceName = ''
for(let i = 0; i < hacker1Up.length; i++){
    hacker1SpaceName += hacker1Up[i] + ' '
}
console.log(hacker1SpaceName)

let hacker1Reverse = ''
for (var i = hacker1.length - 1; i >= 0; i--){
    hacker1Reverse += hacker1[i]
}
console.log(hacker1Reverse)

if (hacker1 < hacker2){
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first, definitely.");
} else{
    console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis nec nibh ut ultrices. Proin scelerisque ipsum a rhoncus mattis. Vestibulum lorem metus, pretium ut nulla in, auctor molestie nulla. Sed efficitur condimentum risus, sit amet consequat nulla suscipit sed. Aliquam erat volutpat. Praesent mollis pretium arcu id lobortis. Vivamus egestas velit id sapien rutrum, eget lobortis justo maximus. Curabitur nunc augue, pharetra vel gravida at, gravida eu est. In commodo ipsum ultrices turpis dapibus viverra. Nunc maximus ligula at velit iaculis, eget condimentum dui semper. Proin congue leo in neque porta ultricies. Nunc semper porta tristique. Nulla sed fermentum purus. Morbi eget suscipit lorem, ac aliquam magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque luctus sem nec dignissim fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer pharetra elementum magna, nec tempor enim varius ac. Sed in quam luctus, lobortis turpis id, tincidunt mauris. Suspendisse mi risus, pretium vel arcu quis, accumsan dictum lectus. Quisque facilisis ut nunc consectetur pellentesque. Vivamus molestie nisl vel enim consequat, et sodales felis vehicula. Proin nisi mi, tempus at leo sed, ullamcorper feugiat leo. Fusce feugiat, mi sed rutrum viverra, ante ante finibus ante, eget vehicula elit nibh eget dui. Pellentesque sit amet interdum augue, vel auctor eros. Mauris et interdum augue, quis interdum ex. In quis urna finibus, commodo leo sit amet, venenatis sem. Aenean non dolor nec dolor semper aliquet bibendum sit amet erat. Nulla vulputate justo vitae magna accumsan efficitur. Curabitur sapien dui, mattis in gravida et, maximus at ipsum. Mauris tincidunt pellentesque venenatis.'
let numWords = longText.split(/\s+/).length
let numEt = longText.split(' et ').longText - 1

// Bonus 2
let phraseToCheck = "¿Fue un coche o un gato lo que vi?"
let onlyString = phraseToCheck.replace(/[^A-Z0-9]/ig, "").toLowerCase()
let palindrome = true;
for (let i = 0; i < onlyString.length / 2; i++) {
    if (onlyString[i] !== onlyString[onlyString.length - 1 - i]) {
        palindrome = false;
        break;
    }
}
