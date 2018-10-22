var hacker1 = "Jude";

console.log(`The drivers name is ${hacker1}`);

var hacker2 = prompt("What is your name?");

console.log("The name of the navigator is " + hacker2);


function nameLength (){
if (hacker1.length === hacker2.length){
  console.log(`wow, you both got equally long names, with ${hacker1.length} characters`);
} 
 if (hacker1.length > hacker2.length){
  console.log(`The drivers name is way longer brother, it has ${hacker1.length} characters`)
 } 
 if (hacker2.length > hacker1.length){
  console.log(`The navigators name is way longer brother, it has ${hacker2.length} characters`)
 } 
}

nameLength();

function upperCase (){
  for (let i = 0; i < hacker1.length ; i++){
   console.log(hacker1[i].toUpperCase() + " ");
  }
}

 upperCase();

 
navigatorsName = "";
function backwards(){
  for (let j = hacker2.length-1; j >= 0 ; j--){
    navigatorsName += hacker2[j];
  }
}

 backwards();

namesArray =[hacker1,hacker2];

function printAlphabetically(){
namesArray.sort();
  if (namesArray[0] === namesArray [1]){
    console.log("What?! You both got the same name?");
  } 
  else if (namesArray[0] === hacker1){
      console.log("The driver's name goes first");
  } 
  else if (namesArray[0] === hacker2){
        console.log("The navigator's name goes first");
  }
}

     printAlphabetically();
  
 var palindrome = prompt("Enter a Palindrome");

function joinPalindrome(){
  palindrome = palindrome.split(' ').join('');
  console.log(`User has chosen ${palindrome}`);
}
   
joinPalindrome();

 

function checkPalindrome(){
  var firstArray = "";
  var secondArray = "";
  for (let k = 0; k < palindrome.length; k++){
    firstArray += palindrome[k];
  }
  for ( let l = palindrome.length-1; l >= 0; l--){
    secondArray += palindrome[l];
  }
  if (firstArray === secondArray){
    console.log("This is indeed a palindrome")
  }
  else {console.log("This is not a palindrome");}
}

checkPalindrome();

var theRandomness = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula a mauris ullamcorper, ut elementum est sodales. Nam id magna non nisi accumsan consectetur. Cras interdum dignissim leo quis aliquam. Vestibulum convallis, orci et scelerisque pulvinar, dui sem ornare mi, a ultricies dui lacus eget nibh. Nunc sed libero neque. Morbi at imperdiet mauris, at tincidunt nunc. Duis sed fermentum massa. Vestibulum vel felis malesuada tortor porta efficitur. Maecenas euismod libero nunc, id auctor lorem suscipit quis. Etiam ipsum leo, dapibus eu ipsum vitae, bibendum pellentesque velit. Nulla a purus volutpat, fringilla augue id, condimentum leo. Duis eu lorem faucibus, eleifend turpis nec, consequat orci. Mauris eu dignissim urna. Ut et placerat neque. Nullam consequat ac eros a maximus. Nullam sollicitudin, elit sed porta viverra, mi erat scelerisque nisi, quis malesuada eros libero sit amet leo. Maecenas ac mi et mi rutrum pretium. Etiam eu venenatis justo, et placerat magna. Vivamus aliquet eleifend posuere. Sed sit amet molestie nisi. Curabitur et felis lacus. Duis sit amet arcu at est laoreet venenatis vehicula sit amet odio. Suspendisse scelerisque lobortis finibus. Proin pharetra massa sed aliquet mattis. Morbi posuere vulputate sapien, facilisis posuere est varius vel. Phasellus tempor sodales justo aliquet iaculis. Vestibulum vel dolor id libero malesuada tempus. Integer placerat nisl sed pulvinar interdum. Duis dui risus, scelerisque a volutpat ac, posuere in ante. Mauris porta neque tortor, sed eleifend tortor euismod ac. Donec id nisl neque. In et magna lorem. Proin feugiat nunc nunc, vitae viverra metus accumsan eu. Etiam lectus massa, venenatis sed enim eu, malesuada eleifend justo. Suspendisse imperdiet hendrerit lorem ac pretium.";


function countWords(randomText){
  var randomTextSplit = randomText.split(' ');
  console.log(randomTextSplit.length);
}

countWords(theRandomness);

function countEt(randomText){
  var randomTextSplit = randomText.split(' ');
  var counter2 = 0;
  for (n = 0; n < randomTextSplit.length; n++){
    if (randomTextSplit[n] === "et"){
      counter2 += 1;
    }
  }
  console.log(counter2);
}

countEt(theRandomness);