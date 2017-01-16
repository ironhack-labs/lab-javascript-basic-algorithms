//Name and input
console.log("Im ready");
var hacker1="Peter";
console.log("the driver name's", hacker1);
var hacker2 = prompt("What's the navigator name?");
console.log("the navigator name's", hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has %s characters", hacker1.length);
}else if (hacker1.length < hacker2.length){
  console.log("%s, the navigator has the longest name, it has %s characters", hacker2, hacker2.length);
}else {
  console.log("Wow, you both got equally long names, %i characters!!", hacker1.length)
}

//Loops
var driverSpaces = "";
for(i=0;i<hacker1.length;i++){
  driverSpaces += (hacker1[i].toUpperCase() + " ");
}
console.log(driverSpaces);

var driverReverse = reverse(hacker1);
console.log(reverse(driverReverse));

function reverse(s){
    return s.split("").reverse().join("");
}

if (hacker1.toLowerCase() < hacker2.toLowerCase()){
  console.log("The Driver's name goes first");
}else if (hacker1.toLowerCase() > hacker2.toLowerCase()){
  console.log("%s, the navigator's name goes first, definitely.", hacker2);
}else {
  console.log("What?! %s, You both got the same name?", hacker1 +"s");
}

//Bonus time!!
//1
function isApalidrome(string){
  letterString = string.replace(/[^A-Za-z]/g, "").toLowerCase();
  console.log(letterString);
  for (i=0; i<(letterString.length/2); i++){
    if (letterString[i] !== letterString[letterString.length-1-i]){
      return false;
    }
  }
  return true;
}
console.log(isApalidrome("No 'x' in Nixon"));

//2
var string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nunc nec mauris varius, vel accumsan enim tempus. In orci eros, faucibus eu feugiat eget, cursus in dolor. Fusce bibendum turpis ullamcorper, viverra metus at, congue mi. Suspendisse maximus, nunc at lacinia maximus, turpis turpis vulputate arcu, quis tincidunt ante dui eu nibh. Curabitur tincidunt leo viverra, sodales massa ornare, porttitor diam. Donec ante magna, aliquet in accumsan ut, sollicitudin et arcu. Vestibulum non mattis leo. Nulla auctor mi diam, rhoncus eleifend nunc ultricies vel. Quisque vitae magna vel odio rhoncus tincidunt. In quis sem id massa mollis gravida. Quisque nibh massa, sagittis ac viverra ut, imperdiet tempus mi. Integer sit amet ante nec dolor vestibulum porta a id augue. Curabitur quis suscipit orci, sit amet pretium diam."+
" Suspendisse non nisi vitae odio facilisis malesuada sed eu justo. Pellentesque sed venenatis nulla. Sed mattis faucibus lacinia. Vivamus ullamcorper lectus et ultrices sollicitudin. Phasellus ac scelerisque massa, eget lobortis quam. Vestibulum feugiat justo odio, vel euismod arcu mollis nec. Proin nulla metus, porttitor eu gravida non, sollicitudin eu lacus. Vestibulum aliquet nulla ut condimentum dapibus. Nullam nunc justo, accumsan nec augue eu, cursus tempus neque. Pellentesque cursus luctus porta. Mauris iaculis gravida libero, at ornare leo commodo vel. Nunc sed quam in massa pellentesque gravida eget ut lorem. Phasellus a tincidunt mauris. In sed lacinia orci. Pellentesque efficitur dui non facilisis mollis."+
" Suspendisse mattis velit eget nisi varius hendrerit. Mauris porta felis at lacus semper, eget dignissim enim facilisis. Maecenas blandit varius arcu, in placerat diam placerat et. Mauris at lacinia turpis. Vivamus nec ipsum egestas, efficitur dolor sit amet, sodales felis. Nunc nec nulla in ante tristique pretium. Quisque quis semper sapien. Aenean lobortis lacinia orci, sit amet ornare tellus sodales eget.";

words = string.split(" ").length;
counter = 0;
for (var i = 0; i < words.length; i++){
  counter += words[i].split("et").length-1;
}
console.log(counter);
