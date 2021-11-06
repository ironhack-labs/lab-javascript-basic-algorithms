// Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`. */
let hacker1 = "Oscar";
console.log(`"The driver's name is ${hacker1}."`);

/*
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`. */
let hacker2 = "Giovanni";
console.log(`"The navigator's name is ${hacker2}."`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
}


// Iteration 3: Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N" */
let hacker1Uppercase = "";
for (let i of hacker1){
  hacker1Uppercase += i.toUpperCase() + " "
  //console.log(i.toUpperCase())
}

/*3.2 Print all the characters of the navigator's 
name, in reverse order. i.e. "nhoJ" */
let hacker2Reverse = "";
for ( let i = hacker2.length -1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */
let lexicographic = hacker1.localeCompare(hacker2);
console.log(lexicographic);
if (lexicographic === -1){
  console.log("The driver's name goes first.");
} else if (lexicographic === 1){
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}




/* para terminar en casa */ 
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, nisi ac suscipit dictum, ante urna accumsan libero, eu tincidunt ipsum neque nec mi. Nam at ante velit. Donec id tempus dui. Donec sit amet sodales massa. Suspendisse porttitor, nulla non tincidunt mattis, justo quam pharetra sapien, rhoncus ultricies nibh elit id ligula. Quisque pulvinar aliquam vulputate. Cras sed dui id neque euismod porttitor. Donec sit amet leo nec sem tempor efficitur et quis nibh. Donec in libero nec eros consectetur accumsan. Pellentesque luctus, felis non vulputate suscipit, metus erat molestie est, quis congue ligula nunc eu magna. Donec congue velit in congue commodo. Cras quis sollicitudin justo, varius semper tortor. Aenean ut tincidunt arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Pellentesque sed augue cursus, cursus nunc at, volutpat lorem. Donec vel mattis arcu, in semper magna. Suspendisse mattis mattis purus, a malesuada neque. Etiam feugiat dignissim nisl ac vulputate. Sed pharetra pharetra est non congue. Quisque turpis enim, ornare ut pharetra in, fermentum eget nisi. Suspendisse hendrerit enim vitae felis ultrices, id fringilla justo euismod. Quisque venenatis augue sit amet elit tincidunt, nec tristique quam pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus id lectus condimentum, accumsan mi non, fermentum ante. Vivamus volutpat lorem tellus, eget auctor arcu pretium at. Sed venenatis orci nec felis feugiat congue.

Nunc tempor massa in velit laoreet gravida. Mauris interdum dolor ac enim sagittis, et fringilla lacus gravida. Aenean dapibus elit aliquet, consectetur risus ut, blandit nisl. Nunc interdum eu enim vel cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras elementum sapien rutrum, semper sem ut, pretium ante. Aenean rhoncus augue sit amet pretium blandit. Aenean massa lorem, auctor vitae lectus vel, malesuada pharetra augue. Nam nec velit ac ipsum porttitor scelerisque. Pellentesque vel mauris nisl. Nunc ut tempor metus. Sed commodo neque sed sapien posuere euismod.`;

const textoArray = lorem.split(" ")
//console.log(textoArray)
let counter = 0;
let countersalto = 0;

for (let i = 0; i< textoArray.length; i++){
  
  //console.log(textoArray[i])
  if (textoArray[i].includes("\n")){
    counter +=1
    countersalto++
  }
  counter = i
}

console.log(counter,countersalto) 
/*if (textoArray[i].includes("\n")){
    counter++
  } */