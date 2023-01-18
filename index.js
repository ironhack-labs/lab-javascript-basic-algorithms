// Iteration 1: Names and Input
const hacker1 = "Romi";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Sebastian";
console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`)
}


// Iteration 3: Loops
let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase();
  if (i !== hacker1.length - 1) {
    newName += " ";
  }
}
console.log(newName);

let newName2 = "";
for (let i = hacker2.length -1; i >= 0; i--) {
  newName2 += hacker2[i];
}
console.log(newName2);

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`)
} else if (hacker2 < hacker1) {
  console.log(`Yo, the navigator goes first definitely.` )
} else {
  console.log(`What?! You both have the same name?`)
}

// Bonus time
// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec metus eget diam accumsan lobortis vitae vel lectus. Proin eleifend sodales urna, auctor ullamcorper quam ultricies sed. Nam fringilla pretium risus, id aliquet tellus tristique sit amet. Nulla vitae consequat elit, ut ornare turpis. Nam blandit dolor at ligula porta tincidunt. Integer ornare ipsum et viverra sodales. Phasellus at mollis sem, aliquam interdum odio. Morbi a est turpis. Curabitur ultrices, ipsum nec egestas vestibulum, turpis justo consequat tellus, vel lobortis leo eros eget arcu. Aenean volutpat dui ut tellus ullamcorper, quis efficitur diam porttitor. In hac habitasse platea dictumst. Phasellus dictum dolor velit. Morbi at maximus nulla. Curabitur placerat tristique ornare. Nunc aliquam dui ut mattis facilisis. Phasellus non bibendum odio.

Sed hendrerit erat id feugiat tincidunt. In leo eros, efficitur et ex eu, cursus luctus ligula. Morbi in accumsan est. Praesent eget justo lectus. Maecenas congue, leo a ornare elementum, est justo rutrum sem, nec vestibulum enim ligula et enim. Morbi eget lacus nec nunc porta euismod. Duis ex diam, consectetur vitae tincidunt a, pellentesque vel justo.

Quisque tempus vehicula hendrerit. Vestibulum accumsan varius orci ut dignissim. Pellentesque facilisis volutpat nisl, at rutrum urna scelerisque id. Aenean varius sed metus sit amet luctus. Aliquam vehicula nulla non fringilla placerat. Etiam facilisis, metus at viverra condimentum, nibh nibh venenatis nisi, non dignissim enim turpis et sem. Phasellus bibendum purus vel luctus malesuada. Maecenas porttitor viverra enim ac porttitor. Nulla metus nibh, commodo vel elit nec, posuere convallis massa. Vivamus et elit vitae turpis pulvinar rhoncus non eu mauris. Nunc maximus ullamcorper ipsum nec tempor. Sed in gravida neque. Nullam quis fringilla sem, quis molestie est. Donec vel dui sem.`.toLowerCase();

let countWords = 0;
let countEt = 0;

if (longText.length > 0) countWords = 1;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === 'e' && longText[i+1] === 't') {
        if ((longText[i-1] < 'a' || longText[i-1] > 'z' || i === 0) && (longText[i+2] < 'a' || longText[i+2] > 'z')) {
            countEt++;
        }
    }

    if (longText[i] === ' ') {
        countWords++;
    } else if (longText[i] === '\n') {
        countWords++;
        while (longText[i] === '\n') {
            i++;
        }
        i--;
    }
}
    
console.log('Wordcount: ', countWords);
console.log('Et count:', countEt);


