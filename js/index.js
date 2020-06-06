// Iteration 1: Names and Input

let hacker1 = "Arianna";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Banana";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let shorterName = hacker1;
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    shorterName = hacker2;
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    shorterName = hacker1;
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let upperSpace = "";
for (let i = 0; i < hacker1.length; i++) {
	if (i != hacker1.length - 1) { //in order to avoid adding a space to the last character
		upperSpace += `${hacker1[i].toUpperCase()} `;
	} else {
        upperSpace += `${hacker1[i].toUpperCase()}`;
    }
}
console.log(upperSpace);


let backwardsName = ""
for (let i = hacker2.length-1; i>=0; i--) {
   backwardsName += hacker2[i];
}
console.log(`"${hacker2}" backwards is "${backwardsName}"`);

//there is a String method called localeCompare(), however this iteration calls for a loop.

// in order to avoid case sensitivity issues we can turn the strings to the same case, however we would no longer be comparing the strings lexicographically 
// hacker1 = hacker1.toLowerCase();  
// hacker2 = hacker2.toLowerCase();
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

// Bonus 1

let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius elit eget magna lacinia eleifend. Fusce accumsan, ligula sit amet bibendum pharetra, arcu libero tempus elit, ac condimentum est est eget libero. Quisque convallis interdum diam vitae hendrerit. Morbi pulvinar sit amet ipsum et viverra. Vestibulum iaculis blandit nisi, in facilisis lorem. Etiam pulvinar laoreet libero quis tincidunt. Sed ante libero, vulputate in luctus sit amet, varius posuere augue. Nam nunc mi, vehicula eu pretium sed, malesuada eget magna. Suspendisse potenti. Mauris at enim lacinia massa hendrerit tempus. Praesent lacinia egestas massa, non sagittis risus. Donec nunc nunc, congue ut lobortis quis, consequat non nibh. Maecenas quis turpis varius, ultrices mauris at, rhoncus felis. Nam metus nisi, dictum ac purus sed, mollis lobortis ipsum. Mauris ut tellus felis. 
Fusce facilisis ultrices elementum. Vivamus vel ligula et in massa laoreet viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porta rutrum mauris et lobortis pulvinar. Aenean sapien lorem, venenatis eget pretium et, blandit id ante. Proin dignissim, risus sit amet ultrices faucibus, justo arcu consequat libero, eget etvenenatis ante leo nec erat. Aenean eget purus nisl. 
Curabitur vitae efficitur enim. Aenean ac nibh odio. Mauris porttitor nibh a velit laoreet, fringilla mattis massa rutrum. Nullam mattis, est vel ornare vulputate, ante justo viverra diam, in faucibus nulla eros ac diam. Praesent lacus risus, consectetur nec eros at, convallis facilisis felis. Phasellus feugiat posuere fermentum. Etiam laoreet nisi vel justo pellentesque dictum.`;

//lorem ipsum word count solution 1
let words = loremIpsumText.split(" ")
console.log(`(Solution 1): The lorem ipsum text has ${words.length} words.`)

//lorem ipsum word count solution 2
let wordCount = 0;
for (let i = 0; i < loremIpsumText.length; i++) {
	if (loremIpsumText[i] === " ") {
		wordCount++;
	}
}
console.log(`(Solution 2): The lorem ipsum text has ${wordCount + 1} words.`);


etCount = 0;
words.forEach(word => {if (word === 'et') etCount++})
console.log(`The latin word "et" appears ${etCount} times.`)


// Bonus 2

let originalPhraseToCheck = "A man, a plan, a canal, Panama!";
phraseToCheck = originalPhraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replace(/[^a-z]/g, ""); //regex to remove  anything that is not a letter

let palindrome;
for (let i = 0; i < phraseToCheck.length/2; i++) {
    if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
		palindrome = false;
	} else {
		palindrome = true;
	}
}
console.log(`"${originalPhraseToCheck}" ${palindrome ? "is" : "is not"} a palindrome.`)