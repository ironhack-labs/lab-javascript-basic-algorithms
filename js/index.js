// Iteration 1: Names and Input


let hacker1 = "Alex";
console.log(`The driver's 
name is ${hacker1}`);

let hacker2 = "Alexander";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name. It has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

switch (true) {
  case hacker1.length > hacker2.length:
    console.log(
      `The driver has the longest name. It has ${hacker1.length} characters.`
    );
    break;
  case hacker1.length < hacker2.length:
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
    break;
  default:
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}

console.log("ITERATION 3")

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// let driver = [];
// for(let i=0; i<hacker1.length; i++){
//   driver.push(hacker1[i])
// }
console.log(  hacker1.split('').join(' ').toUpperCase()  )


console.log('3.2 Print all the characters of the navigators name, in reverse order. i.e. "nhoJ"')

let navigatorReverse = []
for(let i=hacker2.length-1; i>=0; i--){
  console.log(i)
  navigatorReverse.push(hacker2[i])
}

console.log( navigatorReverse.join('') )

// console.log( hacker2.split('').reverse().join('') )

console.log(`3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?`)

let names = [hacker1, hacker2];
console.log(names)

names.sort();
console.log(names)


// if(hacker1.length < hacker2.length){
//   console.log(`The ${hacker1} name goes first.`)
// }
// else if (hacker2.length < hacker1.length){
//   console.log(`Yo, the ${hacker2} goes first definitely.`)
// } 
// else {
//   console.log(`What?! You both have the same name?`)
// }


if ( hacker1.localeCompare(hacker2) === -1){
  console.log(`The ${hacker1} name goes first.`)
}
else if ( hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the ${hacker2} goes first definitely.`) 
}
else {
  console.log(`What?! You both have the same name?`)
}

// hacker1.localeCompare(hacker2) === -1 ? : "true dogs" : "false cats"
// // 2 + 2 === 5 ? "true dogs" : "false cats" 
// // "false cats"




let par1 = `25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot? There's pros and cons to every alternate timeline. Fun facts about this one – It's got giant, telepathic spiders, 11 9/11s, and the best ice cream in the multiverse! This is because you give Morty Smith bad grades, bitch! Listen, Morty, I hate to break it to you but what people call love is just a chemical reaction that compels animals to breed`

let par2 = `If you break the rules, try to leave or lose the game, you will die. Just like Saaaaw. Not today bitch! Flip the pickle over. Wow, so your origin is what? You fell into a vat of redundancy?`

let par3 = `"And"? What more youtube do you want tacked on to this? I turned myself into a pickle, and 9/11 was an inside job?" He threatened to turn me in to the government, so I made him and the government go away! I'm Mr. Crowbar, and here is my friend, who is also a crowbar! Must… continue… moving… in… ways… that… lead… to… dying… with… you.`




console.log((par1 + par2 + par3).split(' ').length)

let par = par1 + par2 + par3 //Made it into one string 

console.log( par.split('you').length - 1 )

//RegExp 
console.log( par.match(/you/g).length )



let phraseToCheck = "A man, a plan, a canal, Panama!"
phraseToCheck = phraseToCheck.replace(/[,! ]/g,"").toLowerCase()


let reversePhrase = phraseToCheck.split('').reverse().join('')

console.log(phraseToCheck)
console.log(reversePhrase)
console.log(phraseToCheck == reversePhrase)

