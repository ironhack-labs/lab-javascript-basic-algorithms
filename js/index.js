

  
  // Iteration 1: Names and Input
  
  let hacker1 = "Saitama";
  
  console.log(`The driver's name is ${hacker1}.`);
  
  let hacker2 = "Tasha";
  
  console.log(`The navigator's name is ${hacker2}.`);
  
  // Iteration 2: Conditionals
  
  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  };
  
  // Iteration 3: Loops
  // 3.1
  
  let allCapsNameH1 = '';
  
  for (let i = 0; i < hacker1.length; i++) {
    allCapsNameH1 += `${hacker1[i].toUpperCase()} `;
  }
  
  console.log(allCapsNameH1);
  
  // 3.2
  
  let revNameH2 = '';
  
  for (let i = hacker2.length - 1; i >= 0; i--) {
    revNameH2 += `${hacker2[i]}`;
  }
  
  console.log(revNameH2);
  
  // 3.3 - Didn't use a loop though
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  if ((alphabet.indexOf(hacker1[0].toLowerCase())) < (alphabet.indexOf(hacker2[0].toLowerCase()))) {
    console.log("The driver's name goes first.");
  } else if ((alphabet.indexOf(hacker1[0].toLowerCase())) > (alphabet.indexOf(hacker2[0].toLowerCase()))) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?")
  };  
  
  // Bonus 1:
  
  let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula dui ac metus malesuada suscipit. Sed feugiat mi eget felis tristique varius. Sed a neque malesuada, varius est id, interdum nulla. Curabitur tincidunt tortor justo, quis interdum ligula tincidunt eu. Mauris id molestie leo, et sollicitudin turpis. Morbi sit amet luctus velit, ac cursus dolor. Phasellus congue odio ut quam cursus, sed posuere urna lobortis. Aliquam laoreet velit dui, id aliquet elit imperdiet vitae. Sed blandit ornare vulputate. Donec tincidunt risus nec lacus aliquam, vel semper est imperdiet. Nam nisi felis, tincidunt eget egestas nec, malesuada id libero. Praesent gravida, purus a lobortis feugiat, velit orci luctus lorem, et egestas ex ante in dolor. Vivamus malesuada lectus ut aliquet blandit.
  
  Morbi vitae eleifend libero. Pellentesque facilisis congue purus, eu semper erat ullamcorper sed. Vivamus tincidunt arcu in facilisis elementum. Fusce euismod risus urna, fermentum fringilla augue consectetur et. Proin pharetra ex orci, ac malesuada est euismod eget. Phasellus sed malesuada ipsum, ut hendrerit lectus. Vivamus urna sapien, tristique ac tellus ut, porttitor venenatis diam. Cras mattis id purus in molestie. Fusce quis laoreet lorem, sit amet venenatis felis. Vestibulum sapien orci, tincidunt non ultrices vitae, sodales ut elit. Curabitur quis pulvinar justo, at viverra arcu. Donec a auctor justo. Nam sed sagittis massa. Nunc mollis ornare augue vitae laoreet.
  
  Etiam nec sapien diam. Aenean ultrices augue felis, in blandit orci sodales a. Aenean aliquam neque quam, sit amet volutpat leo auctor ac. Nam convallis augue non leo faucibus fermentum. Mauris magna felis, volutpat dignissim gravida ut, sollicitudin id orci. Curabitur ut scelerisque purus, nec varius arcu. Nullam blandit enim quam, ut vulputate libero posuere vitae. Mauris commodo, dui eget tempus fringilla, turpis nunc semper lacus, eget sodales turpis mauris at orci. Praesent varius vitae orci quis sodales. Maecenas consectetur mauris quis lacus congue, sed ornare dolor porta. Aenean non ipsum risus. Nulla facilisi. Sed elementum varius neque non sodales. Aenean vel tristique mauris. In quis commodo enim.`;
  
  // number of words in the string
  
  let loremIpsumArr = loremIpsum.split(' '); 
  
  let loremIpsumWordCount = loremIpsumArr.length + 1;
  
  console.log(loremIpsumWordCount);
  
  // Number of 'et'
  
  let numOfEtInLoremIpsum = 0;
  
  for (let i = 0; i < loremIpsumArr.length; i++) {
    if ((loremIpsumArr[i] === " et ") || (loremIpsumArr[i] === "Et ") || (loremIpsumArr[i] === " et.")) {
      numOfEtInLoremIpsum ++;
    } 
  }
  
  console.log(numOfEtInLoremIpsum);
  
  // Bonus 2:
  
  let phraseToCheck = "A roza upala na lapu Azora.";
  
  function checkIfPalindrome (string) {
    let stringToCompare = string.toLowerCase().replace(', ', '').replace('.', '');
    let stringReversed = "";
    for (let i = stringToCompare.length - 1; i >= 0; i--) {
    stringReversed += `${stringToCompare[i]}`;
  }
  let stringBackwards = stringReversed[0].toUpperCase() + stringReversed.slice(1) + '.';
  console.log(`The phrase "${phraseToCheck}" spelled backwards is "${stringBackwards}".`);
  }
  
  checkIfPalindrome(phraseToCheck);