// Refactoring
// Section 1
let hacker1 = `Oliver`;

console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Felicity`;

console.log(`The navigator's name is ${hacker2}`);

// Section 2
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`,
  );
} else {
  console.log(
    `Wow, you both got equally long names, ${hacker1.length} characters!`,
  );
}

// Section 3
console.log(
  hacker1
    .toUpperCase()
    .split('')
    .join(' '),
);

console.log(
  hacker2
    .split('')
    .reverse()
    .join(''),
);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Bonus Time Content

let loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed eros orci. Aliquam consequat nisl id tristique interdum. Fusce fermentum ante iaculis magna auctor, in rutrum turpis elementum. Suspendisse justo velit, interdum ut pulvinar non, mollis a nisl. Integer lorem sapien, tincidunt at finibus et, placerat quis turpis. Fusce sed tincidunt orci. Maecenas molestie massa augue, a tempus lacus fringilla id. Suspendisse vehicula eros arcu, nec convallis nisl dignissim id. Maecenas sed ullamcorper quam. Sed vel bibendum erat, vitae iaculis mi. Nunc efficitur nisi et tortor egestas, eu fermentum odio euismod. In quis dui porta, elementum mauris vitae, fermentum ante. Sed elementum nisi vel accumsan euismod.

Sed ultricies eros erat, id mollis ex placerat eget. Phasellus ullamcorper est at blandit vestibulum. Fusce non dui dolor. Vivamus pharetra velit vel sapien commodo, sit amet rutrum ipsum interdum. Sed hendrerit, tellus vel venenatis lacinia, sem nulla venenatis diam, at porttitor nunc massa quis justo. Vestibulum consequat, urna ac finibus elementum, lectus libero interdum nunc, id varius nisi lorem sit amet sem. Suspendisse laoreet dignissim pretium. Curabitur auctor lobortis tortor dictum varius. Fusce eu lobortis ligula.

Pellentesque sit amet imperdiet tortor. Nulla ac ex pellentesque, posuere orci eget, ultricies neque. Nam vel tellus varius, imperdiet tellus et, dignissim lacus. Donec mollis sollicitudin neque, non placerat justo feugiat a. Donec dignissim eget dui condimentum malesuada. Duis posuere lorem vitae lorem bibendum sodales. Nam vitae nisl rutrum, eleifend ex suscipit, suscipit magna. Donec aliquet laoreet justo quis euismod. Morbi aliquam lobortis luctus. Pellentesque id eros leo. Vestibulum nec dictum lorem. Donec mollis pellentesque finibus. Fusce sed volutpat dui. Aliquam erat volutpat. Ut eu purus urna.`;

// -----------
// V1
// Variables
// let hacker1 = `Julian`;
// let hacker2 = `Adam`;

// // Functions
// function driverMessage() {
//   console.log(`The driver's name is ` + hacker1);
// }

// function navMessage() {
//   console.log(`The navigator's name is ` + hacker2);
// }

// function longestName() {
//   let driverNameLen = hacker1.length;
//   let navNameLen = hacker2.length;

//   if (driverNameLen > navNameLen) {
//     console.log(
//       `The Driver has the longest name, it has ${driverNameLen} characters`,
//     );
//   } else if (navNameLen > driverNameLen) {
//     console.log(
//       `Yo, navigator got the longest name, it has ${navNameLen} characters`,
//     );
//   } else {
//     console.log(
//       `Wow, you both got equally long names, ${driverNameLen} characters!`,
//     );
//   }
// }

// function yellName(name) {
//   let capsName = ``;
//   for (let i = 0; i < name.length; i++) {
//     capsName += `${name[i].toUpperCase()}`;
//     if (i + 1 === name.length) {
//       console.log(capsName);
//     }
//     capsName += ` `;
//   }
// }

// function revName(name) {
//   let reversed = ``;
//   for (let eman = name.length; eman > 0; eman--) {
//     reversed += name[eman - 1];
//   }
//   console.log(reversed);
// }

// function whoIsFirst() {
//   // Original Implementation (functions but waaaaaay too long)
//   //   let first = ``;
//   //   let longest = ``;
//   //   let shortestIs = ``;
//   //   let driverFirst = `The driver's name goes first.`;
//   //   let navFirst = `Yo, the navigator goes first definitely.`;
//   //   let same = `What?! You both got the same name?`;
//   //   if (hacker1.length > hacker2.length) {
//   //     longest = hacker1.length;
//   //     shortestIs = hacker2;
//   //   } else {
//   //     longest = hacker2.length;
//   //     shortestIs = hacker1;
//   //   }
//   //   for (let i = 0; i < longest; i++) {
//   //     if (hacker1[i] < hacker2[i]) {
//   //       console.log(driverFirst);
//   //       break;
//   //     } else if (hacker1[i] > hacker2[i]) {
//   //       console.log(navFirst);
//   //       break;
//   //     }
//   //     if (
//   //       hacker1[i] === hacker2[i] &&
//   //       hacker1[i + 1] === '\0' &&
//   //       hacker2[i + 1] === '\0'
//   //     ) {
//   //       console.log(same);
//   //       break;
//   //     } else if (shortestIs === hacker1) {
//   //       console.log(driverFirst);
//   //       break;
//   //     } else if (shortestIs === hacker2) {
//   //       console.log(navFirst);
//   //       break;
//   //     }
//   //   }
// }
