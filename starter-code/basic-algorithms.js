console.log("I'm ready");

hacker1 = "James";

console.log("The driver's name is " + hacker1);

hacker2 = prompt("What's the navigator name?");

console.log("The navigator's name is " + hacker2);



if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has "+hacker1.length +" characters");
}else{
  if(hacker2.length === hacker1.length){
      console.log("wow, you both got equally long names, "+ hacker1.length +" characters!!");
  }else{
     console.log("The Navigator has the longest name, it has "+hacker2.length +" characters");
  }
}




function splitAndUpper(str){
  var name = "";
  for(i=0; i< str.length; i++){
    name += str[i] ;
    name += " ";
  }

  console.log(name.toUpperCase());
}

splitAndUpper(hacker2);




function reverse(name){
  var reverse = " ";
  var times = name.length-1;

  for(i=times; i>=0; i--){
    reverse += name[i];
  }
  console.log(reverse);
}

reverse(hacker2);



function orderWords(name1, name2){
  var letters = "abcdefghijklmnñopqrstuvwxyz";
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();

  var times = name1.length;

  if(name2.length < name1.length){
    times = name2.length;
  }

  var orderName1 = "";
  var orderName2 = "";

  for(i=0;i<=times-1; i++){
      orderName1 += (letters.indexOf(name1[i]) +".");
      orderName2 += (letters.indexOf(name2[i])+".");
  }

  if(orderName1 > orderName2){
    console.log("Alphabetically " + name2 + " go first");
  }else if(orderName1 < orderName2){
    console.log("Alphabetically " + name1 + " go first");
  }else if(orderName1 === orderName2){
    console.log("Really? You have the same name");
  }
}

orderWords(hacker1, hacker2);



function isPalindrome(){
  var str = prompt("Insert a Palindrome");
  str = str.replace(/([.*,' ?¿!¡])/gi, "");
  var times = Math.floor(str.length/2);

  var first = "";
  var second = "";

  for (i=0; i<times; i++ ){
    first += str[i];
    second += str[(str.length-1) - i];

  }

  if(first.toLowerCase() === second.toLowerCase()){
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }

}

isPalindrome();
