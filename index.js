// Iteration 1: Names and Input

// const hacker1 = "XXXX";
// console.log(`The driver's name is ${hacker1}`);

// const hacker2 = "YYYY";
// console.log(`The navigator's name is ${hacker2}YYYY`);




// Iteration 2: Conditionals

// const driverName = `XXXX`;
// const navigatorName = `YYYY`;

// const driverNameLength = driverName.length;
// const navigatorNameLength = navigatorName.length;

// if (driverNameLength === navigatorNameLength) {
//     console.log(`Wow, you both have equally long names, ` + driverNameLength + ` characters!`);
// } else if (driverNameLength > navigatorNameLength) {
//     console.log(`The driver has the longest name, it has ` + driverNameLength + ` characters.`);
// } else {
//     console.log(`It seems that the navigator has the longest name, it has ` + navigatorNameLength + ` characters.`);
// }



// // Iteration 3: Loops
// 3.1

// const driverName = `Yujiro`;
// let capitalDriversName;

// for (let i = 0; i < driverName.length; i++) {
//     capitalDriversName += driverName[i].toUpperCase() + ` `;
//     // console.log(capitalDriversName); works*
// }
// console.log(capitalDriversName);


// 3.2

// const navigatorName = `Akihiro`;
// let reverseName = ``;

// for (let i = navigatorName.length - 1; i >= 0; i--) {
//     reverseName += navigatorName[i];
// }

// console.log(reverseName);


// 3.3

const driverName = `XXXX`;
const navigatorName = `XXXX`;

if (driverName === navigatorName) {
    console.log(`What?! You both have the same name?`);
} else if (driverName.localeCompare(navigatorName) < 0) {
    console.log(`The driver's name goes first.`);
} else {
    console.log(`Yo, the navigator goes first, definitely.`);
}




/// Bonus will do later*








// didnt work out, of-course,  localCompare return value of 0, 1, -1. ONLY
// const driverName = "AXXX";
// const navigatorName = "XXXX";

// if (driverName === navigatorName) {
//     console.log(`What?! You both have the same name?`);
// } else if (driverName.localCompare(navigatorName)) {
//     console.log(`navigatorName`);
// } else if (navigatorName.localCompare(driverName)) {
//     console.log(`driverNamee`);
// }







// NOTE//////FOR//MY//SELF//
// const navigatorName = `Akihiro`;
// let reverseName = ``;
// // must do initialized in beginning to display A
// for (let i = navigatorName.length - 1; i >= 0; i--) {
//     reverseName += navigatorName[i];
// }
// console.log(reverseName);

// take string length. and revers to display
// let reverseName;
// for (i = navigatorName.length; i >= 0; i--){
//     console.log(navigatorName[i]);
// }

// for (let i = 0; i < navigatorName.length; i++) {
//     for (let ri = navigatorName.length; ri > 0; ri--) {
// reverseName += navigatorName[ri];
// console.log(reverseName);
//     }
// }

// take each letter form driverName,
// for (let i = 0; i < driverName.length; i++) {
// console.log(driverName[i]);
// }

// To in capital letter
// const capitalDriversName = driverName.toUpperCase();
// console.log(capitalDriversName);

// * toUpperCase() method 
// console.log(driverName.toUpperCase());