// Iteration 1: Names and Input

const hacker1 = "Laura";

const hacker2 = "Laura";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let smallNameLength = 0; 
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    smallNameLength = hacker2.length;
}
else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`);
    smallNameLength = hacker1.length;
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    smallNameLength = hacker1.length;
}

// Iteration 3: Loops
// 3.1
let newName = "";

for (let i = 0; i<hacker1.length-1; i++) {
   
    newName = newName + hacker1[i].toUpperCase() + " ";
   
}

newName = newName + hacker1[hacker1.length-1].toUpperCase();
console.log(newName);


//3. 2
let newNavigator = "";

for(let i= hacker2.length-1; i >= 0 ; i--){
    newNavigator = newNavigator+hacker2[i];
}
console.log(newNavigator);

//3.3

let check = 0;

for(let i = 0 ; i < smallNameLength;i++)
{
    if(hacker1[i]<hacker2[i])
    {
        check = 1;
        break;
    }

    else if (hacker1[i]>hacker2[i])
    {
        check = 2;
        break;
    }
    else {
        check= 3;
    }
}

switch(check){
    case  1 :
    console.log("The driver's name goes first.");
    break;

    case 2 : 
    console.log("Yo, the navigator goes first, definitely.");
    break;

    default :
     console.log("What?! You both have the same name?");

}


//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at neque tellus. Nunc condimentum ultricies dignissim. Mauris porttitor mi neque, sed laoreet augue commodo in. Vestibulum tortor tellus, auctor eget mauris eu, porttitor rhoncus lacus. Vestibulum convallis congue tincidunt. Vestibulum sit amet convallis nisi, sit amet accumsan erat. Integer dignissim convallis augue laoreet ullamcorper. Etiam ac feugiat orci, sed pulvinar eros. Donec non felis lacinia, lacinia mauris ac, dignissim dolor. Mauris eu metus hendrerit, porttitor velit non, dapibus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut pretium eros diam, quis blandit lorem ullamcorper ut. Proin feugiat enim nec tortor auctor varius. Donec metus eros, porttitor eget maximus non, malesuada ac elit.Maecenas egestas aliquam viverra. Donec et scelerisque massa. Sed laoreet dapibus risus, eget pulvinar elit pretium non. Cras tempor sem orci, non porttitor nibh hendrerit non. Aliquam porta massa scelerisque, suscipit nisi sit amet, vulputate ligula. Etiam sed lectus rutrum, commodo elit sed, mollis nulla. Duis vulputate vehicula fringilla. Quisque urna dolor, convallis sit amet iaculis id, venenatis id ligula. Mauris semper tincidunt mi. Nunc quam massa, ultricies at magna nec, fermentum semper mi. Fusce sit amet blandit ex. Suspendisse potenti. Quisque pellentesque, urna vel pulvinar bibendum, sem ex consectetur neque, vel dignissim libero diam eu dui. Nullam a placerat diam, vel pharetra mauris. Vivamus sit amet libero odio. Duis ultrices velit finibus risus ornare mattis. Sed aliquet feugiat elementum. Nullam tristique metus sit amet aliquet sollicitudin. Sed porta sapien eleifend eros vehicula rutrum. Integer in tempor dolor. Proin sit amet tincidunt sapien. Morbi quis risus sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

console.log(longText);

let count = 0;


for (let i = 0; i<longText.length; i++) {
    if (longText[i]===" ") {
        count++;
    } 
    }
    count = count + 1;

console.log(count);

let etCount = 0;

for (let i = 0; i<longText.length; i++) {
    if (longText[i]===" ") {
        if(longText.slice(i,i+4)===" et "){
            etCount++;
        }
   
    } 
}

console.log(etCount);

// Bonus 2

let example = "A man, a plan, Panama!";

example = example.toUpperCase();

let newPhrase = "";

for (let i = 0; i < example.length; i++) {
    if (example[i] >= "A" && example[i] <= "Z") {
        newPhrase = newPhrase + example[i];
    }
}

let backWord = "";

for (let i = newPhrase.length-1; i >= 0; i--) {
    backWord = backWord + newPhrase[i];
}

if (backWord === newPhrase) {
    console.log("It is a Palindrome!")
} else {
    console.log("It is not a Palindrome!")
}





