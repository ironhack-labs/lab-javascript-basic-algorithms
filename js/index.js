// Iteration 1: Names and Input

let hacker1 = 'john'
let hacker2 = 'ana'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)

} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let word = ''
for (i = 0; i < hacker1.length; i++) {
    word = word + (hacker1[i] + ' ')
}
console.log(word.toUpperCase())

let reverse = ''
for (i = hacker1.length - 1; i >= 0; i--) {
    reverse = reverse + (hacker1[i] + ' ')
}
console.log(reverse.toUpperCase())


if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What ? !You both have the same name ?`)
}

//Bonus 1

let spaces = 1
const popino = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie, orci vel tempor egestas, leo ipsum accumsan ligula, non dignissim turpis ante ac neque. Morbi volutpat pharetra maximus. Phasellus at viverra tellus. Praesent consequat odio ligula, at lacinia orci accumsan sit amet. Aliquam porttitor volutpat odio, sed vestibulum ex maximus ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec cursus augue, quis auctor arcu. Aenean et bibendum nulla, sit amet aliquet quam. Fusce tristique odio at felis consequat, a ultricies tortor rutrum. In hac habitasse platea dictumst.Phasellus commodo nisi mi, ut tempus arcu pulvinar ac.Pellentesque facilisis, sapien et condimentum finibus, massa tortor molestie nisl, et ullamcorper erat velit sit amet nulla. Sed at sem vitae quam consectetur sodales.Etiam non neque in leo luctus fermentum.Cras vitae neque arcu.Etiam sed libero iaculis, tincidunt turpis a, mattis nisi.Maecenas a vehicula tortor, eu pulvinar felis.Cras tincidunt convallis mi in elementum.Integer facilisis pharetra odio.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur mollis dui quis neque commodo, eu dapibus eros elementum.Vivamus blandit eleifend lobortis. Fusce magna nunc, laoreet sit amet lectus nec, finibus pharetra nisl.Vestibulum non justo a diam tincidunt varius. Suspendisse non feugiat magna.Phasellus et augue consequat, congue lectus sed, varius nisl.Maecenas rhoncus, enim ac rhoncus finibus, urna ante vestibulum mi, porta bibendum ante ligula sed nisl.Aliquam erat volutpat.Vivamus dapibus fringilla est, ut mollis elit.Aliquam efficitur sem nibh, vitae bibendum sapien malesuada sed.Morbi ex odio, mollis a faucibus ut, molestie a nisi.Cras dictum facilisis urna, eu aliquam massa accumsan eget.Curabitur aliquet lobortis ex ac dictum.Donec aliquet accumsan metus ornare mollis.Donec gravida mattis enim ullamcorper dignissim.Proin vel est et justo aliquam suscipit nec ac felis.Curabitur egestas viverra leo, molestie interdum orci posuere vitae.Donec mollis, quam ac sollicitudin laoreet, felis nibh fermentum dolor, id molestie ipsum turpis eget ante.Pellentesque consequat tristique erat id maximus.Duis consectetur neq"

for (i = 0; i < popino.length; i++) {
    if (popino[i] == ' ') {
        spaces = spaces + 1
    }
}

console.log(spaces)

//Bonus 2

// let palindrome = (word1) => {
//     let reverseWord1 = ''
//     for (i = word1.length - 1; i >= 0; i--) {
//         reverseWord1 = reverseWord1 + (word1[i]
//     }

//     if (reverseWord1[i + 1] == word1) {
//         return 'palindrome'
//     }

//     else {
//         return 'Not palindrome'
//     }
// }

// console.log(palindrome('Roma '))

