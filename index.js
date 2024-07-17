// Iteration 1: Names and Input

let hacker1 = "Ismail";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Habibi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driverNameUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameUpperCase);


let navigatorNameReverse = "";
for (let i = hacker2.length-1; i >= 0; i--) {
    navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }


//   Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies ac nisi vitae posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dignissim nisl pellentesque convallis vestibulum. Morbi viverra id nisi nec suscipit. Maecenas faucibus lacus feugiat mauris iaculis, id posuere eros mollis. Duis lacinia lacus sed purus laoreet, et euismod dolor iaculis. Aliquam scelerisque, tortor ac laoreet gravida, urna augue commodo diam, a blandit lectus enim et ligula. Aenean placerat ante ut elit laoreet, non mattis lorem porta. Phasellus eget lectus ac purus eleifend imperdiet vel id metus. Nulla nec ullamcorper erat, id consectetur mi. Phasellus blandit molestie dui, a rhoncus dolor pretium non. Ut vel venenatis massa, vitae luctus magna.

Pellentesque vel accumsan elit, id volutpat neque. In pretium risus eu massa vestibulum, at vulputate est pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus sapien, placerat et urna sit amet, facilisis placerat risus. Nulla consequat libero eu congue venenatis. Donec suscipit suscipit mi et dignissim. Sed non est et ligula accumsan consequat.

Suspendisse ultrices finibus leo vitae rhoncus. Morbi ex ex, consequat eu augue sit amet, pellentesque porta leo. Sed eleifend metus id quam consectetur, vel bibendum tellus pellentesque. Proin suscipit vulputate erat, sit amet rutrum mi scelerisque eu. Fusce bibendum ac lacus sed congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum feugiat tellus sit amet posuere iaculis. Nulla placerat nulla et purus tincidunt hendrerit. Duis mattis leo ut ligula tincidunt, vel tempus mauris finibus. Ut ultricies sagittis euismod.`;


let words = longText.split(" ");
let wordCount = words.length;
console.log(`There are ` + wordCount + ` words in the text.`);

let etCount = 0;
for(let i = 0; i < words.length; i++) {
    if (words[i] === 'et' || words[i] === 'et.') {
        etCount++;
    }
}
console.log(`The word 'et' appears ` + etCount + ` times in the text.`);