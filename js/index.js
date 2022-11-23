// Iteration 1: Names and Input
let hacker1 = "Jorge"
let hacker2 = "Marine"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};


// Iteration 3: Loops
// 3.1. Print all the characters of the driver's name, separated by a space and in capitals .
function capitalizedName (name){
    let result = "";
    for (let i = 0; i < name.length; i++){
    result += name[i].toUpperCase() + " "
    }
    return result
}

console.log(capitalizedName(hacker1))

// 3.2. Print all the characters of the navigator's name, in reverse order.
function reversedString (string) {
    let reversedName = "";
    for (let i = string.length-1; i >= 0; i--) {
    reversedName += string[i];
    }
    return reversedName
}

console.log(reversedString(hacker2))

// 3.3. Depending on the lexicographic order of the strings, print a text.
function comparedNames (hacker1, hacker2) {
    if (hacker1.localeCompare(hacker2) === -1) {
        return "The driver's name goes first.";
    } else if (hacker1.localeCompare(hacker2) === 1) {
        return "Yo, the navigator goes first definitely.";
    } else {
        return "What?! You both have the same name?";
    }
}

// Bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id aliquet nisl, quis sodales elit. Aenean efficitur quam mattis odio porta, vel suscipit velit gravida.Aliquam nunc urna, blandit eget purus ac, fringilla ullamcorper dolor. Etiam luctus arcu ipsum, non vehicula mi accumsan nec. Curabitur pulvinar nisi imperdiet diam fermentum pharetra. Maecenas tincidunt tempor nunc at pulvinar. Nam nibh eros, porttitor quis malesuada ac, molestie ut elit. Cras sit amet rhoncus orci. Fusce sapien diam, varius eu sodales vel, imperdiet a enim. Maecenas vitae tortor a ligula pulvinar condimentum. Aliquam faucibus porttitor eros ac mollis. Pellentesque porttitor lorem sed porta dignissim. Praesent in semper justo. Etiam ac eros ligula. Vestibulum imperdiet nisi sapien, eget venenatis metus accumsan at. Aenean nibh mauris, eleifend ut maximus nec, dignissim sed purus. Fusce massa dui, porttitor ac pharetra non, fringilla id magna. Vivamus pellentesque ultrices neque ut consectetur. Sed nec finibus massa. Integer gravida tortor lacinia, luctus risus in, commodo arcu. Vestibulum et ligula justo. Praesent sed risus risus. Aenean at tellus vitae turpis facilisis imperdiet dignissim at erat. Phasellus molestie diam justo, nec ullamcorper erat iaculis vel. Suspendisse laoreet, neque finibus feugiat varius, neque quam venenatis tortor, sit amet pharetra sapien risus sed nisi. Etiam fringilla vel lacus sed mattis. Nam luctus non mauris quis luctus. Praesent nisl nunc, pretium sit amet eleifend sit amet, tempor ac est. Ut eu blandit arcu. Donec id porta quam, non sagittis nisl. Sed interdum consequat ipsum ac iaculis." 

function countWords(text){
    const myArray = text.split(" ").length
    return myArray
}

console.log(countWords(text))

function countEt (string) {
    let arr = string.split(" ")
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'et') {
            counter ++;
        }
    }
    return counter;
}

console.log(countEt(text))

// Bonus 2
let phraseToCheck = "Amor, Roma"

function palindromeDetect(str) {  
  let toRem = " "
  str = str.toLowerCase().replaceAll(toRem,"")
    for (let i = 0; i < str.length / 2; i++) {  
        if (str[i] !== str[str.length - 1 - i]) {  
            return false;  
        }  
    }  
    return true;  
}  
  
// accept the string or number from the prompt  
const value = palindromeDetect(phraseToCheck); 

console.log(value);
