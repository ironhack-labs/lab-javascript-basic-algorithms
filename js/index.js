// Iteration 1: Names and Input
let hacker1 = "Gustavo";
let hacker2 = "Sara";

console.log(`The driver´s name is ${hacker1}`);
console.log(`The navigators´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equaly long names, ${hacker1.length} characters`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}`
  );
}

// Iteration 3: Loops

let hacker1Space = " ";
let hacker1SpaceUpper = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Space += hacker1.charAt(i) + " ";
  hacker1SpaceUpper = hacker1Space.toUpperCase();
}
console.log(hacker1Space);
console.log(hacker1SpaceUpper);

let hacker1Reverse = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
  hacker1Reverse += hacker1[j];
}
console.log(hacker1Reverse);

const nameArr = [hacker1, hacker2];

const orderedNameArr = nameArr.sort();

if (orderedNameArr[0] === hacker1) {
  console.log("The driver´s name goes first");
} else if (orderedNameArr[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! you both have the same name?");
}

// Bonus 1

let count = lorem.split(" ").length;
console.log(count);

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

let count = lorem.split(" ").length;
console.log(count);

let wordArr = lorem.split(" ");
console.log(wordArr);

let etArr = [];

for (let i = 0; i < wordArr.length; i++) {
  if (wordArr[i] === "et") {
    etArr.push(wordArr[i]);
  }
}

console.log(etArr.length);