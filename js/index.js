// Iteration 1: Names and Input
const hacker1 = "Claire";
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = "Romain";
console.log(`"The navigator's name is ${hacker2}"`);

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
    `Wow, you both have equally long names, ${hacker2.length} characters!.`
  );
}

// Iteration 3: Loops
let hacker1WithSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpace += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1WithSpace);

/* TRY WITH FUNCTION :)
  function addSpacesAndUpperCase(name) {
    let hackerWithSpace="";
    for (let i=0; i<name.length; i++) {
    hackerWithSpace += name[i].toUpperCase() + " ";
  };
  console.log(hackerWithSpace);
  }
  addSpacesAndUpperCase(hacker2);
  addSpacesAndUpperCase(hacker1);
  */

// 3.2
let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

// 3.3 //To stop the loop when conditions is true, we add a label to the outerloop.
let string = "";

if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);
} else {
  outerloop: for (let i = 0; i < hacker1.length; i++) {
    for (let j = 0; j < hacker2.length; j++) {
      if (hacker1[i] < hacker2[j]) {
        string += "The driver's name goes first.";
        console.log(string);
        break outerloop;
      } else if (hacker1[i] > hacker2[j]) {
        string = "Yo, the navigator goes first definitely.";
        console.log(string);
        break outerloop;
      }
    }
  }
}


//BONUS PART == Romain Only

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in neque facilisis, interdum ante auctor, pulvinar nisl. Sed fermentum a libero eget vestibulum. Sed id nunc sed ante luctus malesuada. Integer accumsan neque sed diam pharetra eleifend. Morbi ullamcorper rutrum lacus. Donec tempus libero ornare purus dapibus, quis sagittis enim gravida. Curabitur blandit dolor vulputate, tincidunt augue vel, sollicitudin augue. Vivamus ante augue, fermentum id nunc ut, hendrerit vehicula risus. Nam sapien justo, egestas sit amet diam nec, eleifend semper dui. Ut vulputate pulvinar tortor, in sagittis ex. Suspendisse rhoncus dapibus posuere. Sed dui purus, porta et mauris vitae, convallis interdum dui.
Proin faucibus erat in ante laoreet tincidunt. Etiam imperdiet luctus commodo. Proin sit amet molestie arcu. Sed eget dignissim urna, vel pellentesque est. Donec non velit odio. Fusce nisi mi, faucibus quis volutpat in, convallis eu turpis. Duis egestas vel odio sed aliquam. Aliquam eget viverra mi.
Praesent dictum, elit ut semper finibus, felis orci mollis sem, et commodo urna lacus ac arcu. Suspendisse nibh purus, blandit varius porttitor ac, aliquet sit amet nunc. Vestibulum id euismod erat. Cras rutrum, orci at rhoncus porta, nisi lectus accumsan ligula, nec mattis lectus mauris vel lorem. Praesent nec urna non diam semper tempor vel quis augue. Quisque id ante ut mi aliquet interdum. Aliquam erat volutpat. Quisque justo orci, feugiat sit amet mauris vel, facilisis finibus quam. Vestibulum nec posuere tellus. Praesent quis justo et massa viverra sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;
 

// LOOP la string IF string[i]=" " => numberOfWord + 1
let numberOfWord = 0;
//count number of linebreaks + add the first paragraph to the sum
let numberOfParagraphs = paragraph.match(/\n/g).length + 1;

//If there is a space it means a new word.
for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === " ") {
    numberOfWord ++;
  }
}
console.log(numberOfWord + numberOfParagraphs);


//Not the best solution because it doesn't work if "et" is at the end or beginning of a paragraph.
let numberOfEt = 0;
for (let i = 0; i < paragraph.length; i++) {
  let currentWord = paragraph[i] + paragraph[i+1] + paragraph[i+2] + paragraph[i+3];
  if (currentWord.includes(" et ")) {
    numberOfEt++
  }
}
console.log(numberOfEt);


// BONUS 2

const phraseToCheck = "Amor, Roma";
let isPalindrom = true;

//trying to learn to use regex
let phraseWithoutSpace = phraseToCheck.replace(/[^\w]/g, "").toLowerCase();
for (let i = 0; i < phraseWithoutSpace.length; i++) {
  if (phraseWithoutSpace[i] === phraseWithoutSpace[phraseWithoutSpace.length - 1 - i]) {
    continue;
  } else {
    isPalindrom = false;
    break;
  }
}
console.log(isPalindrom);
