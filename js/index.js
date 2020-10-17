// Iteration 1: Names and Input
let hacker1 = "BobGary";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "TaylorSwift";
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
} else if (hacker1.length > hacker2.length){
    console.log(`The driver has longest name & it has ${hacker1.length} characters`);
    } else {
        console.log(`It seems that the navigator has the longest name, it has   ${hacker2.length} characters`);
    }



// Iteration 3.1

let name = " "
for(var i =0; i < hacker1.length; i++){
    name+=hacker1[i].toUpperCase()+ " "
     
}
console.log(name);


// Iteration 3.2 Reverse a String
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(hacker2))

// lexicographic order 
function lexicographicOrder(string1,string2){
    if (hacker1 === hacker2)
    {
        return `What?! You both have the same name?`
    } else if(hacker1 < hacker2){
        return `The driver's name goes first.`

    } else {
        return `Yo, the navigator goes first definitely.`
    }
}

console.log(lexicographicOrder(hacker1,hacker2))

//Bonus 1: Prints number of words in a String
let para1 = "I am doing Web Development Course web"
let para2 = "It happens in amsterdamn"
let para3 = "Malcolm is my Teacher"

// Print no. of words in a string
function splitString(para1){
    resString = para1.split(" ");
  return resString.length
}

console.log(splitString(para1))

// Prints no. of times a word appear
let para1 = "I am doing web Development Course web"
let para2 = "It happens in amsterdamn"
let para3 = "Malcolm is my Teacher"


function noOfTimesAppear(para1,text){
    resString1 = para1.split(" ");
    let count = 0
    for (i = 0; i < resString1.length; i++)
    {
      console.log(resString1[i])
        if (resString1[i].includes(text))
        count+=1;
    }
    return count
}

console.log(noOfTimesAppear(para1,"web"))










