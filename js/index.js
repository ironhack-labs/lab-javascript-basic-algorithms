// Iteration 1: Names and Input
var hacker1 = 'Lorgio';
var hacker2 = 'Diego';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log( `The Driver has the longest name, it has  ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log( `Yo, navigator got the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log( `You both got equally long names, ${hacker2.length} characters.`);
  }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let name1 = ""; 

for (let i = 0; i <= hacker1.length -1; i++) {
 name1 += hacker1[i]+ "";  
};

console.log(name1.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverse(name) {
    var result = "";
    for (var i = name.length - 1; i >= 0; i--)
      result += name[i];
    console.log(result);
  }
  reverse(hacker2);
  
  
/*3.3 Depending on the lexicographic order of the strings, print:
  - The driver's name goes first.
  - Yo, the navigator goes first definitely.
  - What?! You both have the same name?
  */


if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
  }

//Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit blandit lectus non venenatis. Cras id nunc quis diam mattis faucibus. Duis tempus leo vitae iaculis vulputate. Donec nunc orci, sagittis nec risus non, lacinia placerat nibh. Sed lacinia nunc eget est placerat malesuada. Sed venenatis eget eros ut fermentum. Etiam porta lorem quis fringilla pulvinar. Nunc eu turpis in turpis interdum posuere nec in sem. Proin luctus eget arcu ac imperdiet. Sed quis lacus egestas, sollicitudin lacus et, sagittis ante. Vivamus risus velit, ultricies ut nisi a, pharetra posuere libero. Maecenas lacus neque, ullamcorper eu sollicitudin vel, rhoncus eget ante. Vestibulum ac bibendum purus, nec laoreet felis. Morbi urna felis, finibus vel justo sit amet, porta mollis urna. Pellentesque fringilla dolor sit amet venenatis porttitor. Aliquam pretium justo id scelerisque dignissim. Vivamus hendrerit gravida eros, et fringilla augue rutrum ut. Sed semper convallis elit, ut cursus ipsum maximus non. Maecenas interdum pretium magna. Nam in est id arcu congue feugiat quis imperdiet erat. Nunc lacus neque, lobortis sit amet augue eget, euismod hendrerit nulla. Aenean quis fringilla nunc. Suspendisse eros purus, aliquam eu condimentum et, suscipit in lectus. Vivamus in venenatis velit. Sed eu tellus lacinia, tristique justo quis, faucibus quam. Vestibulum est urna, bibendum id dui quis, ultricies blandit nisi. Nunc condimentum metus eu malesuada cursus. Curabitur id tincidunt libero. Nam laoreet eleifend sem in scelerisque. Vivamus blandit malesuada sem, et interdum velit fringilla a. Quisque ullamcorper tellus vel nisi tempus elementum ac et sapien. Phasellus vehicula porttitor orci, nec ornare odio ornare sed. Phasellus ac dolor vel dolor molestie lacinia. Donec vitae feugiat est. Nulla interdum luctus luctus. Quisque suscipit sapien tortor, vitae venenatis ante egestas quis. Phasellus sit amet est a risus venenatis dapibus.";

function words (finder){
  var dirtyWord = ''
  for(i = 0; i <= finder.length; i++)
  if(i = 'et'){
    console.log('lo encontre')
  }else if (i = 'et') {
    console.log('sigue')
  }
}

words(lorem)