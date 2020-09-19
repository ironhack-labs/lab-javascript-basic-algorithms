// Iteration 1: Names and Input
let hacker1 = "Angela"
console.log(hacker1);

let hacker2 = "Mariangel"
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let index=0
let name="";
while (index<hacker1.length){ 
  name += hacker1[index].toUpperCase()+" "; index++
  }
console.log(`"${name}"`);

// 3.2
let reverseName="";
let index2 = (hacker1.length -1);
while(index2 >= 0){
reverseName += hacker1[index2].toLowerCase();
index2 -= 1
}
console.log(`"${reverseName}"`);

// 3.3
let phrases =[
`The driver's name goes first.`,
`Yo, the navigator goes first definitely.`,
`What?! You both have the same name?`
];
console.log(phrases.sort());

//BONUS 1
let paragraph1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum est et velit tempus, non tincidunt elit pellentesque. Fusce et dolor consectetur lorem maximus aliquam et eu libero. Sed velit arcu, ullamcorper quis porta non, cursus et sapien. Phasellus arcu velit, pretium vitae nisl porttitor, rhoncus euismod enim. Nunc arcu dui, ultricies a nibh nec, vestibulum maximus enim. Vivamus sollicitudin viverra ligula. Cras elementum vehicula lobortis. Curabitur eu iaculis quam, vitae porttitor nulla.`;
let paragraph2 = `Pellentesque sed gravida ipsum, ut ornare mi. Phasellus sed consequat orci, eu feugiat dui. Proin et accumsan magna. Aliquam quam urna, posuere sed porta in, suscipit quis nisl. Aliquam sed magna sed ex volutpat commodo quis quis est. Nulla bibendum nisl semper diam rhoncus, eget bibendum nunc luctus. Pellentesque a erat porttitor dolor sagittis convallis. Nunc at placerat diam.`;
let paragraph3 = `Aliquam a libero eget nunc elementum sodales nec eu lorem. Aenean vulputate nunc at massa faucibus, non gravida lectus interdum. Etiam nec ipsum id massa cursus efficitur. Mauris ultricies ligula id augue sodales, ac pretium ex pharetra. Cras fringilla nisi a dolor egestas suscipit. Mauris sagittis ligula vitae felis viverra, id maximus nisl elementum. Duis risus dolor, scelerisque et nibh in, luctus lobortis arcu.`;
console.log(paragraph1.split(` `).length);
console.log(paragraph2.split(` `).length);
console.log(paragraph3.split(` `).length);