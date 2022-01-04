// Iteration 1: Names and Input
// 

let hacker1 = "Ragnar Lothbrok";

let hacker2 = "Bjorn Ironside";

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }


// Iteration 3: Loops

let hacker1UpperCase = "";
for(let i=0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase();
}
console.log(hacker1UpperCase);

let hacker2Reverse = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);


if (hacker1 > hacker2) {
    console.log("The driver's name comes first")
}

else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely")
}

else {
    console.log("What?! You both have the same name?")
}



//Bonus 1: 

const paragraph = "Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Vivamus vel consectetur magna. Pellentesque vel orci quis diam accumsan iaculis. In suscipit viverra quam vitae tempus. Integer hendrerit nunc eu lorem hendrerit sollicitudin. Nunc ultrices, mi non tempor ultricies, elit libero pretium sem, ut condimentum velit nisl sed augue. Integer lacinia sapien non purus luctus porttitor. Ut a dui vitae mauris venenatis mattis sit amet sit amet mauris. Duis molestie blandit elit ut pellentesque. Duis semper gravida nibh, eu commodo est scelerisque eget. Morbi mattis sollicitudin diam, nec volutpat leo volutpat non. Nulla sodales eget tellus quis congue. Praesent rhoncus mauris in interdum fringilla. Nam ut rutrum orci. Maecenas ac orci libero. Vivamus ut nibh sagittis nunc egestas venenatis. In hac habitasse platea dictumst. Fusce quis odio id leo pulvinar gravida non eget leo. Suspendisse vel purus in erat ullamcorper porta. Donec in tortor ullamcorper, aliquam mauris quis, iaculis ante. Sed faucibus feugiat ex ac ullamcorper. Maecenas ornare ex dui, a finibus nulla scelerisque facilisis. Morbi luctus tellus ut lorem pretium, id dictum diam dignissim. Donec velit tellus, rhoncus vitae nibh vel, tincidunt aliquet turpis. Aliquam vel lorem massa. Vestibulum hendrerit finibus gravida. Pellentesque commodo, quam nec euismod fringilla, mi nibh pharetra arcu, interdum tempor nibh neque nec ex. Phasellus eleifend elit eget nisl fringilla posuere. Donec tincidunt sapien in pharetra aliquet. Nam maximus libero vitae lacus euismod lobortis. Sed condimentum sit amet leo sed ultrices. Pellentesque imperdiet malesuada ipsum, eu congue velit pharetra volutpat. Curabitur vestibulum pellentesque feugiat. Ut efficitur lorem ac neque vulputate, a placerat turpis vulputate.";

console.log(paragraph);
console.log(paragraph.length);
