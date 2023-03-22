console.log("I'm ready!");

let hacker1 = 'Nikita';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Aleksandar';
console.log(`The navigator's name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

var nameCaps = '';  
for (let i=0; i<hacker1.length; i++) {
  nameCaps += hacker1[i] + ' ';  
}
console.log(nameCaps.toUpperCase().slice(0, -1));

var reversedName = '';
for (let i=hacker2.length-1; i>=0; i--) {
  reversedName += hacker2[i];
}
  console.log(reversedName);

    if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
      console.log("The driver's name goes first.");
    } else if (hacker1.charCodeAt(0) > hacker2.charCodeAt(0)) {
      console.log("Yo, the navigator goes first, definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }


let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat pulvinar nibh, eu tincidunt urna eleifend eu. Pellentesque ut dapibus purus. Sed libero sem, egestas vitae velit a, hendrerit egestas lorem. Donec pellentesque pharetra fermentum. Fusce vel lectus ut nisl fringilla laoreet nec id lacus. Aenean leo nunc, ultricies ut sem ac, eleifend venenatis odio. Nulla pharetra fermentum sagittis. Donec lectus turpis, dictum in felis at, mollis lobortis magna. Integer interdum ipsum vel congue pharetra.Mauris auctor ullamcorper ipsum. Maecenas a elit volutpat, lobortis metus sit amet, rhoncus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla aliquet ullamcorper nisl, a egestas erat tincidunt eget. In hac habitasse platea dictumst. Curabitur nec ante tincidunt, vulputate ante at, dignissim purus. Nullam non sollicitudin est, nec gravida metus. Duis a felis nec libero egestas mollis. Vestibulum dictum lacinia odio, sed efficitur massa malesuada id. Aliquam sed ex eget elit ornare commodo.Curabitur congue lacus ac felis congue finibus. Vivamus sagittis justo nec ullamcorper semper. Morbi lobortis felis nec eros dapibus pulvinar et a dolor. Nulla ullamcorper felis sed scelerisque accumsan. Nullam sollicitudin condimentum tortor vitae vehicula. Integer facilisis ligula vel leo faucibus, non pellentesque mauris rhoncus. Curabitur eget aliquet augue, at commodo nibh. Nam consequat nunc ac ultrices tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit magna lectus, id tincidunt risus convallis et.';

console.log(longText.split(" ").length);


let phraseCheck = "stack cats";

if (phraseCheck === phraseCheck.split(' ').reverse().join('')) {
  console.log('true')
} else console.log('false')




