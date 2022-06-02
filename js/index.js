// Iteration 1: Names and Input
const hacker1 = 'Carolina'
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = 'Marcos'
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
//3.1
let upperName = ''

for (let i = 0; i < hacker1.length; i++) {
    upperName += hacker1[i] + ' '

}
console.log(upperName.toLocaleUpperCase())
//3.2
let reverseName = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i]
}
console.log(reverseName)
//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo risus, pellentesque vel velit nec, auctor sagittis magna. Fusce auctor mauris at accumsan mollis. Fusce accumsan felis ex, et accumsan nunc egestas in. In sit amet semper lectus, quis consectetur erat. Etiam nec nisl eros. Phasellus ut bibendum justo, ac porta ipsum. Vestibulum cursus tincidunt auctor. Integer facilisis nisi eget fringilla pulvinar. In viverra dignissim vulputate. Integer posuere felis sollicitudin lorem laoreet, at finibus libero fermentum. Etiam vehicula libero nec venenatis interdum. Phasellus et vulputate dui.

Sed augue purus, sollicitudin quis ipsum id, venenatis efficitur quam. Sed nec felis vel nulla placerat eleifend. Cras eget bibendum elit. Etiam rhoncus, erat in auctor dictum, neque odio iaculis lorem, at venenatis orci tellus sit amet dui. Phasellus tristique mattis mauris non volutpat. Vestibulum libero ligula, gravida quis mattis ac, tristique eu justo. Vestibulum porta nisl est, non vestibulum metus imperdiet vitae. Curabitur id nulla sed risus commodo viverra eget sed justo.

In in massa elit. Maecenas interdum, ex at tristique sagittis, purus neque eleifend sem, nec cursus lorem nunc et velit. Curabitur tincidunt fringilla nulla, eget efficitur nisi egestas at. Aenean viverra felis vitae tempor rutrum. Nunc porttitor in diam nec laoreet. Nunc nec condimentum nibh. Suspendisse potenti. In posuere, nibh sit amet ornare feugiat, eros ipsum mollis nisi, placerat volutpat velit tortor ut elit. Sed sagittis quam in arcu pharetra, non iaculis risus pulvinar. Donec vehicula erat et neque tincidunt interdum sed eu dolor. Nunc a elit ut tellus tincidunt porttitor. Integer euismod laoreet leo, a lacinia diam congue a. Integer non hendrerit justo. Curabitur vitae nibh tempor, ultrices ipsum sed, pellentesque sem.`

let count = loremIpsum.split(' ')
let sum = ''
console.log(count)

