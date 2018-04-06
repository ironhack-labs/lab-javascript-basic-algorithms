 var hacker1 = "drivername"
 console.log(hacker1);

 var hacker2= prompt ("Navigator's name:  ");
 console.log("The navigators name is:" + hacker2)

 if (hacker1.length > hacker2.length) {
   console.log("The driver has the longest name. it has " + hacker1.length + " characters");
 }
  else if (hacker2.length > hacker1.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.legnth + " characters")
  }

  else {
    console.log("wow, you both got equally long names, " + hacker1.length || hacker2.length + "characters!!")
  };

  var capital = hacker1.toUpperCase();
  var split = capital.split("").join(' ');
  console.log(split)

  var splitReverse = hacker2.split("");
  var reverseName = splitReverse.reverse();
  var joinName = splitReverse.join("");
    console.log(joinName)
  
  if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first");
  }  
    else if (hacker1 === hacker2) {
      console.log("What?! You both got the same name /?");
    }
    else {
      console.log ("Yo, the navigator goes first definitely")
    }  ;    

