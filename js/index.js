//Iteration 1: Names and Input

const hacker1 = "joe"
  console.log("The driver's name is: " + hacker1);

const hacker2 = "john"
  console.log("The navigator's name is: " + hacker2);

//Iteration 2: Conditionals

if (hacker1.lenght > hacker2.lenght) {
    console.log("Driver's name has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log("Navigator's name has the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("They both have the same number of characters: " + hacker1.lenght)
}

//Iteration 3: Loops

let name = " ";
for (let i = 0; i < hacker2.length; i++) {
    name += hacker2[i].toUpperCase() + ' '; //
}
console.log(name);

let nameRev = " ";
for (i = hacker2.length -1; i >= 0; i--) {
    nameRev += hacker2[i];
}
console.log(nameRev);

/*console.log(hacker1.localeCompare(hacker2))*/


if ( hacker1.localeCompare(hacker2) === -1){
    console.log(`The ${hacker1} name goes first.`)
  }
  else if ( hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, the ${hacker2} goes first definitely.`) 
  }
  else {
    console.log(`What?! You both have the same name?`)
  }


  //BONUS TIME 1

  var text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt feugiat magna non condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec maximus mauris ut tortor condimentum pulvinar. Vestibulum sem erat, laoreet eget malesuada eget, eleifend vitae quam. Donec ultricies molestie quam id congue. Etiam in aliquet ex. In id iaculis sem, non malesuada ante. Nulla cursus tempus interdum. Etiam iaculis ut nisl et cursus. Nulla quis diam sapien. Suspendisse in vestibulum ligula, eu rhoncus erat. Mauris eu pulvinar quam, ac consectetur felis. Ut dignissim, erat in tincidunt venenatis, neque libero pharetra velit, in finibus lectus mi vitae augue. \
  Integer laoreet in nibh vitae laoreet. Nulla suscipit faucibus eros vitae vulputate. In sit amet metus tempus, viverra sapien non, posuere nulla. Duis fringilla id diam vitae rhoncus. Cras auctor nec nunc tempus facilisis. Nulla ut porttitor arcu, ac efficitur enim. Phasellus scelerisque sagittis mi, non tincidunt nisl imperdiet eget. Pellentesque lobortis vitae sapien sollicitudin tristique. Nam vel ipsum nec nisi placerat ultricies. Vivamus accumsan pretium mauris. Cras viverra et est eu molestie. Suspendisse potenti. Proin tincidunt massa laoreet consequat suscipit. Vivamus malesuada velit et rhoncus sollicitudin. \
  Praesent faucibus, ante sit amet viverra semper, nibh eros laoreet odio, mattis ultricies dolor turpis a neque. Sed non mollis mi. Nulla lobortis nec ipsum ut posuere. Donec ex diam, pellentesque sed elit ut, porttitor tempus dui. Morbi facilisis erat ligula, sit amet volutpat tortor pharetra tempor. Nam tellus nunc, pharetra at nulla eget, blandit tempor mauris. Sed eu dapibus lectus. In hac habitasse platea dictumst. Praesent id placerat odio. Pellentesque malesuada vestibulum varius. Nam aliquam neque nec urna ultricies, at sodales augue facilisis. Fusce imperdiet et odio eget elementum. Fusce sagittis eget lacus non viverra. Morbi dolor mauris, malesuada eu congue vel, lobortis eu lectus. Etiam fringilla posuere viverra. Morbi at quam leo."

console.log(text);

let countWords = text.split(" ").length;
console.log("There are: " + countWords + " words.");

