// Names and Input
var hacker1 = "pepe";
console.log("The driver's name is "+ hacker1);

var hacker2 = prompt("name:");
console.log("The navigato's is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has "+ hacker1.length +" characters");
}else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has "+ hacker2.length +" characters");    
}else{
  console.log("wow, you both got equally long names, "+ hacker2.length +" characters!!");
}


// Lorem ipsum generator
var name="";
for(var i = 0; i < hacker1.length; i++){
  name += hacker1[i].toUpperCase()+ " ";
}
console.log(name);

name="";
for(var i = hacker1.length-1; i >= 0; i--){
  name += hacker1[i];
}
console.log(name);

var flag = true;
var counter = 0;

while(flag && hacker1.length > counter && hacker2.length > counter){
  flag = hacker1[counter] === hacker2[counter];
    if(!flag){
        if(hacker1[counter] < hacker2[counter]){
            console.log("The driver's name goes first");
        }else{
            console.log("Yo, the navigator goes first definitely");
        }
    }
  counter++;
}
//console.log(flag);
if(hacker1.length < hacker2.length && flag){
  console.log("The driver's name goes first");
}else if(hacker1.length > hacker2.length && flag){
  console.log("Yo, the navigator goes first definitely");
}else if(hacker1.length === hacker2.length && flag){
  console.log("What?! You both got the same name?");
}



flag=false; 
while(!flag){
    var reverse="";
    var palindrome = prompt("Write a sentence or stop if you surrender: ");
    //palindrome = palindrome.trim();
    palindrome = palindrome.replace(/,/g, ' ').trim();
    console.log(palindrome);
    if(palindrome !== "stop"){
        for(var i= palindrome.length-1; i >=0; i--){
            reverse += palindrome[i];
        }

        if(palindrome === reverse){
            console.log("Palindrome!");
            flag=true;
        }else{
            console.log("Try again");
        }
    }else{
        flag = true;
    }
}


var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed pharetra nisl. Nunc tristique tempor justo quis mattis. Vestibulum pulvinar ornare ornare. Quisque sit amet suscipit magna, vel congue nisi. Fusce quis lectus at dolor dictum efficitur vel ac lacus. Praesent sed eros mauris. Nunc sit amet posuere leo, volutpat aliquet odio. Mauris iaculis ut nisi sed eleifend. Pellentesque in augue augue. Donec lectus mauris, faucibus porttitor tincidunt ut, bibendum pharetra erat. Aliquam sagittis sed velit vel consectetur. Ut accumsan vel nisi at interdum."+

"Fusce nec arcu cursus odio rhoncus interdum. Vivamus id augue a nulla aliquet pulvinar quis et neque. Suspendisse finibus non metus nec ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris velit libero, cursus id gravida id, maximus ac tortor. Sed pharetra ligula eu nisi egestas, sed rutrum quam lacinia. Donec porttitor porttitor libero, vitae pellentesque purus ornare ut. Morbi viverra felis id odio cursus ullamcorper. Cras efficitur ipsum sit amet mauris aliquet, ac auctor massa scelerisque. Donec vitae leo odio. Nunc finibus, augue luctus pellentesque mollis, ante nulla placerat elit, vitae feugiat ante risus id leo."+

"Pellentesque eget placerat augue. Integer suscipit egestas molestie. Mauris auctor dolor sit amet hendrerit iaculis. Etiam porttitor suscipit purus, id placerat lorem luctus eu. Donec a lacus fermentum, lacinia tellus a, ultricies lacus. Aenean gravida sed arcu in mattis. Nulla tortor massa, semper eu egestas ultricies, fringilla ac magna. Integer scelerisque magna a diam venenatis volutpat. Integer varius bibendum ipsum non posuere. Sed sed diam eget tellus rutrum egestas. Cras augue augue, elementum id nulla aliquet, dictum fringilla mi. Sed libero nunc, viverra at pharetra eu, pretium ac nisl. Donec placerat eleifend sapien, in euismod neque pretium ac. Ut ex urna, eleifend id purus vitae, aliquam maximus odio. Sed massa orci, dictum cursus semper ut, tristique non dui. Duis leo neque, congue at suscipit in, congue sed ipsum.";
var words=0;
var etNumber=0;
for(var i=0; i<paragraphs.length; i++){
    if(paragraphs[i]===" " || (paragraphs[i]==="." && paragraphs[i+1]!==" ")){
       words++;
    }else if((paragraphs[i-1] === " " || paragraphs[i-1]=== "." || paragraphs[i-1]=== "," || paragraphs[i-1] == null) && (paragraphs[i+2] === " " || paragraphs[i+2] === "." || paragraphs[i+2] === "," || paragraphs[i+2]==null) && (paragraphs[i]==="e" || paragraphs[i]==="E") && (paragraphs[i+1]==="t" || paragraphs[i+1]==="T")){
        etNumber++;
    }
    
    
}
console.log("The number of words is: " +words);
console.log("The number of et is: " +etNumber);