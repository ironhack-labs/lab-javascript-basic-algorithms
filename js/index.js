// Iteration 1: Names and Input
let hacker1 = "Sabela"
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Nina"
//	1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2} `)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker1.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `)
}

// Iteration 3: Loops
//3.1
hacker1 = hacker1.toUpperCase().split("").join(" ");

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1.charAt(i))
}
//3.2
for (let i = (hacker2.length - 1); i >= 0; i--) {
    console.log(hacker2.charAt(i))
}
//3.3
switch (hacker1.localeCompare(hacker2)) {
    case 1:
        console.log(`The driver's name goes first.`);
        break;
    case -1:
        console.log(`Yo, the navigator goes first definitely.`);
        break
    case 0:
        console.log(`What?! You both have the same name?`)
}

// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tempus diam. Aliquam dapibus pharetra augue vitae auctor. Proin a nibh sit amet dui porttitor cursus eu et ex. Donec facilisis velit risus, sit amet accumsan nibh rhoncus vitae. Suspendisse purus ante, mollis sed tortor sed, convallis ultricies tellus. Vestibulum porttitor, sem lobortis dignissim ullamcorper, diam sapien convallis risus, non lacinia quam nibh et arcu. Phasellus ex est, gravida vel urna vel, pretium aliquam leo. Mauris convallis quis massa sed venenatis. Praesent egestas tortor non mi tincidunt feugiat. Fusce porta lacus eu sapien facilisis tincidunt. Pellentesque sed volutpat libero.

Proin nec sodales sapien, et porttitor elit. Pellentesque tristique lacus luctus mi dignissim, vel aliquam massa ornare. Praesent et ante bibendum, viverra leo a, congue ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices dolor nec egestas posuere. Vestibulum pharetra sem neque, eget condimentum sem eleifend congue. Quisque sagittis nisi vitae arcu ultricies finibus nec vel nisi. Sed a ex magna. Duis pellentesque lacus a cursus viverra. Phasellus dolor elit, bibendum a pharetra tempus, pretium ut sapien. Nunc sed efficitur libero. Quisque lobortis volutpat tortor, quis vulputate elit viverra consequat. Donec venenatis volutpat ante, eget fermentum justo tempor id. Phasellus diam dui, congue vel feugiat nec, dignissim in lectus.

Aliquam sagittis eu arcu eget fermentum. Suspendisse fringilla, lacus et tempor hendrerit, diam nisl ultricies diam, vel malesuada sapien nisi in tellus. Morbi mollis dapibus consequat. Phasellus mattis ultrices dolor, nec maximus est posuere vel. Donec sem turpis, varius sit amet tincidunt vitae, ullamcorper vitae orci. Etiam ultricies ligula eget aliquet auctor. Cras eleifend, ipsum in facilisis sodales, lorem ipsum tristique ipsum, vel blandit nulla est quis quam. Integer venenatis consectetur lectus in dictum. Etiam congue lorem eu consectetur lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in faucibus ex, non ornare risus. Phasellus eleifend diam a tempor dignissim. Ut placerat lobortis sem vel dignissim. Donec tincidunt ante nisi, eu porta lectus venenatis ut. Integer cursus dolor tortor, sed vestibulum metus maximus in.`
// word count
function WordCount(str) {
    return str.split(" ").length;
}
console.log(WordCount(loremIpsum));

//et count
function etCount(str) {
    return str.split(' et ').length;
}
console.log(etCount(loremIpsum))

//Bonus 2

function palindrome(str) {

    let newStr = str.toLowerCase().split("");

    for (var i = 0; i < (newStr.length) / 2; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

palindrome("Amor Roma")