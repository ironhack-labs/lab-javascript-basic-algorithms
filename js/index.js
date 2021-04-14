// Iteration 1: Names and Input
let hacker1 = "Eva";
let hacker2 = "Antoine";

console.log(`The driver's name is ${hacker1} and the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let capitalName = "";

for (let i = 0; i < hacker1.length ; i++) {
    capitalName = capitalName + hacker1[i] + " ";
}
console.log(capitalName.toUpperCase());

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

for (let i = 0; i < hacker1.length || hacker2.length; i++) {
    if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definitely.");
        break;
    } else {
        console.log("What?! You both have the same name?");
        break;
    }
    
}

// BONUS 1.1 : 

let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu iaculis tellus. Donec faucibus massa et eros tristique posuere. Integer sagittis vehicula ullamcorper. Phasellus placerat laoreet ullamcorper. Vestibulum cursus justo a nisi viverra semper. Sed et elit in sem placerat vehicula. Integer tempor diam in mauris condimentum, in molestie nunc placerat. Nulla porta est elit, id hendrerit risus rutrum sed. Curabitur laoreet venenatis rutrum. Integer commodo ante vitae lorem blandit tempus. Aliquam ligula sapien, vestibulum mattis ex sit amet, viverra scelerisque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus erat nibh, consectetur at lorem id, lacinia laoreet augue. Nulla non consequat velit, ac tincidunt risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pellentesque mi sit amet justo rhoncus vestibulum non vel urna. Suspendisse mattis pretium erat a ultricies. Nullam euismod consequat eros et finibus. Aenean rhoncus, turpis fringilla vehicula porta, tellus justo sodales elit, eu placerat lorem ex et ex. Nullam condimentum urna non pretium suscipit. Suspendisse maximus, ipsum a consequat malesuada, felis ex efficitur nulla, quis fringilla tellus tellus eget nibh. Suspendisse potenti. Donec imperdiet sollicitudin finibus. Donec nisl justo, commodo vitae sapien ac, tincidunt consequat tellus. Nulla vehicula magna ex, a elementum justo efficitur vitae. Nunc ultrices massa non enim aliquam porttitor. Nulla facilisi. Ut eleifend sollicitudin urna vel molestie. Donec aliquet vestibulum orci vel sodales. Ut rhoncus nec justo eget mattis. Donec non lectus ultrices, hendrerit neque sagittis, fermentum elit. Ut tempor iaculis maximus. Pellentesque bibendum pretium justo, et facilisis massa pretium non. Quisque non erat tincidunt, tincidunt odio finibus, mollis augue. Aliquam vitae enim efficitur, bibendum elit ut, ultricies elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat purus at aliquet lobortis. Ut facilisis est vitae neque faucibus blandit. In vel felis faucibus, elementum augue tincidunt, mollis nisi. Duis imperdiet odio leo, et ultricies nulla convallis eget. Ut ultrices, est non lacinia viverra, risus libero ullamcorper risus, nec interdum metus metus quis metus. Vestibulum interdum feugiat faucibus. Integer hendrerit at turpis vel consectetur. Duis nec arcu sagittis, porta enim id, porttitor nibh. Curabitur non augue rhoncus, feugiat orci non, mattis est." 

let counter = 1;
for (let i = 0; i < para.length; i++) {
    if (para[i] == " ") {
        counter = counter + 1;
    }
}
console.log(`There is ${counter} words in the text!`)


let myArray = para.split(" ");
console.log(`There are ${myArray.length} words in the string.`);

// BONUS 1.2 : 

let counterET = 0;

for (let i = 0; i < myArray.length; i ++) {
    if (myArray[i] == "et") {
        counterET += 1;
    }
}
console.log(counterET);

/* for (let i = 0; i < para.length; i++) {
    while (etDetector.length < 4) {
        etDetector = etDetector + para[i];
        console.log(etDetector); 
    }
    if (etDetector !== " et "){
        etDetector = "";
        console.log(etDetector); 
    }
    
} */

// console.log(etDetector)

// if (etDetector == " et ") {
    //   counterET = counterET + 1;
    //} else {
    //    etDetector = "";
    //}