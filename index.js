// Iteration 1: Names and Input
 const hacker1 = "Tom"
 console.log("The driver's name is",hacker1)

 const hacker2 = "Google Maps" 
 console.log("The navigator's name is",hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
   console.log("The driver has the longest name, it has", hacker1.length ,"characters.")
}
else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has", hacker2.length ,"characters.")
}
else {
    console.log("Wow, you both have equally long names, XX characters!")
}



// Iteration 3: Loops

let result1='';

for(i= 0 ; i < hacker1.length  ; i++){
   result1 += hacker1[i].toUpperCase() + " ";
}
result1 = result1.slice(0,result1.length-1)

console.log(result1)

let result2="";
for( i = hacker2.length - 1 ; i >= 0 ; i--){
    result2 += hacker2[i]   
}
console.log(result2)





// iteration 3.3

if (hacker1.toLowerCase() > hacker2.toLowerCase() ){
    console.log("Yo, the navigator goes first, definitely.")
}
else if (hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log("The driver's name goes first.")
}
else {
    console.log("What?! You both have the same name?")
}   









/*
if ( hacker1.length > hacker2.length){
  for ( i=0 ; i < hacker2.length; i++){
    if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase() ){
       console.log("Yo, the navigator goes first, definitely.")
       break;
    }
    else if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()){
        console.log("The driver's name goes first.")
        break;
    }
    else {
        console.log("Yo, the navigator goes first, definitely.")
        break;
    }
  }
}  
else if(hacker1.length < hacker2.length){
    for ( i=0 ; i < hacker1.length; i++){
    if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase() ){
        console.log("Yo, the navigator goes first, definitely.")
        break;
    }
    else if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()){
        console.log("The driver's name goes first.")
        break;
    }
    else {
        console.log("The driver's name goes first.")
        break;
    }
    
    }
}
else {
    for ( i=0 ; i < hacker2.length; i++){
    if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase() ){
        console.log("Yo, the navigator goes first, definitely.")
        break;
    }
    else if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()){
        console.log("The driver's name goes first.")
        break;
    }
    else {
        console.log("What?! You both have the same name?")
        break;
    }   
    
    }
} 

*/








// Bonus 1:

const alphastring = "abcdefghijklmnopqrstuvwxyz"
const Punctuation = ",;.: \n"

 const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mauris justo. Etiam lobortis sed neque vel volutpat. Donec gravida mollis lorem eget volutpat. Nullam velit libero, luctus sed ligula eget, ultrices fermentum metus. Suspendisse tristique lorem non mauris eleifend commodo. Quisque auctor quam sit amet ipsum varius, in malesuada augue tincidunt. Nulla fermentum est quam, id accumsan est cursus at. Duis quis bibendum mauris. Phasellus in dolor quam. Aliquam erat volutpat. Curabitur dictum mauris elit, sed ultrices erat bibendum vel.\n\nPellentesque auctor turpis id libero lobortis, sed vestibulum nibh lobortis. Duis sed blandit eros. Ut eu est sed enim lobortis ornare. In a venenatis dolor. Morbi vitae volutpat metus. Proin convallis, lorem a finibus gravida, ante libero semper ex, ultrices tempus libero ex ultrices tortor. Fusce porta, quam ut scelerisque ultricies, magna neque pharetra neque, vel tempor libero diam sed urna. Donec aliquet eu diam et bibendum. Nullam ac libero ac risus porta euismod sit amet vel eros.\n\nVestibulum consequat ipsum id neque porta, vel pharetra ex ornare. Pellentesque in elit bibendum, feugiat dui in, efficitur ipsum. Nam at elit ornare, molestie libero ut, convallis purus. Vestibulum condimentum mollis ullamcorper. Curabitur orci nibh, pretium in justo sed, volutpat elementum mauris. Vivamus sollicitudin faucibus sem ac posuere. Aliquam finibus lectus feugiat orci volutpat malesuada. Cras ac lacinia libero. Phasellus semper, augue a dictum semper, ipsum odio aliquet sem, a tempor ante enim congue augue. Nulla ac mauris ac felis ultrices pharetra. Donec erat turpis, pharetra eget bibendum nec, aliquet sit amet purus."


let countWord = 0 ;
let countEt = 0 ;


for(i=0 ; i < longText.length-2 ; i++){
    if( alphastring.includes( longText[i].toLowerCase() ) 
        && alphastring.includes( longText[i+1].toLowerCase() ) 
        && Punctuation.includes( longText[i+2] ) ) {    
          countWord ++
      }
  }
  
  
  for(i=0 ; i < longText.length - 3 ; i++){
      if(  ( Punctuation.includes( longText[i]) ) && (longText[i+1] === "e") 
      && ( longText[i+2] === "t" ) && ( Punctuation.includes( longText[i+3] ) ) ) {
          countEt ++
        }
    }
  
    console.log(countWord)
    console.log(countEt)















// Bonus 2:


const alphstring = "abcdefghijklmnopqrstuvwxyz"

const expression1 = "Amor, Roma"

let cleanstring ="";
let isPalindrome = true ;


for (i= 0 ; i < expression1.length ; i++){
  if( alphstring.includes( expression1[i].toLowerCase()) ){
    cleanstring += expression1[i].toLowerCase()
  }
}




if ( cleanstring.length % 2 === 0 ) {
   for (i=0 ; i < cleanstring.length/2 ; i++){
    if (cleanstring[i] === cleanstring[cleanstring.length -1 -i]){
         continue
    }
    else{
        x = false
    }

   }

}
else {
    for (i=0 ; i < Math.floor(cleanstring.length/2) ; i++){
        if (cleanstring[i] === cleanstring[cleanstring.length-1-i]){
             continue
        }
        else{
            x= false
        }
    
       }

    }
 
console.log( "Ist Palindrome ?  : ", isPalindrome  )


