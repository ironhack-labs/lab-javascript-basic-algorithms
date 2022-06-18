// Iteration 1: Names and Input
const hacker1 = "Joao Paulo";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Helio";
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops
//3.1
let splittedString = hacker1.split('');
let stringWithSpaces = splittedString.join(' ');
let upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

//3.2

function reverse(s){ 
	var str = "";
	for(var i = s.length-1; i >= 0; i--)
	str+=s[i];
	return str;
}
console.log(reverse(hacker1));

//3.3

let lexicoGraphical = [hacker1 , hacker2]

lexicoGraphical.sort()

console.log(lexicoGraphical)

//Bonus 1

let paragrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu lacus, accumsan eu congue sed, molestie in ipsum. Quisque lacinia efficitur convallis. Integer mollis sodales erat sit amet dictum. Suspendisse mattis faucibus sapien ac dictum. Nam in mauris elementum, finibus urna quis, euismod elit. In elementum maximus enim. Suspendisse et est sed neque fermentum molestie. Vivamus sed arcu vel libero auctor vehicula.

Vivamus nec metus ornare, venenatis metus eu, laoreet nisl. Pellentesque hendrerit, nisl et malesuada gravida, ante nulla consequat elit, sed tincidunt massa dolor sed magna. Vestibulum consectetur, orci at gravida dapibus, augue augue dignissim nulla, et tempor lorem diam ut risus. In ante augue, faucibus ac magna nec, tempor interdum dui. Fusce ut nisi placerat, molestie augue eu, fringilla turpis. Integer elementum, magna accumsan ultricies convallis, leo odio egestas erat, vitae vulputate sapien diam vitae lectus. Nulla quis ligula libero. Vestibulum quis velit felis. Quisque ex elit, porttitor in posuere sed, sollicitudin non sapien.

Aliquam vitae pellentesque purus, sed tincidunt nunc. In at sem ac sem pharetra iaculis. Nam malesuada pretium eros. In tempor sapien dapibus, tristique diam in, ornare lorem. Mauris vitae accumsan magna. Duis ac rhoncus metus, a rutrum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus viverra quis mauris nec accumsan. Suspendisse facilisis erat at nisi sollicitudin, quis pulvinar sem interdum. Praesent varius orci in turpis pulvinar, eu accumsan nunc dignissim. Vestibulum non diam felis. Aliquam porta libero molestie felis aliquet condimentum.
`


function countingWords(words){
  return words.split(" ").length + 2
}

console.log(countingWords(paragrafo))