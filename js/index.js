//* Iteration 1

const hacker1 = "Carlos Pereira Silva";
    console.log(`The driver's name is: ${hacker1}`);

const hacker2 = "Felipe Gomes Souza";
    console.log(`The navigator's name is ${hacker2}`);

//* Iteration 2.1    

    if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } 
    else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } 
    else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} charaters.`);
    }
   
//* Iteration 3.1

const uppercased = hacker1.toUpperCase();
    console.log(uppercased.split("").join(" "));

//* Iteration 3.2
    
    console.log(hacker2.split("").reverse().join(""));

//* Iteration 3.3    

    function lexoCompare(a,b){
        if (a === b){
            console.log("What?! You both have the same name?");
        } 
        else if (a > b) {
            console.log("Yo, the navigator goes first definitely.")
        }
        else {
            console.log("The driver's name goes first.");
        }
    }  
    
lexoCompare(hacker1,hacker2);

//* Bonus 1

const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit sagittis neque, non aliquet est sollicitudin molestie. Nunc quis feugiat nunc. Donec aliquam orci malesuada, pretium lorem eu, pellentesque nisl. Praesent ultrices, ipsum eget tempor cursus, nulla nisl interdum quam, nec bibendum turpis augue in ligula. Maecenas sapien mi, finibus sed massa ut, interdum volutpat urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur convallis in magna ut volutpat. Donec sagittis ante a erat cursus finibus. Nunc ac elit non erat vestibulum aliquam. Morbi ut orci mauris. Aenean bibendum enim vel gravida tempus. Etiam et posuere ex, in dictum massa. Sed vitae magna leo. Etiam eu rhoncus erat, sed ullamcorper massa. Suspendisse malesuada maximus sapien nec dignissim. Nunc sit amet finibus nisl. Aliquam fermentum libero quam, quis pellentesque turpis ultricies vitae. Nunc sed purus elementum, pharetra nibh a, consectetur elit. Curabitur ante lectus, hendrerit eget facilisis eget, sagittis sit amet arcu. Suspendisse at ex quis orci tempus scelerisque id quis nibh. Integer aliquam sapien et urna convallis, ut ullamcorper tellus egestas. Etiam lobortis et augue sit amet viverra. Proin in commodo urna. Proin consectetur dapibus nibh eu interdum. Maecenas eget enim rhoncus, porta eros sed, viverra magna.";

const latinWord = "et";
let latinWords = 0;
let numberOfWords = 0;
const splitText = loremText.split(" ");

for (let i = 0; i < splitText.length; i++){
  
  numberOfWords += 1;    

    if ( splitText[i] === latinWord) {
        latinWords += 1;
     
    }
  
}
console.log(`The text has ${numberOfWords} words.`)
console.log(`The text has the word 'et' ${latinWords} times.`);

//* Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";


const phraseReplaced = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/gi, '');

const reversePhrase = phraseReplaced.split('').reverse().join('');

if (phraseReplaced === reversePhrase) {
    console.log("This is a palindrome")
} else {
    console.log("This is not a palindrome")
}








