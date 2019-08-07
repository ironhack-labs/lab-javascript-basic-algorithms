// Names and Input
var hacker1 = "loup"
console.log("The driver's name is ", hacker1);

var hacker2= prompt()
console.log("The navigator's name is :", hacker2);


//Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has ", hacker1.length, " characters");
  }
else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has ", hacker2.length, " characters");  
}
else {
  console.log("wow, you both got equally long names, ", hacker1.length ," characters!!");
}

var capName = "";
for (let i = 0; i < hacker1.length; i++) {
  capName += hacker1[i] + " ";
  console.log(hacker1[i]);
}
console.log(capName.toUpperCase());

var rNavName = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  rNavName += hacker2[i];
}
console.log(rNavName);
hacker1= hacker1.toLowerCase();
hacker2= hacker2.toLowerCase();

if (hacker1.length >= hacker2.length) {            //   loup  loua lenght =4
  for (i=0; i < hacker2.length; i++) {             //   i=0; i=1; i=2; i=3
    if (hacker1[i] < hacker2[i]) {                  //   l=l   o=o u=u   p>a
    console.log("The driver's name goes first");
      break;
    }
    else if (hacker2[i] < hacker1[i]) {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
    else if (i == hacker2.length-1 && hacker1[i]===hacker2[i]) {
      console.log("What?! You both got the same name ?");
    }
    else {
      continue;  
    }

  }
}
else if (hacker1.length<hacker2.length) {
  for (i=0; i<hacker1.length; i++) {
    if (i == hacker1.length-1 && hacker1[i]===hacker2[i]) {
      console.log("What?! You both got the same name ?");
    }
    if (hacker1[i] < hacker2[i]) {
      console.log("The driver's name goes first");
      break;
    }
    else if (hacker2[i] < hacker1[i]) {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
    else {
      continue;  
    }

  }
}

// Palindrome

var newString= prompt();
newString2 = newString.toLowerCase()
newString2 = newString.replace(".", "");
newString2 = newString.replace("!", "");
newString2 = newString.replace("?", "");
newString2 = newString.replace(":", "");

for (let i = 0; i < newString2.length/2; i++) {
  if (newString2[i] != newString2[newString2.length-1-i]) {
    console.log("This is not a palindrome");
    break;
  }
}



// Lorem ipsum generator


loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum porta, mollis nulla varius, aliquam orci. Suspendisse arcu felis, bibendum id magna vel, porta tristique nulla. Morbi mauris velit, faucibus nec tellus nec, placerat accumsan quam. Nam ut est lobortis, cursus nibh a, congue enim. Vivamus sapien sem, elementum eget tristique ut, iaculis in mauris. Mauris tempus at turpis ac sagittis. Integer et commodo turpis, sit amet varius risus. Morbi rutrum sit amet quam quis auctor. Etiam egestas lacinia lorem, et tempor turpis. Suspendisse at euismod velit. Nam quis imperdiet nulla. Nullam consectetur vehicula convallis. Morbi sed bibendum eros. Nullam vitae lorem turpis. Aliquam arcu nibh, pharetra sit amet turpis a, convallis varius lectus. Praesent mi ipsum, condimentum ac magna ac, dignissim euismod ex. Sed ultricies turpis vel lacinia varius. Maecenas nec consectetur lacus. Aliquam erat volutpat. Nullam posuere eleifend elit ut consectetur. Ut rutrum condimentum lectus, sed ultrices purus ultricies ac. Duis vel aliquet velit. In aliquet nunc ullamcorper quam mattis, ac efficitur felis rhoncus. Aenean pharetra pretium ornare. Praesent commodo congue ipsum, vitae placerat lectus mattis eu. Nullam accumsan malesuada dui, nec tincidunt lacus volutpat id. Donec bibendum tortor in risus facilisis, at finibus nisi aliquam. Integer luctus finibus ultrices. Proin varius odio eget nibh tincidunt semper. Praesent non scelerisque ex, imperdiet gravida massa."

var numberOfWords = 1;
for (let i=0; i < loremStr.length; i++)
  if (loremStr[i] == " ") {
    numberOfWords +=1;
  }
console.log(numberOfWords);

loremStr=  loremStr.toLowerCase()
etCounter = 0;
for (let i=0; i < loremStr.length; i++) {
  if (i == loremStr-1) {
    break;
  }
  else if (i == 0 && loremStr[i] == "e" && loremStr[i+1] == "t" && loremStr[i+2] == " ") {
    etCounter+=1
  }
  if (loremStr[i] == "e" && loremStr[i-1] == " " && loremStr[i+1] == "t" && loremStr[i+2] == " ")
  etCounter +=1 ;
}
console.log(etCounter);
