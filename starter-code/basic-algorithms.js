// Names and Input
var hacker1 ="Baby";
console.log("The driver's name is " + hacker1);

var hacker2=prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker1.length < hacker2.length){
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
else{
  console.log('wow you both got equally long names, '  + hacker1.length + ' characters!!')
}

var caps=""
for (var j=0; j<hacker1.length; j++){
  caps += hacker1[j].toUpperCase() + " "
}
console.log(caps);

var backwards="";
for (var i=(hacker2.length)-1; i>-1; i--){
  backwards += hacker2[i];
}
console.log(backwards)


if(hacker2.length<=hacker1.length){
  for(var k=0; k<hacker2.length; k++){
    if (hacker1[k]<hacker2[k]){
      console.log("The driver's name goes first");
      break;
    }
    else if(hacker1[k]>hacker2[k]){
      console.log('Yo the navigator definitely goes first ');
      break;
    }
    else if(hacker1[k]===hacker2[k] && k===(hacker2.length-1)){
      console.log("What?! You both got the same name?");
    }
  }
  }
  else{
    for(var k=0; k<hacker1.length; k++){
    if (hacker1[k]<hacker2[k]){
      console.log("The driver's name goes first");
      break;
    }
    else if(hacker1[k]>hacker2[k]){
      console.log('Yo the navigator goes first definitely');
      break;
    }
    else if(hacker1[k]===hacker2[k] && k===(hacker2.length-1)){
      console.log("What?! You both got the same name?");
    }
  }
  }

// Lorem ipsum generator
