// Iteration 1: Names and Input

let hacker1 = 'Boris';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Olga';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) 
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops

let capitalName = '';
for(let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + ' ';
}

let reverseName = '';
for(let i = hacker2.length -1; i >= 0; i--) {
  reverseName += hacker2[i];
}

if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
    } else if(hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
    } else {
      console.log("The driver's name goes first.")
    }

//  Bonus 1

let paragraphLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, nunc nec molestie malesuada, elit nisi faucibus leo, id aliquam odio elit vitae lorem. Sed tristique ullamcorper tempus. Nunc dignissim enim in lorem malesuada, sed tincidunt velit hendrerit. Etiam vitae est dictum, mollis diam a, luctus mi. Cras accumsan nec mi vitae placerat. Aliquam at nisi sit amet nisi auctor elementum ac et magna. Curabitur commodo ex ut tortor bibendum rhoncus. Suspendisse aliquam, nunc vitae volutpat aliquam, ipsum nisi viverra dui, quis laoreet arcu quam nec leo. Ut maximus augue lacus, et varius arcu elementum sed. Fusce dignissim consectetur massa vel dignissim. Maecenas egestas eget ipsum eu dictum. Ut elit massa, imperdiet nec quam commodo, rhoncus consectetur metus. Quisque euismod sapien vel neque aliquam molestie. Fusce at felis turpis. Duis dolor metus, euismod quis sagittis nec, vulputate a nunc. Curabitur porta vitae erat nec sagittis. Praesent quis elementum justo. Nulla arcu neque, posuere in ligula et, commodo ultricies mi. Nam ligula diam, convallis sit amet lorem quis, vehicula suscipit lacus. Sed consequat nibh dui, sed finibus massa fermentum at. Curabitur luctus mauris facilisis quam lacinia tristique. Duis consequat lacus vel erat fermentum, at molestie urna euismod. Mauris at placerat enim. Nunc massa quam, tempor a sapien ut, sodales interdum odio. Proin scelerisque ipsum et augue sagittis iaculis. Pellentesque lobortis varius nunc a hendrerit. Etiam vel metus sed nisi suscipit aliquet eu et leo. Curabitur dictum eros at erat lacinia lobortis. Nullam maximus, dui suscipit aliquam scelerisque, purus diam condimentum quam, vitae tempus augue odio sed diam. Integer at aliquet turpis. Cras blandit lorem nec auctor euismod. Cras faucibus sapien mi, ac sodales nisi pretium vel. Pellentesque sagittis bibendum elit at hendrerit. Proin id fringilla sapien, et vestibulum augue. Vestibulum varius tempus neque, ornare viverra sem."

let spaceCount = (paragraphLorem.split(" ").length);
console.log(spaceCount);

// Bonus 2

let phraseToCheck = "race car";
let spaceFree = "";
for(let i = 0; i < phraseToCheck.length; i++) {
  if(phraseToCheck[i] !== " " && phraseToCheck[i] !== ",") { 
    spaceFree += phraseToCheck[i] 
    console.log(spaceFree)
  }
}

console.log(spaceFree)