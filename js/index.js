// Iteration 1: Names and Input
let hacker1="Sara";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Meritxell";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else{
    console.log(`It seems like the navigator has the longest name, it has ${hacker2.length} characters`);
}

// Iteration 3: ls
//3.1
console.log(hacker1.split("").join(" ").toUpperCase());
console.log(capsAndSpaces("Sara"));
console.log(capsAndSpaces("Meritxell"));

function capsAndSpaces(name){
    let resultado ="";
    for (let letra = 0 ; letra < name.length; letra++){       
        resultado += name[letra]+ " ";
    }
    return resultado.toUpperCase() ;
}
//3.2
console.log(hacker2.split("").reverse().join(""));

//3.3
let hackers =[hacker1,hacker2];
hackers.sort(function(a,b){return a.localeCompare(b);});
console.log(hackers);
if (hackers[0] == hackers[1]) {
    console.log("What?! You both have the same name?");
} else if (hackers[0]==hacker1) {
    console.log("The driver's name goes first.");
} else if (hackers[0]==hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}

//Bonus 1
var par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non hendrerit dolor. Suspendisse fermentum diam nec massa venenatis, at porta nunc sollicitudin. Proin fermentum, tellus vitae faucibus convallis, est nunc tempus ligula, et sagittis leo tellus sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu felis euismod, ultricies libero et, laoreet elit. Morbi vel mollis turpis. Sed felis neque, vulputate id ex at, aliquam luctus nibh. Nulla vel felis lobortis, semper neque sed, pellentesque sapien. Maecenas bibendum sodales condimentum. Donec lacinia nisl a justo tristique pulvinar. Donec eu ligula nec nisl euismod porta. Proin quis consequat metus. Curabitur ut maximus augue. Etiam quis bibendum dui. Quisque felis orci, tempor sed magna et, auctor eleifend nulla. Etiam auctor vel tortor eleifend iaculis. Nulla convallis rutrum imperdiet. Proin quis fermentum nulla, id imperdiet lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit arcu nulla, et euismod nunc semper eget. Phasellus eleifend dolor neque, quis pharetra urna elementum eu. Sed congue iaculis erat, vel pulvinar mi. Morbi sodales mauris bibendum elit tincidunt tincidunt. Proin id mauris eu leo condimentum congue eget mattis dui. Suspendisse maximus sem id elit ornare, vitae tincidunt neque maximus. Ut neque sem, pretium eu venenatis vel, semper ut dolor. Cras bibendum gravida nibh, eget maximus dui imperdiet ac. Maecenas auctor tortor semper felis commodo, eu accumsan justo aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dui risus, vestibulum ac tellus sed, cursus fermentum lectus. Praesent est leo, mollis in eleifend at, tempus vitae orci. Praesent lacus felis, dictum et luctus gravida, bibendum ut neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tellus nunc, imperdiet a neque consectetur, venenatis efficitur mauris. Nulla nec malesuada est. Integer convallis ac elit ut aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquet dolor nec tempus rutrum. Aliquam elementum erat sit amet pulvinar bibendum. Morbi id tellus dignissim, porta nulla id, sodales mi. Vivamus sit amet porta neque. Vestibulum rutrum suscipit tellus, eget feugiat sem. Morbi vehicula lacus quis libero suscipit tincidunt. Aenean bibendum orci et ligula feugiat, id tempor justo aliquet. Donec faucibus, magna quis iaculis euismod, augue nibh commodo nisl, ut maximus nunc erat sit amet enim.";
console.log("The paragraph has " + par.split(" ").length + " words.");
console.log("Total number of 'Et' occurrences: " + countEts(par));

function countEts(parag){
    let etCounter = 0;
    for (i = 0; i <= parag.split(" ").length; i++){
        if (parag.split(" ")[i] == "et"){
            etCounter+=1;
        }
    }
    return etCounter;
}

//Bonus 2
//Inicio conceptual
// let phraseToCheck ="Roma, Amor";
// if (phraseToCheck.toLowerCase().split("").reverse().join("") === phraseToCheck.toLowerCase()) {
//     console.log("Is Palindrome");
// } else {
//     console.log("Is Not Palindrome");
// }

console.log(isPalindrome("Amor ,Roma"));
function isPalindrome(phrase){
    if (phrase.toLowerCase().split("").reverse().join("") === phrase.toLowerCase()) {
        return "Is Palindrome";
    } else {
        return "Is Not Palindrome";
    }
}
