let hacker1 = "Gosia";
let hacker2 = "Hugo";

for (let i=0; i < hacker2.length; i++) {
  console.log(hacker2[i].toUpperCase());
}

for (let i = hacker2.length-1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1[0] < hacker2[0]) {
  console.log('The drivers name goes first');
} else if (hacker2[0] < hacker1[0]) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
};

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin elementum ipsum, ut blandit ex mollis et. Cras id leo risus. Pellentesque lorem eros, varius quis est id, congue efficitur arcu. Cras libero nibh, viverra nec fermentum ut, consequat id nulla. Phasellus auctor, dolor sit amet fringilla mattis, ex erat eleifend odio, quis finibus nunc enim tincidunt risus. Proin dictum sapien id ligula volutpat pretium. Aliquam ac diam quis mi vestibulum tristique. Donec tristique imperdiet augue eget euismod.

Vivamus nisl velit, faucibus ac blandit eget, laoreet eu neque. Praesent a consequat dui, nec finibus nunc. Aenean eget quam at turpis dapibus sollicitudin sit amet in turpis. Nunc ut elit at nulla rhoncus rhoncus. Aenean at rutrum magna, dictum maximus orci. Curabitur et vulputate urna. Aliquam sed vestibulum sem. Praesent sit amet condimentum ante. Duis sit amet quam vel massa pharetra varius in in augue.

Ut dapibus mauris leo, sed semper lectus mollis et. Etiam id iaculis metus, vel viverra libero. Aenean bibendum auctor lectus elementum scelerisque. Nam dictum eu sapien a hendrerit. Nunc efficitur odio et pellentesque fringilla. In suscipit lorem elementum, gravida purus et, blandit metus. Nulla facilisi. Aenean lobortis fermentum orci, et vestibulum turpis tempor id. Aliquam mattis quam ullamcorper, fringilla eros at, aliquam lectus. Nulla facilisi. Nulla lorem metus, sagittis vitae justo sed, ornare feugiat urna. In at neque mi. Pellentesque eget ex enim.`

let words = paragraph.split(" ");
console.log(words.length);


let instance = 0;
for (let i=0; i < paragraph.length; i++) {
if (paragraph[i]=== "e" && paragraph[i+1] === "t") {
  instance ++;
}
} console.log(instance);


let phraseToCheck = "Amor, Roma"; 

for (let i=0; i<phraseToCheck.length; i++) {
  let phrase1 = phraseToCheck[i];
}

for (let i=phraseToCheck.length; i>=0; i--){
  let phrase2 = phraseToCheck[i];
}
