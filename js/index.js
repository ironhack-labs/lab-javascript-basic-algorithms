let hacker1 = "Alejandro"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Celine"
console.log(`The navegator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow you both have equally long names, ${hacker1.length} characters`)
}

let hacker1Caps = "";
for(let i = 0; i < hacker1.length; i++) {
  if(i === hacker1.length-1) {
    hacker1Caps += hacker1[i];
  } else {
    hacker1Caps += hacker1[i] + " ";
  }
}
console.log(hacker1Caps.toUpperCase());

function reverseHacker2 (hacker2) {
  let reverse = '';
  const len = hacker2.length;
  for (let i = len - 1; i >= 0; i--) {
    reverse += hacker2[i];
  };
  return reverse;
};
console.log(reverseHacker2(hacker2));

