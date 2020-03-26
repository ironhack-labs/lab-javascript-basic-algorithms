const hacker1 = 'Elvira';
const hacker2 = 'Hector';
let uppercaseDriver = '';
let reverseNavigator = '';
const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus orci odio. Proin molestie nec tellus a mattis. Sed vitae malesuada libero, at lobortis elit. Maecenas eu erat quam. Quisque efficitur volutpat magna, id sollicitudin sem venenatis at. Sed blandit, risus id commodo faucibus, ipsum nisl suscipit quam, eget mollis erat urna ut diam. Fusce vel nunc laoreet, feugiat lacus nec, dictum mi. Etiam fermentum sodales mi, ac gravida elit gravida nec. Nam dapibus iaculis tellus, vitae condimentum ex finibus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vehicula commodo neque, id rutrum turpis varius vel. Etiam egestas, nisl eu euismod pretium, mi leo euismod mi, id pulvinar arcu tortor condimentum ante. Quisque scelerisque mollis finibus. Maecenas libero nisl, pharetra vitae elit eu, posuere auctor urna. Quisque ac massa sit amet dolor tristique malesuada ut id justo. Maecenas ac dui placerat lacus fermentum dapibus. Vivamus gravida orci non nisl suscipit condimentum. Pellentesque varius quis sapien nec tristique. Maecenas finibus risus et ultrices viverra. Maecenas finibus turpis in dui laoreet venenatis. Nunc id purus eu ex rhoncus placerat. Mauris in risus at est eleifend finibus ac in urna. Sed aliquet porta ipsum, vel pharetra lorem elementum eget. Donec et aliquam lacus, egestas consectetur est. Nam tellus ipsum, condimentum eget hendrerit a, dictum non diam. Cras vitae fermentum orci. Sed a nisi elit. Cras lorem leo, pellentesque varius eleifend et, congue sit amet ipsum. Aenean sagittis porta erat in ullamcorper. Etiam in nunc neque. Cras aliquet efficitur est, non tincidunt magna ultricies at. ';

function checkLongerName(driverName, navigatorName) {
  if (driverName.length > navigatorName.length) {
    return `The driver has the longest name, it has ${driverName.length} characters.`;
  } else if (driverName.length < navigatorName.length) {
    return `It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${driverName.length} characters!.`;
  }
}

function checkAlphabeticOrder(driverName, navigatorName) {
  if (driverName == navigatorName) {
    return 'What?! You both have the same name?';
  }

  let nameArray = [driverName, navigatorName];

  nameArray.sort();

  if (nameArray[0] == driverName) {
    return "The driver's name goes first.";
  } else {
    return 'Yo, the navigator goes first definitely.';
  }
}

function countWords(str) {
  const wordArray = loremIpsum.split(' ');
  return `This string is ${wordArray.length} words long.`;
}

function countEt(str) {
  let wordCounter = 0;

  const wordArray = loremIpsum.split(' ');

  wordArray.forEach(elm => {
    if (elm.toUpperCase() == 'ET') {
      wordCounter++;
    }
  });

  return `This string contains ${wordCounter} instances of "et"`;
}

for (i = 0; i < hacker1.length; i++) {
  uppercaseDriver += `${hacker1[i].toUpperCase()} `;
}

for (i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);
console.log(checkLongerName(hacker1, hacker2));
console.log(uppercaseDriver);
console.log(reverseNavigator);
console.log(checkAlphabeticOrder(hacker1, hacker2));
console.log(countWords(loremIpsum));
console.log(countEt(loremIpsum));
