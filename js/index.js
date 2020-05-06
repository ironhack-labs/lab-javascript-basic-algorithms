var hacker1 = "Jurgen";
var hacker2 = "Monika";
var countName1 = 0;
var countName2 = 0;
var name1 = "";
var name2="";

var lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nibh placerat, commodo mi et, lobortis quam. Vestibulum pellentesque est nec nibh dignissim tristique vitae quis massa. Integer placerat interdum dolor. Phasellus in sodales mi. Quisque gravida est porttitor, feugiat nibh ut, accumsan magna. Sed rutrum mollis dolor, a vulputate magna tincidunt sit amet. Sed vitae ornare augue et.";

console.log(`The driver name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2}`);

for (let i = 0; i<hacker1.length; i++){
  countName1 = countName1+1;  
}
console.log (countName1);

for (let i = 0; i<hacker2.length;i++){
  countName2 += 1;
}
console.log(countName2);

if (countName1>countName2){
  console.log(`The driver has the longest name, it has ${countName1} characters`);
}else if (countName2>countName1){
   console.log(`It seems that the navigator has the longest name, it has ${countName2} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${countName1} characters!`) ;
}

for (var i =0; i<hacker1.length; i++){
  var name1 =  name1 + hacker1[i] + " ";
  name1 = name1.toUpperCase();
  }
console.log(`${name1}`);


for (let i = hacker2.length -1; i>=0 ;i--){
  name2 += hacker2[i];
}

console.log(name2);


function lexo(name1,name2){

for (let i=0; i<name1.length; i++){
     if (name1 === name2){
    console.log (`you have the same name`);
   break;
 }
 else if (name1[i]<name2[i]){
  console.log(name1);
   break;
}
  else if (name1[i]>name2[i]) {
    console.log(name2);
     break;}


}}
lexo(hacker1,hacker2);
lexo(hacker2,hacker1);




function checkString(data){
  
  let total = 0;
   for (let i=0; i<data.length;i++){
     if ( data[i]==='e' && data[i+1]==='t' && data[i-1]===' ' && data[i+2]===' '){
         
         total = total+1;
         }
     
   } return total;
}

console.log(checkString(lorem));



function phraseToCheck(sentence) {
  
  sentence = sentence.toLowerCase();
  
  for (let i= 0; i<sentence.length;i++ ){
    if(sentence[i]< "a" && sentence[i]> "z"){
      
      console.log(sentence[i]);
    }
    
  }
  
  
}
