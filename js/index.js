// Iteration 1: Names and Input
// 
const hacker1 = 'Sinuhe';
console.log( `The driver's name is ${hacker1}`);
const hacker2= "Abril";
console.log( `The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker1.length < hacker2.length){
    console.log(
      `It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`
      )
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names,it has ${hacker1.length} characters!`)}
  
// Iteration 3: Loops
for(let i=0; i<hacker1.length; i++){
  console.log(hacker1[i].toUpperCase()); 
 }

 for(let i=hacker2.length; i >= 0; i--){
  console.log(hacker2[i]); 
 }
 
 if(hacker1.localeCompare(hacker2) === -1 ){
  console.log(`The driver's name goes first.`);
}else if(hacker2.localeCompare(hacker1) === -1){
 console.log(`Yo, the navigator goes first definitely.`);
}else{
console.log(`What?! You both have the same name?`);
}
 //

 //BONUS 1==========================
 const textLatin = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sapien dolor. Ut faucibus vitae turpis nec rhoncus. Vestibulum sit amet porta lacus, quis dictum ex. Donec non faucibus tortor, sit amet vestibulum dolor. Cras faucibus condimentum leo nec vestibulum. Maecenas commodo commodo enim ut vehicula. Donec sit amet maximus dui. Donec eu viverra nisi. Curabitur vulputate risus urna, non iaculis libero viverra nec. Duis eget augue diam. Phasellus scelerisque maximus pulvinar. Sed in risus ultrices, gravida libero hendrerit, consequat ipsum. Proin lacinia dignissim lorem, quis facilisis lectus viverra ac. Maecenas vehicula scelerisque velit, sed eleifend urna vehicula a.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi eu lorem sed ligula sollicitudin rhoncus id vitae mi. Etiam id elementum quam. Sed dapibus arcu id auctor pulvinar. In fringilla, mauris aliquet accumsan lacinia, arcu elit ultrices nulla, a pharetra neque ex vitae turpis. Suspendisse fermentum, diam vel dapibus blandit, tortor urna posuere tellus, quis porttitor odio nunc vel dolor. Donec non sodales eros, et congue urna. Aenean ipsum nisl, hendrerit eget molestie quis, aliquam sed tellus. Mauris convallis, eros sit amet dictum lacinia, massa nulla placerat nunc, facilisis rutrum orci nisi vitae eros. Morbi molestie quam viverra, sollicitudin ipsum lacinia, molestie ex. Curabitur elementum augue vulputate, ornare massa eget, viverra arcu. Fusce et velit dignissim, aliquet felis non, consectetur enim. Fusce a rhoncus metus, non iaculis eros. Donec eleifend urna eget fringilla dictum.

Morbi dapibus venenatis commodo. Praesent rhoncus odio vel elit sodales viverra. Nullam a ipsum ut ipsum pulvinar pellentesque eget at nibh. Nulla rutrum erat enim. Etiam id nibh viverra, elementum turpis nec, cursus erat. Nulla a consectetur urna. Curabitur vitae tellus odio.`

console.log(textLatin.split(" ").length);

function counEt (anyText){
  let count = 0;
 for (let i = 0; i < anyText.length; i++) {
   let letterOne=anyText[i];
   let letterTwo=anyText[i+1];
   if ( letterOne === "e" && letterTwo === "t" ){
     count++;
   }else{
     count;
   }
 };
console.log(count);
}

counEt(textLatin);

//BONUS 2==========================

