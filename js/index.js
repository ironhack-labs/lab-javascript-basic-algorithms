// Iteration 1: Names and Input
let hacker1 = "Sabela";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Nina";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
/* 3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"` */

hacker1 = hacker1.toUpperCase().split("").join(" "); 
console.log(hacker1);

/* 3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`*/

for (let i = (hacker1.length); i >= 0; i-- ){
    console.log(hacker1.charAt(i))
}

/*3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`*/

switch(hacker1.localeCompare(hacker2)) {
    case 1: console.log(`The driver's name goes first.`);
    break;
    case -1: console.log(`Yo, the navigator goes first definitely.`)
    break;
    case 0: console.log(`What?! You both have the same name?`)
    break;
  
  }

//#### Bonus 1:
//Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//Generate 3 paragraphs. Store the text in a variable type of string.
//Make your program count the number of words in the string.

  
let LoremStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum velit eget eros blandit, eu vestibulum libero rutrum. Etiam in vestibulum enim. Nunc eget eros quis ipsum porttitor sollicitudin. Fusce porta libero erat, vel faucibus ligula rutrum nec. Quisque vitae enim scelerisque, blandit nunc vitae, suscipit erat. In mi libero, eleifend et euismod quis, vehicula eget mi. Aenean nec libero ut libero euismod convallis. 

Quisque sed velit nec lorem vulputate volutpat non id massa. Aenean sed diam egestas ipsum dignissim facilisis eget eget libero. Etiam non erat massa. Proin bibendum, augue at fermentum finibus, metus odio molestie lectus, eu vulputate ipsum erat viverra tellus. Nam euismod vitae dolor sit amet facilisis. Sed nisi turpis, fringilla sed mi sed, cursus facilisis lectus. Suspendisse ut justo faucibus, faucibus sem eget, congue orci. Maecenas lobortis turpis libero, id venenatis elit porta pulvinar. Vivamus id ipsum id lorem vestibulum pulvinar. Nunc a magna placerat, viverra ex nec, mollis ante. Praesent pellentesque lectus at orci congue, nec viverra est suscipit. Duis in dictum augue. Aenean tincidunt luctus nunc eget tempus. 

Sed laoreet ante vel quam auctor efficitur. Curabitur non metus vitae quam sollicitudin aliquet. Nunc imperdiet mi tortor, maximus sollicitudin urna volutpat et. Nunc eget nunc malesuada, ultrices tellus et, mollis orci. Pellentesque dapibus diam felis, sit amet consectetur lacus mollis at. Nunc gravida purus eget nibh bibendum mollis. Nulla ultricies metus ac turpis laoreet posuere. Proin eu dolor vel augue venenatis congue. Pellentesque convallis lorem id odio mattis, non sodales leo hendrerit. Nunc at malesuada metus.`


function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount(LoremStr));

// Make your program count the number of times the Latin word [`et`] appears.

function WordEtCount(str) { 
    return str.split(`et`).length;
  }
  
  console.log(WordEtCount(LoremStr));



  /*#### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
  
  __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley: */


function palindrome(str) {

    var newStr= str.toLowerCase().split("");
  
    for(var i=0; i < (newStr.length)/2; i++){ 
      if(newStr[i] == newStr[newStr.length-i-1]){ 
       
      } else 
        return false; 
    }
    return true;
  }
  
  
  palindrome("Amor Roma");
  palindrome("race car");
  palindrome("stack cats");
  palindrome("taco cat");