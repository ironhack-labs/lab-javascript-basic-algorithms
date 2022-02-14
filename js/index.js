// Iteration 1: Names and Input

let hacker1 = "ana";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "bia";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1

let capitalLetters = "";
for (let i = 0; i < hacker1.length; i++) {
    capitalLetters += hacker1[i].toUpperCase() + " ";
}
console.log(capitalLetters.trim());

//3.2

let reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse += hacker1[i];
}
console.log(reverse);

//3.3

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
let result="";

for (let i= 0; (i<hacker1.length && i<hacker2.length); i++){

    if (hacker1 === hacker2) {
        result="What?! You both have the same name?";
        break;
    }else if (hacker1[i] < hacker2[i]){
        result="The driver's name goes first.";
       break;
    }else if(hacker1[i] > hacker2[i]){
        result = "Yo, the navigator goes first definitely.";  
    } 
}
console.log(result);


//Bonus 1:

let paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor accumsan arcu eget condimentum. Nam id tellus vulputate enim cursus maximus ut id nunc. Mauris volutpat ex ut augue pharetra egestas. Nulla eleifend, turpis sed vehicula porttitor, quam arcu interdum ipsum, interdum sodales ex urna vel arcu. Suspendisse eleifend justo lacinia odio ultricies, in ullamcorper magna commodo. Etiam in nisl quam. Mauris ipsum urna, efficitur sit amet fermentum in, luctus vel tellus. Proin varius dictum accumsan. Mauris imperdiet ac nunc quis finibus.";


let paragraph2 = "Fusce molestie vel nunc non viverra. Suspendisse potenti. Aenean viverra efficitur nibh eu malesuada. Vivamus et dapibus urna, rutrum sagittis quam. Ut efficitur urna a arcu ultricies accumsan. In eu neque bibendum, facilisis arcu consequat, tincidunt libero. Donec varius erat a nisi elementum pellentesque. Ut magna purus, convallis ac suscipit in, sollicitudin sed tortor. Phasellus pulvinar feugiat erat, vel finibus nunc consequat at. Curabitur et quam porta, rutrum ipsum in, aliquam sapien. Aliquam nec aliquam lacus, ac consectetur tortor. Phasellus lorem sapien, sollicitudin eget urna in, lacinia porta tortor. Suspendisse feugiat, libero ut gravida molestie, tellus enim varius risus, sit amet fermentum purus mauris sed sapien. Aliquam sed lectus neque. Duis id blandit ex. Aenean quis enim sodales nisi sagittis tristique id sed felis.";

let paragraph3 = "Etiam sed rutrum ipsum. Sed eu imperdiet sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris congue sapien non lorem luctus dictum. Sed sagittis porta mauris, sit amet ultricies tortor dapibus tincidunt. Aliquam erat volutpat. Maecenas gravida mattis pulvinar. Integer tristique, metus ut accumsan hendrerit, erat enim finibus tortor, non maximus libero massa in sem. Suspendisse potenti. Vivamus pharetra libero ac velit scelerisque posuere non a ex. Cras nisl nibh, ornare eget fermentum ut, tempus vel mauris.";

function countWords (paragraph) {
  let count = paragraph.split(' ');
  return count.length;
}

function findEt (paragraph) {
  let arr = paragraph.split(' ');
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    let word = arr[i];
    if(word === "et"){
      count+=1;
    }
  }
  return count;
}

console.log(findEt(paragraph3));


