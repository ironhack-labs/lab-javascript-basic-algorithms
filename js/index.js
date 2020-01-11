// Iteration 1: Names and Input

var hacker1 = "Remy";
console.log("The driver's name is " + hacker1);

var hacker2 = "Jonathan";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

var a = "";
for (let i=0; i < hacker1.length; i++) {
  a += hacker1[i].toUpperCase() + " ";
};
console.log(a);

var b = "";
for (let i=hacker2.length-1; i >= 0; i--) {
  b += hacker2[i];
};
console.log(b);


function lexOrder (a,b) {
  let c = a.localeCompare(b);
  if (c == 1) {
    console.log("Yo, the navigator goes first definitely.");
  } if (c == -1) {
    console.log("The driver's name goes first.");
  } if (c == 0) {
    console.log("What?! You both have the same name?");
  }
  };

  lexOrder (hacker1, hacker2);

    // BONUS 1

    var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat ac leo in congue. Etiam dolor ex, venenatis sit amet suscipit eu, iaculis id erat. Curabitur id urna sit amet tortor gravida dapibus in vel justo. Donec sed consectetur neque. Sed vulputate dui non porttitor maximus. Nam nec sagittis ipsum. Phasellus ullamcorper aliquam quam. Pellentesque iaculis risus ut dui fermentum sagittis. Sed quis mauris augue. Donec placerat aliquam justo, at gravida leo tincidunt at. Morbi nunc erat, vulputate nec libero in, sagittis aliquet purus. Sed mollis nulla vel nunc pharetra interdum. Mauris malesuada feugiat tincidunt. Nulla facilisi. Duis elit dolor, viverra non lacus vel, iaculis ultrices lacus. Nam vehicula elit et ligula sodales ultricies. Morbi consequat enim vel est malesuada mattis. Etiam pulvinar magna eget turpis venenatis hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur faucibus massa sed pharetra feugiat. Suspendisse pharetra tristique aliquet. Sed tincidunt tortor sem, ut tempor libero ultricies ut. Phasellus condimentum placerat auctor. Sed ligula felis, tristique ultrices purus ac, rutrum blandit ipsum. Mauris elementum nisi urna, vel condimentum nisl sodales in. Ut vitae sodales ex. Pellentesque in massa ac ipsum lobortis eleifend. Sed sagittis diam vitae odio efficitur, lacinia gravida libero cursus. Nam sed est in arcu euismod dignissim vel et nibh. Mauris ullamcorper, neque eu aliquet tempor, est ipsum aliquam metus, sit amet vestibulum sem libero sed felis. Nunc id euismod est. Sed placerat rhoncus cursus. Pellentesque id ex dui. Vivamus feugiat dolor velit, nec vulputate augue rhoncus at. Fusce vitae libero maximus, posuere nulla quis, bibendum magna. Nulla venenatis id justo a porttitor."

    function wordCounter (text) {
      return text.split(" ").length;
    };
  
    console.log(wordCounter(lorem));
  
      function etCounter (text) {
      return text.split(" et ").length-1;
    };
    
    console.log(etCounter(lorem));


    // BONUS 2

var phraseToCheck = "Amor, Roma";
