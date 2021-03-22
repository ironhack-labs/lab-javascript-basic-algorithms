// Iteration 1: Names and Input
console.log("I'am ready");
var hacker1 = "toni"

console.log(`The driver name is ${hacker1}`);

var hacker2 = "google";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length<hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else  {
    console.log(`Wow, you both have equally long names,${hacker1.length}  characters!.`)
  }
  

// Iteration 3: Loops

let acumulador = "";

for (i=0; i < hacker1.length ; i++)
{
   acumulador += `${hacker1[i].toUpperCase()} `
  
}

console.log(acumulador);


for (i = hacker1.length-1; i>=0 ; i--)

  {
    console.log(hacker1[i])
  }


for (i = 0; i<hacker1.length ; i)
 
    if (hacker1[i] < hacker2[i]){
      console.log("Yo, the navigator goes first definitely")
      break;
    }else if (hacker1[i] > hacker2[i]) {
      console.log("The driver's name goes first")
      break;
    }else {
      console.log("What?! You both have the same name?")
      i++; 
      break;
      
    }
     
   



let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus interdum sagittis. Aliquam et est in dolor dapibus facilisis. Proin in facilisis urna. Phasellus posuere velit sit amet justo rhoncus, accumsan bibendum nisi molestie. Cras tincidunt turpis id nisi consectetur aliquet eget et diam. Suspendisse sit amet varius dolor. Mauris vel justo diam. Pellentesque ante elit, vulputate a feugiat at, aliquam sit amet augue. Quisque eget lorem porttitor, faucibus ante vitae, tincidunt sem.Duis lobortis quam vel quam hendrerit posuere. Nunc auctor mollis urna, eget vehicula nisi rhoncus nec. In lobortis scelerisque urna at tincidunt. Mauris augue justo, ultricies vulputate gravida in, semper eu ipsum. Ut vitae viverra diam. Cras nec laoreet justo. Duis efficitur placerat eros eu semper. Morbi vitae ligula sit amet magna venenatis pharetra. Mauris in luctus turpis. Praesent mollis imperdiet ex. Nulla facilisi.Praesent ut malesuada massa. Morbi aliquam sapien mauris, non vulputate sem mattis quis. Fusce et viverra ex, id interdum metus. Donec quis auctor turpis. Donec rutrum facilisis nisl et posuere. Nullam in nibh facilisis, vestibulum est ut, rhoncus dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non imperdiet enim. Nam ut sem nec tellus consequat lacinia id vel leo."
 
console.log(loremIpsum.split(" ").length)



