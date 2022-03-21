// Iteration 1: Names and Input
// 
let hacker1 = "Alexander"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Marcus"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the the longest name, it has " + hacker1.length)
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else if (hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names " + hacker1.length + " characters!")
}


// Iteration 3: Loops

hacker1 = hacker1.toUpperCase();

console.log(hacker1.split("").join(" "));

let reverse = [...hacker2].reverse().join(""); // the three dots?
console.log(reverse);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2 > 0)) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}
else {
    console.log("please put your name")
}


//BONUS 1
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin fringilla lorem eget ultrices. Nulla eu cursus lacus. Aliquam interdum egestas nulla, et mattis diam consectetur eget. Fusce pharetra nulla posuere congue lobortis. Curabitur ultricies mauris sed sodales efficitur. Aliquam euismod sodales velit in consequat. Nam at lacus id neque porta blandit id id lacus. Curabitur ut sollicitudin augue, eu dapibus tellus. Proin justo tortor, semper vitae interdum sit amet, ultricies vitae nisi. Fusce viverra neque sed pretium eleifend. Phasellus nec ipsum nec nisl iaculis scelerisque. Nam ultricies libero non elementum lacinia. Cras accumsan turpis eget libero fermentum pharetra. Duis quis neque a ipsum bibendum mollis at non neque. Fusce suscipit massa massa, in viverra lacus viverra quis. Phasellus viverra urna ut enim maximus, id ornare turpis tempus. Mauris varius, orci eget porta tempus, lorem orci scelerisque sem, sed accumsan nibh nibh eget magna. Etiam felis nisl, iaculis sed odio ut, laoreet vehicula magna. Aenean sit amet tincidunt erat, sed tristique metus. Duis pharetra erat nec placerat pharetra. Aenean convallis hendrerit lectus, at suscipit elit vehicula vel. Nulla facilisi. Praesent at interdum velit. Mauris justo lectus, aliquet non faucibus eget, cursus id massa. Morbi nec nisl quis ex consectetur suscipit. Nullam condimentum nibh vitae tellus ultricies, et interdum nisi gravida. Vestibulum fermentum lectus vitae orci egestas, at tincidunt neque tempus. Nulla facilisi. Suspendisse at lorem nec ligula porttitor auctor. Praesent a porta dui. Donec sollicitudin vulputate magna, nec ullamcorper nisl finibus et. Fusce aliquam elit egestas, fringilla metus ac, dapibus massa. Etiam augue est, laoreet non convallis nec, gravida volutpat ante. Vestibulum est risus, vehicula nec libero a, pharetra hendrerit velit. Morbi lectus massa, euismod vel elementum et, pharetra elementum eros. Quisque eu risus sit amet nunc ultrices efficitur. Aliquam feugiat, mauris ut eleifend luctus, ipsum erat consequat mi, ac aliquet urna metus vel velit."

console.log(paragraph.split(" ").length);

function etCounter() {
    let newArr = [];
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] + paragraph[i + 1] + paragraph[i + 2] === " et") {
            newArr.push((paragraph[i] + paragraph[i + 1]))
        }
    }
    return newArr.length;
}

console.log(etCounter(paragraph))

//BONUS 2

let string = "miami"

if (string === [...string].reverse().join("")) {
    console.log("this is a palindrome")
}
else {
    console.log("this is not a palindrome")
}