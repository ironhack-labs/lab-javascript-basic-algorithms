console.log('I am ready!');

// Iteration 1: Names and Input
let hacker1 = 'Joao';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Maria';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
} else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
let upperCaseName = '';
for (let i=0; i<hacker1.length; i++){
    upperCaseName += `${hacker1[i]} `;
};
console.log(upperCaseName.toUpperCase());

let reversedName = hacker2.split('').reverse().join('');
console.log(reversedName);

if (hacker1[0] === hacker2[0]){
    console.log("What?! You both have the same name?");
    } else if (hacker1[0] < hacker2[0]){
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely.");
};

// Bonus 1
let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ante sed ex tempus egestas. In sagittis vulputate dapibus. Pellentesque vitae egestas ligula. Donec egestas dignissim dui, egestas efficitur sapien feugiat ac. Nullam semper arcu quam. Sed vitae justo scelerisque, scelerisque eros eu, finibus magna. Maecenas eu interdum velit. Phasellus vitae neque libero. Curabitur tincidunt velit id quam tincidunt scelerisque. Ut consequat, risus aliquet eleifend eleifend, nisl arcu commodo erat, sit amet efficitur urna lacus sit amet eros. Aenean blandit tortor commodo enim sagittis dictum. Aliquam erat volutpat. Nunc tempus congue quam. Cras consectetur erat enim, ac mattis dolor luctus pulvinar. Donec quam erat, imperdiet blandit suscipit quis, ornare vitae magna. Duis sollicitudin velit et eros volutpat lobortis. Ut eget laoreet felis. Mauris pretium vel velit a dignissim. Quisque sem purus, vestibulum vel lorem sed, pharetra gravida lacus. Morbi ullamcorper auctor luctus. Etiam vitae urna nunc. Duis tellus felis, ullamcorper a augue sit amet, semper sodales enim. Maecenas vestibulum ligula lorem, et feugiat mi porttitor sed. Donec at turpis purus. Suspendisse nulla leo, rhoncus ac libero ac, tincidunt egestas nibh. Nam eget erat varius, pretium enim eu, porta eros. Fusce sem ante, efficitur vitae nibh in, venenatis luctus tortor. Nunc orci ligula, mollis a dignissim sed, mattis et magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mattis nisl vel bibendum tincidunt. Vivamus ante tortor, molestie et tristique ut, bibendum ac sapien. Proin vitae quam vitae dui pellentesque commodo vel ac mauris. Etiam sit amet mauris ut ipsum venenatis imperdiet. Vivamus faucibus diam id aliquet sagittis. Pellentesque in condimentum quam. Aliquam auctor mi posuere pharetra ullamcorper. Vivamus sed nisi tempor, vehicula turpis ut, euismod arcu. Donec vulputate purus ut dictum molestie."

let separateWords = str.split(' ');
let countWords = separateWords.length;
console.log(countWords);

let wordEt = str.match(/et/gi);
console.log(wordEt.length);

// Bonus 2
function isPalindrome(str) {
    let first = str.match(/[a-z]+/ig).join('').toLowerCase()
    let second = first.split('').reverse().join('');
    return first === second;
}
console.log(isPalindrome('A man, a plan, a canal, Panama!'));
console.log(isPalindrome('Was it a car or a cat I saw?" and "No \'x\' in Nixon'));
console.log(isPalindrome('step on no pets'));