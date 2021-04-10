let hacker1 = 'Yanisi'; //1.1
let hacker2 = 'Pepito'; //1.3

console.log(`The driver name is ${hacker1}`); //1.2
console.log(`The navigator name is ${hacker2}`); //1.4


 ////////////2.1//////////////
if(hacker1.length <= hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if(hacker1.length >= hacker2.length){
  console.log(`The driver has the longest name, it has 
  ${hacker1.length} characters`)
  }

  else(hacker1.length==hacker2.length)
    console.log(`Wow, you both have equally long names, 
    ${hacker1.length} characters!`)

////////////////3.1///////////
hacker1 = hacker1.toUpperCase().split('').join(' '); 
console.log(hacker1)

///////////////3.2///////////
hacker1= hacker1.split('');
const r= hacker1.reverse('');
hacker1 = hacker1.join('');
console.log(hacker1);

console.log()


/////////3.3////incompleto :(////
var items = ['ani', 'Pepito'];

var value = items.sort((a, b) => a.localeCompare(b));

console.log(value)


//////parte de bonus 1 incompleto :(////
const text = 'Lorem Ipsum es simplemente texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto de relleno estándar de la industria desde el siglo XVI,'

console.log(text.split(" ").length);



























