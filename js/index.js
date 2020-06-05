// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "wafaa";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "marwa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`);
  }

// Iteration 3: Loops

let result1 = "";
  for(let i = 0; i<hacker1.length; i++){
       result1 = result1 + hacker1[i] + " ";
  }
  console.log(result1.toUpperCase());
  
  
  let result2 = "";
  for(let i = hacker2.length-1; i>= 0; i--){
      result2 = result2 + hacker2[i];
  }
   console.log(result2);

   switch(hacker1.localeCompare(hacker2)){
      case 1 :
      console.log('The driver\'s name goes first.');
      break;
      case -1 :
      console.log('Yo, the navigator goes first definitely.');
      break;
      case 0 :
      console.log('What?! You both have the same name?');
      break;
   }
  // bonus 1
  function wordCount(str, separator){
    return str.split(separator).length;
  }
  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque aliquam ipsum, vel ullamcorper diam tincidunt at. In dapibus risus nec tellus accumsan, id gravida neque consectetur. Donec rutrum mollis massa eu ullamcorper. Etiam dignissim nunc massa, ut ultrices ligula volutpat sed. Nam finibus mauris metus, malesuada fermentum erat pellentesque non. Donec luctus elit sem, eu vestibulum mauris luctus a. Aliquam vulputate est et neque maximus condimentum. Proin ullamcorper ullamcorper eros at finibus. Nam sollicitudin tempor mauris. Donec congue pretium nunc.
  
  Proin tincidunt tellus nec tincidunt lobortis. Aenean at felis sit amet leo fringilla vulputate. Nullam venenatis magna eu ligula rhoncus, et rutrum urna ultricies. Mauris pellentesque congue tristique. Duis nec sapien quis eros aliquet egestas ac at ex. Sed sem arcu, tempus at condimentum at, accumsan sit amet lorem. Etiam sit amet pulvinar libero, at commodo mauris. Sed tincidunt lacinia lacus non venenatis. Nullam sit amet lorem tincidunt nisi pretium sollicitudin eu non mauris. Morbi convallis quam in nisi pharetra, at tempor nisi vulputate. Praesent eget accumsan arcu. Sed velit ante, tempor at tempor quis, convallis volutpat tellus. Nulla lacinia a turpis ac laoreet.
  
  Quisque dictum metus quis purus ullamcorper, ac ullamcorper nunc condimentum. Sed imperdiet ligula eget ultrices condimentum. Vivamus non enim at mauris lobortis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pharetra dictum erat. Proin ac augue fermentum, dignissim ipsum nec, sagittis orci. Cras id pretium nulla. Mauris ultricies metus dolor, sagittis volutpat nisl sagittis ac. Nam faucibus nunc leo, vitae vestibulum magna imperdiet ac. Nulla ornare semper leo et commodo. Sed nec nibh viverra, viverra tellus tempus, posuere erat. Curabitur vitae accumsan nulla, a dapibus neque. Mauris ultrices sodales ante. Suspendisse dignissim lectus ipsum, vel efficitur felis gravida eu.`;
  let numberOfWord= wordCount(text, ' ')+2;
  console.log('le nombre totale des mots est: ' +numberOfWord );
  let numberOfLatinWord= wordCount(text, ' et ')-1;
  console.log('le nombre de fois oû on trouve le mot latin "et" est:'+ numberOfLatinWord);
  // bonus 2
  function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
  let textToCheck="step on no pets"
  if (checkPalindrom(textToCheck)){
    console.log(` ${textToCheck} is palindron `);
  }
    else {
      console.log(`${textToCheck} is not palindrom`);
    }