
let hacker1 = "Kenan";
let hacker2 = "Elchin";

// Iteration 1: Names and Input

const firstIteration = (hacker1,hacker2) => {
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
}
firstIteration(hacker1,hacker2);


// Iteration 2: Conditionals

const secondIteration = (hacker1,hacker2) =>{
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }
}

secondIteration(hacker1,hacker2);




// Iteration 3: Loops

const thirdIteration = (hacker1,hacker2) => {
    let result = "";
    for (let i = 0; i < hacker1.length; i++) {
        if(i === hacker1.length - 1) {
            result += hacker1[i].toUpperCase();
        } else {
        result += hacker1[i].toUpperCase() + " ";
        }
    }
    
    let reversed = "";
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reversed += hacker2[i];
    }   

    // Ask this part
    console.log(result);
    console.log(reversed);

    if(hacker1>hacker2){
        console.log("The driver's name goes first.");
    } else if(hacker1<hacker2){
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }
}

thirdIteration(hacker1,hacker2);



// Bonus 1: Lorem ipsum generator

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum tincidunt quam ac fermentum. Nam eu felis dolor. Donec non molestie quam. Suspendisse eleifend, ante vehicula fringilla accumsan, nisi nisi scelerisque felis, vel molestie neque tortor ac velit. Curabitur vulputate massa non tempor interdum. Integer consectetur, velit non dapibus aliquam, massa elit condimentum ipsum, a maximus dui lectus vel tellus. Phasellus eu mauris consequat lacus convallis pellentesque. Nullam efficitur vehicula nulla, non tempor elit mollis quis. Duis molestie a nibh ut vestibulum. Cras eros turpis, blandit id ultricies id, vehicula id ligula.

Donec dolor odio, accumsan ornare accumsan quis, scelerisque at mi. In egestas sapien lacus, non tempus magna luctus sit amet. Aenean lacus purus, fringilla eget rhoncus quis, consequat non mauris. Duis at est sit amet velit posuere rhoncus. Nullam faucibus lacus sit amet lorem euismod, ut sollicitudin odio semper. Sed nec vehicula ex. Pellentesque quis leo suscipit, placerat diam ac, rhoncus augue. Nunc at nisi ac orci efficitur finibus. Quisque volutpat rhoncus massa, nec feugiat enim. Suspendisse quis porttitor magna.

Donec id commodo nibh. Nulla in felis id augue egestas lobortis. Quisque euismod condimentum rhoncus. Quisque consectetur odio vitae libero bibendum, nec aliquet turpis interdum. Aenean ac neque tellus. Duis est leo, commodo et sem nec, lobortis venenatis augue. In interdum tempus libero id facilisis. Curabitur euismod feugiat egestas. Nam vestibulum, risus ut molestie dapibus, massa odio mattis ex, in auctor justo mi eget dolor. Nullam scelerisque interdum odio eu aliquam. Curabitur imperdiet enim massa, eu bibendum nibh accumsan vel.`

    

const wordCounter = (longText) => {
    let wordCount = 0;
    let etCount = 0;
    let insideWord = false;
    let currentWord = "";

    for (const char of longText) {  
        if (char !== " " && char !== "\n" && char !== "\t") {
            currentWord += char;
            if (!insideWord) {
                wordCount++;
                insideWord = true;
            }

        }
        else {

            if(currentWord === "et") {
               etCount++;
            }
            currentWord =""; 
            insideWord = false;
        }
    }
    console.log(wordCount);
    console.log(etCount);
}
wordCounter(longText);

// Bonus 2: Palindrome

const phraseToCheck = "A man, a plan, a canal: Panama";
const isPalindrome = (phrase)=>{

    let cleanedPhrase = "";       
    let reversedPhrase = "";

    for (const char of phrase) {
        if(char!==" " && char !== "," && char !== ":" && char !== ".") {
            cleanedPhrase += char;
            reversedPhrase = char + reversedPhrase;
        }
    }
    
    if(cleanedPhrase.toLowerCase() == reversedPhrase.toLowerCase()) {
        console.log("It's a palindrome!");
    }else{
        console.log("It's not a palindrome.");
    }
}


isPalindrome(phraseToCheck);