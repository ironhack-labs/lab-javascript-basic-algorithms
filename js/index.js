// Iteration 1: Names and Input
let hacker1 = 'Areeba';
console.log(`The Drivers name is ${hacker1}`);
let hacker2 = 'Yorick';
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
// 3.1
let seperatedName = '';
for (i = 0; i < hacker1.length; i++) {
  seperatedName += hacker1[i].toUpperCase() + " "
}

console.log(seperatedName)

// 3.2
let reverseName = "";
for (i = hacker2.length -1; i >= 0; i--) {
  reverseName += hacker2[i]
}

console.log(reverseName)

// 3.3
if (hacker1 < hacker2) {
      console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
      console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

// BONUS 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra enim sapien, vitae consectetur eros malesuada ac. Aenean tellus justo, rhoncus at augue ut, finibus mattis felis. Nam eu neque id nulla facilisis aliquam in et neque. Phasellus eget est et mauris suscipit sollicitudin eget non dui. Cras ornare, lorem ac suscipit interdum, mauris ipsum auctor justo, tincidunt consectetur enim massa vel purus. In eleifend ante sed feugiat accumsan. Suspendisse potenti. Aenean erat mi, iaculis at ipsum in, efficitur gravida libero. Etiam varius molestie massa, sed mollis ligula bibendum pharetra. Aliquam rutrum ante ac sagittis eleifend. Morbi a egestas sem. Aenean vel nunc nec tortor congue consequat non in est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in maximus turpis, quis scelerisque augue. Aliquam pretium ac justo ut mattis.

Donec nec enim lectus. Aliquam orci ligula, porttitor a dui a, euismod mollis purus. Ut non metus purus. Praesent pulvinar cursus lectus sed aliquet. Ut sit amet suscipit ligula. Vivamus arcu est, pharetra in quam quis, congue fermentum tortor. Pellentesque blandit sit amet purus a ullamcorper. Donec nibh lacus, egestas et hendrerit vel, ullamcorper eu mi. Proin vitae risus diam. Phasellus ac sem a leo rutrum semper vitae a sapien. Donec suscipit ligula eros, eget interdum ante consectetur eu. Aenean tincidunt lacinia purus nec laoreet. Sed nec pharetra leo, quis feugiat enim.

Sed tempus elit vitae bibendum vestibulum. Integer ligula lectus, vehicula vel dictum eget, molestie quis augue. Etiam augue lorem, aliquam eget condimentum eget, convallis at magna. Duis tempor, enim non accumsan cursus, massa diam volutpat neque, vel elementum tortor justo at dui. Suspendisse dolor risus, aliquet sed nisi pharetra, elementum ornare lectus. Maecenas quis dignissim lectus. Phasellus sollicitudin justo vitae mauris vestibulum, vitae condimentum est placerat. Fusce lobortis augue vel felis suscipit, sit amet lacinia ligula convallis. Aenean convallis nisi felis, eget iaculis dui lobortis id. Sed a quam venenatis metus imperdiet aliquam rhoncus quis tortor. Duis blandit ipsum sit amet nunc egestas pretium. Sed imperdiet enim quis erat commodo, et volutpat neque aliquet.`


  console.log(lorem.split(' ' || `\n`).length) // I can't make it count the space between the paragraphs.
