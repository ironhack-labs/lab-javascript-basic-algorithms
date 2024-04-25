// Iteration 1: Names and Input
let hacker1 = "Marco";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Ivan";
console.log (`The navigator's name is ${hacker2}`);
console.log("--------------");
console.log("--------------");
// Iteration 2: Conditionals
 if (hacker1.length > hacker2.length) {
     console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
 }
 else if (hacker1.length < hacker2.length) { 
     console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}
 else {
     console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
 }

console.log("--------------");
console.log("--------------");

// Iteration 3: Loops
let a = "";
for (let i = 0; i < hacker1.length; i++){
    a += hacker1[i].toUpperCase() + " ";
}
console.log(`The driver's name in capital letters with space between: ${a}`);

console.log("--------------");
console.log("--------------");

let revName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    revName += hacker2[i];
}
console.log(`The driver's name in reverse is ${revName}`);

console.log("--------------");
console.log("--------------");


        if (hacker1 > hacker2) {
            console.log(`The driver's name goes first.`);
        }
        
        else if (hacker1 < hacker2) {
            console.log(`Yo, the navigator goes first, definitely.`);
        }
        
        else {
            console.log(`What?! You both have the same name?`);
        }
    
 // Bonus Iteration

console.log("--------------");
console.log("--------------");

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla. Sodales ut eu sem integer vitae justo eget magna fermentum. Arcu odio ut sem nulla pharetra diam sit. Vulputate eu scelerisque felis imperdiet proin fermentum. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Non nisi est sit amet facilisis magna. Viverra adipiscing at in tellus integer feugiat. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Ac turpis egestas maecenas pharetra convallis posuere. Amet mauris commodo quis imperdiet massa. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet porttitor eget dolor morbi non. At consectetur lorem donec massa sapien faucibus et molestie. Pellentesque habitant morbi tristique senectus et. In vitae turpis massa sed. Consequat mauris nunc congue nisi vitae suscipit. Egestas dui id ornare arcu odio. Aliquam purus sit amet luctus venenatis lectus. Sit amet risus nullam eget felis eget nunc. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Pharetra vel turpis nunc eget. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Ut eu sem integer vitae justo. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.Et odio pellentesque diam volutpat commodo sed egestas. Adipiscing bibendum est ultricies integer quis auctor elit sed. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Id velit ut tortor pretium viverra suspendisse potenti nullam. Rhoncus mattis rhoncus urna neque viverra justo nec. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Sed vulputate mi sit amet mauris commodo quis. Ac ut consequat semper viverra nam. Risus commodo viverra maecenas accumsan lacus vel. Natoque penatibus et magnis dis parturient montes.";


function sumWords (str) {
    return str.split (" ").length;
}

console.log(`Total words in these 3 paragraphs:`, + sumWords(longText));


console.log("--------------");
console.log("--------------");

