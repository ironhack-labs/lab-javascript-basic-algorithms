// Iteration 1: Names and Input
let hacker1 = 'Ricardo'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Salva'
console.log(`The driver's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    longestname1 = hacker1.length
    console.log(`The driver's has the longest name, it has a ${longestname1} characters.`)
} else if (hacker1.length < hacker2.length) {
    longestname2 = hacker2.length
    console.log(`It seems that the navigator has the longest name, it has ${longestname2} characters.`)
} else {
    console.log(`Wow, you both equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(`${hacker1.charAt([i])}`)
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(`${hacker2.charAt([i])}`)
}

if (hacker1.charAt(0) < hacker2.charAt(0)) {
    console.log("The driver's name goes first.")
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}
// BONUS
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus est quis velit iaculis accumsan. In hac habitasse platea dictumst. Aliquam risus velit, commodo sit amet magna a, posuere elementum sem. Cras eget molestie augue. Nam orci nisl, varius finibus faucibus vitae, facilisis vitae sem. Donec at vestibulum justo, a consequat purus. Aenean in ligula vitae sem euismod ornare. Vivamus blandit est elementum libero ultrices porttitor. Proin in egestas urna. Vivamus rhoncus ante pulvinar congue venenatis. Fusce imperdiet felis consequat accumsan malesuada. Mauris ultrices, quam sed viverra cursus, risus tellus tempus sapien, quis gravida nibh ligula sollicitudin sapien. Nulla a lorem vel ex egestas faucibus. Proin bibendum sapien sit amet ipsum euismod, at convallis nunc bibendum. Sed placerat diam ut velit efficitur, ut mattis ante lobortis. Nullam eros enim, pretium eu egestas at, ultrices eu mi. Morbi orci arcu, euismod non scelerisque nec, ullamcorper et dolor. In id fermentum sapien. Integer viverra posuere lorem, sit amet elementum nulla bibendum in. Donec a ipsum placerat, malesuada lacus a, tincidunt nulla. Maecenas in dolor auctor, imperdiet turpis a, rutrum mauris. In sapien erat, commodo a condimentum a, convallis malesuada est. Donec scelerisque luctus pellentesque. Sed quis consequat nulla. Nulla tristique, sem id semper pharetra, neque eros vehicula nisl, ut volutpat leo sem at nisl. Proin consequat nulla justo, sit amet cursus arcu vehicula ut. Pellentesque dignissim urna eros, sed suscipit leo lacinia id. Nam sem turpis, fringilla vel nunc a, varius volutpat risus. Cras eget nisl ex. Quisque id purus eget quam dignissim fermentum. Sed sit amet iaculis diam.`

function loremcount(lorem) {
    let countspaces = 0
    for (let i = 0; i < lorem.length; i++) {

        if (lorem[i] === " ") {
            countspaces += 1
        }
    }
    console.log(countspaces)
}
loremcount(lorem)
