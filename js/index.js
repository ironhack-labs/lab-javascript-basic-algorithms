// Iteration 1: Names and Input
let hacker1 = "Linux";
console.log(`The driver's name is ${hacker1.toLowerCase()}`);
let hacker2 = "DuckDuckGo";
console.log(`The navigator's name is ${hacker2.toLowerCase()}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
	console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
	console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let name = "Jhon";
console.log(name.toUpperCase().split('').join(' '));
console.log(name.split('').reverse().join(''));
let nameUpperCase = name.toUpperCase().split('').reverse();
let nameReverse = name.split('').reverse();

console.log(nameUpperCase);
console.log(nameReverse);

for(let i = 0,j = 0; i<nameUpperCase.length,j<nameReverse.length; i++,j++){
  if(nameUpperCase[i]>nameReverse[j]){
    console.log("The driver's name goes first.");
  }else if(nameUpperCase[i]<nameReverse[j]){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }
}

//Bonus 1
let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pharetra dui. Donec id tristique lacus. Proin sollicitudin sodales lectus, ut bibendum justo condimentum nec. Morbi ullamcorper placerat urna ut pharetra. Sed ut elementum turpis, eget ultricies orci. Vestibulum maximus augue nec nisl sodales, at elementum nunc gravida. Suspendisse egestas egestas augue, euismod convallis metus mattis id. Etiam accumsan, eros eu elementum porta, ipsum augue lacinia purus, ac rhoncus dolor erat et leo. Vestibulum sed ante sollicitudin, vehicula ipsum sit amet, venenatis velit. Donec efficitur libero vitae convallis accumsan. Quisque quis imperdiet felis.\nPellentesque aliquam est at felis blandit, lacinia sollicitudin ipsum molestie. Vivamus efficitur consectetur vehicula. Nunc feugiat lacus vel ante gravida, vel eleifend metus rutrum. Aenean malesuada velit et faucibus vehicula. Curabitur pellentesque, erat at tristique feugiat, augue neque malesuada tellus, vel convallis sapien nisl vulputate odio. Maecenas at augue risus. Cras eu nisl a ligula viverra condimentum nec sit amet tellus. Etiam feugiat in eros id convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse purus sem, scelerisque id dapibus vitae, sagittis eu urna. Nulla facilisi. Vestibulum arcu urna, vehicula imperdiet eros et, mollis volutpat ante. Mauris facilisis arcu ac urna mollis pulvinar.\nNam eu massa in tortor placerat posuere. Quisque efficitur vestibulum neque in tempus. Nullam orci dui, eleifend ac mi sit amet, vulputate imperdiet turpis. Ut rhoncus posuere justo. Etiam cursus maximus auctor. Aliquam commodo mattis nibh sollicitudin tempor. Curabitur sollicitudin venenatis velit ac egestas. Phasellus accumsan arcu eget aliquet blandit. Maecenas pharetra tincidunt vehicula. Praesent sem est, pretium in egestas eu, pellentesque volutpat metus. Phasellus volutpat luctus scelerisque. In mattis urna nibh, vitae ultrices lacus accumsan in. Proin gravida tincidunt facilisis. Nam finibus venenatis rhoncus. Mauris vel nibh quis metus gravida malesuada id tempor nulla. In et mauris orci."
let string_array = string.split(' ');
console.log("El numero de palabras es: " + string_array.length);
let count_et = []
for(let i=0; i<string_array.length; i++){
	if(string_array[i]==="et"){
	count_et.push(string_array[i])}
}
console.log("El numero de veces de la palabra et es: " + count_et.length);

//Bonus 2
let text1 = "A man, a plan, a canal, Panama!"
let text2 = "Amor, Roma"
let text3 = "race car"
let text4 = "stack cats"
let text5 = "step on no pets"
let text6 = "taco cat"
let text7 = "put it up"
let text8 = "Was it a car or a cat I saw?"
let text9 = "No 'x' in Nixon"
let text0 = "Esto es una prueba mas" 

let phraseToCheck = text1
phrase_palindrome = phraseToCheck.toLowerCase().match(/[a-z]/g);
//phrase_palindrome_reverse = phrase_palindrome.reverse().join('');
//phrase_palindrome = phrase_palindrome.join('');

if(phrase_palindrome.join('') === phrase_palindrome.reverse().join('')){
	console.log("It's a palindrome");
}else{
	console.log("It's not a palindrome")
}

/*
for(let i=0; i<array.length; i++){
	phraseToCheck = array[i];
	phraseToCheck = phraseToCheck.split(' ');
	if(phraseToCheck[i]===phraseToCheck.reverse()){
	console.log(array[i] +" It's a palindrome")
	}else{
	console.log(array[i] +" It is not palindrome")}
}
*/
