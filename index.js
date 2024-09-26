// Iteration 1: Names and Input
let hacker1 = "Gabriel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Paulina";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
   console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}


// Iteration 3: Loops


    let result = '';  
for (let i=0; i < hacker1.length; i++){
    
    result += hacker1[i].toUpperCase() + ' ';
}
    console.log(result);

     let result2 = '';
for (let i=hacker2.length -1 ; i >= 0; i--){
    result2 += hacker2[i];
}

console.log(result2);

if (hacker1.localeCompare(hacker2) === -1){
      console.log('The driver name goes first')
}else if (hacker1.localeCompare(hacker2) === 1) { 
      console.log('The navigator name goes first')
}else {
    console.log('You both have the same name')
}


let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique sodales urna, a auctor sem posuere eu. Mauris sagittis metus odio, vitae ultricies lacus volutpat id. Duis malesuada nec mauris in mollis. Cras dictum luctus porta. Nullam eget nibh nec nulla luctus bibendum. Phasellus posuere mollis placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam feugiat ipsum neque, nec venenatis tellus euismod vitae. Vivamus elementum, urna eu efficitur sodales, sapien sapien malesuada purus, nec malesuada orci lectus ut diam. Phasellus posuere arcu in odio dictum, ac interdum libero vulputate. Nullam sed placerat neque. Vivamus tempor posuere erat, sed lobortis purus sollicitudin at.

Praesent ultricies sem eget augue hendrerit, et fermentum mauris vestibulum. Donec a diam eros. Vivamus et sem volutpat, aliquet sem id, condimentum eros. Suspendisse venenatis nisi ligula, ac faucibus ligula fringilla vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec volutpat mi id sagittis dictum. Donec finibus ante nec justo convallis condimentum. Suspendisse aliquet tellus lacus, ut dapibus turpis porttitor ac. Nulla non porta risus. Nullam nec fringilla sem, ac maximus tortor. Donec tempus lacus sed sem consectetur, eget dapibus massa vestibulum. Suspendisse lacus erat, vulputate eu justo at, sodales dictum ex. Suspendisse pulvinar massa nec risus vulputate, non vestibulum lorem pretium.

Nam dolor leo, posuere sit amet ligula id, molestie blandit elit. Donec suscipit faucibus eleifend. Ut id tincidunt leo, sit amet maximus mauris. Sed accumsan ipsum sem, id ornare erat aliquam ac. Nam finibus ultrices lacus, ac venenatis odio. Nam non consequat erat. Proin rhoncus lacinia malesuada. In consectetur nisl quis hendrerit lacinia.`

/*
function countWords(str){
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}
console.log(countWords(longText));
*/

const word = longText.split(' ');

const wordCount = word.length;

console.log(wordCount);



let phraseToCheck = 'put it up';
const phraseToCheck1 = phraseToCheck.replaceAll(' ', '');


let reverse = ''; 
for (let i= phraseToCheck1.length -1; i >=0; i--){
    
    reverse += phraseToCheck1[i];
    
}
console.log(reverse);

if (reverse === phraseToCheck1) {
    console.log(`${phraseToCheck1} is a palindrome`);
}else {
    console.log(`${phraseToCheck1} is not a palindrome`);
}