// Iteration 1: Names and Input

let hacker1 = 'Juan' // drivers name

console.log(hacker1)

let hacker2 = 'Daniel' // navigators name

console.log(hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
    console.log(hacker1 + ' has a longer name' + ' he has ' + hacker1.length + 
    ' letters in his name')
}
else if(hacker2.legnth > hacker1){

    console.log(hacker2 + ' has a longer name' + ' he has ' + hacker2.length + 
    ' letters in his name.' )
}
else{
    console.log('Wow, you both have equally long names ' + hacker1.length + ' letters.')
}
    
// Iteration 3: Loops

let string = "" // variable to store new string with spaces

for(let i = 0; i < hacker1.length; i++)
{
  string += hacker1[i] + " "
}
console.log(string.toUpperCase())

let str = ""
for (let j = hacker2.length - 1; j >= 0; j--)
{
  str += hacker2[j]
}
console.log(str)

for(let h = 0; h < hacker1.length && hacker2.length; h++)
{
  if(hacker1[h] < hacker2[h]) // Compares actuall char A != a
  {
    console.log ('Driver is first')
    break
  }
  else if (hacker2[h] < hacker1[h])
  {
    console.log('Navigator is first')
    break
  }
  else (hacker1[h] == hacker2[h])
  {
    console.log('Same name')
    break
  }
  
}



    
      
  
