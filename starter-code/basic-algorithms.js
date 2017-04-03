var hacker1 = "Marc";
var hacker2 = "";
hacker2 = prompt("What´s is the navigator´s name");
  console.log("The navigator´s name is " + hacker2);
if(hacker1.length > hacker2.length){
  console.log("the driver´s has the longuest name it has " + hacker1.length + " characters");

}else if( hacker1.length < hacker2.length){
  console.log("yo, navigator got the longuest name, it has "+ hacker2.length + " characters");

  console.log("wow, you both got equally long names, "+ hacker1.length +" characters");
}else{
}
  /*var seperator = "", result1 = "";

  //for(var i =0; i < hacker1.length; i++){


  result1 =  hacker1.split(seperator);
  console.log(result1);
  */

  for (var i=0; i<hacker1.length; i++){
   var hacker1Up = hacker1.toUpperCase();
    document.write(hacker1Up[i] +" ");


  }
  /*function separateUppercase(hacker1){
    var x= 0;
    var separateName = "";

    while (x<hacker1.length){
      separateName = separateName + hacker1.charAt(x);
      x++;
    }
    return separateName;
  }


  separateUppercase(hacker1);*/


  function invertWord(hacker2){
    var x=hacker2.length;
    var chainHacker2 = "";

    while(x>=0){
      chainHacker2=chainHacker2 + hacker2.charAt(x);
      x--;
    }
    document.write(chainHacker2);
  }
  invertWord(hacker2);



  /*var newArray = [hacker1, hacker2];
  function alfabet() {
    newArray.sort();
    if (hacker1 == newArray[0]){
      console.log("The driver's name goes first "+ hacker1);
    }else if(hacker2 == newArray[0]){
      console.log("Yo, the navigator goes first definitely "+ hacker2);

    }else{
      console.log("What?! You both got the same name?");
    }
    console.log(newArray);
  }
  alfabet();*/
  var array = [hacker1, hacker2];
console.log("Unordered array ---", array, "------------‘");

array.sort(function(a,b) {
   a = a.toLowerCase();
   b = b.toLowerCase();
   console.log("Compare " + a + " and " + b );

   if( a == b) {
       console.log("Both are the same");
       return 0;
   }
   if( a > b) {
       console.log("Comparison result, 1 --- move "+b+" to before "+a);
       return 1;
   }
   console.log("Comparison result, -1 --- move "+a+" to before "+b+" ");
   return -1;


});

console.log("Ordered array ---", array, "------------");

// return logic
// Lorem ipsum generator
