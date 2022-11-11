// Iteration 1: Names and Input
console.log('Excersise 1:')

let hacker1 = "Daniel"
let hacker2 = "Lenis"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
console.log('Excersise 2:')
if (hacker1.length > hacker2.length) console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
else if (hacker1.length < hacker2.length) console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)


// Iteration 3: Loops

console.log('Excersise 3.1:')
let capitalised = ''

for (let character of hacker1) {
    capitalised = capitalised + ' ' + character.toUpperCase()
}
console.log(capitalised)


console.log('Excersise 3.2:')

let reversedNavigator = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i], i)
    reversedNavigator += hacker2[i]
}

console.log(reversedNavigator)



console.log('Excersise 3.3:')

if (hacker1 === hacker2) console.log('What?! You both have the same name?')
else {
    let longest = ''
    if (hacker1.length > hacker2.length) longest = hacker1
    else if (hacker1.length < hacker2.length) longest = hacker2
    else longest = hacker1
    for (let i = 0; i <= longest.length; i++) {
        if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
            console.log('The drivers name goes first')
            break;
        }
        else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
            console.log('Yo, the navigator goes first definitely.')
            break;
        }
    }
}

console.log('Bonus 1:')

let paragraphs = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed magna ac est ornare vehicula ut vel magna. Curabitur vel convallis metus. Donec tempus dictum interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sed ornare sem. Nunc pulvinar iaculis odio non vehicula. Nunc lectus ligula, aliquam a ligula vitae, sodales tincidunt augue. Curabitur nisi tellus, laoreet nec est eleifend, congue blandit felis. Curabitur feugiat, tortor eu ultricies placerat, quam nulla ornare nisi, a eleifend nisl sapien ut est. Nam mollis, nibh id pulvinar aliquet, erat lacus ornare arcu, at lacinia eros nulla vitae ipsum. Aliquam volutpat ex tellus, id hendrerit neque semper vitae. Proin auctor nec nisl id scelerisque. Donec mattis ipsum lacus, vitae maximus purus bibendum ut. Maecenas sit amet varius erat. Sed euismod eros id lobortis bibendum. Proin aliquet eros eget pretium varius. Morbi consectetur augue ac tellus vestibulum bibendum. Donec porta nunc mauris, et mattis dui pretium et. Cras facilisis sed enim ac dapibus. Aenean pharetra lectus lorem, et bibendum odio luctus sit amet. Nunc condimentum lobortis massa, id aliquet ligula aliquet vitae. Integer porta, nibh id consectetur consectetur, sem nisl imperdiet diam, et facilisis diam erat tincidunt magna. Fusce id rhoncus urna. Morbi rhoncus augue quis ornare tristique. Fusce ligula eros, commodo sit amet dui dictum, fringilla volutpat velit. Curabitur ut lorem nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc non mauris eleifend magna suscipit accumsan quis nec risus. Donec metus ante, ultricies ac purus vitae, tincidunt pulvinar odio. Aliquam quis suscipit nulla. Etiam eu rutrum ante.'

let wordsCount = 1
for (const character of paragraphs) {
    if (character === ' ') wordsCount++
}
console.log(`This text contains: ${wordsCount} words`)

let etsPerString = 0
paragraphs.split(' ').forEach(word => {
    if (word === 'et') etsPerString++
})
console.log(`This string contains the word et ${etsPerString} times`)

