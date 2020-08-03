// Iteration 1: Names and Input
let hacker1 = "Carlos", hacker2 = "Alberto";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let str = "", str2 = "";

for (let i = 0; i < hacker1.length; i++){
    str += hacker1[i].toUpperCase();
    str += " ";
}

console.log(str.slice(0,str.length - 1));

for (let i = hacker2.length - 1; i >= 0; i--){
    str2 += hacker2[i];
}

console.log(str2);

let comp = hacker1.localeCompare(hacker2);
if (comp == 1){
    console.log("The driver's name goes first.");
}else if(comp == -1){
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum pharetra pellentesque. Phasellus posuere tellus id euismod feugiat. Donec ornare eu dui eget bibendum. Nullam ac volutpat lacus. Mauris tempor elit id tincidunt sollicitudin. Ut luctus eu nunc eu luctus. Ut nec aliquet felis. Curabitur eget aliquam magna. Suspendisse eu cursus tellus, quis ultrices tellus. Morbi eu enim ac lacus tempor molestie. Pellentesque viverra quam id ex semper finibus.

Praesent tristique turpis metus, a posuere sapien faucibus quis. Nullam et est at nunc rhoncus elementum vitae eget orci. Vestibulum faucibus nisi eget risus efficitur rhoncus. Nam tincidunt lacinia massa, et iaculis odio bibendum et. Maecenas a fermentum leo, id luctus neque. Praesent sit amet suscipit felis. Vestibulum tempus bibendum est. Mauris et tristique quam. Suspendisse justo massa, porta eget quam interdum, sagittis mattis neque. Integer placerat nec orci eu consectetur. Nunc at tortor vel enim dictum blandit ut ac purus. Vestibulum sed auctor nisi, id porttitor augue. Mauris maximus, arcu non consectetur aliquam, purus nulla efficitur dui, eget consequat leo nibh at libero. Vivamus porttitor pellentesque ipsum. In vulputate, justo eu congue aliquet, purus ante dictum tellus, ac suscipit eros eros sit amet neque.

Pellentesque feugiat nunc et mauris elementum, non egestas urna ultrices. Cras congue viverra ullamcorper. Aenean fringilla nisi vel ultricies eleifend. Sed tincidunt pulvinar velit. Donec tellus lacus, dictum ut placerat quis, commodo eu metus. Vivamus ligula augue, ullamcorper nec justo nec, iaculis tristique arcu. Mauris rutrum quam orci, vitae egestas nisl condimentum vitae. Pellentesque dapibus semper ipsum in placerat. Nullam tincidunt, lacus at interdum maximus, sem enim viverra dolor, sit amet posuere leo ante non diam. Aenean mattis a nunc in gravida. Etiam auctor sem nec eros fermentum finibus. Nullam id suscipit lorem, vitae hendrerit tellus. Nam id justo augue. Curabitur libero enim, sollicitudin eu ultrices non, porta nec felis. Nullam elementum blandit mauris et dapibus. Etiam finibus commodo lectus, eget dapibus neque mattis eu.`

let k = 1;

for (let j = 0; j < lorem.length; j++){
   if(lorem[j] == ` `){
    k++;
   }
}
console.log(k)

//

let string3 = lorem;
let counter = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;


if(string3.indexOf(`Et `) != -1){


    counter++;

}
if(string3.indexOf(` et `) != -1){
    counter++;
}

if(string3.indexOf(` et.`) != -1){
    counter++;

}
// bonus 2