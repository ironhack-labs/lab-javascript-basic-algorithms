// Iteration 1: Names and Input

//this in the *Code Editor*
console.log("I'm ready !")

var hacker1 = 'Marine'
console.log(`The driver's name is ${hacker1}`);

var hacker2 = 'Clémentine'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
  }else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let newName = "";
for (let i = 0; hacker1.charAt(i); i++) {
  newName = newName + hacker1[i].toUpperCase() + " ";
}

console.log(hacker2.split('').reverse().join(''));

if (hacker1.localeCompare(hacker2)) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker2.localeCompare(hacker1)) {
    console.log("The driver's name goes first.")
  } else {
    console.log("What?! You both have the same name?");
  }

  //bonus 1

var string=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, quam laoreet imperdiet lobortis, elit velit finibus neque, at luctus tellus sem id urna. Etiam aliquam augue dolor, id fermentum dolor viverra ut. Sed nec erat non diam ultricies luctus id vitae sapien. Phasellus pharetra ultricies turpis molestie varius. Aenean ornare commodo neque at egestas. Sed in pharetra libero. Curabitur rhoncus eget leo vel fringilla. Integer tempus sagittis scelerisque. Aenean ultricies dapibus facilisis. Donec elementum lorem nunc. Vestibulum pulvinar lectus et neque molestie, varius pulvinar diam vehicula. Curabitur volutpat viverra metus et aliquet. Phasellus blandit in velit id imperdiet. Fusce ultrices, metus vitae ultricies imperdiet, lorem leo mattis neque, ut bibendum mi ligula ut elit. Cras auctor non quam finibus placerat. Nam sollicitudin hendrerit sem nec lobortis. Suspendisse id purus molestie, venenatis tellus ut, vehicula tellus. Mauris faucibus tincidunt leo et dapibus. Etiam fringilla augue nec metus efficitur, eget facilisis metus scelerisque. Quisque et lorem sollicitudin, dapibus justo nec, bibendum odio. Aliquam quis tellus mattis, convallis nisl at, venenatis ante. Aliquam sagittis velit nisi, vel cursus ipsum mattis eget. Donec commodo massa magna, et placerat nunc vehicula hendrerit. Donec semper neque quam, sit amet semper tortor consectetur vitae. Vestibulum in mattis tellus. Phasellus ac quam vel metus suscipit vehicula sed at eros. Aliquam erat volutpat. Maecenas eu egestas tellus. Sed vitae tellus sit amet mauris molestie pretium. Cras in lectus eros. Phasellus a nisl eget eros accumsan egestas. Vivamus euismod nisi placerat, tincidunt leo eget, condimentum diam. Fusce efficitur iaculis tristique. Suspendisse commodo luctus ex, sit amet cursus dui tincidunt et. Aenean ultrices ac risus a consequat. Fusce consequat, lectus vitae maximus posuere, dui diam fringilla nisi, eget luctus arcu quam eget odio. Curabitur ipsum turpis, ultrices ut interdum ac, fringilla id elit. Aliquam a tortor nec ex scelerisque tincidunt. Phasellus sodales elit eu ligula condimentum, id sollicitudin nisi tempus. Morbi at ligula eget felis fermentum tincidunt a eu massa. Fusce sit amet augue finibus eros porttitor tempus vel eu urna. In dapibus massa elit, non elementum nisi malesuada et. Aenean sed tellus ut mauris lobortis aliquet. Morbi odio purus, fermentum eget neque ac, imperdiet rhoncus nisi. Ut mattis sodales sem, a tincidunt mi consequat vel.`

console.log(string.split(" ").length)