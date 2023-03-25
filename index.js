// Iteration 1: Names and Input

const hacker1 = "Rafael";
const result = `The driver name is ${hacker1}`;
console.log(result);


let hacker2 = "Peter";
const result2 = `The navigators name is, ${hacker2}`;
console.log(result2);


// Iteration 2: Conditionals
let totalChar = hacker1.length + hacker2.length;

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has, ${hacker1.length}`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${totalChar}`);
}


// Iteration 3: Loops

//3.1
let newNameDriver = " ";
for (let i=0; i < hacker1.length; i++){
    console.log(newNameDriver);

    }

    console.log(newNameDriver);

 // Array
 console.log(hacker1.toUpperCase().split('').join(''));

//3.2
let newNameNavigator = " ";
for (let i = hacker2.length - 1; i>=0; i--){
    newNameNavigator = hacker2[i];
}
console.log(newNameNavigator);

//Array
console.log(newNameNavigator.split('').reverse().join(''));



//3.3
hacker1 = hacker1.toLowerCase;
hacker2 = hacker2.toLocaleLowerCase;

if (hacker1 > hacker2) {
    console.log("The drivers name goes first");
}
else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely");
}
else {
    console.log("What?! You both have the same name?");
}

//Bonnus1
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in efficitur ipsum, nec elementum est. Suspendisse quis auctor eros. Aenean ex mi, elementum ac eros tincidunt, euismod ornare mauris. Suspendisse nunc ante, dignissim et interdum non, auctor aliquet nibh. Nullam id lobortis libero. Sed convallis placerat dolor id cursus. Phasellus lobortis sagittis odio. Quisque fermentum odio sit amet interdum posuere. Donec sed nisi congue, bibendum sapien a, hendrerit elit. Quisque ut dictum purus, nec facilisis leo. Sed et lorem congue, vestibulum nibh ac, ultrices lacus. Nullam ut lacinia mauris. In diam augue, venenatis id odio et, dictum tincidunt metus. Curabitur tristique nunc eget purus euismod, sed interdum metus ullamcorper. Nam at porttitor massa.

In leo enim, gravida non ligula in, pulvinar vulputate eros. Sed lobortis accumsan diam non molestie. Praesent ut nisl volutpat, viverra diam ac, tempus est. Vivamus feugiat ipsum metus, et suscipit nisl semper eu. Phasellus id enim vel eros finibus tristique. Nunc nibh tellus, feugiat non laoreet eget, fringilla non augue. Maecenas ultrices purus a vulputate interdum. Ut auctor pellentesque tellus eu dictum. Praesent ac lobortis lectus. In ultrices ex in suscipit suscipit. Mauris pulvinar ex magna, ac elementum dui sodales in. Pellentesque in purus enim.

Fusce at augue aliquam, sagittis metus vel, volutpat risus. Nulla consectetur tincidunt aliquam. Nullam mattis dui volutpat auctor dapibus. Aenean sem purus, pretium vitae mauris porta, condimentum mattis massa. Quisque tincidunt erat eget vehicula efficitur. Aliquam erat volutpat. Aliquam auctor accumsan nunc id accumsan. Aliquam erat volutpat. Duis ut gravida quam. Pellentesque maximus tempus massa, sed sollicitudin ante ornare quis. Cras at aliquam sem. Duis sed elit eu nisl venenatis auctor.`

let words = 0;
let count = 0;
let splitted = paragraph.split(` `);
for (let i = o; i < paragraph.length; i++){
    if (paragraph[i].includes(`\n`)) {
        words++
    }
    else if(paragraph[i] === "et" || paragraph[i] ==="et."){
        count++
    }
    words++
}
console.log(`words ${words}`);
console.log(`ets ${count}`);

//Bonnus2

let phraseToCheck = "Was it a car or a cat I saw?";
phraseToCheck = phraseToCheck.replace(/[ ,!. ] /g , "").toLowerCase();
let reversed = phraseToCheck.split('').reverse().join('');

if (phraseToCheck === reversed){
    console.log(`String is a palindrome`);
}
else {
    console.log('Not a palindrome');
}