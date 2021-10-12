// Iteration 1: Names and Input

const hacker1 = "Daniel";
console.log(`the driver's name is ${hacker1}`);
const hacker2 = "Sebas";
console.log(`the navigators name is ${hacker2}`);


// Iteration 2: Conditionals

function nameLength(){
    if (hacker1.length > hacker2.length) {
      console.log(`The driver's has the longest name and it has ${hacker1.length} characters`)
    } else if 
      (hacker1.length < hacker2.length) {
        console.log(`It seem's that the navigator has the longests name, it has ${hacker2.length} characters`);
      } else {
        console.log(`wow! You both have equally long names, ${hacker1.length} characters!`);
      }
  }
  nameLength();

// Iteration 3: Loops



// Iteration 3: Loops
function driversName () {
    let nameToCapital = hacker1.toUpperCase();
    drivNameChanged = [];
    for (let i = 1; i <= nameToCapital.length; i++) {
      drivNameChanged.push(nameToCapital.slice(i-1,i));
    } console.log(drivNameChanged);
  }
  driversName();
  
  function navigatorsName () {
     let navNameChanged = hacker2.split("");
     console.log(hacker2.split("").reverse().join(""))
  } 
  navigatorsName()
  
  function namesByOrder () {
    if (hacker1 < hacker2) {
      console.log(`The driver's name goes first.`)
    } else if
    (hacker1 > hacker2) {
      console.log(`Yo, the navigator goes first definitely.`)
    } else
    console.log(`What?! You both have the same name?`)
  }
  namesByOrder()  

  //Bonus 1
  let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla sit amet nibh quis convallis. Vestibulum augue arcu, gravida nec ligula non, mollis sollicitudin odio. In id scelerisque nisl. Morbi sit amet tellus sit amet sapien vehicula tincidunt vehicula in justo. Praesent faucibus mattis nisl, ut porttitor augue efficitur vitae. Sed vel massa massa. Phasellus ac turpis interdum, sollicitudin ipsum in, pulvinar dui. Ut sollicitudin, dolor hendrerit condimentum efficitur, dolor nisi sollicitudin magna, sed congue urna nisi vel ex. Sed a maximus est, sed egestas elit. Praesent porta finibus molestie. Sed vehicula, felis ac porta accumsan, lectus metus sagittis tortor, nec porttitor lectus ante sit amet urna. Mauris molestie, mi consectetur sodales aliquet, ipsum mi posuere risus, non facilisis justo ante et arcu. In augue velit, tincidunt nec lectus quis, pellentesque ullamcorper metus. Etiam semper feugiat sapien, nec laoreet odio convallis vel. Nunc consequat ipsum lectus, eu bibendum augue pretium eu. Phasellus et ante odio. Pellentesque consectetur vulputate sapien, sed volutpat augue lobortis vitae. Donec sagittis quam eu congue finibus. Sed vitae magna lacus. Praesent pulvinar tortor eu hendrerit porttitor. Morbi tristique sem at metus venenatis fringilla. Aenean eleifend at ex et laoreet. In hac habitasse platea dictumst. Ut dapibus lacinia velit, non gravida sem rutrum in. Donec ullamcorper quam velit, in aliquet velit luctus in. Nunc facilisis tortor ac orci congue interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

function wordsCounter (){  
  let wordsInLorem = lorem.split(' '||'  ').length;
  
  console.log(wordsInLorem)
} 
wordsCounter()

function etsCounter (){
  let counter = 0;
  for (let i = 0; i < lorem.length; i++) {
    const fstChar = lorem[i];
    const scdChar = lorem[i+1];

    if (fstChar === "e" && scdChar === "t") {
      counter++;
    }
  } console.log(counter); 
}
etsCounter()

//Bonus 2

function palindrome(x){
  let reverse = x.split("").reverse().join("")
  if (x === reverse) {
    console.log(`palindrome`);
  } else {
    console.log(`not palindrome`)
  }
}
palindrome("oso");
