// Iteration 1: Names and Input

// 1.1 create variable with hacker's name //
let hacker1 = "Tom"

// 1.2 print message //
console.log(`The driver's name is ${hacker1}`)

// 1.3 create variable with navigator's name //
let hacker2 = "Irene"

// 1.4 print message //
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

// if true, excute first log. When false display second log
if (hacker1.length >= hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length >= hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${xx} characters!`)
}

// Iteration 3: Loops

// 3.1 
console.log(`${hacker1.charAt(0).toUpperCase()} ${hacker1.charAt(1).toUpperCase()} ${hacker1.charAt(2).toUpperCase()}`)

// 3.2
let navigatorName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

// 3.3 used if and else if statements to print string depending which variable alphabetically comes first. I do not understand what the purpose of a loop would be here.
if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`)
}

else if(hacker2 < hacker1){
    console.log(`Yo, the navigator goes first, definitely.`)
}

else if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
}