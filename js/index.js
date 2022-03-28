// Iteration 1: Names and Input

let hacker1 = 'Alex'
console.log(`The drivers name is ${hacker1}`);

let hacker2 = 'Oscar'
console.log(`The navigators name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters` )
} else if (hacker1.length < hacker2.length ){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters` )
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
}

// Iteration 3: Loops

let space = hacker1.split('').join(' ');
console.log(space.toUpperCase());

function revName(s){
    return s.split("").reverse().join("");
}
console.log(revName(hacker2));

let order = hacker1.localeCompare(hacker2);
switch (order) {
    case -1:
        console.log(`The driver's name (${hacker1}) goes first.`)
        break;
    case 1:
        console.log(`Yo, the navigator (${hacker2}) goes first definitely.`)
        break;
    default:
        console.log(`What?! You both have the same name?`)
        break;
}

// Bonus 1 

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit nisl vel massa tincidunt consequat. Morbi interdum elit id mauris maximus bibendum vel imperdiet urna. Aliquam id ligula nibh. Morbi non lectus ipsum. Aliquam in mauris congue nulla pharetra elementum eget tincidunt eros. Ut tempor sagittis metus sit amet imperdiet. Nulla fermentum, justo ac fermentum placerat, nibh magna molestie justo, vitae mattis ligula tortor nec diam. Praesent elementum augue sit amet condimentum sagittis. Duis aliquet lobortis ante, a pulvinar diam convallis a. Nulla elit est, egestas eu lobortis at, fermentum eu lorem. Proin hendrerit ultrices faucibus. Suspendisse potenti. Integer molestie, lorem sed tincidunt euismod, felis nibh imperdiet ligula, eget egestas est lorem at lectus. Fusce sit amet ornare sem, sed ullamcorper neque.

Aenean volutpat magna nec rhoncus vestibulum. Mauris ut tellus in risus tempor egestas non eget dolor. Suspendisse potenti. Donec mauris turpis, ornare in purus vel, congue rhoncus nunc. Vivamus vitae sagittis ipsum, sit amet volutpat nunc. Suspendisse vulputate diam eu ultrices pellentesque. Etiam tempus hendrerit ex, sed elementum sapien euismod vitae. Praesent nec sem hendrerit, sollicitudin ante non, cursus augue. Pellentesque ut sapien velit. Maecenas dictum ultrices ultricies. Nunc ligula elit, luctus quis mattis nec, aliquet id quam. Curabitur eget lectus fringilla odio cursus ullamcorper at nec eros. Suspendisse quis aliquam quam, sit amet mollis tortor. Mauris auctor vehicula blandit. Nam ut urna convallis, dignissim ipsum ut, hendrerit lacus. Curabitur malesuada massa lectus, sit amet ornare risus iaculis sit amet.

Maecenas vestibulum scelerisque tellus, id suscipit leo egestas eget. Nam non fringilla ipsum. Aliquam iaculis tellus sed volutpat lobortis. Vestibulum maximus ipsum a tortor porttitor fringilla. Ut magna justo, hendrerit nec malesuada quis, lacinia sit amet massa. Donec ut nisi magna. Maecenas vel posuere mauris. Sed nec libero eu quam pretium vulputate vel ac ipsum. Etiam ornare elit ut lobortis tristique. Donec vestibulum metus justo, non euismod felis tristique et. Fusce vitae augue quis magna gravida lacinia.`

console.log(lorem.split(' ').length);

// Bonus 2 

function countOccurences(string, word) {
  return string.split(word).length -1;
}
let count=countOccurences(lorem, " et");
console.log(count);

let phraseToCheck = "race car";
let phraseRev = phraseToCheck.split('').reverse().join('');
console.log(phraseRev);

if (phraseToCheck.replace(/\s/g, '') === phraseRev.replace(/\s/g, '')) {
  console.log(`${phraseToCheck} is a Palindrome of ${phraseRev}`)
} else {
  console.log('its not a Palindrome');
}
