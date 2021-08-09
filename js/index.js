// Iteration 1: Names and Input

let hacker1 = 'Ruben'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Andy'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if(hacker1.length > hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1 

let capitalHacker1 = ""

for (let i=0; i<hacker1.length; i++){
    capitalHacker1 += `${hacker1[i].toUpperCase()} `
}

console.log(capitalHacker1)

//3.2 

let reverseHacker2 =""

for (let i = hacker2.length-1; i>=0; i--){
    reverseHacker2 += `${hacker2[i]}`
}
console.log(reverseHacker2)


//3.3

let hackerCompare = hacker1.localCompare(hacker2)

switch(hackerCompare){
    case -1:
        console.log(`The driver's name goes first.`)
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    case 0 :
        console.log(`What?! You both have the same name?`)
        break;
}


//Bonus 1


let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at molestie lorem, sed rutrum nulla. Quisque consequat felis tristique turpis lacinia lacinia. Pellentesque in fringilla odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In viverra, nisl in lobortis pharetra, sem eros maximus sem, non fringilla erat est eget leo. Nulla at dapibus lorem. Maecenas quis aliquam neque. Fusce sit amet hendrerit purus. Sed molestie tellus at eleifend tristique. Etiam consectetur faucibus nunc, eget congue erat posuere et. Nam id lacus gravida, cursus ligula non, volutpat libero. Cras nisl orci, molestie in volutpat sed, condimentum ut mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vel mauris id libero interdum placerat. Fusce felis sapien, faucibus et sagittis vitae, dictum ut justo. Etiam fermentum placerat gravida. Pellentesque in lacus non urna consectetur iaculis at sit amet lacus. Pellentesque accumsan, tellus sit amet sodales aliquet, magna lorem varius tortor, sed porttitor massa orci at lacus. Curabitur sed elit quam. Morbi quam risus, laoreet id tortor vitae, maximus efficitur nibh. Sed quis lorem sed turpis congue vehicula. Nunc fringilla justo arcu, ut dapibus est porttitor sed. Aliquam sed lorem ullamcorper, ultrices elit finibus, pellentesque leo. Etiam aliquam in nisi sed mollis. Aliquam sit amet auctor lectus, sed aliquet diam. Curabitur dictum vulputate varius. Nullam fermentum, lectus vel condimentum feugiat, tortor tortor ullamcorper magna, ut efficitur sem sapien sed odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ante dolor, bibendum non sem eu, finibus porttitor dui. Vestibulum sodales fringilla augue, ut euismod ante tristique nec. Vivamus sem metus, iaculis in leo eget, facilisis molestie sem. Morbi consequat quis lectus ut dapibus. Nunc condimentum, est at hendrerit consequat, velit leo fringilla turpis, rhoncus dignissim mi ex a ante. Pellentesque at est sodales, porta enim finibus, eleifend lorem. Mauris id mollis ligula, nec tincidunt quam. Aliquam lacinia eget tortor nec vestibulum."

let numberOfWords = 0

for (let i=0; i< lorem.length; i++){
    if(lorem[i] === " "){
        numberOfWords += 1
    }
}
console.log(numberOfWords)

let numberOfEt = 0

for (i=0; i<lorem.length; i++){
    if (lorem.slice(i, i+3) === ' et'){
        numberOfEt += 1
    }
}

console.log(numberOfEt)