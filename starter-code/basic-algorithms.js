// Names and Input
hacker1 = 'John';
console.log("The driver's name is " + hacker1);

hacker2 = prompt("What is the navigator's name : ")
console.log("The navigator's name is " + hacker2);







//Conditionals

a = hacker1.length;
b = hacker2.length;

longest = "";
if (a > b){
    console.log('The driver has the longest name, it has ' + a + ' characters.');
    longest = a;
} else if (a < b ) {
    console.log('Yo navigator got the longest name, it has ' + b + ' characters.');
    longest = b;
} else {
    console.log('Wow, you both have equally long names' + a + ' characters!');
    longest = 0;
}

i = 0
name_space = ""
hacker1 = hacker1.toUpperCase()
while (i < a){
name_space += hacker1[i] + " " ;
i += 1
}
console.log(name_space)

reverse = ""
for (var i = 0; i <= a -1; i++){
  reverse += hacker1[a-1-i];
}
console.log(reverse)







if (longest === a){
    for (var i = 0; i < b; i++){
      if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
        console.log("The driver's name goes first");
        break;
      } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
        console.log("Yo, the navigator goes first definitely");
        break;
      } else {
        console.log("Yo, the navigator goes first definitely");
      } 
    } 
  
  } else if (longest === b){
      for (var i = 0; i < b; i++){
        if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
          console.log("The driver's name goes first");
          break;
        } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
          console.log("Yo, the navigator goes first definitely")
          break;
      } else {
        console.log("The driver's name goes first");
      }
    } 
  
  } else {
      for (var i = 0; i < b; i++){
        if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
          console.log("The driver's name goes first")
          break;
        } else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
          console.log("Yo, the navigator goes first definitely");
          break;
      }
    }
  console.log("Same name");
  }






// Lorem ipsum generator
var check = prompt('Enter a string : ')
l = check.length;
check = check.toLowerCase()

for (var i = 0; i < l; i++){
    check = check.replace(/ /i, '');
    check = check.replace(/,/i, '');
  } 

i = 0
while (check[i] === check[l-1-i] && i < l-1){
  i+=1
}
if (i != l-1){
  console.log('Not a palindrome')
} else {
  console.log('Is a palindrome')
}