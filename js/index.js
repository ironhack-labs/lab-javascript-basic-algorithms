// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready!");



//Iteration 1: Name and Input
const hacker1 = "John";
const hacker2 = "Anhela";
console.log("The driver's name is" +  hacker1)
console.log("The navigator's name is" + hacker2)

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) 
    {console.log ("The driver has the longest name, it has"+hacker1.length+"characters")}
else if (hacker2.length > hacker1.length) 
{console.log ("It seems that the navigator has the longest name, it ahs"+hacker2.length+"characters")}
else
{console.log ("Wow, you both have equally long names, "+hacker1.length+" character!")}

//Iteration 3: Loops
const hacker11 = hacker1.toUpperCase().split('').join(' ');
console.log(hacker11)
const hacker12 = hacker2.split('').reverse().join('');
console.log(hacker12)

if (hacker11 > hacker12)
{console.log ("The driver's name goes first.")}
if (hacker12 > hacker11)
{console.log ("Yo, the navigator goes first definitely.")}
else
{console.log ("What?! You both have the same name?")}

//Bonus time!
//Bonus 1
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ipsum feugiat, malesuada ante quis, sollicitudin felis. Sed magna quam, luctus vel auctor et, euismod non odio. Sed vulputate, tortor et iaculis suscipit, lorem neque fermentum neque, non dapibus felis nulla quis velit. Morbi erat elit, volutpat vitae lectus dignissim, pharetra porttitor massa. Mauris molestie lacinia turpis, vitae sagittis lorem blandit ut. Phasellus sollicitudin libero vel elementum facilisis. Maecenas ex sapien, malesuada sit amet iaculis sit amet, ultrices nec nulla. Mauris non tempor nibh. Mauris mollis arcu diam, id mollis justo dignissim eu. Aenean porta felis purus, at malesuada ipsum accumsan ac. Cras consectetur nulla urna. Aliquam lacinia tristique erat non cursus. Quisque aliquet egestas nibh, quis tincidunt sem ultrices id. Maecenas convallis, justo id gravida pretium, orci tellus lobortis odio, nec tincidunt justo quam vitae est. Sed vel tristique dolor, euismod sagittis felis. Praesent eu varius lectus, sed aliquet purus. Maecenas sit amet quam purus. Donec egestas, ante ac eleifend eleifend, arcu eros pellentesque lectus, id interdum turpis diam id tortor. Etiam efficitur nisl eu gravida aliquet. Aliquam facilisis enim sit amet posuere tempor. Maecenas risus arcu, luctus ac augue nec, fringilla vulputate velit. Morbi eleifend turpis sed lacinia faucibus. Duis at nisi vel sem molestie viverra a quis dolor. Sed convallis vulputate dignissim. Ut auctor neque non consequat scelerisque. Vivamus dictum magna non tempor blandit. Vestibulum sit amet elit eget leo imperdiet fermentum ut at elit."

const words = loremIpsum.split(' ');
console.log(words[5]);




 
let count = 0
for (let i = 0; i < words.length; i++) {
if (words[i] === "et") {
    count++
}   
}
console.log(count)


//Bonus 2

const phraseToCheck = "aba"


function Kostya = 

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === phraseToCheck[phraseToCheck.length-1-i]) {
       if (i < phraseToCheck.length/2){
          continue;
         } else {
            console.log("Yes, it is a palindrom.")
         }    
    }  else { 
    console.log("No, it is not a palindrom")
    break;
    } 

}


    

