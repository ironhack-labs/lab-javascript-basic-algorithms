// Iteration 1: Names and Input

let hacker1 = 'Joanna';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Alan';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let upperCaseName = '';
for (let i = 0; i < hacker1.length; i++) { 
        upperCaseName += `${hacker1[i].toUpperCase()} `; 
} console.log(upperCaseName);

let reverseName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseName += hacker2[i];
} console.log(reverseName);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// if (hacker1[0] < hacker2[0]) {
//      console.log(`The driver's name goes first.`);
//    } else if (hacker1[0] > hacker2[0]) {
//      console.log(`Yo, the navigator goes first definitely.`);
//    } else {
//      console.log(`What?! You both have the same name?`);
//    }

//Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae purus vel est tempor placerat. Nulla facilisi. Aenean augue diam, pulvinar quis posuere tincidunt, facilisis sit amet enim. Nam iaculis mi quis rutrum pretium. Fusce auctor nulla non elit convallis, a aliquam eros faucibus. Integer pharetra, nunc vitae dictum facilisis, libero est luctus nisi, eget interdum mauris orci dignissim nunc. Aliquam fringilla sodales aliquet. Quisque aliquam placerat odio quis pellentesque. Donec in est sollicitudin, tristique mi at, ultricies magna. Curabitur fringilla rutrum ipsum id pellentesque. Quisque sit amet lectus diam. Quisque posuere nisl sed ligula vulputate, nec vestibulum risus semper. Ut tincidunt, mauris in ultricies porta, justo augue iaculis metus, in ultricies arcu orci sit amet lacus.

Mauris vehicula quis tellus ac laoreet. Suspendisse id iaculis dolor. Nunc volutpat, odio quis tempus dictum, turpis enim egestas neque, ac accumsan mauris sem nec ex. Aliquam eleifend odio vehicula, feugiat enim ut, finibus ex. Mauris ligula lorem, sollicitudin in enim ac, hendrerit vehicula ligula. Integer ut erat varius, sodales mi a, sagittis enim. Suspendisse tristique efficitur sapien, a eleifend nunc venenatis non. Quisque sollicitudin, dui in congue tristique, mauris arcu tincidunt ante, et pharetra nisi lacus vitae arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nam at felis mattis, tincidunt dolor in, convallis ipsum. Suspendisse porttitor venenatis diam id facilisis. In interdum feugiat dignissim. Donec sagittis tempor commodo. Praesent varius commodo ligula nec pulvinar. Nam fringilla condimentum odio at auctor. Fusce pellentesque arcu urna, nec auctor enim tincidunt eleifend. Praesent feugiat felis tellus, ultrices iaculis odio sagittis at. Morbi congue dui elit, vitae luctus lectus molestie nec. Cras nibh urna, auctor eget neque id, dictum pulvinar lectus. Etiam porta eget sapien vitae porttitor. Cras a dictum lacus. Donec non mollis libero. Mauris lacinia, mauris vitae vestibulum sollicitudin, urna sem varius nulla, vitae aliquam ex nulla ac lectus. Pellentesque vitae accumsan elit, dignissim fermentum massa. Sed fringilla, velit quis placerat finibus, sem sem ultricies risus, in sodales erat dui non velit.`


//console.log(lorem.length);

loremArray = lorem.split(' ');
//console.log(lorem);

countWord = 0

for (let i = 0; i < lorem.length; i++){
  if (loremArray[i] === 'et') {
    countWord ++
  }
}

console.log(`The word "et" appears ${countWord} times`)
