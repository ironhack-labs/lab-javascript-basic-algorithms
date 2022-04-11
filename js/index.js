// Iteration 1: Names and Input

let hacker1 = "Leticia";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Keven";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
let spacedLetters = "";
for(let i = 0; i < hacker1.length; i++) {
    spacedLetters += hacker1[i]+" ";
   }

   console.log(spacedLetters.toUpperCase())

let reversedName = "";
   for(let i = hacker2.length -1; i >= 0; i--) {
        reversedName += hacker2[i]
       }  

    console.log(reversedName)

    if(hacker1.localeCompare(hacker2) === -1){
        console.log(`The driver's name goes first`)
    }
    else if(hacker1.localeCompare(hacker2) === 1){
        console.log(`Yo, the navigator goes first definitely.`)
    }
    else if(hacker1.localeCompare(hacker2) === 0){
        console.log(`What?! You both have the same name?`)
    }


    //Bonus 1

    let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi at quam molestie hendrerit et quis tellus. Donec eu lorem ultricies, accumsan ipsum gravida, imperdiet ante. Quisque consectetur felis elit, quis fermentum erat accumsan nec. Nam at sapien sodales, finibus lacus in, accumsan odio. Etiam massa ex, vehicula egestas purus id, pharetra dictum elit. Nunc ut nisl at nisi elementum gravida. Pellentesque dictum quis enim ac consequat. Nam eget tortor nec nunc vestibulum fringilla. Etiam erat est, tincidunt eget viverra quis, ornare sit amet ex. Nam rutrum maximus ligula, viverra consectetur enim pellentesque id. Donec lobortis turpis vel magna dictum, a scelerisque nisi accumsan. Donec leo libero, ullamcorper vitae dolor sed, cursus luctus nisi. Duis bibendum turpis sapien, non ornare dolor porta in. Ut vitae pretium lectus. In varius lacus quis porta vestibulum. Aliquam eget est libero. Donec lobortis ultricies vestibulum. Duis eu lectus sapien. Vivamus iaculis felis ut nibh vehicula consectetur. Nam condimentum enim quis velit tincidunt iaculis. Curabitur tempus lacinia magna, at bibendum mauris sagittis quis. Maecenas a arcu nec ligula laoreet tincidunt. Nulla facilisi. Quisque bibendum gravida congue. Maecenas sollicitudin lacus diam, sit amet blandit ligula lobortis eget. Aenean malesuada, est quis rutrum aliquet, mi sem rutrum neque, ac rhoncus tellus odio sit amet arcu. Pellentesque a aliquet leo. Maecenas semper enim nec mauris pharetra, vel condimentum magna volutpat. Etiam est turpis, eleifend sed egestas ac, lacinia eu enim. Nullam commodo erat ac lorem rutrum tempus. Aliquam faucibus iaculis turpis, vel consectetur ipsum viverra sit amet. Nullam vulputate lacinia condimentum. Ut nec dignissim justo. Phasellus nec justo metus. Phasellus porta tortor eu turpis pharetra sagittis. Mauris consequat mattis nunc, vitae ultrices mauris varius ut. Curabitur viverra mi at ipsum gravida posuere ut non odio. Nam eget accumsan diam, sit amet dignissim mauris. Fusce viverra quam non ipsum maximus porta. Vivamus malesuada nisi ut porttitor pellentesque. Vestibulum cursus aliquam orci. Etiam metus magna, bibendum ornare lorem ut, tristique viverra felis. Sed sit amet metus scelerisque, facilisis dui ac, scelerisque ipsum."

    function countWords(str) {
        const arr = str.split(' ');
      
        return arr.filter(word => word !== '').length;
    }

      console.log(countWords(paragraph))

    function countEt(message, wordToCount) {
        let splitMessage = message.split(' ');
        
        let sum = 0
        for (let i = 0; i < splitMessage.length; i++) {
            if (splitMessage[i] === wordToCount) {
                sum = sum + 1
            }
        }
        return sum
    }
    
    console.log(countEt(paragraph, "et"))

// for each 

/* function countEt(message, wordToCount) {
    let splitMessage = message.split(' ');
    
    let sum = 0
    splitMessage.forEach(word => {
        if (word === wordToCount) {
            sum = sum + 1
        }
    }
    return sum
}

console.log(countEt(paragraph, "et")) */


// Bonus 2

let phraseToCheck = "step on no pets";

function checkPalindrome(string) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

console.log(checkPalindrome(phraseToCheck));

/* Reverse
const checkPalindrome = (string) => string.slice().reverse === string; */





