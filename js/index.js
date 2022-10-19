// Iteration 1: Names and Input
let hacker1 = "Carlos"
//console.log("The driver's name is " + hacker1)

let hacker2 = "Daniela"
//console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals
 /*if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
 }
 else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 }
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
 }*/
// Iteration 3: Loops

/*let driverName = ""
for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " "
    console.log(driverName)
}*/

/*let driverInverse = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    driverInverse += hacker1[i]
    console.log(driverInverse)
} */

/*
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}*/

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt libero vitae odio vulputate rutrum. Suspendisse feugiat vitae ante sed aliquam. Donec velit lectus, posuere et ex ac, consequat porta est. Nullam hendrerit consequat pellentesque. Pellentesque purus quam, ornare at dignissim sit amet, malesuada luctus orci. Sed sodales cursus varius. Nunc fermentum, orci ac eleifend tristique, arcu elit porta justo, vel volutpat leo tellus nec lorem. Maecenas faucibus turpis a imperdiet fermentum. Nulla porttitor vehicula nunc a tincidunt. Donec hendrerit ante in quam lobortis maximus. Nunc sed nisi at arcu laoreet aliquam.
Curabitur vel libero felis. Nam diam nisl, elementum in nunc et, finibus accumsan quam. Ut ut enim nibh. Duis sagittis lobortis magna, blandit suscipit massa consectetur non. Aenean egestas lectus sit amet vehicula vulputate. Quisque tincidunt vulputate mi eu facilisis. Morbi non malesuada nibh, non lobortis eros. Quisque ac diam vitae sapien vehicula posuere eget eu risus. Nam mollis mi nisl, quis malesuada libero aliquam sagittis. Praesent at efficitur nisi, vel vehicula nisl. Mauris gravida commodo odio, vel egestas turpis ullamcorper vel. Suspendisse molestie bibendum eros, fermentum condimentum massa ultrices nec. Maecenas iaculis quam a ante pellentesque egestas.
Aliquam a magna leo. Sed venenatis ante sit amet quam feugiat scelerisque. Duis mattis risus eu est scelerisque, in gravida elit efficitur. Suspendisse nec ultrices ligula. Aenean non magna et enim pretium tincidunt non ut felis. Donec venenatis consectetur velit non sodales. Fusce non augue quis tellus pellentesque blandit. Sed enim nisi, pretium ac lobortis quis, pharetra non odio. Mauris pharetra nibh id varius porttitor. Donec ultrices dictum sapien, vel egestas neque malesuada id. Etiam vitae erat nunc. Nulla luctus lacus in velit mattis, et sollicitudin arcu egestas. Praesent accumsan dui sed ante molestie, at vestibulum tortor luctus. Suspendisse dictum, lectus eu sollicitudin blandit, risus velit rutrum libero, in luctus risus neque id erat.`

let wordsText = text.split(' ')
console.log(wordsText.length)
let count = 0

for (let i=0; i < text.length; i++) {
    const twoChar = text[i] + text[i + 1]
    if (twoChar == "et") {
        count++
    }
}
console.log(count)
*/

/*
function palindromeCheckerLooped (word) {
    let trimmedWord = word.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");
    trimmedWord = trimmedWord.join("");
    let trimmedWordReverse= "";
    for(let i = trimmedWord.length-1; i >= 0; i--) {
        trimmedWordReverse += trimmedWord[i];
    }
    return trimmedWord === trimmedWordReverse;
}
console.log(palindromeCheckerLooped ("arara"))
*/
