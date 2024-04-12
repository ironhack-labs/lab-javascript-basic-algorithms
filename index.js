// Iteration 1: Names and Input

let hacker1 = "Derek"; //drivers Name
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Paul"; // navigators Name
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
 else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
 else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//
let capitalizedName = "";

for (let i = 0; i < hacker1.length; i++) {
    capitalizedName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedName);

//
let reversedName = "";

for (let i = hacker2.length-1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

// we want to check if hacker1 is alphabetically before hacker 2
console.log("THIS IS A TESTTTT");
console.log(""<"b");
let minLength = Math.min(hacker1.length, hacker2.length);
let sameName = true;

for (let i = 0; i <= minLength; i++ ){
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        sameName = false;
        break;
    }
    else if (hacker1[i] > hacker2[i]) {
        sameName = false;
        console.log("Yo, the navigator goes first, definitely.");
        break;
    }
}

if (sameName) { 
    if (hacker1.length === hacker2.length) {
        console.log("What?! You both have the same name?");
    } else if (hacker1.length < hacker2.length) {
        console.log("The driver's name goes first."); 
    } else {
        console.log("Yo, the navigator goes first, definitely."); 
    }
}


// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non commodo odio. Donec vitae purus non nisi semper ullamcorper vitae nec ligula. Mauris posuere neque sit amet elit eleifend pretium. Nullam vel lorem lacus. Suspendisse non dui sed nulla scelerisque feugiat nec in nulla. Aenean eros ante, bibendum eu eros vitae, posuere consequat nisi. Suspendisse vulputate vehicula lorem a pharetra. Mauris feugiat arcu arcu, eu varius sapien elementum eget. Nam iaculis nisi ac ligula varius dapibus. Donec commodo dignissim purus, ac pulvinar est eleifend non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada sem vel libero sagittis sollicitudin. Donec ut eros eu mi blandit tincidunt. In hendrerit, ipsum vitae ullamcorper pulvinar, ipsum augue feugiat nibh, id eleifend mi magna eget orci. Vivamus eget dolor in eros varius pharetra eget ut ante. Nullam non massa auctor, rutrum odio consectetur, vehicula ipsum. Donec risus lacus, iaculis ut feugiat egestas, congue sit amet arcu. Etiam et lectus placerat, pellentesque leo in, accumsan velit. In sed interdum lorem. Vestibulum porta in mi in lacinia. Mauris consequat aliquam quam, nec gravida diam tristique id. Ut id turpis ut nisi porta placerat. Sed varius tellus in dolor mattis, et tincidunt urna aliquam. Nunc blandit nibh in enim imperdiet placerat. Etiam vel dapibus lectus. Aliquam porta eros enim, in dignissim risus bibendum non. In eu ultricies nulla. Donec vehicula aliquam neque, vitae dapibus dui bibendum quis";
let counter = 0;


for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " " && longText[i+1] !== " "){
        counter++;
    }
}
console.log(counter);

let etCounter = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === "e" && longText[i+1] === "t" && longText[i-1] === " " && longText[i+2] === " "){
        etCounter++;
    }
}
console.log(etCounter);
