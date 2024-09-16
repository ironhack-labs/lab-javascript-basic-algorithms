//Iteration 1: Names and Input
let hacker1 = "Agnes"
    console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Julia"
    console.log(`The navigator's name is ${hacker2}`)





// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }   
 else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

  }

// Iteration 3: Loops
let newHack = "";
for (let i = 0; i<hacker1.length; i++ ) {
         newHack += hacker1[i].toUpperCase() + " "
}
console.log(newHack);


let backwards = "";
for(let i= hacker2.length-1; i>=0; i--){
    backwards += hacker2[i] 
};
console.log(backwards);

let alNum = hacker1.localeCompare(hacker2) //
    if(alNum === -1){
        console.log("The driver's name goes first.");
    } else if(alNum === 1){
    console.log("Yo, the navigator goes first, definitely.")
    } else {
    console.log("What?! You both have the same name?")
}

//BONUS

let longText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"


console.log(longText.length);

let count = 0;
for (i=0; i<longText.length; i++){
    if (longText[i] === "e" && longText[i+1] === "t" && longText[i+2] === " ") {
        count++
    }
} console.log(count);




// console.log(longText.includes("et"));

//update once finishing the lab:
//git add .
//git commit -m "comment"
//git push

// Pull request  - new pull request - change name to LISFTJUL2023 Agnes Morawska - create pull request
//copy linke and submitt it to the lab