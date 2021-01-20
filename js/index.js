// Iteration 1: Names and Input

let hacker1 = "Lena";
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = "Fulano";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let loopOfDriver = "";

for (let i = 0; i < hacker1.length; i += 1) {
  loopOfDriver += `${hacker1[i].toUpperCase()} `;
}

console.log(loopOfDriver.trim());

//Bonus Time!

//Bonus 1
//Couldn't finish it
/* let loremIpsum = 'Maecenas molestie lacus id dapibus placerat. Phasellus sem diam, pellentesque pellentesque sagittis suscipit, sollicitudin ac mi. Pellentesque et convallis arcu. Morbi rutrum est quis ipsum luctus volutpat. Etiam vel tortor vitae turpis laoreet vestibulum a sit amet mauris. Pellentesque faucibus nulla et tortor commodo tempus. Aenean a viverra ante, non hendrerit est. In hac habitasse platea dictumst. Pellentesque viverra risus augue, non iaculis nulla venenatis quis. Pellentesque quam erat, feugiat a tempus ac, rutrum ac orci. Duis et justo accumsan, maximus augue et, auctor sem.

Quisque odio urna, lacinia vitae sagittis vitae, molestie id diam. Vestibulum a nisi eleifend tortor gravida scelerisque non non justo. Sed mattis lobortis arcu in vulputate. Phasellus quis semper lectus. Nulla eget sollicitudin nunc, et scelerisque ipsum. Donec eu vehicula sem. Etiam eu diam in urna scelerisque egestas eget nec eros. Aenean ut ex quis orci pretium mollis sed et ligula. Donec gravida cursus ligula, et laoreet diam mattis et. Sed in diam a nulla suscipit vehicula. In vulputate nisi nisl. Nulla facilisi.

Pellentesque quis ante eget libero mollis gravida ac et libero. Morbi porta ut sem id posuere. Pellentesque at elit non diam pellentesque venenatis. Pellentesque eget mi nec tortor pretium tincidunt. Nunc sagittis leo ut metus aliquet, vitae posuere enim lacinia. Mauris eget magna libero. Nulla fermentum in magna nec semper.'

console.log(loremIpsum.length); */
