
// Iteration 1

const hacker1 = 'Daniel';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'James';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2

const checkName = (name1, name2) => {
  if (name1.length > name2.length) {
    return `The Driver has the longest name, it has ${name1.length + 1} characters`;
  }
  if (name2.length > name1.length) {
    return `The Navigator has the longest name, it has ${name2.length + 1} characters`;
  }
  return `Wow, you both got equally long names, ${name2.length + 1} characters!`;
};

checkName(hacker1, hacker2);


// Iteration 3

// Printing name with a space

const printNameWithSpace = (name) => {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    result += `${name[i]} `;
  }
  return result.trim();
};

printNameWithSpace(hacker1);
printNameWithSpace(hacker2);

// Reversing name

const printReverseName = (name) => {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    result = name[i] + result;
  }
  return result;
};

printReverseName(hacker1);


// Lexington order


const checkNameOrder = (name1, name2) => {
  if (name1.localeCompare(name2) == -1) {
    console.log('The driver\'s name goes first.');
  } else if (name1[0].localeCompare(name2[0]) == 1) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('What?! You both got the same name?');
  }
};

checkNameOrder(hacker1, hacker2);


console.log('hacker1'.localeCompare('hacker2'));


const generatedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit ac enim dapibus posuere. Donec tempus, lorem blandit vulputate varius, lorem purus ullamcorper nisl, vel volutpat turpis justo eget mauris. Nunc dolor ex, ullamcorper et magna vel, maximus dignissim velit. Donec facilisis tincidunt augue ut sagittis. Donec convallis viverra nunc, iaculis bibendum ligula venenatis sit amet. Nulla eget neque non sapien egestas eleifend ac nec sapien. Ut commodo nibh eu nisl dictum, et consequat tellus vehicula. Phasellus ex felis, tincidunt ut vestibulum vel, porttitor id quam. Duis ex elit, laoreet sit amet mi sit amet, elementum dignissim arcu. Pellentesque posuere sem in luctus tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vel leo condimentum, cursus velit cursus, viverra mauris. Vivamus condimentum, nisl ac consectetur lobortis, erat lorem posuere sapien, dapibus molestie elit eros non nisl. In dictum odio sit amet suscipit convallis. Nunc scelerisque volutpat velit sed bibendum. Phasellus gravida ex lorem, vel scelerisque elit congue non. Sed rhoncus congue tempus. Aenean ornare mollis vestibulum. Curabitur viverra lectus ultrices odio iaculis, congue porta odio pellentesque. Vestibulum erat eros, rutrum eu metus nec, tristique accumsan quam. Nulla id leo tempor, iaculis massa et, volutpat massa. Fusce et malesuada sapien, ac iaculis turpis. Sed lectus dolor, imperdiet vel urna eget, ornare vehicula odio. Vivamus malesuada tincidunt nunc, vitae vehicula dui facilisis vestibulum. Nam consequat felis mollis orci vulputate, sed aliquam neque suscipit. Aenean fermentum egestas volutpat. Curabitur et ex non risus bibendum scelerisque. Fusce nibh nunc, mattis sit amet vulputate vitae, consequat eget quam. Phasellus est ipsum, tincidunt sed sapien ut, molestie porta dolor.';


// Words Count: 

const wordsCounter = (text) => {
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      result += 1;
    }
  }
  return result + 1; // Last word
};

wordsCounter(generatedText);

// et Count:

const etCounter = (text) => {
  let result = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i - 1] == ' ' && text[i] == 'e' && text[i + 1] == 't' && text[i + 2] == ' ') {
      result += 1;
    } else if (text[i - 1] == ' ' && text[i] == 'e' && text[i + 1] == 't' && text[i + 2] == '.') {
      result += 1;
    }
  }
  return result;
};

etCounter(generatedText);


