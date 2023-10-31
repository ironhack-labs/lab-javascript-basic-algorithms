//Iteration 1: Names and Input

let hacker1 = `Mark`;
console.log (`The driver's name is ${hacker1}.`);

let hacker2 = `Alberto`
console.log (`The navigator's name is ${hacker2}.`);


//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) 
  {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
else if (hacker2.length > hacker1.length)
  {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
else 
  {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }


//Iteration 3: Loops

let newHacker1 = "";

for (let num = 0; num < hacker1.length; num++)
  {
    let capLetter = hacker1.charAt(num).toUpperCase() + " ";
    newHacker1 += capLetter;
  }

console.log (newHacker1);


let newHacker2 = "";

for (let i = hacker2.length - 1; i >= 0 ; i--)
{
  newHacker2 += hacker2[i];
}

console.log (newHacker2);


if (hacker1.localeCompare(hacker2) < 0)
  {
    console.log(`The driver's name comes first.`);
  }
else if (hacker1.localeCompare(hacker2) > 0)
  {
    console.log(`Yo, the navigator goes first, definitely.`);
  }
else if (hacker1.localeCompare(hacker2) === 0)
  {
    console.log (`What?! You both have the same name?`);
  }


//Bonus 1 

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris in felis blandit viverra et vitae eros. Duis sit amet bibendum tortor. Quisque consectetur aliquet ex. Sed sed placerat mi. Fusce neque sapien, mollis vel tristique ut, pretium eget tortor. Sed accumsan varius risus, sed maximus mauris blandit ut. Phasellus dignissim ornare tristique. Quisque eleifend leo nisl, nec pellentesque enim iaculis luctus. Praesent gravida turpis id nisl consectetur imperdiet. Donec sit amet enim ac erat imperdiet sollicitudin eget vel odio. Praesent accumsan lacus vitae vulputate condimentum. Nullam non magna sollicitudin, imperdiet ipsum suscipit, mattis lorem. Maecenas dignissim suscipit sapien, eu faucibus diam tempor ut. 

Fusce et tincidunt nisi. Phasellus eleifend eget lectus ac mattis. Nunc vel lacus pretium, lacinia nisi id, lacinia leo. Cras eget tincidunt purus. Ut ut ipsum sit amet ex lacinia interdum. Donec nec bibendum urna. Nulla quam tortor, blandit sit amet mi sit amet, convallis molestie eros. In quis nibh magna. Nam nec iaculis ex. Proin a lacus dapibus lorem sodales volutpat sit amet id elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

Quisque vehicula tincidunt mauris. Sed euismod lectus a ante sagittis congue. Ut sed auctor odio, sit amet lobortis sem. Nunc sollicitudin, nulla interdum scelerisque lacinia, urna magna condimentum sem, sed ultrices nibh lacus scelerisque enim. Nam finibus iaculis tellus id cursus. Nulla ac blandit nunc. Cras libero diam, consectetur in magna a, egestas consequat nibh. Fusce non tellus semper, euismod diam in, ornare mauris. Donec et nisl ante.`;

let wordCount = 1;

for (let a = 0; a < longText.length; a++)
  {
    if (longText.charAt(a) === ` `)
      {
        wordCount++;
      }
  }

console.log (wordCount);

let count = 0;

for (let j = 0; j < longText.length; j++)
  {
    if (longText.charAt(j) === ` ` && longText.charAt(j + 3) === ` `)
      {
         if (longText.charAt(j + 1) === `e` && longText.charAt(j + 2) === `t`)
           {
             count++;
           }
      }
  }

console.log (count);


//Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let newPhraseToCheck = "";

for (let m = 0; m < phraseToCheck.length; m++)
  {
    if (!(phraseToCheck.charAt(m) === ' ') && !(phraseToCheck.charAt(m) === ',') && !(phraseToCheck.charAt(m) === '.') && !(phraseToCheck.charAt(m) === '!'))
      {
        newPhraseToCheck += phraseToCheck.charAt(m).toLowerCase();
      }
  }


let reversePhraseToCheck = "";

for (let n = newPhraseToCheck.length - 1; n >= 0 ; n--)
{
  reversePhraseToCheck += newPhraseToCheck[n];
}

if (newPhraseToCheck === reversePhraseToCheck)
{
  console.log ("Yes, it is a Palindrome!") 
}
else
  {
    console.log ("No, it is NOT a Palindrome :(") 
  }