/*Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = "Chi-Thong Nguyen";
console.log(`The navigator's name is ${hacker1}`);
let hacker2 = "Konstantinos Alexis";
console.log(`The driver's name is ${hacker2}`);

/*
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

let hacker1Length, hacker2Length;
hacker1Length = hacker1.length;
hacker2Length = hacker2.length;
if(hacker1Length > hacker2Length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker1Length} characters`);
}else if (hacker1Length < hacker2Length)
{
    console.log(`The driver has the longest name, it has ${hacker2Length} characters`);
}else
{
    console.log('Wow, you both have equally long names, ${hacker1Length} characters!')
}

/*
Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
//3.1
let hacker2Capital = "";
let cap = "";
for(let i = 0; i<hacker2.length; i++)
{
        //console.log(hacker2[i].toUpperCase());
        cap = cap + hacker2[i].toUpperCase() + " "
}
console.log(cap);
//3.2
let reversed = "";
for(let i = 0; i<hacker1.length; i++)
{
        //console.log(hacker2[i].toUpperCase());
        reversed = hacker1[i] + reversed;
}
//3.3
let compare = hacker1.localeCompare(hacker2);
console.log(compare)
if (compare === -1)
{
  console.log('Yo, the navigator goes first definitely.')
}
else if (compare === 1)
{
  console.log("The driver's name goes first.");
}
else
{
  console.log("What?! You both have the same name?");
}

/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lectus nisi, euismod at eros a, hendrerit faucibus purus. Integer viverra ex id lorem consequat, at porta sapien tincidunt. Quisque aliquam orci et est molestie, vel ullamcorper arcu scelerisque. Sed accumsan finibus erat, ut dignissim felis tristique id. Duis vel tortor nulla. Quisque consectetur, ante ut lacinia laoreet, neque elit lacinia tellus, in sagittis odio lacus condimentum mi. Fusce leo quam, ullamcorper quis blandit id, aliquet ut ante. Proin varius augue massa, vel vulputate nisl ultrices id. Vestibulum sit amet nisl in metus rhoncus molestie eu eu massa.

Curabitur malesuada odio in nibh finibus, nec pharetra ipsum accumsan. Donec luctus sodales imperdiet. Nam placerat leo nec purus volutpat egestas. Nam cursus a odio pharetra auctor. Cras condimentum interdum felis, sed suscipit elit venenatis vitae. Maecenas ac imperdiet dolor. Maecenas luctus commodo nisi, sed imperdiet quam volutpat non. Donec odio tortor, hendrerit at auctor at, placerat bibendum quam.

Duis tincidunt ullamcorper dignissim. Mauris porta aliquam urna pretium efficitur. Duis quis odio sodales, condimentum ante sed, bibendum massa. Vestibulum nec neque in mi commodo semper ut non ex. Fusce lectus risus, malesuada eget risus non, lobortis auctor lacus. Cras gravida commodo sollicitudin. Integer leo odio, suscipit quis auctor non, iaculis iaculis turpis. Nam eu semper nisi, dignissim molestie eros. Praesent vitae sapien justo. Aliquam et erat volutpat. Suspendisse eu augue feugiat, imperdiet ligula quis, ullamcorper ipsum. In hac habitasse platea dictumst. et et`;
let counter = 1;
for (let j= 0; j < lorem.length; j++)
{
  if(lorem[j]===" ")
  {
    counter++;
  }
}
console.log(`The lorem ipsum that got generated has ${counter} words`);
counter = 0;
for (let j= 0; j < lorem.length; j++)
{
  if(lorem[j]===" " && lorem[j+1]==="e" && lorem[j+2]==="t" && lorem[j]===" ")
  {
    counter++;
  }
}
console.log(`The lorem ipsum texts contains the latin word et ${counter} times`)
/*
Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃*/
let phraseToCheck = "race car";
let check1="";
let check2 ="";
for (let i = 0; i< phraseToCheck.length ; i++)
{
  if(phraseToCheck[i]!==" ")
  {
       check1 = check1 + phraseToCheck[i];
       check2=phraseToCheck[i] + check2;  
  }
  
}
if(check1===check2)
{
  console.log("The given string is a palindrome")
}
else
{
    console.log("The given string is NOT a palindrome")
}