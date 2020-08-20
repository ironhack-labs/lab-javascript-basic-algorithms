// Iteration 1: Names and Input

let hacker1 = "Pedro"

console.log(`"The driver's name is: ${hacker1}"`)

let hacker2 = "Diego"

console.log(`"The navigators name is: ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker1.length == hacker2.length)
{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`
)
}

else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

let hackerOther = ""
const space = " "

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i+=1)
{
  hackerOther += hacker1[i].concat(space)
}

console.log(hackerOther.toUpperCase())

hackerOther = ""
 
for (let i = hacker1.length - 1; i >= 0; i--)
{
  hackerOther += hacker1[i];
}

console.log(hackerOther)

let compareHackers = hacker1.localeCompare(hacker2)
if (compareHackers < 0)
{
  console.log("The driver's name goes first")
}
else if( compareHackers > 0)
{
  console.log("Yo, the navigator goes first definitely")
}

else console.log("What?! You both have the same name?")

/* BONUS1 */

const ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida quis neque sit amet luctus. Aliquam neque mi, dignissim ut suscipit non, aliquet sit amet felis. Quisque et placerat libero. Sed rutrum posuere molestie. In hac habitasse platea dictumst. Vestibulum nec nulla vestibulum, sagittis sem eget, suscipit nisl. Phasellus finibus sapien vel ligula feugiat iaculis. Maecenas efficitur faucibus leo, in vehicula odio maximus tristique. Sed ut ultricies libero. Suspendisse potenti. Praesent a felis non diam vestibulum pharetra. Suspendisse eu facilisis elit. Aliquam id faucibus eros, nec laoreet nibh. Cras justo odio, accumsan ultricies neque a, sodales condimentum orci. Donec pulvinar augue at elit egestas, vel blandit felis eleifend. Suspendisse convallis tortor imperdiet purus vulputate, sit amet condimentum tortor sodales.\
Phasellus vitae tempus augue. Integer et semper dolor. Ut lacinia tortor quis nunc suscipit aliquet. Vestibulum euismod diam ac commodo cursus. Nunc nibh purus, congue at metus at, semper pulvinar diam. Aliquam posuere, magna at aliquet vehicula, metus lorem faucibus ligula, non finibus elit tortor at massa. Nunc mollis, sem et scelerisque tempus, erat libero mollis mauris, quis pharetra sem sapien non odio. Nunc a rutrum nibh. Integer tempus enim id tortor blandit elementum. Etiam vel fermentum sem, et sodales eros. Aliquam at ipsum nisl. Curabitur porta in elit sit amet pretium.\
Aenean tincidunt turpis sem, eget convallis est finibus tincidunt. Morbi pulvinar suscipit ornare. Quisque egestas nec risus sit amet faucibus. Morbi ac nisi vitae lectus luctus lobortis. Nunc velit lorem, lobortis et ex non, condimentum facilisis tortor. Curabitur ligula magna, ullamcorper quis neque eleifend, euismod scelerisque nulla. Maecenas eget scelerisque nunc. Nunc ut quam gravida dolor ultricies porta. Mauris pharetra neque vitae ligula pulvinar pretium. Praesent ac diam dolor. Nullam quis nisi nec ex facilisis dignissim sed in nunc."

const words = ipsum.split(" ")

console.log(`Numero de palabras del texto: ${words.length}`)

let count = 0;

words.forEach(element => {
    if ('et' === element) count++;
});

console.log(`El numero de veces que se repite la palabra et: ${count}`)

function palindrome(str){
    const len = str.length;
    let l = len - 1;
    
    for (let i = 0; i < len / 2; i++)
    {
        if (str[i].toLowerCase() !== str[l--].toLowerCase()) return false
    }
    return true
}

console.log(palindrome("amor romA"))