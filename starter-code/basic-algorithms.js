// Names and Input

var hacker1 = "Manu";
console.log(hacker1);
var hacker2 = prompt("Please, tell me your name:");
console.log("The navigator's name is "+ hacker2);


//Conditionals


if ((hacker1.length) > (hacker2.length)) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters");
}
if  ((hacker1.length) < (hacker2.length)) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
if ((hacker1.length) === (hacker2.length)) {
  console.log("wow, you both got equally long names, " + hacker1.length + "characters!!");
}

var hacker3 = "";
for (var i = 0; i < hacker1.length; i++){
      hacker3 += hacker1[i] + " ";
}
console.log(hacker3.toUpperCase());


var hacker4 = "";
for (var i = hacker2.length - 1; i >= 0; i--){
      hacker4 +=  hacker2[i];
}
console.log(hacker4);


function showWhoIsFirst(name1, name2){
	name1.localeCompare(name2);
	if (name1 < name2) {
		console.log("The driver's name goes first")
	}
	else if (name2 < name1) {
		console.log("Yo, the navigator goes first definitely")
	}
	else if (name1 === name2) {
		console.log("What?! You both got the same name?")
	}
}

showWhoIsFirst(hacker1,hacker2)

showWhoIsFirst("lel","lel")



function showIfPalindrome(string){
	for (var i = 0; i < string.length; i++)
	for (var j = string.length - 1; j >= 0; j--)
		string[i].localeCompare(string[j]);
		if (string[i] === string[j]) {
			console.log("Yes, this is a palindrome");
		}
}

showIfPalindrome("step on no pets")

// Lorem ipsum generator

var loreIpsumText = "et et Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"


function countHowManyWords(string){
	console.log(string.split(" ").length);

}

countHowManyWords(loreIpsumText)


function countWordInString(string,word){
	var count = 0;
	var separate = string.split(" ");
	for (var i = 0; i < separate.length; i++) {
		if (separate[i] === word) {
			count += 1;
		}
	}
	console.log(count)
}

countWordInString(loreIpsumText, "et");



