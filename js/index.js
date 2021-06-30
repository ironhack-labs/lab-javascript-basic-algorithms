// Iteration 1: Names and Input

let hacker1 = "Johanna"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Florian"

console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

let driver = hacker1.length;
let navigator2 = hacker2.length;

if (driver > navigator2) {
    console.log(`The driver has the longest name, it has ${driver} characters.`)
}
else if (navigator2 > driver) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator2} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${driver} characters!`)
}

// Iteration 3: Loops


hacker1 = hacker1.split('').join(' ').toUpperCase();
console.log(hacker1)


let reverseHacker2 = ""
for (let i = hacker2.length-1; i >= 0; i--) {
    reverseHacker2 += hacker2[i]
}
console.log(reverseHacker2)


function compare (hacker1,hacker2) {
    for (let i = 0; i < hacker2.length; i++) {
        if (hacker1[i] < hacker2[i]) {
            return "The driver's name goes first.";
        }
        else if (hacker1[i] > hacker2[i]) {
            return "Yo, the navigator goes first definitely.";
        }
        else if (i === hacker2.length-1) { 
            return "What?! You both have the same name?";
        }
    }
}

console.log(compare(hacker1,hacker2))

// Bonus 1

let lorem = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem qui eius voluptates, accusamus tempore dicta id, ipsum voluptatibus aut dolorem maxime cupiditate aliquid saepe, atque modi. Odit ratione tempora dignissimos?
Quisquam ratione hic ducimus possimus facere magni eaque, incidunt sequi ut reiciendis optio, molestias distinctio natus iste sunt repellendus ab quasi. Perferendis, deleniti amet saepe quae deserunt officia nulla illo!
Commodi sit tempore modi, laborum ullam voluptatibus repudiandae ipsum libero, earum nesciunt, saepe debitis quia dolore? Animi, expedita. Soluta molestiae nisi eius dignissimos nihil maxime assumenda aut perspiciatis id facilis.`

let counter = 1
for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === ' '){
        counter += 1;
    }
    else if (lorem[i] == '\n') {
        console.log("Je fonctionne")
        counter += 1;
    }
}
console.log(counter)


let words = lorem.indexOf("et")
console.log(words)




