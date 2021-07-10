let driver = "Chris";
let navigator = "Anna";


if (driver.length < navigator.length){
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
}
else if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
}
else if (driver.length == navigator.length) {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

for (let i = 0; i < driver.length; i++) {
  console.log(driver[i].toUpperCase());
}

for (let i = navigator.length -1; i >= 0; i--) {
  console.log(navigator[i]);
}

// iteration 3.3 using a method not a loop
console.log(driver.toUpperCase().localeCompare(navigator.toUpperCase()))
if (driver.localeCompare(navigator) < 0){
  console.log(`The driver's name goes first.`);
}
else if (navigator.toUpperCase().localeCompare(driver.toUpperCase()) < 0) {
  console.log(`Yo, the navigator goes first definitely.`);
}
else {
  console.log(`What?! You both have the same name?`);
}





// bonus 1 using match against a regular expression. still not fully understood.
let loremParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra laoreet nibh nec laoreet. Nam libero quam, faucibus sed ante at, condimentum accumsan diam. Praesent consequat nulla sit amet porttitor pellentesque. In pharetra, purus sit amet commodo fringilla, lorem eros dictum odio, sed sodales nisi sapien non nunc. Ut dignissim tincidunt leo. Sed eleifend odio hendrerit tellus venenatis tristique. Nam mollis consectetur urna et bibendum. Ut luctus vulputate neque, ut ornare erat venenatis vel. Phasellus aliquam pretium ultricies. Fusce vel molestie tortor. Etiam congue dui aliquam, ultrices sapien non, hendrerit sapien.Aenean non ligula vel ex gravida vestibulum vitae id ante. Ut eget nulla sollicitudin, mattis odio ut, porttitor urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ac aliquam velit, sit amet ullamcorper augue. Etiam fringilla lectus tellus, quis fringilla nunc consequat et. Vestibulum egestas odio vitae eros tempus, in efficitur ligula mattis. Morbi vulputate rutrum eleifend. Nam scelerisque, enim a sagittis dignissim, justo mi vulputate massa, ut mattis mauris arcu sed mi.Vestibulum sem velit, tincidunt at tellus hendrerit, dignissim elementum nibh. Aenean in magna est. Proin non ante pulvinar, bibendum sapien quis, sodales nulla. Praesent tempor justo id ante gravida rhoncus. Nulla in porta tellus, id posuere justo. In enim tellus, feugiat at pretium nec, interdum a purus. Vivamus quis nulla laoreet, porttitor sem non, ullamcorper dolor. Phasellus convallis hendrerit purus sit amet faucibus. Nulla tristique maximus tristique. Ut quis dui at velit blandit pharetra. Curabitur ut elit mi. Cras pellentesque lorem molestie, cursus urna et, dapibus augue. Donec sem libero, sodales quis magna sed, fermentum tempor lacus. Cras tincidunt nisi lectus, ac porta leo vulputate eu. Sed tempus tristique dolor, vitae laoreet elit hendrerit a.";
let wordCount = loremParagraphs.match(/(\w+)/g).length;

console.log(wordCount);