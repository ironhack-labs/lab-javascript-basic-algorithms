// Iteration 1: Names and Input

let hacker1 = 'Sara';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Alex'; 
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};

// Iteration 3: Loops

let upperCaseName = '';
for (let letter of hacker1){
  upperCaseName += letter.toUpperCase() + " ";
}
console.log(upperCaseName.trim());


let reverseName = ''; 

for (let i = hacker2.length - 1; i >= 0; i -= 1) {
  reverseName += hacker2[i];
}

console.log(reverseName);


if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
    console.log("What?! You both have the same name?");
  } else {
    let j = 0;
    let minLength = Math.min(hacker1.length, hacker2.length);
    while (j < minLength && hacker1[j] == hacker2[j]) {
      j++;
    }
    if (hacker1[j] < hacker2[j]) {
      console.log("The driver's name goes first");
    } else {
      console.log("Yo, the navigator goes first definitely");
    } 
  }


  //Bonus 1 

count = 0;
for (let y = 0; y < paragh.length; y++) {
  if (paragh[y] !== ' ') {
    count++;
  }  
}
console.log(count);


let paragh = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus tellus in maximus pretium. Etiam condimentum ac tortor eu porttitor. Sed in tortor est. Proin a ultricies sapien. Duis sit amet lectus augue. Nunc nec turpis in augue dictum ultrices. Etiam sollicitudin dictum est vitae vehicula. Sed in rutrum sapien. Sed viverra malesuada elementum. Praesent gravida arcu felis, non scelerisque dolor pretium et. Etiam at elit tincidunt, lacinia eros a, aliquet nibh. Nam rhoncus tincidunt porta. Quisque gravida gravida ex volutpat fringilla. Integer sit amet tellus sapien. Vestibulum pretium nibh a ante consequat, ut sodales lectus ornare. Praesent dui urna, facilisis et purus ut, eleifend hendrerit lorem. Nullam pulvinar enim a risus ultrices mattis. Praesent id arcu mi. Aenean tincidunt, nisi eget interdum vulputate, enim magna mollis ante, id fermentum mauris elit ut erat. Fusce condimentum orci eu metus tincidunt, eu pretium libero molestie. Nullam velit velit, rutrum eget iaculis et, volutpat ac enim. Vestibulum augue arcu, ultricies sit amet nunc eget, semper finibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis mattis sem, quis vestibulum felis condimentum a. Pellentesque ullamcorper eros non mollis feugiat. Fusce fringilla ex quis cursus vulputate. Integer ultricies arcu ut arcu blandit, vel ultricies lacus rutrum. Cras suscipit, dui ac ultricies volutpat, justo nibh pellentesque diam, ut ullamcorper nunc enim eget nulla. Duis vitae libero in quam condimentum consectetur vitae id ante. Duis tempor velit maximus elementum pretium. Maecenas vitae malesuada turpis, in sagittis arcu. In euismod non nunc quis bibendum. Donec hendrerit nibh non ligula efficitur, at porttitor diam varius. In nec luctus purus. Curabitur non risus at elit imperdiet consectetur non eget lacus. Nam fringilla massa eu eros congue semper at vel ipsum. Vivamus ut arcu vitae nulla varius pharetra. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';


count = 0;
let palavra = '';
for (let y = 0; y < paragh.length; y++) {
  if (!isLetter(paragh[y])) {
    if (palavra === "et") {
      count++;
    }
    palavra = '';
  } else {
    palavra += paragh[y];
  }

  if (y === paragh.length - 1 && palavra === "et") {
      count++;
  }
}
console.log(count);

function isLetter(ch) {
  return ch.toUpperCase() != ch.toLowerCase();
}

//Bonus 2 

function palindrome(phraseToCheck) {
  phraseToCheck = phraseToCheck.toLowerCase().replace(/[\W_]/g, '');
  let len = phraseToCheck.length;
  for (let i = 0; i < len / 2; i++) {
    if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
palindrome('Amor, Roma');