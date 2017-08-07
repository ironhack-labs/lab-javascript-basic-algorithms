//  #1
const printDriverName = () => {
  const hacker1 = 'Ryan';
  console.log(`The driver's name is ${hacker1}`);

  return hacker1;
}

const getNavigatorName = () => {
  const hacker2 = prompt(`Enter the navigator's name:`);
  console.log(`The navigator's name is ${hacker2}`);

  return hacker2;
}

//  #5
const compareNamesLength = (driverName, navigatorName) => {
  if (driverName.length > navigatorName.length) {
    console.log(`The Driver has the longest name, it has ${driverName.length} characters.`);
  } else if (navigatorName.length > driverName.length) {
    console.log(`yo, Navigator got the longest name, it has ${navigatorName.length} characters.`);
  } else {
    console.log(`Wow, you both got equally long names, ${driverName.length} characters.`);
  }
}

// #6
const printNameSeparatedBySpace = (name) => {
  const nameChars = name.toUpperCase().split('');
  let newName = '';

  nameChars.forEach(char => {
    newName += char + ' ';
  });

  return newName;
}

// #7
const printNameInReverseOrder = (name) => {
  let arrOfChars = name.split('').reverse().join('');
}

// #8
const printInAlphabeticalOrder = (driverName, navigatorName) => {
  if (driverName < navigatorName) {
    console.log(`The driver's name goes first (${driverName}).`);
  } else if (navigatorName < driverName) {
    console.log(`Yo, the navigator goes first definitely (${navigatorName}).`);
  } else {
    console.log(`What?! You both got the same name?`);
  }
}

// #9
const checkForPalindrome = (usrInput) => {
  const palin = (usrInput.split(' ').join('').toLowerCase().match(/[\w]/g).join(''))

  if (palin === palin.split('').reverse().join('')) {
    console.log('We have a Palindrome!')

  } else {
    console.log('This is not a Palindrome')
  }
}

// #10
const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat eros sit amet dui pharetra, eu interdum enim dictum. Praesent semper tellus sit amet nunc condimentum, pellentesque fermentum elit hendrerit. Ut id arcu non massa porta congue sed et risus. Etiam in mauris quis nisl mollis ornare. Donec purus lectus, luctus et eleifend quis, convallis sed arcu. Proin cursus purus et lacus tincidunt, nec malesuada sem pharetra. Nullam purus massa, tempus mattis velit et, dapibus scelerisque massa.

Phasellus in mattis sapien. Nullam ac mauris vel sem consectetur laoreet et sed ante. Aliquam vitae odio at ipsum faucibus finibus. Nam placerat sagittis magna, eu iaculis tortor iaculis a. Curabitur eleifend sem in augue convallis, sed ornare sem semper. Donec sit amet libero pellentesque, lacinia nisi vel, convallis nisi. Vestibulum fermentum orci sed erat convallis scelerisque. Suspendisse fermentum dignissim tellus vitae faucibus. Nam vestibulum erat varius magna interdum mattis. Cras porttitor mauris risus, in tincidunt mauris faucibus at. Donec ipsum ipsum, bibendum eu viverra mattis, eleifend in elit. Nullam nec maximus ligula. Nunc id ornare turpis. Pellentesque vestibulum laoreet pharetra. Sed egestas consequat vulputate.

Aenean interdum, justo quis sagittis sollicitudin, est massa rhoncus justo, eget accumsan enim libero in magna. Pellentesque viverra augue non commodo ultrices. Sed euismod lectus sit amet eros fringilla, a vulputate ligula cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed nisl tempus, pretium ligula nec, luctus lectus. Phasellus in odio ligula. Proin pretium, diam in tempor ornare, lorem massa condimentum nibh, id dapibus mi elit tincidunt ligula. Vestibulum at leo feugiat, feugiat est eget, mollis tortor. Praesent lectus purus, pellentesque eu massa ac, maximus venenatis lectus.`;

const splitIntoWords = loremText.split(' ');
let count = 0;

splitIntoWords.forEach(word => {
  if (word === 'et') {
    count++;
  }
});

// console.log(count);
