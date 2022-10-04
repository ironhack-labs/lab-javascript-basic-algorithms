// Iteration 1: Names and Input
//
let hacker1 ='Pepito';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'David';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let h1_length = hacker1.length;
let h2_length = hacker2.length;
switch(true){
    case h1_length > h2_length:
        console.log(`The driver has the longest name, it has ${h1_length} characters`);
        break;
    case h1_length < h2_length:
        console.log(`It seems that the navigator has the longest name, it has ${h2_length} characters`);
        break;
    case h1_length === h2_length:
        console.log(`Wow, you both have equally long names,  ${h1_length} characters`);
        break;
}

// Iteration 3: Loops
const h1_array = hacker1.split('').map(letters => letters.toUpperCase());
let h1_upper = ''
for (let i = 0; i<h1_length; i++){
    h1_upper += h1_array[i]+' '
}
console.log(h1_upper);
console.log(hacker1.split('').reverse().join(''));

switch(true){
    case hacker1.split('')[0].localeCompare(hacker2.split('')[0]) <=-1: 
        console.log(`The driver's name goes first.`);
        break;
    case hacker1.split('')[0].localeCompare(hacker2.split('')[0]) >=1: 
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    case hacker1.split('')[0].localeCompare(hacker2.split('')[0]) ===0: 
        console.log(`What?! You both have the same name?`);
        break;
}

// Bonus
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus ac nisi blandit, pretium ligula id, efficitur neque. 
Nam ut finibus est. Nam vitae aliquam nulla. Donec scelerisque ante quis aliquet sodales.
Nulla vehicula ultricies est a porta. Curabitur sollicitudin gravida massa et ullamcorper. 
Integer nibh lectus, tempus ac pulvinar quis, vulputate eu augue. Nulla congue gravida facilisis.
Sed eleifend turpis sed turpis iaculis, nec pretium nisi molestie.
Nulla bibendum dui nunc, ut gravida risus feugiat mollis. 
Phasellus maximus a orci sed venenatis. Quisque porttitor nulla eu mi placerat, et volutpat sem aliquam.
Aliquam sapien eros, ultrices nec felis quis, dignissim lobortis metus.
Donec eu porttitor tortor, quis efficitur sapien.
Proin quis lacus vel orci ullamcorper convallis.
Morbi porta, nibh vitae facilisis molestie, nisl lectus mattis erat, quis eleifend sem turpis ut lorem.
Aenean vel felis ornare, ultrices magna at, rutrum nisl. Nullam quis aliquam felis.
Phasellus molestie urna aliquet nisl consequat pharetra.
Phasellus mattis dapibus sem, vitae egestas purus accumsan vel.
Aliquam porta tristique odio, non ultrices tortor mattis at. Sed nec facilisis metus.
Suspendisse nec vulputate justo, et volutpat sem. Duis et risus quis massa vehicula congue. Vestibulum eget sodales lacus. Etiam sit amet odio id augue tempor auctor. Mauris iaculis ac lorem ac ullamcorper. Curabitur eu erat nec eros molestie lacinia. In non molestie est, ut porttitor lacus. Phasellus blandit sem vel leo eleifend ultricies. Aenean ipsum velit, condimentum non neque a, dapibus lacinia tortor. Aliquam nec lacinia dui. Quisque vel metus maximus, lobortis diam id, porttitor urna.
Quisque ullamcorper, augue et convallis gravida, dui felis vulputate lectus, in ultrices lorem ipsum non nunc.
Nam in elit tristique, congue lorem eget, facilisis nulla.
In hac habitasse platea dictumst.`;
function countSmilies (message) {
    counter = 0; 
    mess = message.split(''); 
    for (i = 0; i <= mess.length; i++){
      if (mess[i] === 't' && mess[i-1] === 'e'){
        counter +=1; 
      }
    }
    return counter;
  };
console.log(`The amount of time et appears is ${countSmilies(paragraph)}`);

// Palindrome
function palindrome (phrase) { 
    phrase_array = phrase.replace(' ', '').split('')
    revers_array = phrase_array.reverse();
    if ( phrase_array === revers_array){
        console.log(`It´s a palindrome`);
    } else {
        console.log(`It's not a plindrome`, phrase_array, revers_array);
    }
  };
  palindrome('race car')