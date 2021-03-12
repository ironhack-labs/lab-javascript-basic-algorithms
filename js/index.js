//Iteration 1
let hacker1 = "Roger"
console.log(hacker1);

let hacker2 = "Rafa";
console.log(hacker2);

//Iteration 2
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names ${hacker1.length} character!`)
}

//Iteration 3
console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.toLowerCase().split('').reverse().join(''));

if(hacker1.localeCompare(hacker2) === 1){
  console.log("The driver's name goes first")
} else if(hacker1.localeCompare(hacker2) === -1){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus 1
let loremIps ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nulla sed ante porttitor dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec fringilla tellus quam. Praesent volutpat consequat nulla, et vulputate enim tincidunt sed. Quisque gravida, est nec euismod sollicitudin, felis felis commodo nulla, id condimentum turpis justo pharetra lectus. Praesent faucibus, diam quis vestibulum condimentum, massa tellus aliquet magna, ut lacinia libero tellus at diam. Sed accumsan ante efficitur tortor tempor varius. Pellentesque mi ante, iaculis a nisl nec, vehicula consectetur purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae nunc nec justo porttitor pellentesque id vitae massa. Integer ac rhoncus velit, id mollis nisl. Praesent turpis est, faucibus vel consequat sit amet, vestibulum id ipsum. Nam vel ex a sem tempus egestas. Mauris egestas velit tellus, dapibus mollis ligula faucibus vitae. Nunc pretium interdum ligula quis malesuada. Ut cursus non urna quis placerat. Vivamus id erat et augue porttitor luctus. Donec dictum feugiat est et feugiat. In hac habitasse platea dictumst. Pellentesque volutpat diam quis laoreet rutrum. Ut quis metus dolor. Fusce rutrum leo felis, non accumsan tellus aliquam sed. Sed in eleifend ipsum. Curabitur luctus id turpis non tempus. Quisque eu leo ut velit sollicitudin condimentum in ac diam. Nam fermentum, nulla sed elementum hendrerit, purus tellus maximus urna, iaculis varius enim mi et velit. Integer et velit sit amet mi pellentesque tempor. Nunc efficitur diam ac fermentum efficitur. Morbi pharetra efficitur metus ut congue. In varius nisi id tellus sagittis, nec rhoncus mi rhoncus. Phasellus viverra velit eu ex finibus ultricies. Nulla ornare congue dolor. Quisque aliquam elementum quam a euismod. Aliquam luctus nisi ac nisl interdum pulvinar. Mauris eget magna sit amet tellus rutrum iaculis. In hac habitasse platea dictumst. Phasellus euismod dui turpis, at vestibulum ex eleifend convallis."

function wordCount(str){
  console.log(str.split(' ').length);
}
wordCount(loremIps);

function wordInstances(str, word){
  console.log(str.split(word).length-1);
}
wordInstances(loremIps, " et ");

//alternative
let altWordCount = 1;
for(let i = 0; i<=loremIps.length; i++){
  if(loremIps[i] === ' '){
    altWordCount++;
  }
}
  console.log(altWordCount)

// /criteria/ + g- looks at entire string; + || [] and returns array/0 if no occurance + length of the array
let altEtCount = (loremIps.match(/ et /g) || []).length;
console.log(altEtCount);

//Bonus 2
/* 
create new string and make it lower case
check character type and remove unwanted ones
iterate through new string
compare with reverse order letter at same index
*/

let phraseToCheck = "Havana is hot these days!"
let phraseToCheck2 = "A man, a plan, a canal, Panama!"

function isPalindrome(str){
 let verdict = true; 
 let cleanPhrase = str.toLowerCase().replace(/[^a-z0-9]+/g, '');

  for (let i =0; i <= cleanPhrase.length /2; i++){
    if(cleanPhrase[i] === cleanPhrase[cleanPhrase.length -1 -i]){
    continue;
    } else {
      verdict = false;
    }
  }

  if(verdict){
    console.log("it is a palindrome")
  } else {
    console.log("it is not a palindrome")
  }
}

isPalindrome(phraseToCheck);
isPalindrome(phraseToCheck2);
