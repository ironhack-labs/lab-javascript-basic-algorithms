// Iteration 1: Names and Input
// 
// Task 1.1/1.3
hacker1 = "Dino Brewster"
hacker2 = "Tobey Marshall"

// Task 1.2/1.4
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// Task 2.1
if (hacker1.length > hacker2.length)
{
  console.log("The driver has the longest name, it has " + hacker1.length +" characters.");
}

if (hacker1.length < hacker2.length)
{
  console.log("It seems that the navigator has the longest name, it has  " + hacker2.length +" characters.");
}

if (hacker1.length == hacker2.length)
{
  console.log("Wow, you both have equally long names, " + hacker1.length +" characters!");
}

// Iteration 3: Loops
// Task 3.1
hacker1.split('').forEach(function(item){

  process.stdout.write(item.toUpperCase() + " ");
});
console.log("");

// Task 3.2
let reverseString= "";
hacker2.split('').forEach(function(item){
  reverseString = item + reverseString;
});

console.log(reverseString);

// Task 3.3

if (hacker1.localeCompare(hacker2) < 0)
{
  console.log("The driver's name goes first.");
}

if (hacker1.localeCompare(hacker2) > 0)
{
  console.log("Yo, the navigator goes first definitely.");
}

if (hacker1.localeCompare(hacker2) == 0)
{
  console.log("What?! You both have the same name?");
}



// Bonus 1 & 2 Task
let lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in laoreet turpis, vitae accumsan mauris. Vestibulum eget accumsan orci, sit amet dictum libero. Praesent a euismod justo. Suspendisse odio metus, lacinia in accumsan et, gravida et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mollis dignissim libero, ac faucibus nisi convallis a. Sed sollicitudin semper ultricies."+ " \n\n" +
"Donec eget odio vestibulum, lacinia erat et, euismod purus. Mauris tempus ipsum eu eleifend sodales. Maecenas interdum faucibus odio, eget porta turpis faucibus et. Nunc vehicula accumsan aliquet. Pellentesque condimentum malesuada molestie. Suspendisse malesuada erat sagittis dolor tempus, sed tristique mauris ultrices. Sed pharetra consequat metus, quis elementum ligula vestibulum eu. Mauris sollicitudin tellus a elit aliquam auctor. Praesent tincidunt maximus ipsum id molestie. Pellentesque consectetur dignissim massa, id consequat augue feugiat eget. Mauris ut aliquam nibh, sit amet luctus purus. Nam id erat at ex ultricies iaculis ac at eros. Aliquam erat volutpat." + "\n\n" +

"Donec ac nisl a eros viverra aliquam. Quisque ut feugiat sem. Fusce blandit quis eros mollis posuere. Mauris egestas ullamcorper mauris, quis congue tortor placerat non. Phasellus vel eros magna. Vivamus rhoncus maximus libero at pharetra. Praesent malesuada tellus non purus sollicitudin blandit. Morbi vitae dui ac magna tincidunt gravida. Vestibulum a euismod tellus, a luctus felis. Nullam justo nisi, elementum sed fringilla et, porttitor eu enim. Etiam iaculis tempor magna, facilisis tempor est consectetur consectetur. Mauris porta nec diam vitae cursus. Praesent id vestibulum purus. Mauris quis fringilla lectus, at pulvinar dolor. Donec id neque et tortor venenatis congue a ut est. Proin id ante efficitur, commodo ligula quis, gravida magna."

words_array = lorem.match(/\b(\w|')+\b/gim);
et_array = lorem.match(/et/gim);

console.log("Number of words: " + words_array.length);
console.log("Number of et's: " + et_array.length);

// Bonus Task 3
let phraseToCheck = "put it up".replace(/\s/g,'').toUpperCase();
let bPalindrome = true;

for (let i = 0; i < phraseToCheck.length; i++)
{
  if ((phraseToCheck[i] === phraseToCheck[phraseToCheck.length - i]) != 0)
  {
      bPalindrome = false;
      break;
  }
}

if (bPalindrome)
{
    console.log("Palindrome");
}
else
{
    console.log("not a Palindrome");
}
