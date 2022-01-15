let hacker1 = 'Joey';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Marissa'
console.log(`The driver's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
  console.log(`${hacker1} has the longest name, hacker1.length characters!`);
}
else if (hacker2.length > hacker1.length){
  console.log(`${hacker2} has the longest name, ${hacker2.length} characters!`);
}
else {
  console.log(`You both have equally long names. ${hacker2.length}`);
}


let driversName = "";

  for (let i = 0; i < hacker1.length; i++){
    driversName += hacker1[i].toUpperCase() + " ";
  }
  console.log(driversName);


let navigatorsName = "";

  for (let i = hacker2.length - 1; i >= 0; i--){
    navigatorsName += hacker2[i];
  }
console.log(navigatorsName);


if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) === 1){
  console.log('Yo, the navigator goes first definitely.');
}
else {
  console.log("What?! You both have the same name?");
}


let loremParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nisi volutpat, lobortis tortor vitae, lacinia purus. Aenean sem lacus, ullamcorper sit amet eleifend non, efficitur vitae ligula. Donec dapibus nec tellus ac tincidunt. Pellentesque sapien ipsum, accumsan dapibus iaculis ac, maximus non velit. Morbi id hendrerit est, non porta velit. Mauris lacinia mauris at mi maximus aliquam. Quisque elit est, convallis quis bibendum ac, feugiat ac est. Pellentesque egestas vehicula orci, in iaculis purus. Etiam at mi suscipit, pellentesque nisl ut, condimentum nunc. Aenean posuere quam non tortor porttitor imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lectus non diam tempor malesuada. In eget purus dictum, tincidunt justo in, semper quam. Pellentesque volutpat porttitor felis, eget fringilla augue imperdiet ut. Suspendisse fermentum et diam non vehicula. Sed tortor mauris, condimentum eget sem et, consequat sagittis sem. Nam mollis tempor posuere. Aenean nunc purus, tincidunt feugiat ipsum sit amet, dapibus dignissim diam. Phasellus velit purus, pellentesque non massa eget, congue sollicitudin elit.Nam in sagittis dui, vitae porttitor nisl. In posuere imperdiet neque, pharetra aliquam massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed urna orci, accumsan at gravida a, fermentum id quam. Morbi porttitor, mauris in tincidunt elementum, lacus magna dignissim massa, non tempus est nisi eget ipsum. Mauris ac leo id felis suscipit volutpat. Maecenas ac dui egestas, mattis risus eu, placerat ante. Donec cursus diam eget molestie vulputate.";

console.log(loremParagraphs.length);

let count = 0; 
for (let i = 0; i < loremParagraphs.length; i++){
  const char1 = loremParagraphs[i];

  if (char1 === "et"){
    count++;
  }
}

console.log(count);


