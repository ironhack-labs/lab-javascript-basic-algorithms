// Iteration 1: Names and Input

 //	1.1 Create a variable `hacker1` with the driver's name.

 let hacker1 = "John";

 //	1.2 Print `"The driver's name is XXXX"`.
 
 console.log("The driver´s name is " + hacker1);
 
 //  1.3 Create a variable `hacker2` with the navigator's name.
 
 let hacker2 = "Nando";
 
  // 1.4 Print `"The navigator's name is YYYY"`.
 
  console.log ("The navigator´s name is " + hacker2);
 
 // Iteration 2: Conditionals
 
 let driverNameLength = hacker1.length;
 let navigatorNameLength = hacker2.length;
 
 if (driverNameLength > navigatorNameLength) {
	 console.log ("The driver has the longest name, it has " + driverNameLength + " characters.");
 }
	 else if (navigatorNameLength > driverNameLength) {
		 console.log ("It seems that the navigator has the longest name, it has " + navigatorNameLength + " characters.")
	 } else  {
		 console.log(`Wow, you both have equally long names, ${navigatorNameLength} characters!`);
	 }
 
 // Iteration 3: Loops
 
 // 3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
 
 let driverToCapital = hacker1.toUpperCase ();
 let driverSpace = "";
  
 for (i=0; i<driverToCapital.length; i++) 
 { 
   driverSpace = driverSpace + driverToCapital[i] + " ";
 }
 
 console.log(driverSpace);
 
 //  3.2 Print all the characters of the navigator's name, in reverse order. 
 
 let revNavigator = "";
 
   for(let i = navigatorNameLength - 1; i >= 0; i--) {
	 revNavigator = revNavigator + hacker2[i];
   } 
	 console.log(revNavigator);
   
 //  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
 //    - `The driver's name goes first.` <br>
 //    - `Yo, the navigator goes first definitely.` <br>
 //    - `What?! You both have the same name?`
 
 if (hacker1.localeCompare(hacker2) === 0) {
   console.log ("What?! You both have the same name?");
 } else if (hacker1.localeCompare(hacker2) === -1) {
   console.log ("The driver's name goes first.");
 } else if (hacker1.localeCompare(hacker2) === 1) {
   console.log ("Yo, the navigator goes first definitely.");
 }
 
 /** #### Bonus 1:
 Go to [lorem ipsum generator](http://www.lipsum.com/) and:
   - Generate 3 paragraphs. Store the text in a variable type of string.
   - Make your program count the number of words in the string.
   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
 **/
 
 let string1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut aliquet lectus, in fringilla lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam libero libero, luctus sit amet venenatis sit amet, euismod sit amet mauris. Mauris mollis leo orci, at condimentum leo vulputate a. Praesent gravida massa vitae hendrerit semper. Nulla facilisi. Quisque nisl augue, tincidunt vel felis id, iaculis feugiat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pharetra arcu risus, viverra tristique neque laoreet sed. Morbi fringilla eros vel tortor volutpat volutpat. Proin non lacus ut quam sodales rhoncus. Vestibulum quis arcu velit. Pellentesque quis orci nec justo consectetur tincidunt. Maecenas porta a orci tincidunt faucibus. Mauris efficitur aliquam velit sit amet gravida. Suspendisse iaculis placerat sollicitudin. Proin mollis sit amet lacus nec fringilla. Aliquam vel euismod mauris, ac viverra leo. Nulla viverra nec augue non varius. Nunc et cursus dui. Nullam vitae iaculis metus. Aliquam ut dolor tortor. Sed rutrum iaculis mauris, at tempus tellus consectetur ultrices. Ut nec nisl a augue rutrum mollis. Ut in dui ut nibh scelerisque euismod. Mauris lacinia augue eros, vel convallis ex auctor sed. Duis rutrum risus ut urna tempus malesuada. Maecenas eget turpis congue, ultricies lacus quis, malesuada odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut condimentum ante magna, et rutrum metus dignissim sit amet. Nulla efficitur eros id fermentum iaculis. Phasellus interdum sit amet ligula nec viverra."
 
 let stringToLowerCase = string1.toLowerCase ();
 
 let wordCount = 1;
 let latinWordEtCount = 0;
 
   //caso 1era palabra
 
   if (stringToLowerCase[0] === "e" && stringToLowerCase[1] === "t" && (stringToLowerCase[2] === " " || stringToLowerCase[2] === ".")){
	 latinWordEtCount ++;
   }
   
   //general
 
 for (let i = 0; i < stringToLowerCase.length; i++){
   if (stringToLowerCase[i] === " "){
	 wordCount++;
   }
   
   if (stringToLowerCase[i] === " " && stringToLowerCase[i+1] === "e" && stringToLowerCase [i+2] === "t" && (stringToLowerCase[i+3] === " " || stringToLowerCase[i+3] === ".")){
	 latinWordEtCount ++;
   }
 }
 
 console.log ("The number of words in the paragraph is: " + wordCount);
 console.log ("The number of times et appears is: " + latinWordEtCount);
 
 
 /* #### Bonus 2:
 Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
   - "A man, a plan, a canal, Panama!"
   - "Amor, Roma"
   - "race car"
   - "stack cats"
   - "step on no pets"
   - "taco cat"
   - "put it up"
   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
 */
 
 let phraseToCheck = "Was it a car or a cat I saw?";
 let phraseLowerCase = phraseToCheck.toLowerCase(phraseToCheck);
 
 //quitar caracteres especiales
 
 phraseReady = "";
   for(let i = 0; i < phraseLowerCase.length; i++) {
	 if (phraseLowerCase[i] !== " " && phraseLowerCase[i] !== "'" && phraseLowerCase[i] !== "!" && phraseLowerCase[i] !== "," && phraseLowerCase[i] !== "?"){
	 phraseReady = phraseReady + phraseLowerCase[i];
	 }
   } 
 
 //guardar frase al reves
 
 let revPhrase = "";
 
   for(let i = phraseReady.length - 1; i >= 0; i--) {
	 revPhrase = revPhrase + phraseReady[i];
   } 
 
 //comparar ambos strings
 
 let palindrome = true;
 
 for (i = 0; i < phraseReady.length; i++) {
   if (revPhrase[i] !== phraseReady[i]){
	 palindrome= false;
	 break;
   }
 }
 
 console.log ("It´s a palindrome: " + palindrome)