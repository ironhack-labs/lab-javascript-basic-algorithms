//iteration 1
const hacker1= "Blanca"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Elena"
console.log(`The navigator's name is ${hacker2}`)

//iteration 2
if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length<hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  } else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 
  }

//iteration 3
//3.1
let str=' '
for   (let i=0; i<hacker1.length; i++){
  str += hacker1.charAt(i).toUpperCase() + ' ';
}
console.log(str)

//const separated= hacker1.match(/.{1}/g) --›encontrado online pero no entiendo que quiere decir la syntaxis

//const separated= hacker1.match(/.{1}/g).join(" ").toUpperCase()
//console.log(separated) --> RESULTADO OK!


//3.2
let str2=' '
for   (let i=hacker2.length; i>=0; i--){
  str2 += hacker2.charAt(i) + ' ';
}
console.log(str2)

//3.3
if (hacker1<hacker2){
    console.log("The driver's name goes first.")
    } else if (hacker1>hacker2){console.log("Yo, the navigator goes first definitely.")
    } else {console.log("What?! You both have the same name?")
    }

//Bonus 1 
const lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas tincidunt venenatis. Pellentesque ut ipsum vel orci maximus lacinia a id est. Vivamus consequat sit amet urna vel molestie. Vivamus dictum bibendum purus nec dapibus. Phasellus congue fermentum velit a finibus. Quisque ac ex convallis, fermentum orci vitae, consequat mauris. Mauris ut feugiat leo. Integer arcu lectus, placerat vitae lorem ut, congue auctor ligula. Morbi aliquam arcu sed ligula pretium, vel elementum tellus maximus. Ut non efficitur erat, eget pellentesque massa. Duis sodales id orci dignissim ornare. Aenean auctor libero ut semper ultrices. Curabitur imperdiet eleifend nunc sit amet tempor. Suspendisse ac feugiat nulla. Fusce tempus lorem lectus, sit amet elementum nisl luctus et. Quisque iaculis tempor erat sed laoreet. Aenean efficitur finibus orci, sed fermentum nisi ullamcorper ac. Proin tristique laoreet volutpat. Mauris vitae nisl vel ante faucibus efficitur. Pellentesque imperdiet felis tortor, id porttitor odio lobortis eget. Etiam laoreet eu felis ut egestas. Sed non sodales odio. Morbi nisi leo, suscipit quis ultricies ac, tincidunt ut mauris. Etiam blandit bibendum velit vel hendrerit. Morbi molestie maximus nisl nec tempus. Nunc porttitor pulvinar dui eget pretium. Quisque congue imperdiet est, eu blandit arcu tristique ac. Maecenas tortor dui, dignissim sed hendrerit vitae, aliquet porttitor felis. Aenean sit amet facilisis turpis. Ut vel sagittis nisi. Quisque hendrerit eu erat ut porttitor. Nulla at tellus fringilla, dignissim justo sit amet, tristique eros. Fusce facilisis magna massa, ac molestie dolor iaculis placerat."
console.log(lorem.split(" ").length)
console.log(lorem.match(/et/g).length)


//Bonus 2
//Por favor podeis explicar este ejercicio en clase? Hemos encontrado esta solucion en Internet, pero no funciona, y hemos intentado mil soluciones mas y nada nos funciona. 
const phraseToCheck= "No 'x' in Nixon";
const nonalpha = /[\W_]/g;
string = phraseToCheck.toLowerCase().replace(nonalpha, '');
for (let i=0; i<string.length/2; i++) {
  if (string[i] === str[string.length-1-i]){
    console.log("Palindrome")
  } else {console.log("Not Palindrome")}
}
