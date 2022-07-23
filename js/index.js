// Iteration 1: Names and Input
//
let hacker1 = "João";
console.log("The driver's name is", hacker1);

let hacker2 = "Hector";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

let hacker1Char = hacker1.length;
let hacker2Char = hacker2.length;

if (hacker1Char > hacker2Char) {
  console.log(
    `The driver has the longest name, it has ${hacker1Char} characters.`
  );
} else if (hacker2Char > hacker1Char) {
  console.log(
    `The navigator has the longest name, it has ${hacker2Char} characters.`
  );
}
//There must be a correct way to code this esle "${hacker1.length}"
else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Char} characters.`
  );
}

// Iteration 3: Loops

// spaced hacker1 name
let hacker1Spaced = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Spaced += hacker1[i] + " ";
}
console.log(hacker1Spaced.toUpperCase());



// reverse hacker2 name
let hacker2Rev = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Rev += hacker2[i];
}

console.log(hacker2Rev);

// Lexicographic order
if (hacker2 > hacker1) {
    console.log(`The driver's name goes first.`)
  } else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
  } else {
    console.log(`What?! You both have the same name?`)
  }


  // Bonus 1
  const paragOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat turpis id justo cursus facilisis. Nulla rutrum nunc nunc, id aliquam libero ullamcorper a. Cras maximus congue elit, ut blandit elit congue quis. Sed scelerisque justo libero, in vehicula lectus scelerisque eu. Integer fringilla, mi et bibendum laoreet, ante ante posuere mi, eu posuere tellus justo in ligula. Suspendisse quis nunc risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a justo rutrum, pulvinar nibh non, tristique ex."

const paragTwo = "Cras ac vestibulum justo, eget fringilla diam. Pellentesque sed efficitur dui. Aliquam vitae luctus massa. Suspendisse potenti. Praesent viverra pretium nunc, sit amet ultrices urna dignissim eu. Phasellus pulvinar velit ac felis elementum, eu ultrices felis consectetur. Vivamus vulputate eros magna, sit amet molestie lectus tempus sit amet. Vivamus quis porttitor diam. Nunc lacinia sollicitudin metus ultricies tempus. Cras varius, urna a venenatis luctus, nunc orci accumsan sapien, et lobortis est tortor sit amet elit. Donec ut nisl ut ex fringilla ultrices in eu lorem. Vestibulum porttitor nisi vel nunc facilisis ultricies. Aenean mollis augue ut diam bibendum mattis. Integer lobortis magna at arcu fermentum commodo. In volutpat, velit sit amet dictum congue, ligula purus feugiat diam, sit amet imperdiet ante ante quis nisi."

const paragThree ="Proin ut lorem nisi. Nullam non eros quis urna facilisis tempus. Sed ut sem feugiat, ornare leo ac, gravida risus. Etiam blandit ante ipsum, sit amet ultrices augue porta ac. Sed volutpat libero vel mi tempor tincidunt. Phasellus egestas arcu vel erat rutrum condimentum. Praesent efficitur bibendum quam, nec congue orci pretium id. Curabitur efficitur est finibus elit dictum, ut pellentesque enim pharetra. Aliquam ligula dui, sollicitudin eu congue vel, eleifend accumsan sem. In efficitur vulputate erat ut varius. Cras vulputate ornare tristique."

const loremParag = paragOne + paragTwo + paragThree
const wordFind ="et"

for (let i = 0 ; i <= loremParag.length ; i++) {
	console.log (i)
		}
	console.log (loremParag.split(wordFind).length)




