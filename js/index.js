// ITERATION 1: Names and Input

// 1.1
const hacker1 = "Pablo"

// 1.2
console.log(`The driver's name is ${hacker1}`)

// 1 .3
const hacker2 = "Juan"

// 1.4
console.log(`The navigator's name is ${hacker2}`)

// ITERATION 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
        } else {
            console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// ITERATION 3: Loops

// 3.1
const driverUpp = hacker1.toUpperCase()
let driverSeparated = ""

for (let i = 0; i < driverUpp.length; i++) {
    driverSeparated += driverUpp[i] + " "
}

console.log(driverSeparated)

// 3.2
let navigatorReversed = ""

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReversed += hacker2[i]
}
console.log(navigatorReversed)

//(3.3)
if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The driver's name goes first`)
    } else if (hacker2.localeCompare(hacker1) === 1) {
        console.log(`Yo, the navigator goes first definitely.`)
        } else {
            console.log(`What?! You both have the same name?`)
    }

// BONUS 1
let randomParragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lobortis erat. Nulla dignissim, elit eu aliquet malesuada, metus magna eleifend nisi, non egestas metus libero quis orci. Aenean tempus porta facilisis. Suspendisse potenti. Donec bibendum imperdiet condimentum. Donec condimentum tortor nibh, id finibus nulla dapibus vitae. Duis blandit velit ac elit suscipit egestas. Mauris congue eros id dictum dapibus. Quisque nec porttitor tortor. Cras interdum cursus faucibus. Sed eget libero vel risus condimentum scelerisque et at ipsum. Nullam consectetur lacinia ante maximus molestie. Vivamus eu mauris quis sapien convallis gravida. Donec bibendum ipsum interdum dolor sollicitudin sodales. In tempor lacus aliquet enim tincidunt, in tincidunt velit aliquet. Nunc tempor convallis eros, et elementum lectus pharetra quis. Fusce dapibus nibh velit, vitae tincidunt ligula imperdiet ut. Praesent aliquam pellentesque elit. Pellentesque semper lacus diam, in feugiat tellus viverra a. Curabitur dignissim, erat ut gravida ultricies, nisi justo imperdiet nunc, et tristique felis lorem eget turpis. Phasellus tempor arcu vitae nulla fermentum aliquet vitae quis tortor. Morbi porta tincidunt ligula, vitae porttitor dui dictum eget. Suspendisse quis odio leo. Nulla sit amet nulla elementum, laoreet quam at, accumsan mi. Quisque venenatis tristique sem, et blandit elit. Vivamus non quam rhoncus, fringilla lorem quis, tempor diam. Vivamus erat nisi, vulputate nec viverra vel, placerat eget ex. Ut non eros eu est gravida imperdiet. Aliquam libero eros, dapibus vitae vulputate in, finibus a massa. Phasellus sed dui accumsan, molestie sem eu, mattis sapien. Pellentesque laoreet arcu at ante iaculis, vitae aliquam mauris semper. Cras vitae ultricies velit. Donec dolor sem, rutrum nec orci ac, ullamcorper porttitor massa. Donec laoreet sem ac lacinia dictum. Mauris vel arcu sapien. Phasellus eu velit consectetur, molestie sapien id, ornare lorem. Quisque aliquet fringilla nisi, vitae mollis risus imperdiet id. Morbi nec eros sapien. Integer ut tellus vitae leo blandit cursus. Nam commodo eleifend quam, at sagittis eros imperdiet eget. Ut ac leo eleifend, ultricies velit eget, feugiat mauris."

// Make your program count the number of words in the string.

let wordCount = 0

for (let i = 0; i < randomParragraph.length; i++) {
    if (randomParragraph[i] === " ") {

    wordCount += 1

    }
}

console.log(wordCount + 1) // Le sumo 1 porque a la última palabra no le sigue un espacio(" ")

// Make your program count the number of times the Latin word "et" appears.

let countEt = 0

for (let i = 0; i < randomParragraph.length; i++) {
    if (randomParragraph[i] === " " && randomParragraph[i + 1] === "e" && randomParragraph[i + 2] === "t" && randomParragraph[i + 3] === " ") {

    countEt += 1

    }
}

console.log(countEt)





