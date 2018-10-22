console.log("I'm Ready!");

let hacker1 = 'Rachel'
console.log("The driver's name is " + hacker1);

let hacker2 = prompt("Write the navigator's name.")
console.log(hacker2);

if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters")
} else if(hacker2.length>hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!")
}

let blah = '';
let blah2 = '';

for(let i = 0; i < hacker1.length; i++) {
  blah = blah + (hacker1[i]).toUpperCase() + " "
}

console.log(blah)

for(let j = hacker2.length-1; j > -1; j--) {
  blah2 = blah2 + (hacker2[j])
}

console.log(blah2)

if(hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first");
}
else if(hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log("What?! You both got the same name?");
}

let userString = prompt("Write a string")
console.log(userString);

let blah3 = ''
let blah4 = ''

for(let i = 0; i < userString.length; i++) {
  blah3 = blah3 + (userString[i])
}
for(let i = userString.length-1; i > -1; i--) {
  blah4 = blah4 + (userString[i])
}

console.log(blah4);

if(blah3 === blah4) {
  console.log("The string is a palindrome")
}
else {
  console.log("The string is not a palindrome")
}

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id volutpat quam. Morbi luctus elit nec luctus placerat. Nulla tincidunt lacus purus, sed lobortis massa aliquam ut. Curabitur porta vulputate orci at ornare. Nunc varius ante id est vulputate, non tincidunt sem tincidunt. Curabitur at dui tempor, accumsan purus vel, sollicitudin tortor. Sed venenatis magna eget maximus condimentum. Proin venenatis ex ac mi semper sodales. Vestibulum tincidunt nec erat sit amet condimentum. Donec ac ex nulla. Praesent neque leo, volutpat id tempus ac, lacinia sed turpis. Morbi facilisis urna ut turpis venenatis varius. Nam vitae ullamcorper mauris. Nulla facilisi. Aenean lobortis nisl et pellentesque porta. Aenean gravida luctus massa nec malesuada. \n Integer hendrerit placerat iaculis. Fusce in nulla sed purus ornare aliquet in eget sapien. Praesent mauris purus, ornare quis odio non, tincidunt egestas nisi. Mauris aliquam ornare dapibus. Cras nisi est, convallis a dolor bibendum, mattis malesuada felis. Curabitur iaculis eu elit in luctus. Quisque volutpat tincidunt maximus. Aenean malesuada felis et nunc cursus porta. Aenean a quam ornare, aliquam justo cursus, lacinia lectus. Sed rutrum justo mauris, et accumsan nisi ultrices vitae. Nunc fringilla sem viverra odio rutrum, a pulvinar orci lacinia. Integer ornare malesuada mi, ac blandit leo pulvinar eget. Etiam fringilla consectetur euismod. \n Sed gravida, nibh at aliquet fermentum, nunc magna fringilla risus, ac aliquam urna elit vel quam. Phasellus id neque auctor, aliquet arcu vel, iaculis nisi. Aliquam purus turpis, cursus vitae porta mollis, dignissim vel arcu. Nullam id odio quis arcu pretium iaculis a ac risus. Mauris convallis ipsum lorem, a dignissim sem tempor sed. Nam placerat tincidunt erat vitae placerat. Nunc id convallis justo, quis aliquam dolor. Nunc tempus condimentum metus a tempor. Ut facilisis hendrerit turpis, et blandit ante. Etiam non hendrerit eros. Donec justo augue, vestibulum sit amet felis at, gravida ultricies nibh. Integer orci sem, faucibus eu pellentesque id, porttitor a lectus. Nullam non consectetur lorem."

let words = str.split(' ');
console.log(words.length);
