// Names and Input
var hacker1 = "manelle";

console.log("The driver's name is " + hacker1 );

var hacker2 = prompt("What's your name?").toLowerCase();

console.log("The navigator's name is " + hacker2);


//Conditionals
var a = hacker1.length;
var b = hacker2.length;


if (a > b){
  console.log("The Driver has the longest name, it has "+ a +" characters.");
} else if ( b >a ){
  console.log("Yo, navigator got the longest name, it has "+ b + " characters.");
} else {
  console.log("wow, you both got equally long names, " + a + " characters!!");
}

//Loops
var result="";
for (i=0; i<a; i++){
  result+=hacker1[i].toUpperCase()+" ";
}
console.log(result)


var reverse="";
for (i=b-1; i>=0; i--){
  reverse+=hacker2[i];
}
console.log(reverse);

//who goes first?
var y=0
  for(i=0; i<hacker1.length; i++){
    if(hacker1[i]=== hacker2[i]){
     y=y+1;
    }

    if (y===hacker1.length){
      console.log("What?!! You both got the same name???");
      break;

  } else if (hacker1[i]<hacker2[i]){
     console.log("the driver's name goes first");
     break;
  } else if (hacker1[i]>hacker2[i]) {
  console.log("Yo, the navigator goes first definitely");
  break;
}
}


//Palindrome exercice
var text=prompt('give me a word or sentence');
var text2= text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var array= text2.split(" ");
text2= array.join("").toLowerCase()




var reverse="";
for (var i=text2.length-1; i>=0; i--){
  reverse+=text2[i];
}
if (text2===reverse){
  console.log(text2 +" is a palyndrome");
 }
  else {
    console.log(text2 +" is not a palyndrome");
  }

  // words of paragraphe
var text="d pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime planetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores."
var text2= text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var array= text2.split(" ");
var textarray= text2.split(" ");
console.log(textarray.length);

var etCounter=0;
for (i=0; i<textarray.length; i++){
  if (textarray[i] === "et"){
    etCounter += 1;
  }
}

console.log("There are " + etCounter + " 'et' in the text");



