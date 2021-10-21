// Iteration 1: Names and Input
// 

let hacker1 = "Bárbara";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mauro";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } 
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`)
  }


// Iteration 3: Loop

let nameBarbara = hacker1.split("").join(" ");
   console.log(`${nameBarbara.toUpperCase()}`);
    

var nameReverse = "";
        for (let i = hacker2.length - 1; i >= 0; i--) {
        nameReverse+= hacker2[i];
     }
       console.log(`${nameReverse}`);

       let result = hacker1.localeCompare(hacker2);
       if (result < 0) {
         console.log("The driver's name goes first")
       } else if (result > 0) {
         console.log("Yo, the navigator goes first definitely")
       } else {
         console.log("What?! You both have the same name?")
       }

      
       //BONUS

       let totalWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus dui, vulputate et nisi ut, semper sagittis ex. Aenean eget purus congue, convallis erat sed, egestas nibh. Quisque nec luctus nisl, et semper dolor. Donec fringilla enim at diam euismod, ac luctus libero lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla non mi commodo dolor dictum pretium id vel erat. Maecenas sit amet sem id ligula tincidunt tempus. Maecenas vitae convallis elit.Nullam vel est consectetur, ullamcorper nibh id, suscipit ligula. In condimentum leo id porta venenatis. Aenean eleifend aliquam libero, ac vehicula nulla tincidunt eget. Phasellus pellentesque ipsum ut dui euismod, ut faucibus lacus malesuada. Fusce sollicitudin dictum ornare. Vestibulum id tristique leo. Cras pharetra cursus turpis, quis blandit velit. Suspendisse potenti. Suspendisse potenti. Duis id sem laoreet, rhoncus elit sed, faucibus augue. Donec suscipit nisi ut felis vehicula gravida. Duis tortor ligula, vestibulum et augue nec, laoreet sollicitudin nibh. Quisque congue eu nunc ac ultrices. Sed interdum, nunc sed vestibulum sollicitudin, tortor nulla efficitur elit, non ultricies neque ex vel massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rutrum placerat nisi a dignissim. Morbi efficitur sapien turpis, sit amet congue tellus egestas quis. In maximus ullamcorper dictum. Donec posuere orci id venenatis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor risus pellentesque elementum consectetur. Donec quis volutpat felis"

 let array = totalWords.split(" ");
 let countWords = 0
 let countEt = 0

 for (let i = 0; i < array.length; i++) {
countWords++  
if (array[i] === "et") {
  countEt++  
} 
       }

  console.log(countWords);
  console.log(countEt);
