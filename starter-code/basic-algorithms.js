var haker1={
    name:"john"
}
console.log('the driver s name is ' + haker1.name);

var haker2= prompt("what s your name ? ");
console.log ('the navigator s name is ' + haker2);

if (haker1.name.length > haker2.length){
    console.log ("The Driver has the longest name, it has "+ haker1.name.length + " characters");
}
else if (haker1.name.length < haker2.length){
    console.log ("Yo, navigator got the longest name, it has " + haker2.length + " characters");
}
else if (haker1.name.length = haker2.length){
    console.log ("wow, you both got equally long names, " + haker1.name.length + " characters!!");
}
var hackertest;

for (let i=0 ;i < haker1.name.length;i++){
if(hackertest) {
     hackertest = hackertest + haker1.name.toUpperCase()[i] +" ";
}
else{
     hackertest = haker1.name.toUpperCase()[i] +" ";
}
}
console.log(hackertest);

var hackertest2;

for (let i=haker2.length ;i > -1 ;i--){
    if(hackertest2){
         hackertest2 = hackertest2 + haker2[i];
    }
    else{
         hackertest2 = haker2[i];
    }
    }
    console.log(hackertest2);

    if (haker1.name[0].localeCompare(haker2[0])<0) {
console.log("The driver's name goes first");
    }
else if (haker1.name[0].localeCompare(haker2[0])>0) {
    console.log("Yo, the navigator goes first definitely");
}
else if (haker1.name[0].localeCompare(haker2[0])===0) {
    console.log("What?! You both got the same name?");   
}