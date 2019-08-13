// Names and Input
let hacker1 = "Cristopher"
console.log("The Driver's name is " + hacker1)
let hacker2 = prompt ("Enter your name")
console.log("The Navigator's name is " + hacker2)
let palindromo = prompt ("Escribe un palindromo")



//Conditionals
if (hacker1.length > hacker2.length){
    console.log("The Driver has the longest name, it has "+ hacker1.length +" characteres")
  }else if (hacker1.length < hacker2.length){
    console.log("The Navigator has the longest name, it has "+ hacker2.length +" characteres")
  }else {
    console.log("wow, you both got equally long names " + hacker1.length +", characteres!!")
  }
  let hacker3 =hacker1.toUpperCase()
  hacker3= hacker3.split('')
  
  let espacios = ''
  for(let i= 0; i<hacker3.length; i++){
    espacios += hacker3[i]+ ' '
  }
  console.log(espacios)
  
  let espacios2 = ''
  for(let i= hacker2.length-1; i>=0; i--){
    espacios2 += hacker2[i]+ ' '
  }
  console.log(espacios2)
  
  let ordenalfa= hacker1.localeCompare(hacker2) 
  if(ordenalfa===-1){
    console.log("The driver's name goes first ")
  }else if (ordenalfa===1){
    console.log("yo, the navigator goes first definitely")
  } else{
    console.log("what!? you both got the same name?")
  }
  
 
  
  function palindrome (palindromo){
    let remove = palindromo.replace(/[^A-Z0-9]/ig,'').toLowerCase();
  
    let check = remove.split('').reverse().join('');
  
    if (remove === check){
      console.log(palindromo + " it's a palindrome")
    } else {
      console.log(palindromo + " isn't a palindrome")
    }
  }
  palindrome (palindromo)

// Lorem ipsum generator
