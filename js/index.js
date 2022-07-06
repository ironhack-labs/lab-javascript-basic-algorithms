console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Paulo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anakin Skywalker"; //Doing this alone, so I'm using another name
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length}`);
} else {
    console.log('What?! You both have the same name?');
}

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++){
    console.log(`${hacker1[i]}`.toUpperCase()); 
}

for (let i = hacker1.length; i > 0; i--){
    console.log(`${hacker1[i-1]}`); 
};

for (let i = 0; i < hacker1.length; i++){
    if (hacker1.localeCompare(hacker2) === -1){
        console.log("The driver's name goes first")
    } else if(hacker1.localeCompare(hacker2) === 1){
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
};

//Bonus 1:

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet mattis sagittis. Curabitur turpis purus, malesuada interdum tellus nec, iaculis ultricies velit. Pellentesque feugiat nunc in nulla finibus, nec luctus leo placerat. In placerat dolor ullamcorper risus ultricies bibendum. Morbi aliquam hendrerit imperdiet. Suspendisse sollicitudin tristique sagittis. Proin ante magna, dictum eget nulla sed, rhoncus pulvinar eros. Aenean tempor dictum justo tincidunt faucibus.

Morbi fermentum nisl ac justo semper rhoncus. In sagittis ex non mauris semper pellentesque. Fusce efficitur consectetur turpis efficitur ullamcorper. Donec vestibulum mattis lorem, rutrum elementum odio molestie a. Nunc elementum nibh mi, et viverra eros porta quis. Nullam eu leo odio. Duis dignissim sit amet mauris sed scelerisque. Phasellus laoreet lorem eu erat ultricies, et laoreet felis tristique. Vivamus tincidunt diam sit amet quam luctus efficitur. Praesent faucibus, risus vel bibendum consectetur, sapien turpis lobortis felis, id ullamcorper orci nibh et risus. Donec massa erat, dictum eu ultrices nec, vulputate eu elit. Nunc luctus tortor nec diam elementum hendrerit. Duis nulla neque, commodo in ultricies sed, ullamcorper bibendum lectus. Nunc lacinia elementum lorem ac congue. Aenean ante felis, vehicula vel posuere ut, vehicula eu magna. Integer fermentum felis a porttitor tempus.

Nunc tempus sit amet lacus ac finibus. Fusce mattis turpis non condimentum luctus. Praesent eu sem tellus. Curabitur ac eleifend diam, et mattis velit. Mauris ante mi, facilisis quis dignissim et, bibendum at ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer at pharetra dui, id tempor lacus. Sed tempus, dui quis sagittis interdum, felis lectus ornare risus, in congue massa nisl sed augue. Pellentesque interdum ante lectus, ac vulputate quam tincidunt sit amet. Nam in euismod erat. Donec quis justo dignissim, ultricies magna ut, rutrum elit. Praesent ac sem porttitor, interdum urna at, imperdiet quam. Cras tempor lacus a porttitor dapibus. Aliquam sed purus sed diam vestibulum blandit. Nulla non nisl in ex viverra gravida sit amet ut dui.`

//Need to finish this one
for (let i = 0; i < lorem.length; i++){

}

//bonus 2:

let phraseToCheck = "Amor, Roma"

for (let i = 1; i <= 1; i++){
    if (phraseToCheck[0] !== phraseToCheck[phraseToCheck.length -1 -i]){
        console.log("It's a palindrome");
    } else {
        console.log("it's not a palindrome")
    }
}
