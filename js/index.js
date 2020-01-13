/*Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.
1.2 Print `"The driver's name is XXXX"`.
1.3 Create a variable `hacker2` with the navigator's name.
1.4 Print `"The navigator's name is YYYY"`.*/

var hacker1 = "AAA";
console.log(`The driver's name is ${hacker1}.`);
var hacker2 = "BBBB";
console.log(`The navigators's name is ${hacker2}.`);

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + "characters.");
  } else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
};

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

var output3dot1 = "";
for (var i = 0; i < hacker1.length; i++){
 output3dot1 += hacker1[i].toUpperCase() + " ";
}
console.log(output3dot1);

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

var output3dot2 = "";
for (var i = hacker2.length-1; i >= 0; i--){
 output3dot2 = output3dot2 + hacker2[i];
}
console.log(output3dot2);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
};

/*Bonus 1:
Go to lorem ipsum generator and Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

var blindtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum accumsan semper. Nam non est eros. Maecenas vitae tortor congue, aliquet sem at, mattis ante. Fusce tincidunt porta mollis. Proin nec elementum diam, at finibus sem. Curabitur ac consequat lectus. Vestibulum ac sagittis tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas elementum, arcu eu mollis placerat, nibh turpis mattis orci, luctus auctor neque risus et augue. Maecenas bibendum tellus ut imperdiet aliquam. Mauris sapien dui, lacinia eu ultricies id, ornare vitae lectus. Sed tristique a libero in varius. Vestibulum ac varius lectus. Cras elementum, erat eget viverra tincidunt, dolor leo faucibus nunc, vitae pellentesque libero ex eget sapien. Praesent nec justo sit amet urna interdum porta non a sapien. Donec placerat sapien et diam interdum ultrices. Nullam id dolor vel lorem suscipit molestie. Sed molestie urna ac nulla facilisis bibendum. Suspendisse potenti. Pellentesque interdum urna congue, rutrum ante in, molestie eros. Etiam ullamcorper ac justo at finibus. Aliquam luctus, arcu et gravida pellentesque, turpis diam gravida mauris, a mollis neque leo vitae lacus. Duis semper massa odio. Quisque sed vehicula eros, ut luctus risus. Nam blandit ultrices massa at bibendum. Donec et imperdiet diam. Aenean a ligula laoreet, maximus mi at, pharetra magna. Etiam a sapien pulvinar, viverra mi vel, sodales lorem. Duis elementum venenatis dui eu bibendum. Suspendisse egestas justo non tortor posuere, placerat sagittis velit tincidunt. Nulla tincidunt, velit sit amet porta commodo, mauris odio blandit ipsum, quis lacinia erat nunc lobortis magna. Suspendisse faucibus ac orci non iaculis. Phasellus vel mi ex. Aenean ut turpis ex. Maecenas finibus risus non scelerisque eleifend. Mauris eget est a dolor pulvinar consectetur. Quisque diam quam, porttitor quis interdum non, vestibulum non lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla iaculis eros at egestas sagittis. Nulla interdum accumsan ante eu pretium. Etiam egestas quis risus eu vestibulum."

var pos = 1;
var counter = 0;

console.log(blindtext.indexOf(" ", pos));

while (pos > 0) {
  if (blindtext.indexOf(" ", pos)>=0) {
    counter += 1;
    console.log(counter)
    pos = blindtext.indexOf(" ", pos+1);
    console.log(pos);
  };
};
console.log(`There are ${counter} words.`)