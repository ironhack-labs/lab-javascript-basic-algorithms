// Iteration 1: Names and Input
const hacker1 = prompt(`Provide driver's name:`);
const hacker2 = prompt(`Provide navigator's name:`);
console.log(`Drivers name is ${hacker1 !== null ? hacker1 : `---`}😈`);
console.log(`The navigator's name is ${hacker2 !== null ? hacker2 : `---`}`);

// Iteration 2: Conditionals
const h1Length = hacker1 !== null ? hacker1.length : null;
const h2Length = hacker2 !== null ? hacker2.length : null;

if (h1Length && h2Length && h1Length > h2Length) {
    console.log(`The driver has the longest name, it has ${h1Length} characters`);
} else if (h1Length && h2Length && h1Length < h2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${h2Length} characters.`);
} else if (!h1Length || !h2Length) {
    console.log(`Names were provided incorrectly, please try again`);
} else {
    console.log(`Wow, you both have equally long names, ${h2Length} characters!`);
}

// Iteration 3: Loops
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase();
    if (i !== hacker1.length - 1) {
        result += " ";
    }
}
console.log(result);


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let result2 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    result2 += hacker1[i];
}
console.log(result2);

const result3 = hacker1.split('').reverse().join("");
console.log(result3);

const reverseString = (str) => {
    let result = str.split("");
    for (let i = 0; i < hacker1.length / 2; i++) {
        let temp = result[i];
        result[i] = result[hacker1.length - 1 - i];
        result[hacker1.length - 1 - i] = temp;
    }
    return result.join("");
}

console.log(`Reverse by swap ${reverseString(hacker1)}`);

// 3.3 Depending on the lexicographic order of the strings, print:
const compareLexicographically = (str1, str2) => {
    if (str1 === str2) {
        console.log(`What?! You both have the same name?`);
    } else if (str1 > str2) {
        console.log(`The driver's name goes first.`);
    } else {
        console.log(`Yo, the navigator goes first definitely.`);
    }
};

compareLexicographically(hacker1, hacker2);


const compareLexicographically2 = (str1, str2) => {
    if (str1.localeCompare(str2) > 0) {
        console.log(`The driver's name goes first.`);
    } else if (str1.localeCompare(str2) < 0) {
        console.log(`Yo, the navigator goes first definitely.`);
    } else {
        console.log(`What?! You both have the same name?`);
    };
}

compareLexicographically(hacker1, hacker2);
compareLexicographically2(hacker1, hacker2);

// Bonus Time!
const lorem = `At vero eos et accusamus et iusto odio dignissimos 
ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
quos dolores et quas molestias excepturi sint occaecati cupiditate 
non provident, similique sunt in culpa qui officia deserunt mollitia 
animi, id est laborum et dolorum fuga. `;

const wordCount = (str) => {
    return str.split(" ").length;
}

const emCount = (str) => {
    let emCount = 0;
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "et") {
            emCount += 1;
        }
    }
    return emCount;
};

console.log(`Count of 'et': ${emCount(lorem)}`);

const phraseToCheck = ["race car", "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?", "No 'x' in Nixon"];


/**
 * Returns an array of objects like {str: string, isPalindrome: boolean}
 * @param array array of palindromes on which to perform the validation.
 */
const isPalindrome = (arrPalindromes) => {
    const result = [];

    for (let i = 0; i < arrPalindromes.length; i++) {
        let str = arrPalindromes[i];
        let isPalindrome = true;

        //normalizing the input/str
        let strToVerify = "";
        for (let i = 0; i < str.length; i++) {
            if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str[i])) continue;
            strToVerify += str[i].toLowerCase();
        }

        // performing actual check
        for (let i = 0; i < strToVerify.length / 2; i++) {
            if (strToVerify[i] !== strToVerify[strToVerify.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        result.push({ str: str, isPalindrome: isPalindrome });
    }
    return result;
}

console.log(isPalindrome(phraseToCheck))



