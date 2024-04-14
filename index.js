// Iteration 1: Names and Input

var hacker1 = 'Amir'
console.log("The driver's name is " + hacker1)
var hacker2 = 'John'
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

var num1 = hacker1.length, num2 = hacker2.length
var text = num1 > num2 ? "The driver has the longest name, it has " + num1 + " characters."
: num1 < num2 ? "It seems that the navigator has the longest name, it has " + num2 + " characters."
: "Wow, you both have equally long names, " + num1 + " characters!"
console.log(text)

// Iteration 3: Loops

for (let letter of hacker1) {
    console.log(letter.toUpperCase())
}

function revStr(string, lower, join) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === ',') continue
        if (join && string[i] === ' ') continue
        if (lower) reversed += string[i].toLowerCase()
        else reversed += string[i];
    }
    return reversed
}

console.log(revStr(hacker2))

if (hacker1 === hacker2) text = "What?! You both have the same name?"
else {
    for (let i = 0; i < hacker1.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            text = "The driver's name goes first."
            break
        }
        if (hacker1[i] > hacker2[i]) {
            text = "Yo, the navigator goes first, definitely."
            break
        }
    }
}
console.log(text)

// Bonus 1

var longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec neque iaculis, fermentum velit vitae, rutrum enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc imperdiet vehicula tortor, in cursus nisl pretium id. Donec accumsan eu arcu in ornare. Quisque vitae nunc eget nisl lacinia pulvinar eget vitae tortor. Ut accumsan fringilla consectetur. Maecenas ultricies ex quis massa posuere volutpat. Vivamus eleifend varius nisi, sit amet ullamcorper arcu iaculis ut. Integer scelerisque, arcu et rutrum ultrices, felis erat eleifend nisi, ut iaculis magna erat sit amet augue. Aliquam sed massa id elit consectetur porta eu id mauris. Pellentesque molestie, dui a aliquet suscipit, neque diam ornare nunc, et accumsan erat orci pharetra ligula. In fermentum commodo sapien, non dignissim orci. Nunc eget efficitur lorem. Nullam quis odio id enim maximus dignissim. Fusce congue porta hendrerit. Mauris ultricies gravida risus, ac dignissim neque facilisis vitae. Praesent non est ut nisl dignissim mollis at eget nisl. Etiam blandit, justo eget faucibus ornare, nulla augue dictum purus, sed varius justo neque quis ex. Nullam a dolor imperdiet, vestibulum quam sed, tristique nisl. Integer consequat libero nec nibh vehicula luctus et ac eros. Maecenas ullamcorper pellentesque turpis. Sed urna nulla, gravida et pellentesque quis, vehicula id nisl. Phasellus odio augue, porttitor ac erat id, euismod molestie ex. Proin aliquet dignissim risus, et porttitor eros bibendum finibus. Aenean luctus est erat, eu eleifend ligula fringilla in. Aliquam nec eros enim. Proin luctus tincidunt augue. Vivamus nec mollis ante, quis aliquet tellus. Sed vel vestibulum nulla. Pellentesque varius tincidunt ultrices. Curabitur nisi lacus, rutrum ac sagittis quis, suscipit accumsan magna. Vestibulum maximus semper tortor sit amet ornare. Mauris aliquam a diam sed pulvinar. In eget aliquam neque. Cras ante libero, dignissim vel aliquet non, cursus faucibus neque. Sed tincidunt est libero, et hendrerit est laoreet at."
var words = longText.split(" ")
console.log('the number of words is ' + words.length)
words = words.filter(w => w === 'et')
console.log('the number of times the Latin word "et" appears is ' + words.length)

// Bonus 2

function joinStr(string) {
    let joinedStr = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') continue
        if (string[i] === ',') continue
        joinedStr += string[i].toLowerCase()
    }
    return joinedStr
}

var phraseToCheck = 'A man, a plan, a canal, Panama'
var text = joinStr(phraseToCheck) === revStr(phraseToCheck, true, true) ? 'The phrase is a palindrome' : 'The phrase is not a palindrome'
console.log(text)
