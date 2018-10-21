// Names and Input
let hacker1 = 'Ismael';
console.log("The driver's name is ",hacker1);

let hacker2 = process.argv[2];
console.log("The navigator's name is ",hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
    console.log( "The driver has the longest name, it has ", hacker1.length, "characters");
} else if(hacker2.length > hacker1.length) {
    console.log("Yo, the navigator got the longest name, it has", hacker2.length, "characters");
} else {
    console.log("wow, you both got equally long names",hacker1.length, "characters");
} 

let capitals = [];

for(i=0; hacker1.length > i; i += 1){
    hacker1 = hacker1.toUpperCase();
    capitals.push(hacker1[i], ' ');
}

console.log(capitals.join(''));

let reverse = [];
for(i=0; hacker1.length > i; i += 1){
    reverse.unshift(hacker2[i]);
}
console.log(reverse);

    if(hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first")
    }else if (hacker1[i] > hacker2 [i]){
        console.log("Yo, the navigator goes first definitely")
    }else{
        console.log("What!? You both got the same name?")
    }

// Lorem ipsum generator
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisl nec orci venenatis pellentesque auctor eu ligula. Aenean pellentesque lacus odio, ut tincidunt nisl sollicitudin quis. Etiam eget sem ex. Praesent ullamcorper enim sit amet nunc aliquam pretium. Duis arcu arcu, laoreet sed pellentesque eu, vulputate id diam. Aliquam pulvinar nunc ac ligula efficitur venenatis. Mauris vehicula ligula odio, eu fermentum nisl scelerisque non. Pellentesque fermentum justo in fermentum facilisis. Curabitur imperdiet fermentum ante, in efficitur orci scelerisque in. Curabitur mi nisl, finibus at dapibus nec, ultrices vitae odio.Cras maximus odio orci, ut tincidunt lectus viverra vel. Morbi ligula urna, pharetra vitae lacinia tincidunt, mollis non elit. Quisque rutrum, eros a mattis semper, tortor sapien iaculis tortor, a faucibus quam diam quis lorem. Donec at odio lectus. Nam pulvinar sodales nunc. Maecenas consequat auctor mi ut interdum. In rutrum porta erat at malesuada. Cras interdum commodo blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet sem felis. Proin nunc tortor, placerat a fermentum in, placerat vel nisl.Suspendisse tincidunt neque purus, quis pretium elit ultricies at. Nulla facilisis pharetra eros lacinia tincidunt. Proin pellentesque, dolor a tempor aliquam, ex nulla varius arcu, commodo blandit magna nisi sed neque. Maecenas ut diam sapien. Nunc sit amet dictum diam. Nullam vehicula efficitur suscipit. In molestie volutpat ex, eget sodales dui. Nunc accumsan lacus at feugiat finibus. Suspendisse potenti. Ut ac enim in lectus maximus imperdiet non sed nisi. Sed vel facilisis neque. Curabitur commodo mattis urna sit amet pulvinar. Cras felis justo, vulputate id dictum aliquam, pellentesque et augue. Nulla malesuada accumsan facilisis. Morbi mi ligula, rutrum vitae mauris vel, molestie fermentum ex. Proin vitae convallis ligula."

let count = (lorem) => lorem.match(/(et)/g).length; 
console.log(count(lorem));