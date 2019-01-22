// Names and Input* cambios

var hacker1 = "Jesús"
console.log("The river´s name is" + hacker1);

var hacker2 = prompt ("What´s your name?");
console.log("The navigator´s name is + hacker2");



//Conditionals*

if (hacker1.length < hacker2.length){
    console.log("The Driver has the longest name, it has" + "" + hacker1.length + "" + "characters")
}else if(hacker1.length > hacker2.length){
    console.log("Navigator has the longest name, it has" + "" + hacker2.length + "" + "characters")
}else{
    console.log("Wow!!, you both got equally long names," + "" + hacker2.length + "" + "characters")
}


// Loops*

var pack = "";
for (var i = 0; i < hacker2.length; i++) {
     += hacker2[i].toUpperCase() + "";
}
console.log(pack)


var hacker2Reverse = "";
for (var i = hacker2.length -1; i >= 0; i --) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1 < hacker2) {
    console.log("The Driver´s name goes first");
}else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely")
}else {
    console.log("What?! You both got the same name?");


    
}
hola