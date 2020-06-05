// Iteration 1: Names and Input

let hacker1 = 'Taylor';
let hacker2 = 'Sage';
let buffer = ' ';
let shorterName = '';

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    shorterName = hacker2;
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    shorterName = hacker1;
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops


for(let i=0; i<hacker1.length; i++){
   buffer += hacker1.charAt(i) + ' ';     
}

console.log(buffer.toUpperCase());

let reversed = " ";    
  for (let i = hacker2.length - 1; i >= 0; i--){        
    reversed += hacker2[i];
  }    
 console.log(reversed);


hacker1 = hacker1.toLowerCase(); 
hacker2 = hacker2.toLowerCase();
if (hacker1 === hacker2) {
	console.log("What?! You both have the same name?");
} else {
	for (let i = 0; i < shorterName.length; i++) {
		if (hacker1[i] > hacker2[i]) {
			console.log("Yo, the navigator goes first definitely.");
			break;
		} else if (hacker2[i] > hacker1[i] ) {
			console.log("The driver's name goes first.");
			break;
        } else if (hacker2[i] === hacker1[i] && i === shorterName.length-1) { //if we get to the end of the shorterName and the names are the same, then the shorterName goes first. Example: Ari, Arianna, Ari comes first 
                console.log("The driver's name goes first.");
        }
    } 
}

// Bonus

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a pulvinar ipsum, non interdum odio. Nunc sapien purus, mattis non dictum quis, semper ac odio. Pellentesque sagittis tellus ut congue placerat. Vivamus placerat orci vel arcu consectetur, non scelerisque est ornare. Nunc fringilla risus quis orci auctor, quis sollicitudin lacus consequat. Quisque rutrum pharetra tempor. Pellentesque odio quam, ultricies eu lacus auctor, tempor suscipit magna. Nullam gravida, magna tempor ornare imperdiet, tellus ex euismod libero, at molestie ipsum ipsum at risus. Morbi est ex, tempor dignissim sagittis sed, scelerisque quis elit. Ut viverra id nisi sed iaculis.

Mauris diam purus, tincidunt pretium sem nec, iaculis hendrerit lacus. Donec maximus turpis vel odio egestas, non lacinia nisl rutrum. Vestibulum vitae vulputate metus. Praesent est est, rutrum vitae mattis sollicitudin, molestie rhoncus risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tincidunt, dolor et rutrum vulputate, nisi ex euismod turpis, non luctus ex libero non nulla. Quisque finibus tempor purus, a commodo erat rhoncus ut.

Fusce et sapien sed nunc laoreet finibus. In ac nisl et libero placerat convallis. Pellentesque varius feugiat blandit. Mauris a purus malesuada, vulputate nibh et, sodales tortor. Donec neque magna, ullamcorper nec ornare at, aliquam at justo. In dictum lorem quis ligula porttitor porttitor. Vivamus elit nunc, molestie sit amet condimentum nec, hendrerit eu metus.';


function countWords(str){
    let count = 0;
    words = str.split(" "); 
     for (i=0 ; i < words.length ; i++){
        if (words[i] != "")
           count += 1; 
     }
 
    console.log(`There are ${count} words in the string.`);
 }

 countWords(str);

 let etCount = (str.match(/ et /g)).length;
console.log(etCount);

------------------------------------------------

let phraseToCheck = 'taco cat'
  phraseToCheck = phraseToCheck.toLowerCase();
let reversed = '';

phraseToCheck = phraseToCheck.split(" ").join("");
 
  for (let i = phraseToCheck.length - 1; i >= 0; i--){        
    reversed += phraseToCheck[i];
    
  }  if (phraseToCheck === reversed){
    console.log("This is a palindrome.");
  } else {
    console.log("This is not a palindrome.")
  }