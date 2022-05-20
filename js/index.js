// Iteration 1: Names and Input

let hacker1 = "hacker1";
let hacker2 = "hacker2";

console.log(`the driver's name is ${hacker1}`);
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let outputCapitalize = "";

for (let i = 0; i < hacker1.length; i++) {
    outputCapitalize += hacker1[i].toUpperCase();
}
console.log(outputCapitalize);
console.log(outputCapitalize.split('').reverse().join(''));

if(hacker1.localeCompare.hacker2){
    console.log(`the driver's name goes first`);
} else if (hacker2.localeCompare.hacker1){
    console.log(`the navigator's name goes first`);
} else {
    console.log(`What?! You both have the same name?`);
}

// bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius porttitor lectus, nec vulputate nisi tincidunt sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec gravida mauris. In fermentum pretium justo vel viverra. Proin eleifend blandit iaculis. In a accumsan magna, vitae accumsan sapien. Integer a blandit sapien. Aenean lorem dui, dictum ac nulla eget, vulputate venenatis velit. Sed finibus lectus id lacus lacinia elementum. Mauris odio augue, ultricies id posuere vel, viverra sit amet lectus. In in nulla quis turpis pretium consequat nec facilisis nisl. Sed eget urna lacinia, vulputate ante non, mattis ligula. Aliquam scelerisque nisi a urna interdum, at accumsan dolor pharetra. Donec a ligula in elit sagittis cursus. Mauris consequat sollicitudin accumsan. Praesent vel luctus tortor. In at ullamcorper lectus. Curabitur eget posuere quam. Etiam eu gravida erat, in sagittis elit. Vestibulum lorem ex, fringilla pharetra molestie quis, finibus a turpis. Fusce ultricies dolor in aliquam auctor. Ut ligula ante, imperdiet nec purus id, congue interdum ex. Aliquam tincidunt in magna in luctus. Sed auctor sem nisi, sit amet fermentum nibh tempus nec. Integer fermentum massa massa, id tincidunt velit fringilla ac. Nam at diam sit amet mauris auctor eleifend.  Duis et lorem lacinia, luctus ligula et, sodales ligula. Integer consectetur eros sit amet diam laoreet hendrerit. Nulla urna tortor, pretium a faucibus sed, tincidunt ut turpis. Nulla lobortis sagittis nunc sit amet dignissim. Etiam volutpat sed dolor non tincidunt. Aliquam fermentum leo id ligula ornare, et eleifend arcu viverra. Ut vehicula, nisl eu bibendum pretium, ligula leo sodales nisl, sit amet iaculis justo sem in purus. Ut nunc dolor, eleifend non sem ac, lobortis aliquam leo. Suspendisse potenti. Etiam in tempus lacus, a imperdiet tellus. Vestibulum id leo at arcu lacinia rutrum. Nullam odio magna, vulputate cursus lacus id, dictum egestas urna. Nulla dapibus eget massa eu vulputate. Mauris eros sapien, luctus a tincidunt a, faucibus ut lorem. Fusce molestie laoreet justo non sodales. Suspendisse ut sem quis ante vulputate commodo in eu enim."

console.log(lorem.split(' ').length);

let count = 0;
lorem.split(' ').filter(word => word === 'et' ? count++ : null)
console.log(count)


// bonus 2

let phraseToCheck = "Amor, Roma!"
let comp1 = phraseToCheck.toLocaleLowerCase().replace(/[\W_]/g, '')
let comp2 = comp1.split('').reverse().join('')
comp1 === comp2 ? console.log('Es un palindromo') : console.log('No es un Palindromo')

// Bonus 2 with For

let phraseToCheckWithFor = "Amor, Roma!"

let comp1WithFor = phraseToCheckWithFor.toLocaleLowerCase().replace(/[\W_]/g, '').split('')

let length = comp1WithFor.length
let check = false
for(let i = 0; i < length; i++){
  if(comp1WithFor[i] != comp1WithFor[length - i - 1]){
    check = false
    break;
  }
  	check = true
}

check ? console.log('Es un palindromo') : console.log('No es un palindromo')