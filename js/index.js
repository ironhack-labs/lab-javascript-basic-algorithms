// Iteration 1: Names and Input

console.log("I'm ready!");

console.log("-------Iteration 1---------");
let hacker1="Yu MIAO";
console.log(`The driver's name is ${hacker1}`);

let hacker2="Marine Sanjuan";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

console.log("-------Iteration 2---------");
let halength1 = hacker1.length;
let halength2 = hacker2.length;
if (halength1> halength2){
  console.log(`The driver has the longest name, it has ${halength1} character`);
}else if(halength1<halength2){
  console.log(`It seems that the navigator has the longest name, it has ${halength2} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${halength2} characters!`);
};

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals 
console.log("-------Iteration 3.1 H E L L O ---------");

function modifiedName(name){
  let capName = name.toUpperCase();
  let finalName = capName.split("").join(" ");
  return finalName;
};

console.log(modifiedName(hacker1));
console.log(modifiedName(hacker2));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log("-------Iteration 3.2 olleh ---------");
function reverseString(str) { 
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

console.log(reverseString(hacker1));
console.log(reverseString(hacker2));

//3.3 Depending on the lexicographic order of the strings

console.log("-------Iteration 3.3 hello before bye ---------");

let compare = hacker1.localeCompare(hacker2);
console.log(compare);
if(compare<0){
  console.log( "The driver's name goes first.");
} else if(compare>0){
  console.log("Yo, the navigator goes first definitely.");
} else{
  console.log("What?! You both have the same name?");
}

//Bonus 1

console.log("--------Count the letters of the following text----")

let par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elementum lacus, vel commodo lorem. Aliquam eget nunc blandit erat condimentum aliquet in in est. Donec nec cursus ligula, quis aliquet justo. Mauris ligula nibh, sagittis accumsan semper sed, iaculis ac velit. Ut tempus malesuada consectetur. Ut a tempus tellus, ac consequat erat. Vivamus finibus sed augue eget tempor. Etiam tincidunt libero non libero bibendum, in aliquet lacus varius. Quisque ullamcorper libero semper nibh blandit tristique. Morbi rhoncus mauris mattis tellus pretium ultrices. Vivamus in neque sed dui faucibus porttitor. Fusce dictum mollis dapibus. Vestibulum ultricies tristique nulla, sollicitudin luctus lorem suscipit vel. Maecenas a odio a dolor ornare accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor turpis at ex sagittis, non eleifend justo tempus. Donec fermentum lobortis nibh, at commodo ante varius ac. Aenean in purus non magna varius bibendum. Nulla viverra mi enim. Maecenas porttitor tellus non massa pulvinar consectetur. Aliquam erat volutpat. Donec varius molestie neque id lobortis. Curabitur porttitor sem et laoreet interdum. Cras at ligula hendrerit, lobortis metus id, convallis tortor. Nullam massa ipsum, fermentum vel aliquam ac, suscipit nec nisl. Aliquam erat volutpat. Phasellus sed pretium enim, eget porttitor ligula. Maecenas laoreet velit in erat vulputate ullamcorper. Proin turpis purus, scelerisque sed justo id, porttitor vestibulum velit. Cras sagittis tortor quis pharetra cursus. Cras venenatis sem eu ante cursus dapibus."


let spaceCount = (par.split(" ").length - 1);
console.log(spaceCount);

console.log("------- Count the word et in the par-------");

console.log(par.split("et").length - 1);


// Bonus 2
console.log("------ Bonus 2 Palindromes--------")

function isPalindrome (phraseToCheck){
    console.log("------>> new test here");
    // Below: to clean the phrase of any special character 
    // and put it in uppercase to compare in the same format
    let cleanPhrase = phraseToCheck.replace(/[.,\/#!$%\^&\*;?:{}=\-_`~()''\s]?/g,"");
    let upperPali = cleanPhrase.toUpperCase();
   
    // Below: actual checking of if the value assigned is a palindrome or not
    for (let i = 0; i <upperPali.length / 2; i++) {
    let length = upperPali.length;
    


    if (upperPali[i] !== upperPali[length-1-i]){
        
        return console.log(`"${phraseToCheck}" is not a Palindrome`);
      }

    //console.log("Here test");
    return console.log(`"${phraseToCheck}" is a Palindrome`);
    }
    
}

isPalindrome ("A man, a plan, a canal, Panama!");
isPalindrome ("Was it a car or a cat I saw?");
isPalindrome ("No 'x' in Nixon");
isPalindrome ("azertyuiop,?");
