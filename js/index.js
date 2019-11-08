console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Rubén";
let hacker2 = "Pedro";

console.log("The driver's name is", hacker1);
console.log("The driver's name is", hacker2);

// Iteration 2: Conditionals

let hacker1Lenght = hacker1.length;
let hacker2Lenght = hacker2.length;

if(hacker1Lenght > hacker2Lenght){
  console.log("The driver has the longest name, it has", hacker1Lenght, "characters.");
  } else if(hacker1Lenght < hacker2Lenght){
  console.log("It seems that the navigator has the longest name, it has", hacker2Lenght, "characters.");
  } else {
   console.log("Wow, you both have equally long names,", hacker1Lenght, "characters.");
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));
let arrayHacker2 = hacker2.split('');
let arrayNew = [];

arrayHacker2.forEach(function(e){
  arrayNew.unshift(e);
})

console.log(arrayNew.join(''))

let arrayOrden = [];

arrayOrden.push(hacker1.toUpperCase(), hacker2.toUpperCase());

arrayOrden.sort(function (a,b) {
  if (a > b) {
    console.log("The driver's name goes first.");
    return;
  } else if (a < b) {
    console.log('Yo, the navigator goes first definitely.')
    return;
  }
  console.log('What?! You both have the same name?')
  return;
});

//Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin arcu eros, lobortis sed eros nec, auctor euismod massa. Cras in tincidunt enim. Integer at leo dui. Vestibulum ac lobortis turpis. Maecenas elementum malesuada leo, quis viverra urna efficitur ut. Nulla facilisi. Proin vel dui ligula. Phasellus non massa ut nibh rhoncus ultrices sit amet ut risus. Phasellus mollis nibh volutpat sapien vulputate, eu dapibus purus varius. Morbi suscipit accumsan diam a pulvinar. Nunc eu interdum mi, ac egestas erat. Mauris nunc est, imperdiet et quam auctor, posuere fermentum ipsum. Sed eget aliquet metus. Proin dapibus purus in massa interdum fermentum. Curabitur consequat consequat urna a porta. Curabitur aliquam velit eros, vel rhoncus erat viverra quis. Suspendisse nec nunc nisl. Duis velit purus, egestas quis hendrerit malesuada, mollis eu diam. Vestibulum nulla nibh, blandit ac tristique id, cursus a nunc. Quisque non quam in dui scelerisque volutpat ac sed ante. Etiam rutrum vehicula felis, ac pellentesque justo molestie quis. In tincidunt magna sed sem consequat, nec suscipit nulla tristique. Fusce justo sapien, feugiat nec velit vitae, convallis euismod tortor. Integer scelerisque ipsum vel sapien finibus, non vestibulum risus feugiat. Nunc egestas metus ac risus maximus, in porttitor justo gravida. Fusce eleifend, lacus in ullamcorper commodo, tortor odio posuere metus, vel maximus felis orci eu mauris. Nam sagittis odio lacinia nisi maximus efficitur. Vivamus luctus, dolor a vulputate dapibus, ex ipsum imperdiet arcu, eget dapibus lorem neque id arcu. In volutpat at ex nec elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris urna orci, pulvinar vel molestie in, placerat et nibh. Duis a eros eget dui tempus tincidunt at sed urna. In hac habitasse platea dictumst. Ut accumsan, risus a elementum placerat, sapien erat pharetra nibh, id imperdiet elit risus eget ante. Nullam quis ex sit amet ipsum blandit scelerisque non sed lectus. Donec scelerisque, lectus eu lacinia tristique, lorem dui suscipit arcu, quis hendrerit massa eros nec felis. Cras ac sollicitudin mi, non auctor tellus. Curabitur aliquam, libero vitae consectetur luctus, augue tellus ornare tellus, eget tempor metus velit vel lectus. Mauris eu auctor leo. Integer venenatis ante vitae aliquet vehicula. Donec ultrices nunc lectus, sit amet faucibus urna blandit sed. Aliquam erat volutpat."

console.log('Numero de palabras:', lorem.split(' ').length);

let arrayEt = [];
for(let i=0; i < lorem.length ; i++){
  var x = lorem.indexOf('et', i);
  if(!arrayEt.includes(x) && x != -1){
    arrayEt.push(x);
  }
}

console.log(arrayEt.length);

//Bonus 2

let examplePalindrome = "A man, a plan, a canal, Panama!";

examplePalindrome.forEach(function(e){
  console.log(e)
})