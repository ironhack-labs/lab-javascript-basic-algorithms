// Iteration 1: Names and Input
const hacker1 = "Ahmad";
const hacker2 = "Rafaell";

console.log(`the driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
function compare(str1 , str2){
    const length1 = str1.length;
    const length2 = str2.length;
    if (length1 > length2)
        console.log(`the driver has the longest name, it has ${length1} words.`);
    else if (length1 < length2)
        console.log(`it seems that the navigator has the longest name , it has ${length2} words.`);
    else 
        console.log(`Wow,you both have equally long names,${length1} words!.`);
}

compare(hacker1,hacker2);

// Iteration 3: Loops

function format1(str){
    const length = str.length;
    let strUpper = str.toUpperCase();
    let formatResult = "";
    for(let i = 0 ; i < length ; i++){
        formatResult += strUpper.charAt(i) + " ";
    }
    return formatResult;
}

function format2(str){
    const length = str.length;
    let formatResult = "";
    for ( let i = length - 1 ; i >= 0 ; i--){
        formatResult += str.charAt(i);
    }
    return formatResult;
}

function compareByAlphaOrder(str1 , str2){
    const result = str1.localeCompare(str2);
    if(result === 1)
        console.log(`Yo, the navigator ${str2} goes first, definitely.`);
    else if(result === -1)
        console.log(`the driver's name ${str1} goes first.`);
    else console.log(`what?! You both have the same name?`)
}

console.log(format1(hacker1));
console.log(format2(hacker2));
compareByAlphaOrder(hacker1,hacker2);

// Bonus 1
const longText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

function wordCounter(str){
    const words = str.split(" ");
    return words.length;
}
function wordSpecificCounter(str,word){
    let count = 0;
    const words = str.split(" ");
    for (let i = 0 ; i < words.length ; i++){
        if(words[i] === word)
            count++;
    }
    return count;
}

console.log(wordCounter(longText));
console.log(wordSpecificCounter(longText ,"et"));

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

function isPlaindrome(str){
    // format the str based on the Plaindrome rules
    // reused pattern!
    const strFormat = str.toLowerCase().replace(/[^a-z0-9]/g , '');

    // convert the format str to orderd list (Array)
    const charachters = strFormat.split("");
    
    // Reverse the array
    let chReversed = [];
    for(let i = charachters.length - 1 ; i >= 0 ; i--)
        chReversed.push(charachters[i]);

    // Joining the reversed Array into new string
    let strReversed = "";
    for (let i = 0 ; i < chReversed.length ; i++ )
        strReversed += chReversed[i];
    // const strReversed = chReversed.join("");

    // comparing the reverse and orginal string
    if(strReversed === strFormat)
        return true;
    return false;
}

console.log(isPlaindrome(phraseToCheck));