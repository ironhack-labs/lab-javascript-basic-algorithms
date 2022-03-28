// Iteration 1
let hacker1 = 'Ben';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jerry';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2

let hacker1Number = hacker1.length;
let hacker2Number = hacker2.length;

if(hacker1Number > hacker2Number) {
    console.log(`The driver has the longest name, it has ${hacker1Number} characters.`);
} if (hacker1Number < hacker2Number) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Number} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Number} characters!.`);
}

// Iteration 3

for(let i = 0; i < hacker1.length; i++) { 
	hacker1 = hacker1.toUpperCase();
	console.log(hacker1[i] +" "+ hacker1[i+1] + " " + hacker1[i+2])
	break;
}

for(let i = hacker2.length; i >= 0; i--) { 
	console.log(hacker2[i-1] +hacker2[i-2] + hacker2[i-3] + hacker2[i-4] + hacker2[i-5]);
	break;
}



for(let i = 0; i < hacker2.length; i++){
	if (hacker1.localeCompare(hacker2) < 0) {
			console.log("The driver's name goes first.")
			} else if (hacker2.localeCompare(hacker1) < 0) {
				console.log("Yo, the navigator goes first definitely.")
			} else {
				console.log("What?! You both have the same name?")
			}
	break;
}



// Bonus Time !!!!!!
// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu justo egestas, posuere eros ut, finibus mauris. Pellentesque nec mauris euismod, varius magna quis, venenatis justo. Morbi feugiat iaculis tortor, at porta lectus fringilla efficitur. Maecenas a volutpat nisl. Duis quis erat eu nunc efficitur dignissim eu id orci. Curabitur tempor nunc eu erat ornare rhoncus. Nullam elementum est vitae viverra condimentum. Morbi vulputate enim id facilisis lobortis. Donec volutpat turpis vitae semper egestas. Nulla quis rutrum arcu, tincidunt sollicitudin quam. Suspendisse in augue vel ipsum consectetur venenatis. Sed nec congue ipsum, vitae molestie felis. Donec rutrum eget turpis nec efficitur.

Donec faucibus hendrerit tincidunt. In tincidunt justo vel neque dignissim cursus. Mauris ac felis molestie risus sollicitudin ullamcorper. Quisque at turpis sed felis tincidunt vulputate ac quis dui. Phasellus interdum at tellus quis placerat. Suspendisse enim augue, volutpat vitae ornare faucibus, vestibulum quis mi. Nunc posuere sollicitudin est, iaculis posuere felis rutrum non. Ut eu nisi dictum, tincidunt neque quis, condimentum arcu. Phasellus sed metus ac erat tempus porttitor ac vel ipsum. Donec efficitur, purus in hendrerit lobortis, mi diam hendrerit purus, vestibulum tincidunt quam ipsum id enim. Curabitur volutpat interdum pulvinar. Vivamus placerat mauris ultricies lacus pretium cursus.

Cras mollis fringilla velit nec rhoncus. Sed rutrum diam massa, nec ultricies erat cursus nec. In congue mollis ante, ac scelerisque dolor euismod sit amet. Nunc at lorem quis magna ullamcorper feugiat. Etiam scelerisque dui et quam pharetra pulvinar. Nullam elementum, nulla id tincidunt ornare, metus urna gravida lorem, eget viverra lectus leo a lacus. Nulla dapibus mauris eget turpis pulvinar, sit amet aliquam ante tempus. Donec ultrices purus nulla, vel scelerisque neque volutpat ac. Sed molestie, felis ut gravida blandit, lorem justo accumsan nibh, et sollicitudin eros nisl at dui. Quisque pellentesque sed justo sit amet varius. Curabitur rhoncus ante a sem posuere, eget euismod dui dictum. Etiam varius a eros a tempor. Sed bibendum bibendum ligula, id euismod turpis accumsan eu. Vestibulum venenatis volutpat nulla sed maximus. Duis non ligula augue. Morbi tempor pellentesque elit non hendrerit.`

let counter = 0
let numberEt = 0;
for(let i =0; i < lorem.length; i++) {
	if (lorem[i] === " ") {
		counter ++
	} if (lorem[i] === " " && lorem[i+1] === "e" && lorem[i+2] === "t" && lorem[i+3] === " ") {
		numberEt ++
	}
}

console.log(counter, numberEt);



// Bonus 2  ---- NOT FINISH !!!!!! --------

/*


let phraseToCheck = 'race car';


for(let i = 0; i < phraseToCheck.length; i++) { 
	console.log(phraseToCheck[i] + phraseToCheck[i+1] + phraseToCheck[i+2])
	break;
}

for(let i = phraseToCheck.length; i >= 0; i--) { 
	console.log(phraseToCheck[i-1] + phraseToCheck[i-2] + phraseToCheck[i-3]);
	break;
}

*/