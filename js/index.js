// Iteration 1: Names and Input

let hacker1 = "Perry"

console.log("The driver's name is " + hacker1);

let hacker2 = "Petunia" 

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
} else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
} else if(hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters")
} 


// Iteration 3: Loops

let msg = '';

for (let i = 0; i < hacker1.length; i++) {
    msg += `${hacker1[i]} `
}
console.log(msg)

let msg2 = '';
for (let i = 1; i <= hacker2.length; i++) {
    msg2 += hacker2[hacker2.length - i]
}
console.log(msg2)
// console.log(hacker1.split("").join(" ").toUpperCase());

// console.log(hacker1)


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if(hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}

// Bonus 1 :

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum mattis quam et malesuada. Ut lorem quam, vehicula eget iaculis condimentum, malesuada eget est. Ut ultrices, purus sit amet ornare dapibus, purus est feugiat turpis, id cursus lectus enim sit amet purus. Cras rutrum scelerisque dignissim. Morbi gravida, sapien quis luctus faucibus, diam nisl dignissim lorem, vitae sollicitudin quam ex nec erat. Mauris et ex quis neque ultricies congue ut non massa. Proin nulla turpis, vestibulum sit amet tristique et, scelerisque sit amet magna. Aliquam erat volutpat. Etiam non vestibulum lorem. Mauris egestas quis eros ut volutpat.

Nullam fringilla gravida risus, in sodales lectus auctor et. Nullam odio nibh, commodo ac consectetur feugiat, imperdiet ornare leo. Etiam placerat lorem quis consequat pellentesque. Suspendisse suscipit nulla et diam feugiat, quis laoreet neque cursus. Curabitur non est pharetra, ultrices ligula id, luctus sem. Morbi pharetra ex nec nunc ultrices, ac ultricies nisi tempor. Mauris quis neque tellus. Morbi non est vel purus ultricies iaculis vel nec massa. Nam a neque facilisis, maximus odio at, posuere odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut est ipsum, varius eget luctus id, accumsan quis purus.

Sed pulvinar, augue ut placerat faucibus, eros eros accumsan libero, at vestibulum eros eros sed sapien. Nam congue quam quam, sit amet ullamcorper turpis elementum sit amet. Phasellus venenatis eros eu felis sodales commodo. Vivamus finibus ultricies est vitae elementum. Etiam semper arcu in neque congue lobortis. Fusce quis ligula ut mauris porttitor imperdiet eu vel sem. Nullam porta blandit leo, ut pellentesque libero tristique eget. Aliquam erat volutpat. Fusce sodales eu mi quis vestibulum.`

let count1 = 0
let count2 = 0

for (let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === ' ') {
        count1 += 1
    }
    if (`${loremIpsum[i]}${loremIpsum[i+1]}${loremIpsum[i+2]}${loremIpsum[i+3]}` === ' et ') {
        count2 += 1
    }
}
console.log(`We found ${count1} words`)
console.log(`We found ${count2} occurrences of 'et'`)

// Bonus 2 :

const phrasesToCheck = [
    `Was it a car or a cat I saw?`,
]

for (let i = 0; i < phrasesToCheck.length; i++) {
    let word1 = '';
    let word2 = '';
    let phrase = phrasesToCheck[i]

    for (let i = 0; i < phrase.length; i++) {
        word1 += phrase[i]
        word2 += phrase[phrase.length - 1 - i]
    }
    console.log(word1)
    console.log(word2)
}