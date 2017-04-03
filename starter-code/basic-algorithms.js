var hacker1 = "Marc";
var hacker2 = "";
hacker2 = prompt("What´s is the navigator´s name");
  console.log("The navigator´s name is " + hacker2);
if(hacker1.length > hacker2.length){
  console.log("the driver´s has the longuest name it has " + hacker1.length + " characters");

}else if( hacker1.length < hacker2.length){
  console.log("yo, navigator got the longuest name, it has "+ hacker2.length + " characters");


}else{
console.log("WOOOW, you both got equally long names, "+ hacker1.length +" characters");
}


  for (var i=0; i<hacker1.length; i++){
   var hacker1Up = hacker1.toUpperCase();
    document.write(hacker1Up[i] +" ");


  }

  function invertWord(hacker2){
    var x=hacker2.length;
    var chainHacker2 = "";

    while(x>=0){
      chainHacker2=chainHacker2 + hacker2.charAt(x);
      x--;
    }
    document.write(chainHacker2);
  }
  invertWord(hacker2);

  var array = [hacker1, hacker2];
console.log("Unordered array ---", array, "------------‘");

array.sort(function(a,b) {
   a = a.toLowerCase();
   b = b.toLowerCase();
   console.log("Compare " + a + " and " + b );

   if( a == b) {
       console.log("Both are the same");
       return 0;
   }
   if( a > b) {
       console.log("Comparison result, 1 --- move "+b+" to before "+a);
       return 1;
   }
   console.log("Comparison result, -1 --- move "+a+" to before "+b+" ");
   return -1;


});

console.log("Ordered array ---", array, "------------");

var palindrome = prompt("type in your word");
var invertedWord = "";
var as1 = palindrome.replace(" ",""); //remove space
var as2 = as1.replace(/[^0-9a-z]/gi, "");  //remove symbols
var as3 = as2.toLowerCase(); //lower case

console.log("show the word without space and signs:  " + as3); //shows the word

function CheckPalindrome(as3){ //function to check if palindrome
  var x= as3.length;
  var invertedWord = "";

  while(x>=0){
    invertedWord=invertedWord + as3.charAt(x);
    x--;
  }
  console.log(invertedWord); //inverst the word

 if (invertedWord === as3) //checks if the inverted word is the same as as3
 {
   console.log("true");
 } else {
   console.log("not true");
 }
}

CheckPalindrome(as3);
// Lorem ipsum generator
