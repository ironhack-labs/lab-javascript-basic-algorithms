//Names and input

window.alert("I'm ready!!");//Just for fun, substituted suggested console.log by an alert window.

var hacker1= "Timothy";

console.log("The driver's name is "+ hacker1+".");

var hacker2= window.prompt("What is your name, navigator?");//Declare hacker2 and assign it to user input, then return 
if (hacker2=== null || hacker2===""){
  var hacker2= window.prompt("Why, you must have a name, surely! Please introduce yourself :P"
);}

if (hacker2=== null || hacker2===""){
  var hacker2= window.prompt("Not very nice of you, really, I promise I'll tell you my name...");
  
}

if (hacker2=== null || hacker2===""){
  var hacker2= window.prompt("Just wanted to play, if you insist I will definitely throw at you some horrible red letters or, even worse, look quite stupid")
  
}

console.log("The Navigator's name is "+ hacker2+".");

//Conditionals: Comparing the length of the two

//first create new vars to assign to shortest and longst words, for later use in lexicographical comparison:

var shortest;
var longest;


if (hacker1.length > hacker2.length){ shortest=hacker2; longest= hacker1;
  console.log("The Driver has the longest name, it has "+ hacker1.length + " characters.");
  
}
else if(hacker1.length < hacker2.length){shortest=hacker1; longest= hacker2;
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
}
else if(hacker1.length===hacker2.length){shortest=hacker2; longest=hacker1;
  console.log("wow, you both got equally long names, " +  hacker2.length + " characters!!");
}

//LOOPS 

//Print hacker1 in all caps and with spaces between characters

var hacker1Chars = hacker1.toUpperCase();//set string to upper case

var driverSpaces="" ;// Define new string to contain output;then iterate through the string using a for loop:

for(var i= 0; i <= hacker1.length-1; i++ ){   
   driverSpaces += hacker1Chars[i]+" ";

     if(i===hacker1.length-1){ //Condition at which loop prints the result, previous assessments of the loop would return a result each otherwise
   console.log(driverSpaces);  
    }
  }

//Provide reversed name of Driver. Exercise specifies it to be in lower case:

  var reversedDriver= "";
hacker2= hacker2.toLowerCase();

  for (var i= hacker2.length-1; i>=0; i--){
    reversedDriver += hacker2[i]

 if(i===0)//Only in this case, when evaluating recursion
   console.log(reversedDriver)}
   
//LEXICOGRAPHICAL ORDER:
shortest = shortest.toLowerCase();
longest = longest.toLowerCase();




var driver= Boolean;//will be true when driver comes first
var nav= Boolean;//will be true when navigator comes first

 var t=0; //iterator through both longest and shortest strings

var l = 0;//counter: will accumulate the number of matches

while (t<=shortest.length-1 && l<=shortest.length-1){
 
  if(shortest[t]===longest[t]){ 
    
    l++;
  }
    
    t++; 
    //console.log("Matches: "+l);
  
}

   if(l===shortest.length && l===longest.length){ //if whole str matches
  
  console.log("You have the same name!!");
  
  
}


//now to compare characters after matching pattern:


if(shortest[l]===undefined){
     // console.log(shortest+" comes first")
 if(shortest===hacker1){
  driver=true; nav=false}else if(shortest===hacker2){
    driver=false; nav= true}
  

     }

if(shortest[l]<longest[l]){
 if(shortest===hacker1){
  driver=true; nav=false}else if(shortest===hacker2){
    driver=false; nav= true}
  

}else if(shortest[l]>longest[l]){
  
  if(longest===hacker1){
  driver=true; nav=false}else if(longest===hacker2){
    driver=false; nav= true}
  
}

console.log("The driver's name is "+ hacker1);

console.log("The navigator's name is "+ hacker2);


//return statements:

if(driver===true){
  console.log("The driver's name goes first");
}
else if(nav===true){
  console.log("Yo, the navigator goes first definitely");
}
  
//BONUS TIME: PALINDROME EVALUATION:


checkString=window.prompt("Give me a phrase so I can later check if you can read it backwards");

checkString = checkString.toLowerCase().replace(/[\W_]/g, '');// sets all characters to lower case, removes special characters and blank spaces:


var x =checkString.length-1;//x will iterate string from back to front
var t=0;//t will iterate string from front to back

var l = 0;//will count number of mismatches between checkString[t] and checkString[x]

while (t<=checkString.length-1 && x>=0){
 
  if(checkString[t]!==checkString[x]){ // compares  
    
    l++;
    }
    if (l > 0){//if number of mismatches is greater than 0:
      console.log("Sorry, but your sentence is not a palindrome!!");break;}  
  t++;
  x--;
}

  if(l===0) {console.log("Your sentence is certainly a palindrome!!");
  }

//LOREM IPSUM


strIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam dignissim arcu, vel suscipit neque dapibus vitae. Nulla suscipit elit neque, et fermentum turpis consequat eget. Duis accumsan lacus sit amet mollis tempus. Nunc non odio et nisl semper dignissim. Nullam velit neque, imperdiet id quam at, rhoncus ullamcorper ipsum. Ut laoreet metus libero, vel viverra magna imperdiet eu. Vivamus sem ipsum, auctor sit amet urna ac, ornare imperdiet nisi. Et porta dolor libero, in lacinia massa sodales quis. Integer lobortis tincidunt lacus sit amet convallis. Suspendisse convallis orci in commodo consequat. Etiam sed convallis augue, nec accumsan odio. Nullam urna nibh, semper nec tincidunt congue, accumsan ultrices sapien. Donec efficitur dignissim mi vitae tristique. Pellentesque semper tortor vel sapien rutrum, nec accumsan tellus elementum. Vivamus condimentum blandit congue. Integer est lorem, convallis vitae fringilla id, ultricies ac augue. Cras ultricies efficitur euismod. Nam sed leo sit amet mauris imperdiet commodo ut pulvinar leo. Nam quam ligula, fringilla quis mattis in, interdum non augue. Vivamus venenatis feugiat luctus. Fusce velit purus, auctor vel suscipit eget, tristique eget justo. Quisque sollicitudin turpis lectus, a blandit sem iaculis interdum. Proin rhoncus, ante id sagittis maximus, odio nulla gravida libero, eu fermentum diam massa eget nisl.Duis et rutrum metus, vel tincidunt lectus. Nunc mauris arcu, posuere non ultrices et, consequat quis sem. Donec venenatis feugiat odio, bibendum lobortis tellus semper eget. Praesent porta a massa sit amet consequat. Donec et laoreet ex. Sed ut finibus nibh. Sed in libero viverra, porttitor nulla ut, tincidunt lacus. Vivamus lectus libero, malesuada ut semper a, feugiat non ipsum. Nulla vulputate nunc id pretium tempus"; 



strIpsum= strIpsum.replace(/[\W_]+/g," ");

arrIpsum= strIpsum.split(" ");




var wordNum= arrIpsum.length;

console.log("There are "+arrIpsum.length+" characters in the lipsum");

var countEt=0;

for(i=0; i <= arrIpsum.length-1; i++){
  
  if(arrIpsum[i]==="et"||arrIpsum[i]==="Et"){
    
    countEt++;
  }
 if(i===arrIpsum.length-1){ 
console.log("The word 'et' comes up "+countEt+" times.");
  }
}