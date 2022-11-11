// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Myke";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if ( hacker1.length === hacker2.length ){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

console.log(``);
console.log(`-------------------------------------------------`);
console.log(``);

// Iteration 3: Loops

let capitals = hacker1
                .toUpperCase()
                .split('')
                .join(' ')

console.log('capitalize joining spaces ->', capitals) // J O H N

let reverse = ''

for (let i = hacker2.length; i > 0; i--){
    reverse += hacker2[i-1]
}

console.log('reverse -> ', reverse)  // EKYM
console.log(``);
console.log(`-------------------------------------------------`);
console.log(``);

// LEXYCOCOGRAPHIC ORDER
if ( hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
} else if ( hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

console.log(``);
console.log(`-------------------------------------------------`);
console.log(``);

// BONUS 1
let latin = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tortor quis augue vulputate hendrerit. Fusce turpis ligula, lacinia dictum tempus at, sodales quis metus. Ut id rhoncus felis. Mauris nibh felis, varius non pulvinar ac, mollis vel lacus. Quisque vulputate lectus ac quam vestibulum, consectetur faucibus augue porttitor. Fusce dapibus vitae sem non consectetur. Praesent vel mi fringilla, pulvinar justo nec, tempus nibh. Nam eu finibus ante.
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent non elementum velit. Aliquam id est molestie, blandit elit placerat, finibus augue. In hac habitasse platea dictumst. Maecenas commodo, justo ac imperdiet finibus, neque dui mattis augue, vel ornare odio ipsum eu risus. Etiam tempus dui quis ipsum feugiat fermentum. Fusce vel porta libero. Curabitur ut massa volutpat, cursus eros ut, eleifend felis. Proin odio mauris, pellentesque at quam eu, vehicula sodales augue. Etiam sit amet condimentum augue. Sed at ultricies ante, nec sagittis ante. Praesent auctor risus et imperdiet scelerisque. In et leo a augue dapibus fermentum. Vestibulum convallis tempus massa.
Suspendisse imperdiet justo euismod elit iaculis placerat. Mauris sed faucibus ex. Vivamus pulvinar tincidunt urna, id ullamcorper tortor. Maecenas a justo gravida, gravida ante in, pretium tortor. Nulla nec auctor risus. Phasellus lorem lorem, luctus pretium felis eu, dignissim auctor augue. Aenean vel volutpat ipsum. Curabitur ultricies felis et tristique pretium. Fusce urna magna, tincidunt sit amet enim quis, varius congue lorem. In elementum augue congue blandit convallis. 
`

let words = latin
                .split(' ')
                .filter(word => word === 'et')

console.log(`et appears ${words.length} time`) // 4s

console.log(``);
console.log(`-------------------------------------------------`);
console.log(``);

// BONUS 2
const isEven = (number) => {
    return number % 2 === 0 
        ? true
        : false
}

const phraseToCheck = (phraseToCheck) => {
    let phrase = phraseToCheck
        .toLowerCase()
        .split('')
        .filter(char => char !== ' ' && char !== ',') // removing spaces and commas

    const middleLeft = Math.floor(phrase.length)/2 // [] [] [mL] [center] [mR] [] []

    const left = phrase.splice(0, middleLeft)
    const right = isEven() 
        ? phrase.splice(0, phrase.length).reverse() // from 0 to array.length
        : phrase.splice(1, phrase.length).reverse() 

    let status = '✅ 200 Palindome'
    for( let i = 0; i < left.length; i++){
        if( left[i] !== right[i]){
            status = '🚫 404 Palindome not found'
        }
    }

    console.log(status)
    console.log(``);
}

phraseToCheck('A man, a plan, a canal, Panama')


