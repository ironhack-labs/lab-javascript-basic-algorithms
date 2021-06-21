// Iteration 1: Names and Input
const hacker1 = 'Konhin'
console.log(hacker1)

const hacker2 = 'Cami'
console.log(hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
// A.
let name1 = ''
for (let i = 0; i < hacker1.length; i++) {
    name1 += `${hacker1.toUpperCase().charAt(i)} `
}
console.log(name1)

// B.
let name2 = ''
for (let i = 1; i <= hacker1.length; i++) {
    name2 += `${hacker1[hacker1.length - i]} `
}
console.log(name2)

// C.
const arr = [
    hacker1,
    hacker2
]
if (arr[0] == arr[1]) {
    console.log('What? You both have the same name?')
} else if (arr.sort()[0] === hacker1) {
    console.log(`${arr.sort()[0]} goes first`)
} else {
    console.log(`Yo, ${arr.sort()[0]} goes first definitely`)
}

// Bonus 1
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac risus bibendum, volutpat mauris in, pretium mauris. Donec sed turpis vehicula, congue tellus ut, vestibulum mi. Etiam at urna magna. Vivamus mattis leo quis ipsum lobortis elementum. Nunc maximus tortor sit amet ipsum euismod porttitor. Cras accumsan sapien eget efficitur hendrerit. Vestibulum nec tempor mi, euismod finibus nisl. Duis nulla tellus, porttitor vitae nibh non, tincidunt convallis tellus.

Cras vel sapien lorem. Praesent pulvinar orci nec turpis hendrerit, ut consectetur urna porttitor. Ut sodales faucibus sapien ut tincidunt. Aenean eget hendrerit sapien. Suspendisse viverra lectus eget odio congue, id scelerisque sapien laoreet. Sed eget vulputate augue. In ante lectus, scelerisque eget ligula eu, luctus lacinia enim. Pellentesque odio lectus, congue quis fermentum sed, tincidunt quis lacus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur ultricies luctus luctus. In eget vehicula arcu. Fusce pretium orci eu dolor condimentum molestie. Ut molestie pulvinar ex id fringilla. Duis aliquet, ligula eu faucibus commodo, diam odio finibus nisl, a scelerisque erat ex vel lacus. Integer fringilla ullamcorper erat at tristique. Nullam ultrices rutrum sodales. Donec at felis in dui dapibus ullamcorper. Nunc feugiat lobortis ultrices. Nulla mauris arcu, consequat blandit orci nec, pellentesque rutrum diam. Aliquam erat volutpat. Duis id nunc augue. Sed vitae nibh nec lorem posuere elementum vel ut mi. Mauris purus odio, tincidunt malesuada ligula eget, sodales suscipit tellus. Duis in bibendum mauris.`

function wordCount(phara) {
    let total = 0
    for (let i = 0; i < phara.length; i++){
        if (phara[i] === " ") {
            total++
        }
    }
    total++
    console.log(total)
}
wordCount(paragraphs)

function wordCountEt(phara) {
    let counter = 0
    let words = ''
    for (let i = 0; i < phara.length; i++){
        if (phara[i] == "e") {
            words = 'e'
        } else if (phara[i] === "t" && words === 'e' && phara[i + 1] === " " && phara[i - 2] === " "){
            words = ''
            counter++
        } else {
            words = ''
        }
    }
    console.log(counter)
}
wordCountEt(paragraphs)

// Bonus 2
let phraseToCheck = 'Anilina'

function palindrome(string) {
    let newWord = ''
    for (let i = 1; i <= string.length; i++) {
        newWord += string[string.length - i]
    }
    if (newWord.toUpperCase() == string.toUpperCase()) {
        console.log(`Congratulations ${string} is a polindrome.`)
    } else {
        console.log(`${string} is not a polindrome.`)
    }
}
palindrome(phraseToCheck)