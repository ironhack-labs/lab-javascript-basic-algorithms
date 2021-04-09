// 0: Extra input
const name1 = "Dua Lipa";
const name2 = "Zoolander";

let opt_input;
let invalid_opt = true;
do{
  opt_input = parseInt(prompt("Would you rather [1] inputing your name or [2] using the defaults?"));
  invalid_opt = !(opt_input==1||opt_input==2);
  if(invalid_opt) alert('You have to choose one of the two valid options.');
}while(invalid_opt)

// Iteration 1: Names and input
let hacker1;
let hacker2;

if(opt_input==1){
  hacker1 = prompt("Who is your driver?");
  hacker2 = prompt("Who is the navigator?");
  }else{
    hacker1 = name1;
    hacker2 = name2;
  }

console.log("The driver's name is ",hacker1);
console.log("The navigator's name is ",hacker2);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log("The driver has the longest name, it has ",hacker1.length,"characters.")

}else if(hacker1.length==hacker2.length){
  console.log("Wow, you both have equally long names,",hacker2.length,"characters!")

} else {
  console.log("It seems that the navigator has the longest name, it has ",hacker2.length,"characters.")

}


// Iteration 3: Loops
// // printing
let aux_hacker1 = [];
for(let char of hacker1){
  console.log(char.toUpperCase());
  aux_hacker1.push(char.toUpperCase());
}
console.log(aux_hacker1.join(" "));

let aux_hacker2 = [];
for(let i = hacker2.length-1; i>=0; i--){
  console.log(hacker2[i]);
  aux_hacker2.push(hacker2[i]);
}
console.log(aux_hacker2.join(""));

// // comparing  
if(hacker1 == hacker2){
  console.log("WHAAAAAAT??!! WHAT TYPE OF SOURCERY IS THIS?! YOU TWO HAVE THE SAME NAME???");
}else{
  if(hacker1<hacker2){
    console.log("The driver's name goes first,", hacker1 ,"is a player.",);
  }else{
    console.log("Yo, the navigator goes first definitely.");
  }
}


// Its Bonus Time!
// // bonus 1:
const lorem = `Nam nisl nunc, sollicitudin rhoncus tellus et, sodales accumsan turpis. Maecenas sit amet metus malesuada, viverra tellus sit amet, sagittis turpis. Vivamus tempus justo mattis odio imperdiet cursus nec a ipsum. Praesent ut sollicitudin est. Cras eu felis convallis, aliquet enim nec, mollis magna. Maecenas arcu quam, cursus vitae aliquam sit amet, scelerisque et nulla. Phasellus vel lorem nec purus tempor feugiat nec ut lacus.

Praesent tempor urna diam, vitae aliquam nibh imperdiet vel. Duis a velit dapibus, sagittis odio quis, feugiat ex. Aliquam erat volutpat. Suspendisse sed fringilla nibh. Aenean nibh libero, feugiat ut vehicula quis, gravida sed ex. Phasellus scelerisque blandit metus, eu consectetur ante tincidunt eget. Donec eu quam vel diam tincidunt elementum. Pellentesque scelerisque finibus rhoncus. Etiam eget est eu lacus blandit varius vitae vitae nulla. Phasellus mauris tortor, facilisis ut turpis non, semper mollis purus. Aliquam erat volutpat. Mauris venenatis est at ante iaculis porta. Sed scelerisque auctor purus, sed pellentesque ipsum tincidunt nec. Sed dignissim dolor ante, et accumsan sapien tincidunt eu. Ut tempus lectus at urna suscipit tincidunt.

Phasellus urna tortor, tempor finibus tellus et, lobortis posuere sapien. Duis volutpat pulvinar felis eget ultricies. Suspendisse a venenatis mi, eget consequat libero. Vivamus tempor lorem vel fringilla lobortis. Nullam vehicula dui vitae commodo auctor. Donec vulputate sem at augue sagittis sollicitudin. Maecenas fringilla leo sit amet felis elementum dapibus. In pretium sem in suscipit porttitor. Maecenas feugiat est non dolor bibendum fringilla. Aenean molestie suscipit elit, a tristique ante. Donec nec sapien eu tortor posuere bibendum. Aenean porta at ligula vitae maximus. Praesent bibendum nec purus nec viverra. Cras egestas elit quam, et laoreet nisl vehicula tempor. Aenean elementum ex orci, a maximus dolor bibendum id.`

lorem_array = lorem.split(" ");
console.log(lorem_array.length+1);

const aux_et = lorem.split("et");
console.log(aux_et.length);

// // bonus 2:
let phraseToCheck = prompt("What phrase do you want to check for palindromisisisisisity?").toLowerCase();
phraseToCheck = phraseToCheck.split(" ").join("");
phraseToCheck = phraseToCheck.split(",").join("");

console.log("Checking if",phraseToCheck,"is a palindrome...");

let palindrome = true;
let i_string = 0;
let i_break = true;
const phraseLength = phraseToCheck.length;
do{
  if(phraseToCheck[i_string]!=phraseToCheck[phraseLength-i_string-1]){
    palindrome = false;
  }
  if(i_string>phraseLength/2){
    i_break = false;
  }
  i_string++;
}while(palindrome && i_break)

console.log('Result. Is your phrase a palindrome?:', palindrome);
