// Iteration 1: Names and Input

//1.1
const hacker1 = `Diego`;
let hacker2 = "Daniel";

//1.2
 
console.warn(hacker1);
console.log(hacker2); 

//1.3

console.log(`The Driver's Name is ${hacker1}`);
console.log(`The Navigotr's Name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1
if(hacker1.length > hacker2.length)
{
    //hacker 1 es mayor que el 2    
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length)
{
    //hacker 2 es mayor que el 1    
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else
{
    //son iguales    
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//3.1

let texto = "";
for(let i = 0; i < hacker1.length; i++)
{
    texto += hacker1.charAt(i).toUpperCase() + " ";
}

console.log("texto");

//3.2

texto = "";

for(let i = hacker2.length - 1; i >= 0 ; i--)
{
    texto += hacker2.charAt(i);
}

console.log("texto");

//3.3

let resultCompareName = hacker1.localeCompare(hacker2);

if(resultCompareName === -1)
{
    //hacker 1 es mayor que el 2    
    console.log(`The driver's name goes first.`);
}
else if (resultCompareName === 1);
{
    //hacker 2 es mayor que el 1    
    console.log(`Yo, the navigator goes first definitely.`);
}
else
{
    //son iguales    
    console.log(`What?! You both have the same name?`);
}

//Bonus

let parrafoLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non molestie turpis. Quisque condimentum scelerisque volutpat. Nulla facilisi. Maecenas id tortor mollis, laoreet elit vitae, fermentum nisi. Pellentesque dignissim odio eget pretium dignissim. Phasellus id euismod turpis, nec semper ipsum. Donec eu ante a magna congue porttitor vel eu orci. Fusce suscipit massa mauris. Nunc malesuada, ligula et efficitur finibus, felis justo volutpat nibh, ac dignissim justo nunc a est. Phasellus consequat a ipsum quis pretium. Vivamus quis arcu urna. Nulla luctus orci at elit rutrum, congue vulputate nibh maximus. Duis sit amet eros at massa hendrerit iaculis. Nullam id massa viverra turpis varius luctus feugiat lobortis ex. In hac habitasse platea dictumst.

Nullam fringilla porta arcu, non interdum eros cursus id. Vivamus iaculis congue dui non placerat. Cras dui nisl, dignissim quis efficitur et, commodo ut dolor. Sed vitae tincidunt velit. Integer eu augue at eros mollis elementum. Pellentesque ut volutpat nisl. Sed at dolor libero. Nulla facilisi. Nunc in velit placerat, tristique ipsum sit amet, ultrices tellus. Donec eget mauris id ex malesuada finibus nec ut enim. Maecenas eu semper erat. Nulla eget ligula a odio cursus tristique at nec magna. Curabitur laoreet aliquam lacinia. Morbi id rutrum urna, ac fringilla diam.

Donec efficitur diam a laoreet bibendum. Aenean quis maximus nibh, ac commodo justo. Nullam et nibh dolor. Fusce dapibus risus ac lacus sollicitudin suscipit. Sed vel imperdiet mi, in mattis tellus. Vivamus et lorem et ligula rhoncus mollis dapibus ut est. Proin vitae venenatis dolor, vitae ornare diam. Sed venenatis purus augue, ac cursus sem blandit at. Donec luctus est quis cursus faucibus. Nullam viverra libero ac est blandit facilisis. Suspendisse potenti. Praesent vitae semper leo.`;

let wordCount = parrafoLoremIpsum.split(" ").length;
console.log(wordCount);

let wordEtCount = (parrafoLoremIpsum.match(/et/g) || []).length;
console.log(wordEtCount);


function esPalindromo(str) {
    var regExp = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regExp, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   
   let textoPalindromo = 'taco cat'
   // let textoPalindromo = 'radar'
   let resultPalindromo = esPalindromo(textoPalindromo);
   console.log(resultPalindromo);