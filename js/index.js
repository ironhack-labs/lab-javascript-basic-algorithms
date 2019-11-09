/* Interation 1 */

/*1.1*/
let hacker1 = "Matías";

/*1.2*/
console.log(`The driver's name is ${hacker1}`);

/*1.3*/
let hacker2 = "Perico";

/*1.4*/
console.log(`The navigator's name is ${hacker2}`);


/* Interation 2 */

/*2.1*/
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


/* Interation 3 */

/*3.1*/
function name(){
  let capName = [];
  for(let i = 0; i < hacker1.length; i++){
    capName.push(hacker1[i].toUpperCase());
  }
  return capName.join(" ");
}

console.log(name())

/*3.2*/
function reversename(){
  let reverseName = [];
  for(let i = 0; i < hacker2.length; i++){
    reverseName.unshift(hacker2[i]);
  }
  return reverseName.join("");
}

console.log(reversename());

/*3.3*/
if(hacker1.localeCompare(hacker2) < 0){
  console.log(`The driver's name goes first`)
} else if(hacker2.localeCompare(hacker1) < 0){
  console.log(`Yo, the navigator goes first definitely.`)
} else if(hacker1.localeCompare(hacker2) === 0){
  console.log('What?! You both have the same name')
}



/* Bonus 1 */

let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at sagittis ex. Proin sollicitudin pretium aliquet. In pulvinar leo eget erat hendrerit porta. Ut dictum suscipit est, quis tempus ligula congue vitae. Suspendisse at ante iaculis, pretium quam lacinia, hendrerit elit. Aliquam tellus elit, lacinia non bibendum nec, euismod sit amet ex. Nulla tempor ac justo pellentesque malesuada. Duis bibendum quis quam nec aliquet. Cras non risus vitae massa imperdiet consectetur. Integer dolor erat, blandit id interdum vel, elementum eu odio. Ut eros elit, consequat eget nulla vel, posuere pharetra erat.

Integer facilisis nulla nibh, non porttitor dolor tincidunt sed. Sed sagittis ultricies posuere. Nullam fringilla eleifend tellus vitae placerat. Pellentesque porta venenatis orci sit amet condimentum. Maecenas ac accumsan lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam a libero pellentesque, accumsan ipsum at, fermentum justo. Quisque auctor cursus lectus a tristique. Nam id egestas arcu, non sagittis mauris. Sed dui magna, tincidunt in quam non, vulputate egestas nunc. Sed dictum velit ligula, ac faucibus lectus congue sit amet. Maecenas egestas sodales posuere. Sed nisl nisl, lobortis in ultricies nec, placerat ac purus. Vivamus pulvinar id magna vel pharetra. Nam quis lorem a orci vehicula volutpat. Aliquam erat volutpat.

Fusce erat ante, tristique non nunc eget, varius venenatis ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam neque urna, placerat nec suscipit sed, blandit et augue. Etiam massa purus, condimentum pharetra sem nec, volutpat facilisis erat. Nulla sed libero a nibh scelerisque pretium. Praesent accumsan erat et varius sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent lectus ligula, consectetur ac mattis non, hendrerit eu lacus. Sed sed aliquam velit. Vivamus ullamcorper ac sapien et facilisis. Nullam aliquam eget neque at feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet ex et nisi interdum aliquet. In varius massa sit amet pulvinar condimentum.`

function countWords(a){
  b = a.split(" ")
  
  return b.length
}

console.log(`Variable "Ipsum" has ${countWords(ipsum)} words.`)

function countEt(b){
  c = b.split(" ")
  let count = 0;
  for(let i = 0; i < c.length; i++){
    if(c[i] === "et"){
      count++
    }
  }
return count;
}

console.log(`Variable "Ipsum" has ${countEt(ipsum)} "et".`)


/* Bonus 2 */ 

function palindrome(c){
  let d = c.replace(" ", "")
  let e = d.split("")
  let f = e.reverse().join("");
    
  if(d === f){
    return "Yeah, it's palindrome"
  } else {
    return "Oooh! it's not palindrome"
  }
}

console.log(palindrome("race car"))