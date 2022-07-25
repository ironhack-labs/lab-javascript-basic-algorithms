// Iteration 1: Names and Input
const hacker1 = 'Charlotte';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Yuan';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length === hacker2.length)
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
hacker1.length > hacker2.length ?
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  : console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

// Iteration 3: Loops
let upperCaseDriver = '';
for (const letter of hacker1)
{
  upperCaseDriver += letter.toUpperCase() + ' ';
}
upperCaseDriver = upperCaseDriver.slice(0, -1);
console.log(upperCaseDriver);

let reverseNavigator = '';
for (let i = hacker2.length - 1 ; i >= 0 ; i--)
{
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);


for (let i = 0; i < hacker1.length ; i++)
{
  if (hacker1[i] !== hacker2[i])
  {
    if (hacker1[i] < hacker2[i])
      console.log("The driver's name goes first.");
    else
      console.log("Yo, the navigator goes first definitely.");
    break;
  }
  else
  {
    console.log("What?! You both have the same name?");
    break;
  }
}

let testingParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas ut nunc gravida ultricies. Nulla iaculis fringilla consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet tellus sed quam maximus malesuada. Donec convallis metus ut ultrices pellentesque. Vivamus non erat neque. Phasellus at quam ac massa posuere bibendum. Maecenas faucibus ut magna nec rhoncus. Nam aliquet ex eu dolor vulputate dictum. Quisque dictum justo sed massa ullamcorper tempus. In laoreet dui est, in commodo nisi dapibus ac. Vivamus rhoncus sit amet mauris nec interdum. Curabitur nulla urna, varius quis dignissim vel, aliquam a velit.
Phasellus malesuada convallis lorem, non rutrum velit feugiat a. Cras ac mollis ligula. Suspendisse placerat enim nibh, non egestas lectus dignissim in. Cras malesuada, tortor at lacinia lobortis, mauris ante malesuada nunc, a bibendum nunc leo at enim. Praesent sagittis tellus dolor, non cursus sem aliquam in. Sed in nulla eget urna iaculis efficitur quis et purus. Proin aliquam, velit ut accumsan pulvinar, nulla ipsum convallis urna, in malesuada arcu ligula tempor urna. Ut in fermentum nibh.
Donec maximus, tellus et laoreet convallis, justo massa condimentum tortor, eget porttitor lectus leo in magna. In efficitur sit amet lorem quis facilisis. Fusce a elementum purus. Duis sed lobortis dolor. Aliquam erat volutpat. Donec non nulla sed odio feugiat consequat. Cras cursus mauris ut efficitur porttitor. Nam sit amet nisi a risus feugiat vulputate.`

let numberOfSpaces = 0;
let numberOfEts = 0;
for (let i = 0 ; i < testingParagraph.length ; i++)
{
  if (testingParagraph[i] === ' ')
    numberOfSpaces++;
  if (testingParagraph[i] + testingParagraph[i + 1] === "et")
    numberOfEts++;
}
let numberOfWords = numberOfSpaces + 1;

let isPalindrome = true;
let phraseToCheck = `No 'x' in Nixon`;
let formattedPhrase = '';
for (let i = 0 ; i < phraseToCheck.length ; i++)
{
  if (phraseToCheck.toUpperCase().charCodeAt(i) >= 65
      && phraseToCheck.toUpperCase().charCodeAt(i) <= 90)
  {
    formattedPhrase += phraseToCheck[i];
  }
}

let phraseLength = formattedPhrase.length;
for (let i = 0 ; i < phraseLength ; i++)
{
  if (formattedPhrase[i].toLowerCase() !== formattedPhrase[phraseLength - i - 1].toLowerCase())
  {
    isPalindrome = false;
    break ;
  }
}
