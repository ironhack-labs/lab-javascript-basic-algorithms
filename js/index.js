// Iteration 1: Names and Input
let hacker1 = 'Victor';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Danny';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
console.log(hacker1.split('').join(' ').toUpperCase());

// // 3.2
let reverse = [];
for (let i = hacker2.length; i >= 0; i--) {
    reverse.push(hacker2[i]);
}
console.log(reverse.join(''))

// //3.3
let hackers = [hacker1, hacker2];
hackers.sort();
console.log(hackers)

//REVER
// if ( hacker1.localeCompare(hacker2) === -1){	
//     console.log(`The ${hacker1} name goes first.`)	
//   }	
//   else if ( hacker1.localeCompare(hacker2) === 1) {	
//     console.log(`Yo, the ${hacker2} goes first definitely.`) 	
//   }	
//   else {	
//     console.log(`What?! You both have the same name?`)	
//   }

//BONUS - REVER COM ANOTAÇÕES DO HENRIQUE

const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim, erat sed posuere mollis, ante massa facilisis lacus, sed faucibus neque leo sit amet quam. Aenean porta lorem et est consectetur pretium. Nullam sit amet ligula id augue scelerisque tempor ac sit amet sem. Curabitur ut mollis urna. Aenean tristique eros diam, quis consequat enim finibus et. Morbi pulvinar lorem ac odio vulputate venenatis. Suspendisse aliquet nibh eget pulvinar blandit. Fusce nunc ex, malesuada vitae tortor nec, consectetur consectetur risus. Ut odio tellus, tristique sit amet mi consectetur, euismod euismod erat. Vestibulum laoreet luctus ultrices. Cras porttitor turpis non porttitor cursus. Duis arcu nibh, vestibulum vitae eros id, tristique tempor sem.
Phasellus dolor justo, venenatis et cursus quis, volutpat at urna. Nam at pulvinar ante. Nam blandit ornare eros, non ultrices nisi. Etiam semper magna in urna tincidunt, non placerat metus dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Morbi auctor sapien mauris, et viverra magna tristique vel. Proin at fermentum ex.
Nullam pretium tempus metus, in faucibus purus suscipit at. Aenean dui lorem, dictum non turpis a, tincidunt mollis massa. Sed sagittis viverra erat non fringilla. Etiam id mauris nec justo pharetra euismod. Morbi nec ornare sapien. Cras congue ultricies mauris, vel posuere orci sagittis id. Etiam lacinia ut velit at elementum.`

    let totalWords = 1;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] === ' ' || texto[i] === '\n') {
            totalWords += 1;
        }
    }

console.log(totalWords);