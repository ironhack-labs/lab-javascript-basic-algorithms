//Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = "Vivi"
console.log(hacker1);

const hacker2= "Copca"
console.log(hacker2);

//Iteration 2: Conditionals

if (hacker2.length < hacker1.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker2.length === hacker1.length) { 
  console.log(`Wow, you both have equally long names,${hacker1.length} characters!.`)
}

 // Iteration 3: Loops

 let hacker1nuevo = [];
 for(let i=0; i<hacker1.length;i++){
   hacker1nuevo[i] = hacker1[i].toUpperCase();
 };
 let result=hacker1nuevo.join(" ");
 console.log(result);

//3.2
function reverso(str) {
let palabra= "";
for(let i = str.length-1; i>=0; i--){
   palabra= palabra+str.charAt(i);
} return palabra; }
console.log(reverso(`${hacker1}`))

//3.3

if (hacker1.charAt(0)< hacker2.charAt(0)){
  console.log(`The driver's name goes first. ${hacker1}`)
}
else if (hacker1.charAt(0) >hacker2.charAt(0)){
  console.log(`Yo, the navigator goes first definitely. ${hacker2}`)
}
else{
  console.log(`What?! You both have the same name?`)
}

//Bonus1

let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a varius enim. Duis fermentum ipsum eget nisi commodo, ut porttitor ligula rhoncus. Nulla facilisi. Donec venenatis velit eu justo dictum luctus. Aenean laoreet quis velit at scelerisque. Fusce sed lectus risus. Curabitur ullamcorper ipsum sem, vel iaculis lorem aliquam ac. Donec eu mattis dui, ac tincidunt odio. Nam aliquet quam non luctus luctus. Mauris maximus facilisis leo, id dapibus velit fermentum at. Fusce consequat enim lorem, in rutrum sapien ornare ac. Vivamus eros diam, volutpat id lorem eget, dignissim porta erat. Nullam quis velit eu arcu cursus porttitor at sed metus.Donec a mauris pharetra, ornare quam eget, venenatis ex. Donec efficitur erat id commodo volutpat. Phasellus ac cursus leo. Etiam consectetur sem sit amet lacus sodales, ut elementum sapien mattis. Donec pretium est sit amet ipsum hendrerit tincidunt. Phasellus mollis nisi nec leo scelerisque pharetra. Nam elit est, interdum non consectetur sit amet, accumsan sit amet sem. Vestibulum tristique ex at porttitor eleifend. Aliquam ut cursus lorem. Ut a nulla sit amet urna commodo bibendum. Etiam eget faucibus turpis. Fusce vitae consectetur eros. Curabitur consequat sed velit at efficitur. Vestibulum blandit purus pellentesque, suscipit lacus non, hendrerit ex. Nulla tristique ullamcorper tortor, non blandit urna porttitor ac. Maecenas vitae fermentum elit.Duis vel accumsan lectus, sed fermentum purus. Aenean interdum leo libero, ac interdum arcu tristique in. Etiam bibendum in mauris sed lobortis. Mauris arcu ipsum, blandit vel vulputate at, blandit vitae nulla. Aliquam id suscipit libero. Integer at augue neque. Phasellus at egestas nibh. In sollicitudin aliquam augue ut tristique. Duis placerat, quam at imperdiet posuere, leo tortor sagittis arcu, et maximus dui risus id dui. Suspendisse maximus eros eget erat molestie vulputate. Pellentesque consequat a risus non aliquam. Donec vel interdum"

function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount(texto));