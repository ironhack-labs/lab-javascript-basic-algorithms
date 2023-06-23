let hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Lena";
console.log(`The navigator's name is ${hacker2}.`);


if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters ?!`)
}


let letters = "";
for (let i=0; i<hacker1.length; i++){
  letters += hacker1[i].toUpperCase() + " ";
}
console.log(letters);

let reverseLetters = "";
for (let i = hacker2.length-1; i >= 0; i--){
  reverseLetters += hacker2[i];
}
console.log(reverseLetters);


// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus luctus faucibus. Nam et odio est. Nunc diam eros, commodo quis neque id, pulvinar malesuada mauris. Maecenas quis orci eleifend, euismod lacus sed, finibus enim. Quisque pulvinar convallis tincidunt. Vivamus viverra urna nec tortor auctor rhoncus. Morbi elementum feugiat ipsum, ultrices suscipit augue viverra sed. Phasellus interdum nec magna vitae volutpat. Fusce auctor ex in tristique semper. Praesent ut velit porttitor felis malesuada vestibulum non hendrerit magna. Nullam tempus sem in orci congue laoreet.

Donec eget quam et ligula fringilla efficitur quis at urna. Fusce quis massa eget tortor malesuada molestie non at ipsum. Aenean fermentum metus facilisis aliquet iaculis. Sed ac augue nec nibh pharetra placerat non quis ligula. Morbi condimentum ultrices erat at tempor. Nunc pulvinar consequat quam euismod fermentum. Phasellus pulvinar diam et velit semper fringilla. Nullam vel sapien in enim congue tristique at ac tortor. Suspendisse lacinia ex quis metus pharetra sollicitudin. Proin rhoncus justo non lobortis semper. Nullam nec lorem fringilla, tincidunt neque gravida, blandit magna. Quisque imperdiet interdum leo imperdiet imperdiet. Vestibulum fringilla est id urna eleifend, ac mollis dui placerat. Etiam tincidunt elit id nisl porttitor, eu tristique libero efficitur. Suspendisse quis neque ut velit commodo cursus in eget leo. Vivamus facilisis ut massa at rutrum.

In ac hendrerit tellus. Nunc enim ligula, rutrum vitae consectetur quis, congue sit amet sem. Quisque facilisis nunc vel elementum tristique. Cras ut nibh odio. Integer mollis, sem ut maximus sollicitudin, libero metus venenatis odio, nec posuere lacus leo sit amet felis. Curabitur fringilla elit dapibus, cursus ex in, pellentesque diam. Quisque a magna molestie, lobortis justo vitae, ornare eros. Sed gravida blandit erat, in feugiat leo elementum sed. Ut sed nisl aliquam, consectetur arcu vel, tincidunt velit. Ut ullamcorper scelerisque mauris, ac dapibus nisi aliquet non. In hac habitasse platea dictumst. Nulla id mollis lacus, sit amet venenatis urna.` ;


const wordCount = longText.split(" ").length;
console.log(`The number of words is: ${wordCount}`);

const etCount = longText.split("et").length - 1 ;
console.log(`The Latin word 'et' appears ${etCount} times.`);
