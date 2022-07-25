// Iteration 1: Names and Input
const hacker1 = "aaaaa";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "aaaa";
console.log(`The navigator's name is ${hacker2}`)
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let uppercaseDriver;
uppercaseDriver = hacker1.toUpperCase();
console.log(uppercaseDriver)
const driverSpace = uppercaseDriver.split('').join(' ');
console.log(driverSpace);

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const driverReverse = reverseString(hacker2).toLowerCase();
console.log(driverReverse);
hacker1.localeCompare(hacker2);

function compareName(name1, name2) {
    if (name1.localeCompare(name2) === -1) {
        console.log(`The driver's name goes first.`)
    } else if (name1.localeCompare(name2) === 1) {
        console.log(`Yo, the navigator goes first definitely.`)
    } else if (name1.localeCompare(name2) === 0) {
        console.log(`What?! You both have the same name?`)
    }
}
console.log(compareName(hacker1, hacker2));
// function nameOrder(hacker1, hacker2) {
//     if (hacker1.length === hacker2.length) {
//         for (let i = 0; i <= hacker1.length - 1; i++) {
//             if (hacker1[i] < hacker2[i]) {
//                 console.log(`The driver's name goes first.`)
//             } else if (hacker2[i] < hacker1[i]) {
//                 console.log(`Yo, the navigator goes first definitely.`)
//             } else if (hacker1[i] === hacker2[i]) {
//                 console.log('What?! You both have the same name?')
//             }
//         }
//     }
//     else if (hacker1.length > hacker2.length) {
//         for (let i = 0; i <= hacker1.length - 1; i++) {
//             let hacker2Extra = hacker2.splice(0, 0, '');
//             console.log(`${hacker2Extra}`)
//             if (hacker1[i] < hacker2[i]) {
//                 console.log(`The driver's name goes first.`)
//             } else if (hacker2[i] < hacker1[i]) {
//                 console.log(`Yo, the navigator goes first definitely.`)
//             } else if (hacker1[i] === hacker2[i]) {
//                 console.log('What?! You both have the same name?')
//             }
//             console.log(`${i}`)
//         }
//     }
// }
const loremParagraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam molestie neque, sed rutrum nibh pellentesque non. Cras non neque vitae odio porta pretium. Mauris id orci risus. Nunc eget fermentum lacus, in iaculis ex. Nunc elit augue, tincidunt non semper id, posuere sit amet magna. Curabitur congue sapien eget est consectetur, ac interdum mi faucibus. Suspendisse tempor nulla lectus, sed posuere velit gravida vulputate. Sed non mollis sapien, sit amet porttitor justo. Aliquam non nibh ac ex suscipit fermentum. Aliquam ornare ut nisl eget varius. Aenean accumsan turpis arcu, id convallis tellus viverra a.Aliquam ultricies sodales suscipit.Donec non turpis quis eros fermentum sagittis.Aliquam sit amet laoreet lectus.Mauris nec ante egestas, euismod lacus sed, imperdiet ante.Quisque at feugiat dui.Proin quis rhoncus tellus.Donec cursus mauris quam, eget venenatis ex lacinia eu. Fusce vitae enim dignissim orci porttitor consequat.Maecenas euismod scelerisque turpis, sed fermentum augue sagittis in.Mauris porttitor mauris nec enim porta, in fringilla nunc tempor.Etiam tristique rutrum enim sit amet dictum.Suspendisse vestibulum urna sapien, sed porttitor diam luctus quis.Curabitur justo lorem, tincidunt quis magna eget, rhoncus fermentum nisi.Donec sollicitudin congue ipsum, vitae consectetur magna scelerisque id."

function loremParagrapheLength(text) {
    for (let i = 0; i <= text.length; i++) {
        let counter = 0;
        if (text[i] === " ") {
            counter += 1;
        }
        console.log(counter);
    }
}
console.log(loremParagrapheLength(loremParagraphe));