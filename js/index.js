// Iteration 1: Names and Input

let hacker1 = "Geoffrey";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1 = "Geoffrey";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The driver's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, XX characters! ${hacker1.length} characters`);
} else {
  console.log("What is your names ?")
}

// Iteration 3: Loops

for ( let i=0 ; i< hacker1.length ; i++) {
    console.log(`${hacker1[i].toUpperCase()} `)
  }



for ( let i=hacker2.length ; i>=0 ; i--) {
    console.log(`${hacker2[i]} `);
  }



if (hacker1[0 ]< hacker2[0]) {
    console.log("The driver's name goes first.");
  } else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?");
  }


  // Bonus 1: 

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis sed lectus vitae viverra. Nunc scelerisque, augue in mollis vestibulum, massa sapien varius nisi, et mollis nunc felis eu velit. Nulla vel nunc sit amet magna egestas porttitor in a massa. Aenean vulputate mi laoreet leo efficitur mollis. Pellentesque a ligula non risus dictum blandit non eu nisi. Sed a risus vel urna euismod laoreet id facilisis risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas viverra magna ac tellus placerat varius. Curabitur lectus diam, efficitur at vestibulum a, tincidunt sed lacus. Aliquam a lectus congue lectus laoreet auctor. Praesent id lacus quam. Maecenas maximus iaculis fringilla. Curabitur neque magna, porta vel justo sit amet, tempor dapibus turpis. Nunc vulputate ipsum a posuere vehicula. Maecenas ex metus, iaculis ut elit vel, commodo auctor massa.

Aenean id eros id tellus ultricies venenatis. Duis vitae vestibulum massa, nec finibus ipsum. Fusce ut ex mi. Vivamus quis feugiat mauris. Aenean eros nisi, tempor eget rutrum sed, rutrum at ipsum. Proin massa turpis, scelerisque vel eros in, laoreet mattis justo. Suspendisse potenti. Mauris accumsan feugiat tempus. Nunc mauris velit, tristique eget bibendum ac, facilisis id eros.

Maecenas viverra mollis orci, id tincidunt velit imperdiet ut. Pellentesque vehicula ligula ac malesuada hendrerit. Quisque scelerisque turpis in commodo accumsan. Cras fermentum lorem in mauris ullamcorper egestas. Cras sollicitudin ante velit, ultricies iaculis odio consectetur ac. Maecenas rutrum massa feugiat massa dapibus venenatis. Pellentesque auctor purus augue, ut sagittis tortor dignissim id. Suspendisse potenti. Ut velit massa, convallis non egestas sed, volutpat non neque. Vestibulum sit amet urna erat. Etiam pretium, nibh vitae malesuada luctus, libero nunc cursus sapien, non faucibus arcu turpis non eros. Nunc pharetra varius placerat. In maximus est nec venenatis faucibus. Morbi maximus eros sem, sit amet ultrices nulla aliquam id.`

// I found this "RegEx" method I trully not understand a single letter but woaw ... Pretty effective !

let wordCount = lorem.match(/(\w+)/g).length;
console.log(wordCount);


console.log(lorem.split("et").length - 1);
// Found this technic, but I don't understand why we have to say .length -1


// Bonus 2: 

let phraseToCheck = 