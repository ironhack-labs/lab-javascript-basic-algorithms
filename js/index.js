console.log("I'm ready!")

// Iteration 1: Names and Input

const hacker1 = 'Paloma'
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = 'Sergio'
console.log(`The driver´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

let hacker1Spacing = ''
for (let i = 0; i < hacker1.length; i++) {
    hacker1Spacing += hacker1[i] + ' ';
}
console.log(hacker1Spacing.toUpperCase().slice(0,-1));

let hacker2Reverse = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

// Option 1
for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first.`);
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first definitely`);
        break;
    } else {
        console.log(`What?! You both have the same name?`);
        break;
    }
}

//Option 2
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the navigator goes first definitely`);
} else {
    console.log(`What?! You both have the same name?`);
}

//Bonus 1
/*const longString= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget porta nunc. Pellentesque eu fermentum massa. Ut pharetra at felis ut fringilla. Donec sagittis augue at dui gravida, sit amet consequat dolor viverra. Curabitur pharetra ligula magna, a posuere sapien condimentum et. Morbi mi magna, ultrices quis ligula et, consequat facilisis turpis. Sed cursus sed quam sed fermentum. Donec sit amet tellus eu magna pharetra posuere nec eget lorem. In hac habitasse platea dictumst. Etiam faucibus neque a lorem pharetra sollicitudin. Nam ut mattis mi. Nam dapibus ex id ligula commodo euismod. Nullam tempor mollis dolor, sed vulputate dolor congue sit amet. Donec vitae consectetur ipsum. Nulla at commodo mauris, in congue nisi. Aliquam aliquam eget neque eget volutpat.

Nam eu placerat massa. Duis scelerisque aliquam mi. Donec eget dolor magna. Sed a iaculis mauris. Maecenas auctor euismod sapien, in volutpat metus facilisis non. Pellentesque accumsan, metus vel molestie tristique, ante lorem fringilla sem, quis suscipit tellus tortor eget tellus. Suspendisse bibendum mattis accumsan. Aliquam quis elit pretium, placerat nunc ac, aliquet quam. Vivamus dolor velit, gravida sed scelerisque vel, dictum sed tellus. Suspendisse sit amet erat non sem euismod tempor in pulvinar ipsum. Curabitur id felis dui. Etiam sagittis metus et orci porta ornare. Proin ultricies mauris felis, non malesuada odio porttitor quis. Nunc venenatis, dolor quis blandit auctor, diam nulla tincidunt ex, a sodales dolor odio interdum lectus. Aenean nunc ipsum, venenatis sit amet ullamcorper quis, tempus vel ex. Etiam cursus, tellus non vestibulum sagittis, ipsum nulla sodales enim, vitae ornare lorem turpis vel ante.

Nulla viverra congue ipsum, vel facilisis leo interdum at. Etiam ipsum tortor, laoreet eget risus id, congue cursus est. Maecenas et venenatis nisl. Sed pharetra congue ligula ac placerat. Vivamus cursus euismod rutrum. Pellentesque vestibulum justo sed lacus tincidunt, in imperdiet sem blandit. Fusce quis hendrerit massa. Ut sagittis, est id tincidunt fringilla, diam sem egestas est, accumsan fringilla justo enim sit amet risus."*/
