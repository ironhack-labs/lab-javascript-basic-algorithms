// Iteration 1: Names and Input
let hacker1 = 'Ana';
console.log(`The name of the Driver is ${hacker1}`);
let hacker2 = 'Mauricio';
console.log(`The name of the navigator is ${hacker2}`);

// Iteration 2: Conditionals

function PrintDependOnLongestName(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`,
    );
  }
  if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
    );
  }
  if (hacker1.length === hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`,
    );
  }
}

PrintDependOnLongestName(hacker1, hacker2);

// Iteration 3: Loops

function CapitalizeSpaceStr(str) {
  let Capitalized = str.toUpperCase();
  let CapSpace = Capitalized.split('').join(' ');
  console.log(CapSpace);
}

CapitalizeSpaceStr(hacker1);

function RevertWord(str) {
  let SplitStr = str.split('');
  let ReverseWord = SplitStr.reverse();
  let JoinArr = ReverseWord.join('');
  console.log(JoinArr);
}

RevertWord(hacker2);

function LexiOrder(str1, str2) {
  if (str1 < str2) {
    console.log("The driver's name goes first.");
  }
  if (str1 > str2) {
    console.log('Yo, the navigator goes first, definitely.');
  }
  if (str1 === str2) {
    console.log('What?! You both have the same name?');
  }
}

LexiOrder(hacker1, hacker2);

// Bonus 1

var LongText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et arcu ac enim fringilla auctor ut a ante. Morbi non lorem hendrerit, commodo diam in, viverra purus. Nullam elit dolor, vehicula malesuada sodales non, euismod id risus. Maecenas convallis, nibh sit amet sagittis lacinia, nisl dui venenatis massa, id fermentum nisi nunc at massa. Cras arcu massa, tincidunt ut risus eget, volutpat rutrum orci. Vestibulum tempor erat tellus, sit amet ullamcorper neque vestibulum sit amet. Vestibulum venenatis posuere urna. Integer vitae volutpat augue. Donec dapibus odio nec rhoncus euismod. Aenean volutpat leo sit amet risus tempus convallis. Fusce malesuada turpis et fermentum rutrum. Mauris tincidunt magna quis lacus accumsan condimentum et at purus. Sed eget dapibus mi. Vivamus libero lorem, fermentum in fringilla et, lacinia vitae ante. Suspendisse mattis venenatis rutrum. Quisque mattis justo lorem, id volutpat augue cursus id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc enim lorem, malesuada nec arcu laoreet, sodales accumsan odio. Nulla ex neque, vestibulum a nibh ac, accumsan egestas diam. Donec malesuada leo sit amet justo porttitor ultricies. Integer ornare consequat magna ac fringilla. Suspendisse congue consequat urna. Maecenas ac diam feugiat, fringilla arcu a, pretium sapien. Suspendisse a mi id neque pharetra pulvinar a quis tortor. Proin lacinia porttitor facilisis. Vivamus arcu libero, imperdiet sed varius at, tristique ac lacus. Fusce eget felis ac justo pretium finibus. Curabitur scelerisque mattis auctor. Quisque bibendum ligula vel diam suscipit iaculis. Ut mattis gravida leo non volutpat. Ut vel libero vehicula, vehicula dolor eget, auctor metus. Fusce aliquet sit amet risus sit amet congue. Suspendisse elementum, mi a ullamcorper pulvinar, nunc erat elementum ex, at scelerisque nunc odio quis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum mi sagittis auctor pretium. Sed rhoncus sapien lorem, eget malesuada ex placerat sed. Nam pellentesque in mi eget luctus. Fusce aliquet lorem nec semper aliquet. Donec varius elit eu elit porta porttitor.';

function WordsCount(str) {
  let count = 0;
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    count++;
  }

  console.log('Number of words is', count);
}

WordsCount(LongText);

function CountEt(str) {
  let WordEt = 'et';
  let countEt = 0;
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i] === WordEt) {
      countEt++;
    }
  }
  console.log("Number of et's in the paragraph is:", countEt);
}

CountEt(LongText);
