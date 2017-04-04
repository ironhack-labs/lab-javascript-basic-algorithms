// Names and Input


//Conditionals


// Lorem ipsum generator

var hacker1 = "Michelle";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's your name?");
console.log("The navigators name is " +hacker2);

if(hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  } else if(hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
  } else {
    console.log("wow, you both got equally long names, " + hacker1.length +  "characters!!")
  }

  var i = 0;
  var nuevo = "";

  while (i < hacker1.length) {
    if (i === 0) {
      nuevo = nuevo + hacker1[i];
      i++;
    } else {
      nuevo = nuevo + " " + hacker1[i];
      i++;
    }
  }

  console.log(nuevo.toUpperCase());

  var j = hacker1.length-1;
  var reverse = "";

  while(j >= 0) {
    reverse = reverse + hacker1[j]
    j=j-1;
  }
  console.log(reverse);

  if(hacker1 < hacker2) {
    console.log("The driver's name goes first")
  } else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What?! You both got the same name?")
  }

  var bonusTime = prompt("Please introduce a palindrome").toUpperCase();

 var compare = bonusTime.replace(/[^A-Z]/g, "");
 var p = compare.length-1;
 var alReves = "";
 while(p >= 0) {
   alReves = alReves + compare[p];
   p--;
 }
 if(alReves === compare) {
   console.log("You have a palindrome")
 } else {
   console.log("You do not have a palindrome")
 }

 var long = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a urna massa. Suspendisse ac iaculis purus. Praesent congue leo ligula, eget malesuada orci fermentum at. Duis hendrerit, dolor a volutpat mollis, felis arcu ullamcorper odio, ut maximus nisi mi ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum felis tellus, aliquet eget augue sed, bibendum hendrerit libero. Phasellus tincidunt leo imperdiet nisl laoreet sagittis. Aenean at massa malesuada diam ullamcorper accumsan. Ut non volutpat lacus. Nunc bibendum nulla sit amet enim vehicula finibus non id eros. Maecenas ultrices mollis imperdiet. Aenean euismod erat in dignissim facilisis. Fusce in turpis massa. In at tristique sem. Nullam et rutrum lectus, vel facilisis enim. Morbi ultrices facilisis mauris, eu molestie tellus commodo nec. Mauris sodales euismod magna, a porttitor sem commodo pharetra. Phasellus sed cursus eros. Pellentesque in leo dictum, auctor elit a, dignissim velit. Pellentesque sem massa, condimentum non ipsum eu, rutrum dapibus dui. Praesent mattis lectus magna. Suspendisse potenti. Fusce vel nisl accumsan, pulvinar libero sed, ornare orci. Cras fermentum dolor non risus rhoncus tempor. Proin lobortis nulla turpis, sed volutpat diam pellentesque sed. Nulla feugiat nunc dui, sit amet sodales magna ultricies at. Donec sapien nibh, vehicula a laoreet eu, ultricies laoreet nunc. Nullam ac dolor id metus mollis maximus vel non magna.";

 spaces = 1;

 w = 0;
 while(w<long.length) {
   if(long[w]===" ") {
     spaces++;
     w++;
   } else {
     w++
   }
 }
 console.log("the number of the words is " +spaces);



x=0
con_et = 0
var array = long.split(" ")
while(x<array.length) {
  if(array[x]=="et") {
    con_et= con_et + 1
    x++
  } else {
    x++
  }
}
console.log(con_et)
