// bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales id erat non ultricies. Aenean interdum velit sed posuere ultricies. Phasellus eu mi odio. Duis interdum mattis urna eget rutrum. Morbi ac felis mattis, suscipit arcu vel, euismod dui. Vivamus a dui euismod sapien posuere sagittis vel in nibh. Vivamus interdum velit ut interdum sagittis. Ut egestas fringilla dapibus.
Maecenas tempor nibh sed turpis vestibulum, eu molestie leo aliquet. Nulla ultricies ante vitae nibh vulputate, ut rhoncus augue luctus. Donec convallis lacinia urna a congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lectus diam, tempus consequat nibh vehicula a. Nunc at nunc massa. Donec non lobortis tellus. Nam justo quam, placerat id feugiat nec, accumsan id dolor. Vivamus ante ipsum, congue nec ex vel, ornare luctus massa.
Aliquam ac ligula non libero vulputate tempus. Vivamus et eu luctus ex. Donec vel lectus vulputate, scelerisque est ac, varius ante. Morbi ultrices mattis mi, sed tincidunt lectus. Nulla lectus justo, pulvinar ac dolor ut, congue dictum eros. Donec sit amet semper mi, sed tincidunt tortor. Vestibulum mattis ligula sit amet eros ullamcorper, sit amet laoreet nunc gravida. Integer id est eu leo auctor porta ac id elit. In sagittis eget sem sit amet scelerisque. Maecenas eu lacus quis lacus congue feugiat. Vestibulum non est arcu. Pellentesque sit amet imperdiet eros.`;

//
const replaceParForSpace = lorem.replace('\n', ' ');
const splittedInWords = replaceParForSpace.split(' ');
const numberOfWords = splittedInWords.length;

splittedInEt = replaceParForSpace.split(' et ')
const numberOfEt = splittedInEt.length;
console.log(numberOfWords);
console.log(numberOfEt);



// bonus 2

function reverseArray(arr) {
  const reversedArr = [];
  arr.forEach(e => {
    reversedArr.unshift(e);
  });
  return reversedArr;
}

function isPalindrome(string) {
  if (typeof string !== 'string') {
    console.log('only strings!');
    return;
  }

  function removeElementsFromArray(array, elementsToRemove) {
    let arr;
    elementsToRemove.forEach(eToRemove => {
      arr = array.filter(e => {
        return e !== eToRemove;
      });
    });
    return arr;
  }

  const charsToRemoveArr = [',', '.', '!', '?', "'", '\n', ' '];

  const splittedArr = string.split('');

  cleanSplittedArr = removeElementsFromArray(splittedArr, charsToRemoveArr);

  const reversedSplittedArr = reverseArray(cleanSplittedArr);
  const joinedSplittedArr = cleanSplittedArr.join('').toLowerCase();
  const joinedReversedSplittedArr = reversedSplittedArr.join('').toLowerCase();

  if (joinedSplittedArr === joinedReversedSplittedArr) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPalindrome('hello hello'));
console.log(isPalindrome('stack cats'));
console.log(isPalindrome(`was it a car or a cat i saw?`));
console.log(isPalindrome('A man, a plan, a canal, Panama!'));
console.log(isPalindrome('hi pacoca'));
