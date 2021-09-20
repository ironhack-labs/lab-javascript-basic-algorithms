// Iteration 1: Names and Input

let hacker1 = 'John';

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = 'Mike';

console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

for (let letter of hacker1.toUpperCase()) {
  console.log(letter);
};

for (let i = hacker1.length -1; i >= 0; i--) {
  console.log(hacker1.charAt(i));
}


if (hacker1.localeCompare(hacker2) === -1 ) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?');
}


// Bonus 1

let dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac sem id augue dictum pellentesque vitae ut nisi. Mauris in ex leo. Donec fringilla odio tortor, id ultricies arcu condimentum at. Curabitur eu elit a sem sollicitudin accumsan nec eget elit. Integer at iaculis mauris. Nulla dignissim ante a nisi convallis rutrum. Praesent nunc turpis, blandit eu dignissim vel, varius at nunc. Sed nisl neque, mattis in magna at, scelerisque sodales tortor. Nam vulputate efficitur orci nec convallis. Mauris sagittis, nulla id elementum ultrices, orci mi mattis turpis, non faucibus urna orci quis libero. Suspendisse varius lectus sit amet libero bibendum, quis convallis sem rutrum. Donec sagittis lectus arcu, quis viverra lorem rhoncus quis.
Quisque tortor felis, ullamcorper non pretium ut, tincidunt in ipsum. Nam scelerisque rhoncus metus nec condimentum. Donec mattis, neque in vulputate placerat, tortor ligula sollicitudin ante, in consequat eros ligula quis dolor. Praesent vel neque vel urna efficitur dignissim eu et metus. Sed semper nisi nulla, id sagittis augue varius non. Integer aliquam lorem et nisi volutpat cursus. Aliquam non urna sed sapien tempor rutrum. In hac habitasse platea dictumst. Vestibulum pretium eros eget sapien dapibus interdum. Vestibulum vel tortor condimentum, ornare orci quis, gravida elit. Quisque sit amet maximus sem, et fringilla nisi. Proin sit amet ipsum a eros finibus blandit. Nullam tempor volutpat lectus quis lobortis. Praesent vitae nunc lacus. Nullam non viverra nisl. Curabitur sed enim tortor.
Proin ultrices, turpis vitae laoreet volutpat, nibh orci eleifend urna, quis convallis massa est eget neque. Aenean eu tellus vulputate dui feugiat pharetra a eget lectus. Nunc vehicula tincidunt blandit. Maecenas imperdiet sapien sit amet quam varius ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla lacinia vestibulum odio a condimentum. Sed sollicitudin lacus nec arcu aliquet elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at orci arcu. Donec ornare, nunc ornare fermentum viverra, lectus nisi scelerisque nunc, eget laoreet quam nisi quis sapien. Aliquam ac tristique est.`;

let wordsNumber = 0;

for (let i = 0; i < dummyText.length - 1; i++) {
    if (dummyText.charAt(i) === ' ' || dummyText.charAt(i) === '\n') {
        wordsNumber++;  
    }
}

console.log(wordsNumber + 1);