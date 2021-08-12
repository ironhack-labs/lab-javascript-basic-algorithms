//ITERATION 1
let hacker1 = "Jesus";
let hacker2 = "Alberto";
let hacker3 = "Pau";

console.log(hacker1);
console.log(`The navigators name is ${hacker2}`);



//ITERATION 2
if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}



//ITERATION 3
let result = "";
for(let i = 0; i<hacker1.length; i++){
  
  if(i==hacker1.length-1){
    result = result + hacker1[i];
    
  }
  else{
    result = result + hacker1[i]+" ";
    
  }
  
}
console.log(result.toUpperCase());



//BONUS 1.1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut sollicitudin turpis. Proin dictum tempus nisl, vitae tincidunt sem. Suspendisse purus sem, viverra a augue id, pulvinar molestie neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec lectus fringilla, condimentum ipsum ut, molestie nisl. Vestibulum ut ultricies leo. Vivamus eu magna non nibh consectetur semper sit amet sed libero. Praesent non ipsum vitae magna pulvinar facilisis. Proin nec imperdiet orci, quis maximus nibh. Maecenas vitae est sit amet lacus eleifend lobortis sit amet ut massa. Nunc rutrum mattis mauris nec tempus. Morbi pharetra, massa non eleifend finibus, urna neque maximus risus, a tempus ipsum velit a tellus. Cras condimentum ultrices sapien ac vestibulum.

Duis vel magna eget neque ornare tincidunt. Duis id tortor ac arcu tempus posuere in a lorem. In a sapien vehicula ligula tincidunt cursus ac vitae ipsum. In justo dui, ornare eu urna id, pulvinar pretium sapien. Donec enim sapien, volutpat vitae rhoncus quis, sodales porta ante. Quisque viverra suscipit placerat. Aliquam at ornare tellus, quis facilisis ipsum. Nunc posuere porta purus sodales varius.

Nunc porta non ligula in convallis. In rhoncus tristique pellentesque. Nunc a dolor ac urna tristique convallis sit amet nec diam. Aliquam egestas tempus leo nec porta. Suspendisse luctus gravida eros sed porta. Nunc porta vitae nunc sit amet hendrerit. Sed condimentum elit massa. Vestibulum eu nisi tincidunt, congue lorem sed, lobortis dui.`

function countLoremWords(str){
  
  str.split("\n");
  let result = str.split(" ");
  
  return result.length;
  
}
console.log(countLoremWords(lorem));



//BONUS 1.2
function countEt(str){
  let count = 0;
  for(let i = 0; i<str.length-2; i++){
    
    if(str[i]=="e" && str[i+1]=="t" && (str[i+2]==" " || str[i+2]==".")){
      count++;
    }
  }
  return count;
}
console.log(countEt(lorem));




//BONUS 2
function palindromeCheck(str){
  
  let palindrome = true;
  
  for(let i = 0; i<str.length/2; i++){
  
  if(str[i] != str[(str.length)-1-i]){
    palindrome = false;
    }
  }
    return palindrome;
}
let word = "arribalabirra";
console.log(palindromeCheck(word));