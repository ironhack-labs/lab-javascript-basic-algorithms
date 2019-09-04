let hacker1 = "Pedro";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Millene";
console.log(`The navigator's name is ${hacker2}`);
//------------------------------------------------------------------------------------------
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both got equally long names, ${hacker2.length} characters!`
  );
}
//------------------------------------------------------------------------------------------

let letter = "";
for (let i = 0; i < hacker1.length; i++) {
  letter += hacker1[i].toUpperCase() + " ";
}
console.log(letter);

function reverseName(name) {
  let str = name.split("");
  let str2 = str.reverse();
  let str3 = str2.join("");

  return console.log(str3);
}
reverseName(hacker1);

function lexicalVerification(driver, navigator) {
  let answer = driver.localeCompare(navigator); // interno maior
  if (answer === 1) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (answer === -1) {
    console.log("The driver's name goes first.");
  } else {
    console.log("What?! You both got the same name?");
  }
}

lexicalVerification(hacker1, hacker2);

//---------------------------------------------------------------------------------------------

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra risus non justo ultricies lobortis. Etiam leo ligula, efficitur vel leo congue, dignissim finibus sem. Sed sollicitudin maximus purus vel suscipit. Sed tempor odio lacus, eu sollicitudin nunc congue et. Nunc non ex nec ex efficitur vehicula. Ut rhoncus quam et tincidunt iaculis. Maecenas facilisis quam eu ex fringilla, non congue libero pellentesque.Nullam ultricies consectetur malesuada. Suspendisse eu tristique ex, ac tristique velit. Quisque iaculis vitae neque ut fermentum. Duis cursus, ipsum vitae dapibus convallis, diam dui elementum nisi, id porta justo ex quis nunc. Ut vestibulum, lacus ut imperdiet elementum, enim velit placerat nisl, id rutrum ex arcu eu mauris. Vestibulum auctor venenatis malesuada. Mauris malesuada aliquam congue. Maecenas in faucibus quam.Nunc tortor est, mollis consectetur lorem vitae, aliquam varius diam. Sed maximus mauris nec eleifend interdum. Pellentesque magna dolor, dictum nec ullamcorper at, facilisis at neque. Maecenas dignissim dui quis mollis sodales. Etiam bibendum non erat nec consectetur. Sed tincidunt scelerisque scelerisque. Praesent vitae est in dui pretium placerat id sit amet est. Etiam et iaculis justo. Maecenas sit amet rutrum mi, in ultricies diam. ";
let word = lorem.split(" ");
console.log(word.length);

let word2 = (" " + lorem.toLowerCase()).split(" et ");
let word3 = lorem.split(" et.");
if (word3.length === 1) {
  console.log(word2.length - 1);
} else {
  console.log(word2.length + word3.length - 2);
}
// let word2 = (" " + lorem.toLowerCase()).split(/\bet\b/g)
