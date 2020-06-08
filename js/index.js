// Iteration 1: Names and Input
let hacker1= 'Jimyy'
console.log(hacker1)

let hacker2="Jimmy"
console.log(hacker2)

// Iteration 2: Conditionals
if(hacker2.length>hacker1.length){
  console.log('It seems that the navigator has the longest name, it has '+hacker2.length+' characters.')
} else if (hacker1.length>hacker2.length){
  console.log('The driver has the longest name, it has '+hacker1.length+' characters.')
} else {
  console.log('Wow, you both have equally long names, '+hacker1.length+' characters!')
}// end if/else

// Iteration 3: Loops
let result='';
for(let i=0; i<hacker1.length;i++){
  result += hacker1[i].toUpperCase()+" ";
}
console.log(result)

let result2='';
for(let i=hacker2.length-1; i>=0;i--){
  result2 += hacker2[i]+" ";
}
console.log(result2)

for(i=0; i<hacker1.length;i++){
  if(hacker1 == hacker2){
    console.log('What?! You both have the same name?')
    i=hacker1.length
  } else if(hacker1[i]<hacker2[i]){
    console.log("The driver's name goes first.")
  } else if(hacker2[i]<hacker1[i]){
    console.log("Yo, the navigator goes first definitely.")
  }
}

//Bonus
let lipstring="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat. Ipsum dolor sit amet consectetur adipiscing. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Natoque penatibus et magnis dis. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Posuere urna nec tincidunt praesent semper feugiat nibh. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Consectetur a erat nam at lectus urna duis convallis. Orci eu lobortis elementum nibh tellus. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Placerat duis ultricies lacus sed turpis. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Interdum velit euismod in pellentesque massa placerat duis. \n\n Sed pulvinar proin gravida hendrerit. Aliquam nulla facilisi cras fermentum. In egestas erat imperdiet sed. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Morbi tincidunt augue interdum velit euismod. Leo in vitae turpis massa sed elementum tempus egestas. Viverra accumsan in nisl nisi. Mauris pharetra et ultrices neque ornare. Donec enim diam vulputate ut pharetra sit amet. Scelerisque varius morbi enim nunc faucibus. Vel turpis nunc eget lorem dolor sed viverra ipsum. Tristique risus nec feugiat in. \n\n Ut etiam sit amet nisl purus in. Sit amet cursus sit amet. Dolor sit amet consectetur adipiscing elit duis. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ac felis donec et odio pellentesque. Amet porttitor eget dolor morbi non arcu risus. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Tortor consequat id porta nibh venenatis cras sed. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Sed nisi lacus sed viverra. ";
let cntTotal=0;
let cntEt=0;
let etFind=lipstring.split(" ");

//counts ET
for(i=0; i<etFind.length;i++){
  if(etFind[i].toLowerCase()== "et"){
    cntEt+=1;
  }
}

//counts total words in string
for(i=0; i<lipstring.length;i++){
  if(lipstring[i]=== " "){
    cntTotal+=1;
  }
}

//returns word and et count.
console.log('Total words in string: '+cntTotal);
console.log('Et count is: '+cntEt)


//BONUS 2 Using loops instead of split
let palString="Amor, Roma"
let res=''
let resReverse=''

//Split initial string and reverse string
for(i=0;i<palString.length;i++){
  if(palString[i]!=' ' && palString[i]!= ','){
    res+=palString[i].toLowerCase()
  }
}
for(i=res.length-1;i>=0;i--){
  resReverse+=res[i]
}

//Validate Palidrome
if(res == resReverse){
  console.log(palString+": Is a Palindrome")
} else {
  console.log(palString+": Not a Palindrome")
}