// Names and Input
let hacker1 = 'Parangaricutirimicuaro'
console.log(hacker1)

let hacker2 = prompt ('Tell me your name') // Usamos Parangaricutirimicuara
console.log(`The navigator's name is: ${hacker2}`)
//Conditionals
if (hacker1.length === hacker2.length)
console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')

else 

if (hacker1.length > hacker2.length)
console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters.')

else 
console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters.')
// Lorem ipsum generator

let i = 0
while (hacker1.charAt(i) === hacker2.charAt(i))
i++

if (i === hacker1.length)
console.log('What?! You both got the same name?')

else 

if(hacker1[i] < hacker2[i])
console.log('The driver\'s name goes first')

else 
console.log('Yo, the navigator goes first definitely')
//Bonus


let itsPalindrome = prompt('Give me a word')
let var1 = ''

for (i = itsPalindrome.length-1; i >= 0; i--)
var1 += itsPalindrome.charAt(i)

console.log(var1)

let j = 0
let k = var1.length

if (itsPalindrome.length === var1.length)
while (j < itsPalindrome.length && itsPalindrome.charAt(i) === var1.charAt(k)){
  j++
  k--
}
else 
console.log("It´s not a palindrome!!")

if(j === itsPalindrome.length-1)
console.log('It´s a palindrome!!')

let lor = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec metus nunc. Morbi sit amet est ante. Etiam aliquet consequat orci a lobortis. Sed mattis viverra enim, in sagittis purus commodo ac. Quisque commodo interdum turpis, a cursus leo maximus id. Phasellus eleifend, quam non dapibus maximus, justo elit vestibulum diam, at mollis dui nulla eu velit. Vestibulum a nisi tellus. Suspendisse eget mauris orci. Vivamus ac varius tellus. Curabitur venenatis lacus id tellus efficitur placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque dapibus pulvinar augue, quis cursus enim maximus sit amet. Donec imperdiet sollicitudin porta. Aliquam erat volutpat. Nunc purus velit, commodo id pretium at, euismod vitae orci. Suspendisse dictum sit amet libero sed tristique. Ut luctus augue felis, in mattis arcu ullamcorper quis. In purus elit, lobortis ut pellentesque at, ullamcorper vitae tortor. Pellentesque eu sodales ante. Nulla sit amet dolor id lectus bibendum tristique sit amet eget mauris. Nulla eu tortor eget ipsum varius venenatis. Donec quis odio diam. Morbi facilisis vel lorem sit amet rutrum. Praesent velit neque, faucibus vitae ultrices ac, ullamcorper sed felis. Aliquam dignissim scelerisque lacus at aliquet. Morbi elementum lacinia urna vel porta.'

let cont = 0

for(i = 0; i < lor.length; i++){
  if(lor[i] === ' ')
  cont++
}
console.log(cont + ' words')

let contEt = 0
for(i = 0; i < lor.length; i++){
  if(lor[i] == 'e' && lor[i+1] == 't'){
  contEt++
  i++
  }
}
console.log(contEt + ' et´s')