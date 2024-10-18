// Iteration 1: Names and Input
let hacker1 = "fghjk"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Abcd"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let i = 0;
let driverName = ""
do {
    driverName = driverName + hacker1[i].toUpperCase() + " "
    i++;
} while (i < hacker1.length);

driverName = driverName.slice(0,driverName.length-1)
console.log(driverName)

let navName = ""
let n = hacker2.length - 1

for (i in hacker2) {
    navName = navName + hacker2[n-i]
}
console.log(navName)

//Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nisi vel nunc aliquet luctus. Vivamus risus libero, feugiat in egestas nec, aliquet vitae urna. Pellentesque vitae augue at orci gravida tempor. Fusce eget lobortis turpis. Maecenas tincidunt elit a odio accumsan, vitae dignissim felis tempus. Vivamus risus libero, faucibus quis convallis in, elementum finibus ex. Etiam aliquet lorem turpis, id congue nulla venenatis et. Mauris vitae erat eu ex aliquam venenatis a vel ante. Aenean aliquet scelerisque tellus, dignissim suscipit dolor facilisis eget. Aliquam molestie elementum tortor eget commodo. Aenean neque risus, congue nec nibh sit amet, porta dictum sapien.
Etiam at lacinia urna. Morbi auctor ac lacus at pellentesque. Ut in odio id erat placerat hendrerit. Etiam accumsan risus dui, in eleifend metus eleifend nec. Nullam non mollis nibh, eget mollis risus. Aenean a est risus. Maecenas leo ipsum, commodo at nisl non, laoreet pulvinar purus. Fusce fringilla diam arcu, blandit accumsan turpis accumsan et. Vivamus aliquam, purus rhoncus iaculis auctor, lectus ante fringilla lorem, in aliquet odio augue vitae tortor.
Duis in arcu sit amet arcu vulputate semper. Proin mollis pulvinar diam, nec luctus dui aliquet id. Ut venenatis et sem quis sagittis. Proin rutrum, leo et vehicula ornare, nulla sapien aliquam odio, nec molestie nibh mi ac mauris. Nam ultricies velit justo, quis elementum felis fermentum vel. Maecenas ac suscipit arcu, id euismod tortor. Ut porta ex non arcu egestas, non accumsan lacus accumsan. Proin quis euismod est. Mauris varius enim volutpat, molestie eros eget, scelerisque enim. Duis dui risus, aliquet quis luctus et, lacinia non est. Nullam luctus pulvinar turpis id ultrices. Fusce blandit lacus purus, sit amet pellentesque ipsum tincidunt in.`
console.log(longText.length)

let longText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id nisi vel nunc aliquet luctus. Vivamus risus libero, feugiat in egestas nec, aliquet vitae urna. Pellentesque vitae augue at orci gravida tempor. Fusce eget lobortis turpis. Maecenas tincidunt elit a odio accumsan, vitae dignissim felis tempus. Vivamus risus libero, faucibus quis convallis in, elementum finibus ex. Etiam aliquet lorem turpis, id congue nulla venenatis et. Mauris vitae erat eu ex aliquam venenatis a vel ante. Aenean aliquet scelerisque tellus, dignissim suscipit dolor facilisis eget. Aliquam molestie elementum tortor eget commodo. Aenean neque risus, congue nec nibh sit amet, porta dictum sapien. Etiam at lacinia urna. Morbi auctor ac lacus at pellentesque. Ut in odio id erat placerat hendrerit. Etiam accumsan risus dui, in eleifend metus eleifend nec. Nullam non mollis nibh, eget mollis risus. Aenean a est risus. Maecenas leo ipsum, commodo at nisl non, laoreet pulvinar purus. Fusce fringilla diam arcu, blandit accumsan turpis accumsan et. Vivamus aliquam, purus rhoncus iaculis auctor, lectus ante fringilla lorem, in aliquet odio augue vitae tortor. Duis in arcu sit amet arcu vulputate semper. Proin mollis pulvinar diam, nec luctus dui aliquet id. Ut venenatis et sem quis sagittis. Proin rutrum, leo et vehicula ornare, nulla sapien aliquam odio, nec molestie nibh mi ac mauris. Nam ultricies velit justo, quis elementum felis fermentum vel. Maecenas ac suscipit arcu, id euismod tortor. Ut porta ex non arcu egestas, non accumsan lacus accumsan. Proin quis euismod est. Mauris varius enim volutpat, molestie eros eget, scelerisque enim. Duis dui risus, aliquet quis luctus et, lacinia non est. Nullam luctus pulvinar turpis id ultrices. Fusce blandit lacus purus, sit amet pellentesque ipsum tincidunt in.`
console.log(longText2.length)

n = 0;
let twoLetters = ""
for (let k = 0; k < longText2.length; k++) {
    twoLetters = longText2[k] + longText2[k+1]
    if (twoLetters === "et") {n++}
}

console.log(n)

//Bonus 2:
let phraseToCheck = "put it up"
let word = ""

for (i in phraseToCheck) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) {
    word = word + phraseToCheck[i].toLowerCase()
    }
}

console.log(word)
let letterCount = word.length - 1
let halfCount = Math.floor((word.length - 1) / 2); 

for (let m = 0; m <= halfCount; m++) {
    if (word[m] !== word[letterCount - m]) {
        console.log("This word is not Palindrome!")
        break;
    }

    if (m == halfCount) {
        console.log("This word is indeed Palindrome!")
    }
}