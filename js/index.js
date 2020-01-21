// Iteration 1: Names and Input
var hacker1 = 'Ana';
console.log('The drivers name is ' + hacker1);
var hacker2 = 'Luca';
console.log('The navigators name is ' + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker2.length > hacker1.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.'
  );
} else if (hacker1.length === hacker2.length) {
  console.log('Wow, you both have equally long names, ' + hacker2.length + ' characters!.');
}

//3.1 - Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//3.1.1 - Ana and Luca
const nameSplit = name => {
  const split = ' ';
  let nameSplit = name
    .split('')
    .join(' ')
    .toUpperCase();
  return nameSplit;
};

console.log(nameSplit(hacker1));

// 3.1.2 - class
let auxiliarName;

for (let i = 0; i < hacker1.length; i++) {
  auxiliarName = hacker[i].toUpperCase();
  if (i < hacker1.length - 1) {
    auxiliarName += ' ';
  }
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

//3.2.1 - Ana and Luca
function reverseName(name) {
  var reverseName = '';
  for (var i = name.length - 1; i >= 0; i--) {
    reverseName += name[i];
  }
  return reverseName;
}

reverseName(hacker2);

//3.2.2 - Class
let alternativeReverse = hacker1.split('').reverse();

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

//3.3.1 - Ana and Luca
function alphabeticName(driver, navigator) {
  var order = driver.localeCompare(navigator);
  if (order < 0) {
    return 'The drivers name goes first.';
  } else if (order >= 0) {
    return 'Yo, the navigator goes first definitely.';
  } else {
    return 'What?! You both have the same name?';
  }
}

alphabeticName(hacker1, hacker2);

//3.3.2 - Class
//can be used switch

/*
for (let i=0; i < hacker1.length;i++){
  const iterationComparisonOrder = hacker1[i].localeCompare(hacker2[i]);
  if(iterationComparisonOrder>0){
    console.log('The drivers name goes first.');
    break;
  }else if(iterationComparisonOrder<0){
    console.log('Yo, the navigator goes first definitely.');
    break;
  }else {
    continue;
    if(hacker1.length - 1 === i){
      console.log('What?! You both have the same name?');
      break;
    }
  }
}

*/

//BONUS TIME

//Bonus 1:

//Bonus 1.1:
var text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mattis ex, ut fermentum nisl. Vivamus et mauris tempus, ornare ligula nec, vulputate lectus. Cras laoreet accumsan nunc, ut egestas justo laoreet nec. Suspendisse quis commodo nulla. Etiam eget venenatis est, at maximus ligula. Sed porta ipsum ut nisi gravida facilisis. Vivamus quis hendrerit diam. Aenean tristique laoreet nibh, eget interdum libero eleifend at. Curabitur vitae justo faucibus, posuere eros nec, hendrerit nulla. Nullam faucibus quam at facilisis congue. Etiam vitae velit scelerisque mi efficitur pharetra. Nulla facilisis non dui nec ultricies. Aenean in pulvinar lorem. Donec molestie nulla quam, at vulputate leo dictum non. Maecenas non libero vel tortor iaculis vehicula. Nam nec dapibus lorem. Sed ullamcorper metus vitae sapien convallis, sit amet blandit tellus sollicitudin. In hac habitasse platea dictumst. Fusce sem quam, faucibus a dictum vel, luctus at sapien. Cras non malesuada nisl. Sed pulvinar faucibus quam, nec vestibulum quam tempor a. Nam vestibulum augue id est ultricies dapibus. Nulla placerat eleifend diam, vitae elementum urna pretium nec. Proin sollicitudin, nisi ac condimentum hendrerit, leo libero ornare est, a rhoncus ex purus et magna. Suspendisse vitae ligula vestibulum, viverra massa eu, posuere neque. Aenean id pellentesque lorem, egestas mollis velit. Vestibulum ullamcorper efficitur erat, ac condimentum neque posuere et. Sed mauris ante, consectetur in lacinia vitae, tincidunt interdum nunc. Quisque fringilla neque et molestie elementum. Sed mollis urna enim, at accumsan mauris semper nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus placerat maximus velit ut convallis. Sed tempus ac sem in facilisis. Integer quis quam in justo sagittis dictum eget at leo. Cras erat est, dignissim a neque id, porttitor finibus lectus. Proin porta lacus vel fringilla malesuada. Duis mattis lorem ac ante dapibus vestibulum. Proin eleifend erat et eros blandit egestas quis id eros. Duis posuere velit est, nec rhoncus quam hendrerit id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras pellentesque orci ut accumsan vulputate. Sed euismod neque ut ipsum venenatis, in hendrerit tellus vehicula. Quisque vel consequat odio. Vestibulum posuere, sem id finibus hendrerit, magna nulla egestas est, ut mattis neque libero vitae magna.';

function counterText(text) {
  var words = text.split(' ');
  return 'Number of words is ' + words.length;
}

counterText(text);

//Bonus 1.2:

function counterText2(text) {
  var ets = text.search('et');
  return 'Number of ets is ' + ets;
}

counterText2(text);

//Bonus 2.1
