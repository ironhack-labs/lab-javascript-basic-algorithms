import utils from './utils.js';

const hackers = {
  names: ['Robert', 'Penelopo'],
}

const hardcode = {
  palyndrome: 'reconocer',
}

function spellNames(a, b) {
  let result = '';

  for (let i = 0; i < a.length; i++) {
    result += `${a[i]}`.toUpperCase();
  }
  result += '\n2) ';

  copyb = b.split('').reverse().join('');
  for (let i = 0; i < copyb.length; i++){
    result += `${copyb[i]}`;
  }

  return result;
}

function lexicographic() {
  let result = '';
  let a = "The driver's name goes first";
  let b = "Yo, the navigator goes first definitely";
  let c = "What?! You both have the same name?";
  let firstSentence = a.split(' ').sort().join('') + '\n3) ';
  let secondSentence = b.split(' ').sort().join('') + '\n3) ';
  let thirdSentence = c.split(' ').sort().join('');
  result = firstSentence + secondSentence + thirdSentence;

  return result;
}

function loremIpsum() {
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at nibh eget neque malesuada vulputate ut in dolor. Praesent pretium molestie nibh. Integer ac mauris at neque aliquam commodo. Quisque dui nibh, pulvinar eget maximus sit amet, faucibus ut massa. Nunc sapien odio, fringilla non luctus porttitor, hendrerit vitae augue. Nunc nec molestie leo. Vestibulum in molestie mi. Vivamus vel tortor vitae odio posuere accumsan sit amet vel elit. Mauris ultricies, tortor a vulputate luctus, dui eros porttitor nunc, id porttitor tellus augue a mauris. Integer at placerat elit. Morbi a sapien dui. Quisque tincidunt lobortis venenatis. Mauris convallis nisi vitae mauris faucibus ultricies. Sed risus mi, sodales non nulla ut, tincidunt ultricies dui. Mauris bibendum ullamcorper nisl non ullamcorper. In congue convallis odio, eu luctus eros malesuada mollis.
  Phasellus laoreet ipsum turpis, et finibus elit eleifend non. Integer porta lacus metus, et mollis nunc ullamcorper eu. Pellentesque non nisi vitae nisi ornare volutpat ut sed elit. Nulla vitae nibh sit amet nulla semper facilisis. Etiam euismod felis sapien, at lacinia dui gravida at. Integer eget pharetra massa, blandit lacinia tellus. Nam rutrum et orci sit amet facilisis. Quisque ultricies nunc a diam faucibus laoreet quis id dolor. Sed ut elementum ex. Integer et consequat lectus, sed consequat ligula. Vestibulum dictum venenatis diam in ultrices. Mauris at tempor lectus.
  Suspendisse dignissim quam et tempor tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis auctor velit massa, vitae finibus enim auctor sed. Praesent placerat nisi a iaculis aliquet. Integer eu erat nec magna rhoncus dignissim. Cras ipsum erat, bibendum ut faucibus non, fermentum a dolor. Donec vitae faucibus diam. Suspendisse non auctor massa. Donec scelerisque eros id nulla dignissim, non porttitor elit ultricies. In commodo blandit metus quis ornare. Quisque venenatis eu est et malesuada. Nulla quis risus cursus, tincidunt magna at, rutrum dolor. Morbi hendrerit mattis arcu, in semper sapien molestie ac. Nunc eget molestie augue, sit amet consectetur lorem.`;
  return '4) ' + lorem.length + ' words and  ' + (lorem.match(/et/g) || []).length +' "et" ocurrences';
}

function checkPalyndrome (word) {
  if(word === word.split('').reverse().join('')){
    return word + ' is a palyndrome!'
  }
  else{
    return word + ' is not a palyndrome.'
  }
}

function compareNames(hackers) {
  let { names } = hackers;
  let result = findLongestName(...names);

  return result;
}

function printNames (hackers) {
  let result = '';
  let { names } = hackers;
  result = generateString(...names);

  return result;
}
//TODO: Spell names

//Here is where the magic starts...
console.log(''.concat(printNames(hackers), compareNames(hackers)));
//and ends.



//----------------------------------------------------------------------------------
// Helper functions, this makes the code above more hermoso and easier to leer betch

function generateString (...names) {
  let result = '';
  names.forEach((hacker, i) => {
    result += `${utils.iteration_One.messages[i]}${hacker} `;
    if (i === names.length - 1) result += `\n`;
  });

  return result;
}

function findLongestName (...names) {
  let result = '';
  let currentLargest = '';
  let id = 0;
  names.forEach((name, index) => {
    if (name.length > currentLargest.length) {
      currentLargest = name;
      id = index;
    }
  })
  result = `${utils.iteration_Two.messages[id]}${currentLargest.length}\n`;
  
  return result;
}
