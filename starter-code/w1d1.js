

var hacker1 = "Jhon";

var hacker2 = prompt("What's the navigator's name");

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//--------------//

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//--------------//

function separateStringAndCapitalize (name){
    console.log(hacker1.toUpperCase().split("").join(' '));
}
separateStringAndCapitalize(hacker1);


function reverseString(str){
    
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
    }
    
    reverseString(hacker1);
    console.log(reverseString(hacker1));


    // Assignment 2
    // write down the code above in less code with "concatination methods"
    // If you donw know how, 1) check google, 2) write it down in pseudo cove, no copy/paste anymore!

    function reverString2(str) {
        return str.split("").reverse().join("");
    }

    reverseString(hacker1);
    console.log(reverseString(hacker1));


    function compareLetters (name1, name2){
        if(hacker1 === hacker2){
            console.log("Names are exactly the same");
            return true;
        }
        for (i = 0; i < hacker1.length; i++) {
            if (hacker1[i] > hacker2[i]) {
                console.log("The hacker2 name goes first");
                break;
            }
            else if (hacker1[i] < hacker2[i]) {
                console.log("Yo, the hacker1 goes first definitely");
                break;
            }
            else {
                console.log("What?! You both got the same letter?");
            }
        }   

    }

    compareLetters(hacker1, hacker2)

//BONUS!!

var newString = prompt("Can you type something plsssss:");

console.log("You wrote " + newString);

function palindrome(text){
    var sss =  /[\W_]/g;
    var lowCapsStr = text.toLowerCase().replace(sss, '');
    var reverseStr = lowCapsStr.split('').reverse().join('');

    if(lowCapsStr === reverseStr){
        console.log(reverseStr + "is a palindrome");
        
    } else {
        console.log(newString + " is not a palindrome")
    }  
}
palindrome(newString);


var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function countWords(str) {
    return str.split(" "); 
}
countWords(lorem);

function countEt(str){
    return str.split("et");
}
countEt(lorem);


var lorem = "et et et et"
    count = 0;
    for(var i = 0; i <lorem.length; i++){
        if(lorem.charAt[i] === "et"){
            count++;
        }
    } 
console.log(count);











    
