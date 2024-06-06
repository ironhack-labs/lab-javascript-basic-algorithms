// Iteration 1: Names and Input
let hacker1 = "ADA";
let hacker2 = "Igor";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
//3.1
let spacedName = "";
for(let i = 0; i < hacker1.length; i++){
    spacedName += hacker1[i].toUpperCase();
    if (i !== hacker1.length -1){
    spacedName += " ";
    }
}
console.log(spacedName);
//3.2 
reversedName = ""; 
for (let i = hacker2.length - 1; i >= 0; i--){
    reversedName += hacker2[i];

}
console.log(reversedName);

//3.3

if (hacker1 > hacker2){
    console.log("The driver's name goes first.");
}
else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first, definitely.");
}
    else {
        console.log("What?! You both have the same name?");
    }

    //bonus

    let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    let wordsCount = longText.split(/\s+/).length;

    let etCount = (longText.match(/\b(et)\b/g)||[]).length;

    console.log(`Number of words in the text: ${wordsCount}`);
    console.log(`Number of times the Latin word "et" appears: ${etCount}`);

