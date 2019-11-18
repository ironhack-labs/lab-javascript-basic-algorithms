// Iteration 1: Names and Input
// Iteration 1: Names and Input
/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

const hacker1 = "Kai";
console.log(hacker1);

const hacker2 = " Tomasz";
console.log(hacker2);

// Iteration 2: Conditionals
// Iteration 2: Conditionals

/*Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
else if (hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
else
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);


// Iteration 3: Loops
// Iteration 3: Loops
/*Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

let str = "";

for (let i = 0; i < hacker1.length; i++) {
    str = str + hacker1.charAt(i) + " ";
}
str = str.trim().toUpperCase();
console.log(str);

let str2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    str2 = str2 + hacker2.charAt(i);
}
console.log(str2);

if (hacker1 < hacker2)
    console.log(`The driver's name goes first`);
else if (hacker1 > hacker2)
    console.log(`Yo, the navigator goes first definitely.`);
else
    console.log(`What?! You both have the same name?`);

/*Generate 3 paragraphs. Store the text in a variable type of string.
 Make your program count the number of words in the string.
 Make your program count the number of times the Latin word et appears.*/
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla risus, volutpat ut consectetur eu, cursus in elit. Fusce accumsan id arcu a lacinia. Nunc faucibus posuere ante, vel fringilla diam malesuada eget. Pellentesque feugiat non ipsum sed bibendum. Pellentesque sed dapibus ipsum, sit amet volutpat ligula. Donec imperdiet id nibh sed condimentum. Vivamus faucibus quis metus quis gravida. Vivamus dictum feugiat ex, ac tempus justo tincidunt sed. Phasellus nisl justo, eleifend vitae pellentesque ut, tristique sit amet augue. Praesent aliquam porttitor lorem, et euismod risus eleifend a. Morbi mattis gravida ante. Proin metus augue, dictum volutpat sagittis sed, vehicula sed tellus. Pellentesque consequat, justo eu consectetur ornare, ex elit fermentum est, sed mattis diam dolor non lacus. Vivamus laoreet viverra faucibus. Praesent volutpat congue lorem et mollis. In hac habitasse platea dictumst. Vestibulum semper vel lectus ut vulputate. Maecenas sagittis, urna sed accumsan dapibus, justo quam aliquam enim, eget congue lorem massa vel metus. Sed ut ligula orci. Aenean quis porttitor neque. Sed eu massa feugiat, aliquet justo a, rutrum ligula. Quisque sed quam sit amet dui iaculis tristique non et orci. Morbi quis vehicula justo. Vivamus sem dui, aliquam laoreet urna at, vulputate consectetur nisi. Morbi laoreet ullamcorper libero, at vulputate nibh scelerisque at. Ut accumsan, nibh vitae tristique efficitur, massa est placerat dolor, nec ornare mi risus et eros. Ut a risus vel leo vestibulum condimentum. Maecenas iaculis magna felis, in interdum odio lacinia eget. Phasellus eget laoreet est. Curabitur tristique pretium odio nec congue. Phasellus faucibus metus non elit sollicitudin pellentesque. Integer id vestibulum justo. Etiam eros ex, sodales vel est vel, mattis blandit risus. Aliquam et nibh volutpat, rutrum magna ut, fringilla nisl. In ultricies, lacus non hendrerit cursus, ante neque congue enim, eget vulputate velit erat eget est. Mauris varius odio vitae blandit sodales."
let wordcount = 0;

for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) === " ") {
        wordcount++;
    }
}
wordcount++; //because the last word has no space after
console.log(`number of words from text is: ${wordcount}`);

let found = 0;
let wordcount2 = 0;
while (found >= 0) {
    found = text.indexOf(" et ");
    if (found >= 0) {
        wordcount2++;
    }
    text = text.substring(found + 2, text.length - 1);
    //console.log (found);
}
console.log(`number of occurences of et in the text is: ${wordcount2}`);