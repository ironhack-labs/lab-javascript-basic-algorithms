// Iteration 1: Names and Input

let hacker1 = "Hulio";
console.log("The driver name is " + hacker1);

let hacker2 = "Roberto";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names," + hacker1.lenght + "characters!"
  );
}

// Iteration 3: Loops

let space = "";
for (i = 0; i < hacker1.length; i++) {
  space += hacker1[i] + " ";
}
console.log(space.toUpperCase());

let reversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

let comp = hacker1.localeCompare(hacker2);

if (comp === -1) {
  console.log("The driver's name goes first.");
} else if (comp === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (comp === 0) {
  console.log("What?! You both have the same name?");
}

//Bonus 1:

let li =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum sed mi vitae porta. In viverra bibendum dui, eu pellentesque mauris dapibus et. Cras in vestibulum nunc. Nunc volutpat tincidunt enim, et dictum ex interdum quis. Nulla at volutpat purus. Curabitur et dolor quis dui placerat auctor. Praesent ultricies odio sed ante fringilla, vel posuere ante faucibus. Nullam elementum sed libero vitae blandit.Praesent convallis imperdiet tempor. Integer in lorem eget enim malesuada sodales. Phasellus eu nisi sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut condimentum in est in varius. Maecenas sodales tincidunt malesuada. In justo urna, interdum ut urna et, varius tempor tellus. Donec id scelerisque purus, quis vulputate sapien. Phasellus sit amet elit sed massa lobortis posuere eget ut nunc. In euismod nisl maximus urna sollicitudin laoreet. Maecenas a viverra elit. Aenean viverra magna eget metus mattis, ut efficitur dui facilisis. Fusce interdum lorem sed suscipit rutrum.Morbi aliquet nunc eget lacus varius malesuada. Nulla hendrerit faucibus purus. Nulla tincidunt condimentum blandit. Nulla tempus elit et augue mollis, eget suscipit diam hendrerit. Fusce id accumsan erat. Nullam ultricies mauris felis, a molestie nulla gravida pellentesque. Fusce vehicula erat pellentesque, rhoncus est ac, convallis urna. In vel iaculis leo, eget sollicitudin orci. Proin tellus metus, fermentum eu cursus id, scelerisque quis quam. Duis ipsum ante, ornare a lorem eu, consequat auctor justo. Nulla consequat ipsum et ullamcorper sodales. Suspendisse congue ex a nulla venenatis, quis consequat diam placerat. Sed sed dui at augue elementum viverra id ac purus. Donec viverra leo a gravida pharetra. Fusce pretium purus ac iaculis pharetra. Etiam rhoncus dolor id sapien elementum facilisis.";

console.log(li.split(" ").length);

var sch = li.search(/(et)/g);
console.log(sch + " times " + "repeated word:et");

//Bonus 2:

