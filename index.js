// Iteration 1: Names and Input **************************************************************************

  const hacker1 = "Nathi";
  console.log(`The driver's name is ${hacker1}`);

  const hacker2 = "Vicente";
  console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals ****************************************************************************

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
    };

// Iteration 3: Loops ***********************************************************************************
// 3.1
let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
    const char = (hacker1[i].toUpperCase() + " ")
    driverName += char;
}
console.log(driverName);

// 3.2 
  let navigatorNameReverse = "";

  for (let i = hacker2.length-1; i >= 0; i--) {
    const character = hacker2[i];
    navigatorNameReverse += hacker2[i];
  }
  console.log(navigatorNameReverse);

// 3.3

if(hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}

/* ****************************************************************************************************
                                         Bonus Time! 
***************************************************************************************************** */

// Bonus 1: ********************************************************************************************

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed venenatis metus. Sed iaculis nulla sem, eget porta lacus egestas in. Praesent ut sem commodo, viverra magna et, euismod ante. Fusce eget sem quis nisl laoreet venenatis. Nullam aliquam id nisl at aliquet. Nulla facilisi. Suspendisse quis elit eu felis varius rhoncus sit amet a ligula. In hac habitasse platea dictumst. Sed nibh ligula, efficitur blandit sem in, faucibus hendrerit lectus. Nunc auctor nulla a ultricies aliquam. Phasellus risus mauris, molestie quis fermentum non, posuere a nisi.

Aliquam lacinia elementum dolor, at tristique mauris tristique ac. Phasellus consectetur ullamcorper ligula, eget mollis magna gravida vitae. Nulla tristique sapien ut nisi aliquam, eget bibendum nisl posuere. Nulla efficitur, quam nec dapibus faucibus, velit urna finibus enim, at cursus nunc ligula ut ex. Pellentesque consectetur lacus sed orci facilisis facilisis. Praesent maximus nunc nec mattis tristique. Sed maximus nulla eu lectus tempus, sit amet hendrerit enim congue. Nunc sed purus fringilla, ultrices enim a, ultrices felis.

Sed hendrerit, augue non lacinia blandit, magna nibh dictum lacus, sed accumsan velit eros sit amet sapien. Fusce a nisl id sapien porta rhoncus. Sed ornare tellus ipsum. Vestibulum sit amet imperdiet magna. Fusce maximus lobortis semper. Praesent vitae nisi purus. Mauris et mattis lorem. Proin vehicula ac justo vel rhoncus. Duis porttitor consectetur sem, nec tristique enim aliquam quis. Vivamus lobortis laoreet leo, vitae volutpat velit egestas et. Fusce hendrerit mauris eu arcu viverra, eu faucibus neque dictum.
`
function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length;
}
console.log(countWords(longText));


let count = 0;
for (let i = 0; i < longText.length; i++) {
    if(longText[i] + longText[i+1] === "et") {
        count ++;
    }
}
console.log(count);

// Bonus 2: *****************************************************************************************

const phrase1 = "A man, a plan, a canal, Panama!";
const phrase2 = "Amor, gghh Roma";
const phrase3 =  "race car";
const phrase4 =  "stack cats";
const phrase5 =  "step on no pets";
const phrase6 =  "taco cat";
const phrase7 =  "put it up";
const phrase8 =  "Was it a car or a cat I saw?" 
const phrase9 = "No 'x' in Nixon";


let reversePhrase = "";

function isAPalindrome(phraseToCheck) {
    for (let i = phraseToCheck.length-1; i >= 0; i--) {
        reversePhrase += phraseToCheck[i];
    }

    if(reversePhrase === phraseToCheck) {
        return "it's a palindrome."
    } else {
        return "Not a palindrome.";

    }
}
console.log(isAPalindrome(phrase5));
