console.log('I\'m ready!');

//Name and Input
var hacker1 = 'Kerlyn';
    console.log('The driver\'s name is ' + hacker1);

var hacker2 = prompt('The navigator\s name is ');
    console.log(hacker2);


//Conditionals
if (hacker1.length == hacker2.length) {
    console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!');
} else if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else {
   console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}

//Loops
for(var i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i]);
}

var nameReverse = '';
for(var j = hacker1.length; j > 0; j--) {
    console.log(hacker1[j]);
}
    

//-------rever
if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//------ Palindrome - rever

var str = prompt('Checking if it\'s a Palindrome');
function Palindrome(str) {
  return (
    str == str.split('').reverse().join(''));
}
console.log(str);


//------text - rever
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio nunc, hendrerit eget vehicula id, mattis nec odio. Morbi tortor turpis, porta a eros sed, consectetur dapibus dolor. Nulla vel est non elit egestas blandit eu quis dui. Sed mollis faucibus mauris, quis pretium lectus egestas euismod. Proin suscipit tortor eu egestas dictum. In ornare eros velit, non pellentesque purus euismod a. Proin quis varius risus. Fusce finibus sollicitudin odio id vehicula. Duis aliquet pellentesque lorem sed finibus. Nunc faucibus, nisi at congue scelerisque, sem leo molestie nulla, quis fringilla turpis leo pulvinar neque. Nulla facilisi. In neque tortor, dapibus quis aliquam vitae, euismod non est. Vestibulum dignissim lobortis nulla ac imperdiet. Maecenas non mollis diam. Suspendisse luctus ut orci in finibus. Nullam pellentesque in turpis id tincidunt. Aliquam gravida a ex sed dictum. Nunc eleifend tortor mollis odio molestie, vel tincidunt metus finibus. Aliquam porta dui ac maximus dignissim. Donec vel viverra eros. Phasellus vitae rutrum purus, vitae hendrerit arcu. Aliquam egestas purus non aliquam egestas. Etiam a lectus at turpis pretium tincidunt ut eu elit. Cras vel lorem sit amet lectus tempor rhoncus. Proin eros risus, porttitor condimentum lorem non, scelerisque suscipit ligula. Mauris rhoncus non arcu ac congue. Sed vel facilisis elit. Aenean vestibulum nibh lorem, sit amet commodo odio ultrices a. Sed vitae mauris nisl. In at sem nec purus dictum ultrices id eu est. Praesent sed vehicula purus. Sed hendrerit eros at pellentesque venenatis. Nulla nec scelerisque urna, sit amet dictum felis. Fusce ac cursus tellus.';

var count = text.split(' ');

console.log(text.length);

var et = 0;
for (var i = 0; i < count.length; i++) {
    if (count[i] === 'et') {
        et ++;
    }
}

console.log(et);