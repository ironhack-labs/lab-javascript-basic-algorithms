function generateString (iteration, ...names) {
  let result = '';
  names.forEach((hacker, i) => {
    //The below if handles extra names (more than 2)
    if (i >= iteration.iteration_One.messages.length) {
      i = iteration.iteration_One.messages.length - 1;
    }
    result += `${iteration.iteration_One.messages[i]}${hacker}\n`;
  });

  return result;
} 

function findLongestName (iteration, ...names) {
  let result = '';
  let currentLargest = '';
  let id = 0;
  names.forEach((name, index) => {
    if (name.length > currentLargest.length) {
      currentLargest = name;
      id = index;
      //The below if handles extra names (more than 2)
      if (id > 1) id = 3;
    }
  })
  console.log(iteration);
  result = `${iteration.iteration_Two.messages[id]}${currentLargest.length}`;
  
  return result;
}

function spellNamesHelper (...names) {
  let result = '';
  for (let i = 0; i < names.length; i++) {
    if (i % 2 === 0) {
      result += `\n${names[i].split('').join(' ')}\n`.toUpperCase();
    }
    else {
      let reversedName = names[i].split('').reverse().join('');
      for (let j = 0; j < reversedName.length; j++) {
        result += `${reversedName[j]}`;
      }
    }
  }

  return result;
}

export { generateString, findLongestName, spellNamesHelper };