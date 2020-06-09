let ironhacker1 = 'Ricky'; 

    console.log('The drivers name is ${ironhacker1}');

let ironhacker2 = 'Toledo';

  console.log('The navigators name is ${ironhacker2}');
  
// Iteration 2: Conditionals
if (ironhacker1.length > ironhacker2.length) {
    console.log('The driver has the longest name it has ${ironhacker1.length} characters')
  }

else if (ironhacker2.length > ironhacker1.length) {
  console.log('It seems that the navigator has the longest name, it has $(ironhacker1.length) characters.');
}


else if (ironhacker2.length === ironhacker1.length) {
  console.log('Wow, you both have equally long names, ${ironhacker1.length} characters!');
}

// Iteration 3: Loops
let bigSpaced = " "
for (i=0; i<ironhacker1.length; i++) {
    bigSpaced += ironhacker1[i].toUpperCase()+" ";
}

console.log(bigSpaced);     

//3.2
var str1 = (`${ironhacker2}`);
var newString = "";
  for (var i = str1.length - 1; i >= 0; i--) {
    newString += str1[i];
  }
console.log(newString);

if (ironhacker1 < ironhacker2) {
    console.log("The driver's name goes first.");
} else if (ironhacker1 > ironhacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else if (ironhacker1 === ironhacker2) {
    console.log("What, you both have the same name?");
}


let lorem = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.';


var spacesCount = lorem.split(/[\t\s\n]+/g).length - 1;
console.log(spacesCount);

let phraseToCheck = 'Madam';

function palindrome(str) {
  return true;
}
palindrome(phraseToCheck);

  
  function check_Palindrome(str_entry){
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
