// Iteration 1: Names and Input

let hacker1 = 'Monchos'
let hacker2 = 'JS'
console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigators's name is ${hacker2}.`)


// Iteration 2: Conditionals

let hacker1 = 'Moncher'
let hacker2 = 'Ramón'

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}

// Iteration 3: Loops

let hacker1 = 'Monch'
let hacker2 = 'Ramón'

let finalName = ""
let reverseName = ""

for (let i = 0; i < hacker1.length; i++) {

    finalName += hacker1[i] + " "
}

console.log(`${finalName.toLocaleUpperCase()}`)

for (let i = hacker1.length - 1; i >= 0; i--) {

    reverseName += hacker1[i]
}

console.log(`${reverseName}`)


switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`)
        break;

    case 1:
        console.log(`Yo, the navigator goes first definitely.`)
        break;

    default:
        console.log(`What?! You both have the same name?`)
}

// Bonus 1

//No hemos podido guardar los párrafos con los saltos de línea porque repl.it no los reconocía como parte del string (o es que no hemos sabido, directamente)

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis nisl dapibus, semper lorem vitae, elementum purus. In sit amet ante a mauris viverra fringilla sit amet at nisi. Pellentesque faucibus felis ac dolor elementum, ut cursus diam vestibulum. Mauris at tortor feugiat, congue erat in, gravida felis. Etiam sit amet commodo lacus. Phasellus pharetra porttitor imperdiet. Mauris ac dui blandit, laoreet risus eu, facilisis nisl. Nulla efficitur at dolor sed iaculis. Curabitur sit amet sem a sem vulputate blandit. Donec placerat, sapien a tincidunt hendrerit, est libero dignissim lacus, a cursus sem mauris nec turpis. Integer tincidunt pretium neque nec porta. Suspendisse molestie euismod maximus. Proin porta mollis luctus. Vestibulum lectus ante, pulvinar sed gravida nec, pellentesque eu lacus. Aenean vestibulum augue id est eleifend, ornare rutrum tellus aliquet. Vivamus interdum suscipit pulvinar. Nullam mollis iaculis risus eu cursus. Mauris mollis orci at diam tristique, eget congue tellus rhoncus. Donec sed risus convallis ex rutrum molestie eget eget massa. Nam arcu diam, interdum egestas leo vitae, egestas condimentum sapien. Pellentesque diam est, faucibus eu suscipit ut, blandit a ligula. Fusce ut ante mattis, tempus enim non, suscipit eros. Phasellus iaculis placerat feugiat. Vestibulum ut quam eleifend, molestie lacus vel, efficitur magna. Integer a suscipit augue, eget volutpat justo. Duis gravida pellentesque nisi, id molestie tortor hendrerit quis. Aenean ut lacinia lectus. Nunc eget tincidunt nisi. Vivamus lobortis neque imperdiet, interdum nibh in, finibus sem. Nullam consectetur odio eleifend lectus consectetur, pretium condimentum dui tincidunt. Etiam scelerisque lorem at velit lobortis, a commodo massa congue. Quisque vitae metus eget urna pretium porttitor non nec nulla."

let count = 0;
let count2 = 0

let words = text.split(" ");

for (i = 0; i < words.length; i++) {
    if (words[i] != "")
        count += 1;
}

console.log(`The text has ${count} words`)

for (i = 0; i < words.length; i++) {
    if (words[i] != "" && words[i] === 'et')
        count2 += 1;
}

console.log(`The word 'et' appears ${count2} times`)
