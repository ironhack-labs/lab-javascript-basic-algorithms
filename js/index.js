/*Iteration 1: Names and Input*/
let hacker1 = "Alejandro"
console.log(hacker1)
let hacker2 = "David"
console.log(hacker2)


/*
    Iteration 2: Conditionals
        2.1. Depending on which name is longer, print:
        - The driver has the longest name, it has XX characters. or
        - It seems that the navigator has the longest name, it has XX characters. or
        - Wow, you both have equally long names, XX characters!.
*/
let lenH1 = hacker1.length
let lenH2 = hacker2.length

if (lenH1 > lenH2) {
    console.log(`The driver has the longest name, it has ${lenH1} characters.`)
}
else if (lenH2 > lenH1) {
    console.log(`It seems that the navigator has the longest name, it has ${lenH2} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${lenH1} characters!`)
}


/*
    Iteration 3: Loops
        3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

        3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

        3.3 Depending on the lexicographic order of the strings, print:
        - The driver's name goes first.
        - Yo, the navigator goes first definitely.
        - What?! You both have the same name?
*/
let hacker1WithSpaces = ""
for (const c of hacker1) {
    hacker1WithSpaces += `${c} `
}
console.log(`Hacker 1 with Spaces: ${hacker1WithSpaces}`)


let hacker2Backwards = ""
for (let c = hacker2.length - 1; c >= 0; c--) {
    hacker2Backwards += hacker2[c]
}

console.log(`Hacker 2 Backwards: ${hacker2Backwards}`)


if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name (${hacker1}) goes first.`)
}
else if (hacker2[0] < hacker[0]) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
}
else {
    console.log("What?! You both have the same name?")
}


/*
    Bonus Time!
        Bonus 1:
        Go to lorem ipsum generator and:

        Generate 3 paragraphs. Store the text in a variable type of string.
        Make your program count the number of words in the string.
        Make your program count the number of times the Latin word et appears.
*/
let par = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan tempus nibh, nec pretium orci elementum vel. Vestibulum dapibus, magna eget ullamcorper fermentum, est neque condimentum risus, nec imperdiet sapien nunc id libero. Suspendisse sed ante ut sem ultrices aliquam. In vitae viverra risus, in ullamcorper elit. Phasellus iaculis nec magna sed gravida. Ut tortor augue, commodo gravida facilisis vel, ultrices id sapien. Maecenas venenatis justo lacinia faucibus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit at velit eu luctus. Vivamus leo massa, scelerisque sed magna nec, feugiat sagittis nisi.

Duis gravida venenatis diam. Maecenas commodo venenatis lorem in iaculis. Suspendisse scelerisque erat id mollis ultricies. Morbi eget fringilla purus. Duis dictum purus et magna pretium rutrum. Morbi quis maximus nibh, laoreet tristique ipsum. Etiam vel odio eget eros blandit consequat. In leo ipsum, volutpat sed enim at, accumsan tempus mi. Suspendisse eros orci, cursus et nisl bibendum, egestas lacinia purus. Fusce eu tellus sed ex varius consequat et et lectus. Donec pellentesque est a nisl laoreet, ut vulputate leo maximus. Duis tristique auctor libero vulputate suscipit.

Aliquam fermentum erat non lacinia aliquam. Mauris aliquam lorem in nibh convallis, vitae euismod urna luctus. Integer vel ipsum at odio vehicula tincidunt id at mi. Ut hendrerit, odio ut iaculis posuere, lacus ligula pharetra ligula, in pretium nunc erat vel dolor. Sed sit amet laoreet lacus, sed pharetra sem. Maecenas pretium mauris tellus, non luctus ipsum ultricies non. Vestibulum tempus, elit eget ornare euismod, mi quam vestibulum augue, et feugiat nisl odio sed libero. Sed ante urna, lobortis vitae porta eu, finibus nec lacus. Vestibulum sollicitudin viverra sem in venenatis. Maecenas vel nisl at purus interdum tempus. Nunc tincidunt, neque ut consequat eleifend, purus est varius metus, ac volutpat justo massa sit amet neque.

Pellentesque facilisis purus eu enim auctor, ut condimentum lorem rhoncus. Aenean nibh nunc, sodales eget diam sit amet, fringilla mattis quam. Donec tristique ipsum quis viverra elementum. Nunc rhoncus nibh vel mattis bibendum. Donec molestie rutrum interdum. Praesent vitae nisi ut nunc ultrices condimentum sed non dui. In sagittis massa quis sodales pellentesque. Vestibulum at neque elit. Praesent ut dictum augue. Proin nec semper quam. Nullam volutpat ipsum ac accumsan accumsan. Fusce efficitur mi est, sit amet accumsan libero venenatis eu. In ullamcorper at est at efficitur. Pellentesque euismod eget tortor non dignissim. Aenean imperdiet et ipsum et consectetur.

Sed dapibus sed arcu eget laoreet. Maecenas in turpis vulputate, rhoncus lacus a, porta erat. Sed ut commodo turpis. Cras eget laoreet dolor. Pellentesque pharetra condimentum odio, non blandit odio mollis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt lobortis odio vel tempor. Proin vestibulum, tellus non feugiat tristique, arcu risus euismod mauris, sed dictum sem mi euismod metus. Nulla facilisi. Curabitur non dui in elit condimentum dapibus at in lacus. Vivamus ornare luctus eros at fermentum. Phasellus facilisis elit in nibh efficitur finibus in et sem. Quisque nec dolor ligula. Mauris viverra leo vel dictum faucibus. Quisque at ullamcorper libero. Aliquam quis lectus sodales, lacinia diam et, pellentesque sapien.
`
function counter(string) {
    let delimiters = [",", ".", "!", "?", "'", " ", "  "] // This should be a regex...
    let str = string
    for (const d of delimiters) {
        str = str.split(d)
        str = str.join(' ')
    }

    str = str.split("\n").join('')
    console.log(str.split(' ').length - 1)
}

counter(par)

/*
    Bonus 2:
        Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. 
*/

const palindromCheck = (string) => {

    let str = string.toLowerCase()
    let delimiters = [",", ".", "!", "?", "'", " "] // This should be a regex...

    for (const d of delimiters) {
        str = str.split(d)
        str = str.join('')
    }

    let bw = ""
    for (let c = str.length - 1; c >= 0; c--) {
        bw += str[c]
    }

    if (str == bw) {
        console.log(`String: "${string}" is a palindrome`)
    }
    else {
        console.log(`String: "${string}" is not a palindrom`)
    }
}

const tests = [//"A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
]


tests.forEach((t) => {
    palindromCheck(t)
})