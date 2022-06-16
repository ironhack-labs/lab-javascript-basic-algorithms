// Iteration 1: Names and Input
const hacker1 = "Jack";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Tobias";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
    else if (hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
// Iteration 3: Loops
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
    driver += hacker1[i].toUpperCase();
    driver += " "
    for (let j = 0; j < 1; j++) {
        driver += " "
    }
}
console.log(driver.slice(0, driver.length -2));
driver = ""
for (i = hacker1.length -1; i >= 0; i--) { 
    driver += hacker1[i];
}
console.log(driver);
let lexCompareNames = hacker1.localeCompare(hacker2);
console.log(lexCompareNames)
if (lexCompareNames === -1) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (lexCompareNames === 1) {
    console.log("The driver's name goes first.");
}
else if (lexCompareNames === 0) {
    console.log("What?! You both have the same name?");
}

/// bonus1

let para1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let para2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now"
let para3 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, fro"



let count = 0;
for (i = 0 ; i < para1.length; i++) {
    if (para1[i] === " ") {
        count++
    }
}
console.log(count)

let sumEt = 0;
for (i = 0 ; i < para1.length; i++) {
    if (para1[i] + para1[i+1] === "et") {
        sumEt++
    }

}
console.log(sumEt)

/// bonus2

let phrase = "step on no pets"
function phraseChecker (phrase) {
    let noSpaceForward = "";
    let noSpaceBackward = "";
    for (i = 0; i < phrase.length; i++) {
        if (phrase[i]=== " " || phrase[i]==="," || phrase[i]==="!") {      
        }   
        else {
            noSpaceForward += phrase[i];
        } 
    }
            noSpaceForward.toLowerCase()
        for ( i = noSpaceForward.length -1; i >= 0; i-- ) {
            noSpaceBackward += noSpaceForward[i];
    }
        if (noSpaceBackward.toLowerCase() === noSpaceForward.toLowerCase()) {
            return true
    }
        else {
            return false
        }
    }
    console.log(phraseChecker (phrase))
