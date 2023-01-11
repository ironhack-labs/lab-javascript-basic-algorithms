// Iteration 1: Names and Input
let hacker1 = "Luke Skywalker";
console.log("The driver's name is " + hacker1 + ".");
let hacker2 = "Neil Armstrong";
console.log("The navigator's name is " + hacker2 + ".");
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  str = str + hacker1[i].toUpperCase() + " ";
}
console.log(str);
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);
if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
/*Bonus 1:
Go to the lorem ipsum generator website and:
Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tristique felis, eget porta sapien. In suscipit, purus quis semper auctor, lorem tortor laoreet nisi, vitae fermentum quam lorem ut tortor. Ut et blandit magna, nec imperdiet metus. Nulla a tortor velit. Fusce aliquet massa nec mi eleifend feugiat. Sed nulla risus, finibus ut dignissim ut, cursus eget tortor. Pellentesque vitae tempor nisi, sit amet laoreet nisi.Quisque dignissim tortor a ullamcorper imperdiet. Vestibulum et ullamcorper augue. Aliquam sed erat at odio convallis vulputate at in lorem. Morbi finibus diam nunc, vitae ultrices mi tincidunt sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin at quam ut urna tempor tristique. Sed malesuada nec ligula non convallis. Pellentesque sed venenatis dolor. Sed vitae purus finibus, imperdiet mi eget, malesuada orci. Mauris nec purus augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor dolor, aliquet id lobortis eget, fringilla vitae odio. Maecenas at arcu imperdiet, molestie nibh in, elementum tortor.Cras lobortis dui quis nulla porta, sit amet accumsan libero laoreet. Curabitur elementum risus at augue mollis accumsan. Phasellus porttitor lectus est, at pellentesque erat accumsan non. Ut id justo at erat pharetra fringilla. Maecenas ante orci, lacinia vel ultricies sit amet, tristique a orci. Donec lacinia scelerisque nunc. Nulla ut tortor enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in vestibulum nisi, ut eleifend massa. Sed vitae urna viverra, malesuada nisi eu, interdum dolor. Donec ultrices pellentesque dignissim. Etiam auctor elementum risus, non vestibulum tortor elementum ac.";
console.log(longText.split(" ").length);
let count = 0;
for (let i = 0; i < longText.length; i++) {
  const char1 = longText[i];
  const char2 = longText[i + 1];
  const char3 = longText[i + 2];
  if (char1 === " " && char2 === "e" && char3 === "t") {
    count++;
  }
}
console.log(count);
