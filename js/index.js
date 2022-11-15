// Iteration 1: Names and Input

console.log("I'm ready!");

const hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Manolo";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has de longest name, is ${hacker1.length} characters.`);
}

else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {console.log(`Wow, you both have equally long names, ${hacker2.length} characters. `);}

// Iteration 3: Loops


let inCapitalsDriver = "";

for (i=0; i<hacker1.length; i++){
  inCapitalsDriver += hacker1[i];
  if (i<hacker1.length-1) {inCapitalsDriver += " ";}
}

console.log(inCapitalsDriver.toUpperCase());

reverseHacker2 = "";


for (let i = hacker2.length - 1; i>=0; i--){
  reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);

if (hacker1.localeCompare(hacker2)<0){
    console.log(`The driver's name goes first.`);
  }
  
  else if (hacker1.localeCompare(hacker2)>0){
    console.log(`Yo, the navigator goes first definitely.`);
  }
  
  else {
    console.log(`What?! You both have the same name?`)
  }

  // Bonus 1

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus nisl ut lacus laoreet varius. Vestibulum convallis odio fringilla lacus eleifend hendrerit. Suspendisse blandit mi finibus magna vestibulum lobortis. Aenean volutpat turpis nibh, vitae convallis nibh malesuada eget. Proin porttitor nunc sed maximus placerat. Nam ornare viverra mauris a posuere. Donec varius orci porttitor sem sodales, viverra suscipit ante maximus. Morbi vitae tortor ut arcu aliquet tempor. Praesent eget elit ut est sagittis elementum. Aliquam erat volutpat. Praesent accumsan est ac neque ultrices blandit. Vestibulum condimentum justo nulla, non volutpat enim vestibulum mollis. Praesent felis justo, bibendum convallis lacus non, faucibus euismod nibh. Donec ultricies nisl arcu, nec eleifend lectus iaculis eget. Sed vehicula mattis ligula. Curabitur semper lorem vel vestibulum mattis. Cras finibus ligula odio, eget iaculis ligula molestie in. Curabitur et sem sed elit sagittis malesuada eu quis lectus. Cras porttitor nunc mi, in auctor lacus laoreet ac. Duis ac magna ut sapien aliquam imperdiet a ultrices tellus. Aenean luctus felis feugiat aliquam pulvinar. Integer luctus, mauris quis fringilla consequat, eros nulla malesuada nunc, in porta lectus quam at ex. Vestibulum convallis in lorem sed sodales. Pellentesque ultrices sapien vel maximus consequat. Vestibulum aliquet magna sed tortor tristique, id pretium elit venenatis. Mauris et velit a sapien tincidunt rhoncus sed at metus.";
  let counter = 0;
  let etCounter = 0;
  
  for (let i = 0; i<text.length; i++){
    if(text[i] === " "){
      counter++;
    }
    if (text[i] === "e" && text[i+1] === "t"){
      etCounter++;
    }
  }
  
  counter += 1;
  console.log(`Total of words: ${counter}`);
  console.log(`et has appeared ${etCounter} times.`);

    // Bonus 2

    let x = "Amor, Roma";
    x = x.toLowerCase(); 
    let newX = "";
    let res = '';
    
    for(let i = 0; i <  x.length; i++){
        if (x[i]!=" " && x[i]!="," && x[i]!="."){
          newX += x[i]}
      }
    
    for(let y = 0; y <  x.length; y++){
        if (x[y]!=" " && x[y]!="," && x[y]!="."){
          res = x[y] + res;}
      }
    
      if (res === newX){
        console.log("Yes, it's a PALINDROME");
        
      }else {
         console.log("Oups, there is no palindrome here.");
      }