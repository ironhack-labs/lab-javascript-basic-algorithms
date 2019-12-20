let  hacker1 = "Helen Chufe";
console.log("The driver's name is "+ hacker1);
let hacker2 = "Lola Mento"
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length) {
console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}else if (hacker2.length >  hacker1.length) {
console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
}else {
console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")

}
let stringhacker1 = "" ;
for(let i = 0; i < hacker1.length;i++ ){

 stringhacker1 = stringhacker1 +     hacker1[i] + " " ;

}
console.log(stringhacker1);

let stringhacker2 = "" ;
for(let i = hacker2.length -1 ; i >= 0  ;i-- ){

 stringhacker2 = stringhacker2 +  hacker2[i] ;

}
console.log(stringhacker2);

if (hacker1 < hacker2){
  console.log('The driver´s name goes first')
}else if(hacker1 > hacker2){
  console.log('The navigator goes first definitely')
}else{
  console.log('What?! You both got the same name?')
}

//BONUS

let loremstring = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Nibh praesent tristique magna sit amet purus gravida. Sed vulputate mi sit amet mauris commodo quis imperdiet. Id eu nisl nunc mi. Posuere urna nec tincidunt praesent semper. Pretium vulputate sapien nec sagittis. Euismod in pellentesque massa placerat duis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Condimentum mattis pellentesque id nibh tortor id. Massa id neque aliquam vestibulum morbi blandit cursus risus at. At varius vel pharetra vel turpis nunc eget. Vitae semper quis lectus nulla.Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nascetur ridiculus mus mauris vitae ultricies leo. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Tincidunt augue interdum velit euismod. Nisl suscipit adipiscing bibendum est ultricies integer quis. Magna etiam tempor orci eu lobortis. Viverra nibh cras pulvinar mattis nunc. Amet tellus cras adipiscing enim eu turpis egestas. Pellentesque habitant morbi tristique senectus et netus. Mattis vulputate enim nulla aliquet porttitor. At varius vel pharetra vel turpis nunc eget. Mattis aliquam faucibus purus in massa tempor nec. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tempus quam pellentesque nec nam aliquam sem et. Lacinia at quis risus sed vulputate. Elementum nibh tellus molestie nunc non blandit massa. Mattis pellentesque id nibh tortor.Sem nulla pharetra diam sit. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nec tincidunt praesent semper feugiat. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Rhoncus aenean vel elit scelerisque mauris. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Congue eu consequat ac felis donec et odio pellentesque. Dui accumsan sit amet nulla. Nulla porttitor massa id neque aliquam vestibulum. Pellentesque id nibh tortor id aliquet lectus. Neque convallis a cras semper auctor. Augue ut lectus arcu bibendum at varius. Vel risus commodo viverra maecenas. Cras pulvinar mattis nunc sed. Molestie ac feugiat sed lectus."


let numspaces = 0;
for(let i = 0; i <= loremstring.length; i++){

if (loremstring[i] == " "){
numspaces ++;
}

}
numspaces += 1;

console.log(numspaces);

let numlet = 0;
for(let i = 0; i <= loremstring.length; i++){

if (loremstring[i- 1] == " " && loremstring[i] == "e" && loremstring[i + 1] == "t" && loremstring[i+ 2] == " " ){
  
numlet ++;
}

}


console.log(numlet);


var phraseToCheck = "Amor  Roma";
let normal = "";
let reverted = "";

for(let i = phraseToCheck.length -1 ; i >= 0  ;i-- ){
reverted = reverted  + phraseToCheck[i].toLowerCase();


}
console.log(reverted); 

for(let i = 0  ; i < phraseToCheck.length  ;i++ ){
normal =   normal  + phraseToCheck[i].toLowerCase();
 

}
 console.log(normal);

if (reverted == normal){
console.log("La palabra  "  + phraseToCheck + " es capicua (Palindrome)");
}
