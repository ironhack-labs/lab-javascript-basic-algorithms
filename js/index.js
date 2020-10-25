// Iteration 1: Names and Input
let hacker1 = 'Steven';
console.log('"The driver\'s name is ' + hacker1 + '"');

let hacker2 = 'Sara';
console.log('"The driver\'s name is ' + hacker2 + '"');

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    'The driver has the longest name, it has ' + hacker1.length + ' characters.'
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      hacker2.length +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' + hacker1.length + ' characters!'
  );
}
// Iteration 3: Loops

//iteration 3.1
let capitalName = '';
for (let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + ' ';
}
console.log(capitalName);

//iteration 3.2

let reverseName = ' ';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName.toLowerCase());

//iteration 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//bonus time

//word counter
loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet ultrices metus at bibendum. Pellentesque bibendum eros vel consectetur tempor. Vestibulum finibus ultrices ultricies. Maecenas aliquet consectetur nisi. Suspendisse et erat at elit tristique commodo ac in turpis. Nunc malesuada leo ut massa dapibus, vitae fermentum est consectetur. Aliquam gravida non nisl ac pharetra. Sed a magna est.

Suspendisse orci leo, sollicitudin vitae suscipit blandit, dictum at odio. Aenean dictum ornare eros eu eleifend. Nunc nec tellus sodales, consequat felis vitae, convallis dolor. In mattis venenatis leo, ac pharetra ante eleifend sodales. Quisque sed tellus quis erat varius hendrerit ut ac mauris. Phasellus eget porttitor neque, vitae facilisis nisi. Sed vel mauris id lectus commodo sodales. Duis bibendum massa eu justo volutpat, eu suscipit est faucibus. Phasellus sed viverra est, in sagittis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec leo vulputate, maximus ipsum at, bibendum ipsum. Ut odio felis, tempus in mauris vel, congue consequat quam. Pellentesque dictum varius magna eu porta. Curabitur pulvinar ex lectus, ac lacinia urna egestas et. Nunc sit amet tincidunt tellus.

Integer ex tortor, euismod sed neque sed, sagittis vulputate odio. Praesent elementum lacus ante, a venenatis sem auctor ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur lectus ante, eleifend sed rhoncus condimentum, ultrices id turpis. Vestibulum blandit nulla interdum, faucibus arcu sed, aliquet urna. Nullam at lorem eget diam suscipit aliquam. Duis sed lobortis velit. Aenean dignissim hendrerit ligula, nec egestas enim suscipit elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi posuere placerat facilisis. Praesent accumsan eros eget neque maximus dignissim.`;

//this logic fails if we end in trailing space or if there's double spaces
function wordCounter(text) {
  let counter = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      counter++;
    }
  }
  console.log(counter);
}

wordCounter(loremIpsum);

//bonus bullet point 3
function etCounter(text) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'e' && text[i + 1] === 't') {
      counter++;
    }
  }
  console.log(counter);
}

etCounter(loremIpsum);

//bonus 2

let phraseToCheck = "No 'x' in Nixon";

function cleanText(text) {
  text = text.toLowerCase();
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case ' ':
      case '!':
      case '-':
      case ',':
      case "'":
        break;
      default:
        newText = newText + text[i];
    }
  }
  return newText;
}

function palindromeCheck(text) {
  text = cleanText(text);
  reverseText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reverseText = reverseText + text[i];
  }
  reverseText === text
    ? console.log('Palindrome')
    : console.log('Not a palindrome');
}

palindromeCheck(phraseToCheck);
