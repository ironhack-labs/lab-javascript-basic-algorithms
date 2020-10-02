//Iteration 1: Names and Input

console.log("I'm ready!");
var hacker1 = "Lucie";// driver  
var hacker2 = "Javi"; // navigator 
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  
//Iteration 3: Loops

//3.1
console.log(hacker1.toUpperCase().split('').join(' '));

//3.2
const rev = hacker1.split('');
console.log(rev.reverse().join(''));

//3.3

//Depending on the lexicographic order of the strings print different messages

if (hacker1 < hacker2){
  console.log(`The driver's name goes first.`)
  }
  else if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
  }
  else {
    console.log(`Yo, the navigator goes first definitely.`)
  }


//Bonus 1 
//1st PART  Generate 3 paragraphs. Store the text in a variable type of string.

var text  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan a dolor a aliquet. Phasellus at varius lectus, mattis elementum sapien. Vivamus nec odio nisi. Donec imperdiet nisi lacus, feugiat mattis sapien viverra a. Nulla molestie sapien vitae aliquet tincidunt. Duis sit amet erat gravida, dignissim eros ut, cursus nunc. Curabitur scelerisque, felis placerat luctus volutpat, mi massa fermentum velit, feugiat tincidunt odio ligula et dolor. Nunc metus neque, finibus in turpis at, posuere tempus justo. Nam at hendrerit massa, eget auctor tortor. Maecenas porta, mi et consectetur tincidunt, elit mi ornare tellus, quis porta sapien quam at lorem.Donec vitae euismod est, quis condimentum mi. Donec aliquet risus at dolor eleifend volutpat. Sed ac consequat nisl. Morbi posuere tortor ex, sed consequat ex dignissim non. Ut vestibulum auctor erat, ac cursus mauris aliquam ac. Ut felis nunc, rhoncus non magna sed, consequat mattis massa. Nullam quis maximus orci, at maximus diam. Vivamus nulla quam, commodo ac ultricies ut, convallis eu mauris. Pellentesque scelerisque dui quis elit mattis malesuada. Nunc rutrum est ac facilisis auctor. Sed congue posuere quam, in tristique nulla imperdiet nec. Phasellus fringilla sed felis nec condimentum.Mauris quis bibendum massa. Donec vitae porttitor metus, vitae condimentum mi. Nunc erat erat, aliquam mollis lacus vel, molestie maximus nunc. Integer ultricies et lacus in rhoncus. Praesent interdum efficitur viverra. Maecenas nec arcu eu nibh facilisis ultrices. Proin dolor eros, tempus id ullamcorper at, gravida non nisl. In metus ex, blandit sed luctus ut, mollis ac odio. Donec a sollicitudin diam, a laoreet felis. Maecenas eu aliquam massa. Donec accumsan ex elit, in tristique odio posuere quis. Aliquam eget pharetra justo, in varius augue. Nulla nec velit at dui porta pharetra.';

console.log(`The text is log of ${text.length} characters.`);

//  2nd PART - Make your program count the number of words in the string. 
function WordCount(str) { 
  return text.split(" ").length;
}
console.log(`The number of word is of ${WordCount()}.`);


// 3 rd PART  - Make your program count the number of times the Latin word et appears.
var count = (text.match(/et/g) || []).length;
console.log(`The number of ET is ${count}.`);

//Bonus 2:

