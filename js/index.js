// Iteration 1: Names and Input
const hacker1 = 'Mohamed'
const hacker2 = 'Hugo'

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equaylly long names, ${hacker1.length} characters.`)
}

// Iteration 3: Loops
//Exo 3.1

let hacker1CapitalLetter = ''
for (let i = 0; i < hacker1.length; i++) {
    hacker1CapitalLetter += hacker1[i].toUpperCase() + " "
}
console.log(hacker1CapitalLetter)

// Exo 3.2

let hacker2ReverseOrder = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2ReverseOrder += hacker2[i]

}
console.log(hacker2ReverseOrder)

// let hacker2ReverseOrder = [...hacker2].reverse().join('')
// console.log(hacker2ReverseOrder)

// Exo 3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} goes first`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitly')
} else {
    console.log('What?! You both have the same name?')
}

//BONUS 1

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec velit sodales, ultrices leo quis, faucibus lorem. Nam faucibus posuere volutpat. Donec sit amet odio massa. Phasellus maximus risus ut aliquet vulputate. Pellentesque a ultricies dui, a laoreet felis. Aliquam non sodales augue. Maecenas laoreet vulputate quam, at convallis ante maximus eget. Nunc finibus lacus vitae pretium vulputate. Nulla posuere sem est, et tincidunt diam varius vel. Proin rutrum consequat ligula, sit amet molestie ipsum commodo et. Suspendisse pulvinar enim justo, vitae placerat nisi ultrices at. Phasellus dui ante, convallis eget dui id, ultricies malesuada dui. Etiam quis nibh quis lectus gravida fringilla.

Ut bibendum eleifend rutrum. Vivamus id ante maximus urna congue suscipit. Nam turpis ipsum, mollis eleifend placerat a, maximus nec enim. In pharetra massa sed lectus aliquam aliquet. Nunc porttitor neque quis dictum efficitur. Maecenas eget tortor mollis, blandit nisl in, venenatis diam. Fusce facilisis elit sapien, nec convallis elit ornare at. Morbi laoreet rutrum nibh. Vestibulum quis pulvinar est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris aliquet elit vitae mauris tempor tristique. Duis venenatis lorem ut pretium consequat. Morbi vulputate tortor et augue maximus, eget viverra purus auctor.

Ut non ex vel sem posuere tincidunt. Sed eleifend tempus augue, lobortis lacinia quam blandit et. Ut tincidunt quam vitae metus volutpat sollicitudin et a risus. Maecenas imperdiet ipsum vestibulum magna viverra, ac congue leo congue. Nullam eu elementum leo. Sed feugiat purus eu dapibus mattis. Nam ullamcorper nunc vel sagittis mollis. Curabitur porttitor nulla eleifend turpis sodales, a lobortis neque luctus. Fusce dictum odio a tortor facilisis iaculis. Curabitur maximus ipsum eu diam condimentum pellentesque ut id quam. Donec ut arcu ac odio tempor lacinia. Donec in massa in augue consectetur ullamcorper. Nulla eu fermentum nibh, ac varius ex. In hac habitasse platea dictumst. Phasellus aliquam viverra urna, ut faucibus libero cursus vulputate.'

count = paragraph.split(/\s+/).length;
console.log(count)
