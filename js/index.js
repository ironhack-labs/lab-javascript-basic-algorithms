// Iteration 1: Names and Input
const hacker1 = "Joao Nacho";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Vitor Afonso";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
// Iteration 3: Loops
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  str += hacker1[i].toUpperCase() + " ";
}
console.log(str);

let str2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);

if (hacker1.localeCompare(hacker2)) {
  console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("Yo, the navigator's name goes first definitely.");
} else {
  console.log("What? You both have the same name?");
}

let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet ligula id risus venenatis, nec hendrerit diam vestibulum. Sed auctor risus ut pulvinar facilisis. Ut nulla dui, ullamcorper sit amet feugiat malesuada, condimentum eget mi. Integer pellentesque tortor tortor, vitae fringilla nulla dignissim eget. Aenean laoreet, arcu eu pellentesque ultricies, eros quam placerat justo, sit amet sodales mauris sapien vel libero. Donec non arcu efficitur, congue leo vel, sollicitudin tellus. Duis bibendum quis tortor a facilisis. Ut a diam at ex posuere scelerisque quis sit amet eros. Nulla facilisi. Praesent tincidunt turpis et tempus auctor. Mauris ultrices facilisis sapien vel consectetur. Cras nec eros vehicula, porttitor ante a, volutpat velit. Donec non pellentesque leo. Nullam convallis, ligula eu lobortis mollis, orci dui fermentum lorem, in eleifend tortor turpis et odio. Donec laoreet lorem vel est dictum, at maximus ipsum bibendum. Nullam eget risus congue, cursus urna vel, laoreet dui. Suspendisse pellentesque eget lacus elementum volutpat. Nulla consectetur massa lectus, id bibendum ex imperdiet id. Vestibulum pharetra ex elementum metus vehicula rutrum. Integer imperdiet mi a nunc ornare luctus. Nam faucibus velit ac gravida iaculis. Vestibulum neque justo, condimentum at sapien ac, aliquet faucibus ante. Cras a posuere ipsum. Nullam vitae aliquet felis. Praesent consequat lacus nisi, ut tristique sapien vehicula nec. Nulla a placerat ipsum, vitae pulvinar odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce quis semper lectus. Ut hendrerit sagittis velit, vel lacinia lacus consectetur quis. Cras sit amet porttitor nisi. Nunc porttitor quis nulla quis efficitur. Sed ullamcorper quam et ante hendrerit ullamcorper. Aenean nec gravida dui. Suspendisse potenti. Integer sed sollicitudin arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis metus finibus, maximus dui a, finibus est. Nunc urna nulla, ultrices eget magna pulvinar, vestibulum luctus neque. Sed facilisis interdum rutrum. Quisque lobortis ipsum at purus luctus, ac consequat tortor dictum. Suspendisse potenti. Quisque in quam rutrum, tincidunt odio non, iaculis mauris. Sed vel diam sit amet mauris aliquet scelerisque quis tristique velit.";

let count = 0;
for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] == " ") {
    count++;
  }
}
console.log(count);
