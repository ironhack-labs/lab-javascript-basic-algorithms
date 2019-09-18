console.log("I'm ready!");

let hacker1 = "Pedro";
  console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Julian";
  console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length}characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both got equally; long names, ${hacker1.length} characters!`);
}

let capHacker1 = "";

for (let i = 0; i < hacker1.length; i ++ ) {
  capHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(capHacker1)

let invHacker2 = "";

  for (let i = hacker2.length - 1; i >= 0 ; i -- ) {
    invHacker2 += hacker2[i];
  }
console.log(invHacker2);

if (hacker1.localeCompare(hacker2) <= -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) >= 1 ) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?")
}

let bonusTime = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim sed sapien tempor lobortis. Proin ullamcorper tincidunt fermentum. Etiam et malesuada velit. Sed vestibulum fermentum erat eu rhoncus. Vivamus ultrices eleifend elementum. Curabitur purus erat, tincidunt vitae nunc ultricies, viverra feugiat leo. Morbi nec nibh quis quam mollis fermentum. Praesent vestibulum dignissim magna eu consectetur. Donec sed nisl augue. Fusce auctor nec turpis non cursus. Integer eget sapien quis ligula rhoncus faucibus ut et tortor. Quisque efficitur eros eu ante ultricies luctus. Cras pulvinar, erat ac mollis placerat, lacus magna vulputate urna, eget pellentesque enim est eleifend diam. Quisque dictum gravida sapien nec fermentum. Curabitur blandit sagittis scelerisque. Aliquam condimentum sit amet purus a porta. Integer eleifend lectus nec felis laoreet, id elementum ante molestie. Phasellus blandit facilisis urna, a imperdiet purus posuere a. In ullamcorper leo vitae nibh tincidunt, id fermentum ante tempor. Pellentesque scelerisque ante tempus nisl pellentesque laoreet. Morbi congue ligula ac metus semper pharetra. Nulla commodo consequat massa, non convallis felis commodo iaculis. Aliquam eget risus hendrerit, faucibus neque ac, consequat urna. Fusce laoreet fermentum nisi, sed tincidunt ligula interdum a. Sed nec ante aliquam, blandit massa ac, cursus dolor. Maecenas posuere placerat efficitur. Nunc in ultricies ligula, vel gravida dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non dolor ante. Maecenas a ex sit amet risus pretium luctus sit amet nec augue.";

console.log(bonusTime.split(" ").length);

let counterEt = 0;

for (let i = 0; i < bonusTime.length - 1; i ++ ) {
  if (bonusTime[i] + bonusTime[i + 1] == "et" && bonusTime[i - 1] == " " ) {
    counterEt ++;
  }
}

console.log(counterEt)
