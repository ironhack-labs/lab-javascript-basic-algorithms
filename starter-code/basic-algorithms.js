//debut à 02:43
// Names and Input

var hacker1 = "XXXX";
console.log(`The driver's name is ${hacker1}`);

// var hacker2 = window.prompt("name?");
var hacker2 = "YYYY";
console.log(`The driver's name is ${hacker2}`);


//Conditionals

if (hacker1.length > hacker2.length){
    console.log(`driver wins: ${hacker1.length} chars`);
}
else if (hacker2.length > hacker1.length){
    console.log(`navigator wins: ${hacker2.length} chars`);
}
else {
    console.log(`same length: ${hacker2.length} chars`);
}

// Palindrome

var list_of_expressions = ["A man, a plan, a canal, Panama!",
"Amor, Roma",
"race car",
"stack cats",
"step on no pets",
"taco cat",
"put it up",
"antonin",
"ainsi anais nia",
"123454321",
"Was it a car or a cat I saw?",
"No 'x' in Nixon"];

function Palindrome(arr){
    // strip all special characters
    let copy = [];
    let regex = (/[?!',\s]/gi);
    let final_check = [];

    list_of_expressions.forEach((item) => copy.push(item.toLowerCase().replace(regex,"")));

    for (let j = 0; j < copy.length ; j++){
    
        let word = [];
        let reverse_word =[];
        let list_true = [];
        let object = {};

        for (let i = 0 ; i < copy[j].length ; i++){
            
            let letter = copy[j][i];
            let reverse_letter = copy[j][copy[j].length-1-i]
            word.push(letter);
            reverse_word.push(reverse_letter);
            list_true.push(letter==reverse_letter);
        }

        object.firstword = arr[j];
        object.word_clean = word.reduce((a,b) => a+b);
        object.reverse_word = reverse_word.reduce((a,b) => a+b);
        object.check = list_true.reduce((a,b) => b == true ? a = true : b = false);
        final_check.push(object);
    }

    return final_check;
}



function avgPal(arr){
   
    let lengths_pal = []
    let newArr = arr.filter((x) => x.check == true)
    for (element in newArr){
        lengths_pal.push(arr[element].word_clean.length);
    }
    return (lengths_pal.reduce((a,b) => a+b)/lengths_pal.length).toFixed(2);
}

console.log(`Un palindrom de la liste passée est en moyenne de ${avgPal(Palindrome(list_of_expressions))} caractères.`);