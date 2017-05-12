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


function OrderWords2(name1, name2) {
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();

  var times = name1.length;
  var result = "";
  if(name2.length < name1.length){
    times = name2.length;
  }

  for(var i = 0; i < times; i++){
    if(name1[i] < name2[i]){
      result = name1;
      break;
    }else if(name2[i] < name1[i]){
      result = name2;
      break;
    }
    else if(name1[i] === name2[i]){
      result = "";
    }
  }
  if(result === ""){
    console.log("Really? You have the same name");
  }else{
    console.log("Alphabetically " + result + " go first");
  }
}

orderWords2(hacker1, hacker2);


function orderWords3(name1, name2){

  // localeCompare es una función propia de Javascript
  // que devuelve -1 si el valor más alto es el de la izquierda
  // 1 si el valor más alto es el de la derecha y 0 si son iguales

  var result = name1.localeCompare(name2);
  if(result > 0){
    console.log("Alphabetically " + name2 + " go first");
  }else if(esult < 0){
    console.log("Alphabetically " + name1 + " go first");
  }else{
    console.log("Really? You have the same name");
  }
}

orderWords3(hacker1, hacker2);

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

function isPalindrome2(){
  var str = prompt("Insert a Palindrome");
  str = str.replace(/([.*,' ?¿!¡])/gi, "").toLowerCase();

  var strVolteada = reverse(str);

  if(str === strVolteada){
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }

}

isPalindrome2();

var Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus tincidunt neque. Ut eget elementum sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed egestas sapien ac luctus faucibus. Cras ullamcorper neque sit amet sodales tristique. Mauris sagittis malesuada rhoncus. In metus est, luctus vitae tempus id, congue nec enim. Nunc viverra mi et magna tristique, sit amet euismod lacus luctus. In feugiat, libero a condimentum aliquet, nunc quam posuere justo, vel tincidunt lacus nisi quis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras suscipit, tellus pulvinar lobortis euismod, nulla ante posuere nunc, eu hendrerit urna erat eget quam. Vivamus pulvinar nec lectus sit amet laoreet.";


function countWords(text){
  var words = text.split(" ");
  console.log("Hay" + words.length + "palabras");
}

countWords(Lorem);

function findEt(text){

  // la funcion match encuentra todos las coincidencias en la variable
  // con el parámetro que le pasamos en el paréntesis y lo incluye en
  // un array. 

  var regexp =/[a]/gi;
  var array_matches = text.match(regexp);

  console.log(array_matches.length);

}
