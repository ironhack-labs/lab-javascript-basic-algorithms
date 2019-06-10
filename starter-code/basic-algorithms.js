// Names and Input
console.log('Ready to go');
const hacker1 = "Artem";
console.log(`Hacker name is ${hacker1}`);
const hacker2 = "Nicolle";
console.log(`The navigator name is ${hacker2}`);
if(hacker1.length > hacker2.length) {

  console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} 
  characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, ${hacker2} got the longest name, it has ${hacker2.length} 
  characters `)
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

let hacker1Capitalized;
hacker1Capitalized = hacker1.toUpperCase();
let hacker1Array = Array.from(hacker1Capitalized)

// hacker1Capitalized = Array.from(hacker1Capitalized);
// for(let i = 0; i < hacker1Capitalized.length; i++) {
//   hacker1Capitalized[i] = hacker1Capitalized[i] + ' ';
// }

// console.log(hacker1Capitalized.join(''))


console.log(hacker1Array.join(' '));

let hacker2Array = Array.from(hacker2);
console.log(hacker2Array.reverse().join(''));


if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log(`The driver's name goes first (${hacker1})`);
} else if(hacker2.toLowerCase() < hacker1.toLowerCase()) {
  console.log(`Yo, the navigator goes first definitely (${hacker2})`);
} else {
  console.log(`What?! You both got the same name?`);
}

//Conditionals


// Lorem ipsum generator
// let hey = prompt('Hello Nicolle, lets see if you can come up with the palindrome on the fly')
//   .toLowerCase();
// console.log("You typed in " + hey);

hey = "A man, a plan, a canal, Panama!";

let heyReverse = (Array.from(hey))
  .reverse()
  .join('')
  .toLowerCase();



console.log(hey +' - ' + heyReverse)
const inputWithoutComas = hey.replace(/[^a-zA-Z ]/g, "");
const reverseStringWithoutComas = heyReverse.replace(/[^a-zA-Z ]/g, "");

console.log(`${inputWithoutComas} - ${reverseStringWithoutComas}`)

const inputWithoutComasAndSpaces = inputWithoutComas.replace(/[ ]/g, "");
const inputWithoutComasAndSpacesReverse = inputWithoutComas.replace(/[ ]/g, "");


if(inputWithoutComasAndSpaces === inputWithoutComasAndSpacesReverse) {
  console.log('Got it, Nicolle')
 
} else {
  console.log('Have some cuban coffee and try again')
}

const realLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio ex, sollicitudin eget purus a, iaculis dignissim risus. Nam tempor purus tortor, nec rhoncus lacus bibendum ac. Phasellus iaculis purus libero. Vivamus et massa consectetur, mattis justo sit amet, hendrerit quam. Mauris molestie mauris id lectus eleifend bibendum. Nulla tristique, est a vestibulum imperdiet, lectus massa sodales nisl, eu pulvinarf magna ante non nisl. Proin congue tincidunt rutrum. Vivamus ut enim sed turpis congue blandit. Nulla faucibus interdum efficitur. Cras ut quam vestibulum, viverra quam ut, dictum tellus. Vestibulum egestas urna dui. Praesent eleifend ultrices velit, vel vulputate nisi suscipit ut. Etiam vitae dui pretium magna consectetur facilisis vitae sit amet sapien. Etiam enim purus, suscipit ac efficitur a, fermentum sit amet orci.

Nulla consectetur mi sapien, vel placerat mauris consectetur nec. Duis molestie leo et leo mattis, eget faucibus odio lacinia. Nam ut tellus vitae metus elementum congue. Nam lobortis, sem sed rutrum euismod, leo ante mollis ante, nec feugiat odio nisi porttitor lectus. In sagittis nisl ac ultrices ultrices. Curabitur consequat sem nec nisl scelerisque elementum. Vestibulum eu tortor at lorem convallis bibendum. Curabitur accumsan mi quis efficitur eleifend. Sed tristique eros et congue accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque dictum fermentum condimentum. Etiam placerat leo vel elit malesuada, quis mattis magna rhoncus. Fusce laoreet posuere dui non consequat.

Aliquam neque tellus, pretium in enim in, imperdiet iaculis velit. Nunc pretium augue in massa consectetur consectetur. Cras luctus imperdiet condimentum. Mauris ut magna et sapien accumsan sollicitudin. Fusce euismod, nulla eu interdum lacinia, libero erat posuere risus, sed condimentum augue orci et erat. Praesent at sollicitudin tellus. Suspendisse potenti. Sed volutpat dictum enim at consectetur.`

const baconLorem = `Bacon ipsum dolor amet bresaola pork belly burgdoggen tenderloin, beef ribs ball tip chicken ham hock beef jerky. Ribeye short loin tenderloin, capicola pancetta ground round beef ribs doner cupim cow tail pork loin. Jerky ground round pastrami, tenderloin fatback pork flank pork chop. Tail prosciutto buffalo strip steak pork. Hamburger landjaeger pancetta ham hock, short ribs ribeye turducken leberkas venison. Biltong corned beef shankle brisket venison swine, andouille drumstick chuck strip steak landjaeger salami.

Andouille hamburger fatback meatball shank t-bone bacon buffalo, frankfurter turducken. Ball tip tongue jowl pig swine. Shankle tri-tip burgdoggen sirloin pancetta, picanha leberkas pork chop chuck ground round boudin drumstick. Boudin pork belly corned beef, tri-tip picanha doner sirloin cow pork porchetta beef burgdoggen. Ball tip spare ribs shoulder, chuck strip steak sausage ham brisket flank pastrami buffalo turkey. Rump corned beef cow ball tip andouille cupim.

Andouille meatloaf filet mignon pork loin pork belly pig. Cupim short ribs brisket, leberkas chicken pancetta burgdoggen beef ribs strip steak alcatra. Buffalo salami capicola sausage. Leberkas salami corned beef kielbasa jerky. Ball tip ribeye short ribs, venison salami burgdoggen porchetta ground round biltong. Pork chop pork belly venison pancetta ham chicken.`

let testString = `this is three`

function WordCount(str) {
  
     return str.split(' ')
            .filter(function(n) { return n != '' })
            .length;
}
console.log(WordCount(baconLorem));

function etCount(str) {
  return str.split(' et ')
          .length
}

console.log(etCount(realLorem));