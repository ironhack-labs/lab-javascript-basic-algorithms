// Iteration 1: Names and Input

console.log("I'm ready!");
const hacker1 = "Ale"
console.log("The driver's name is "+hacker1)
const hacker2 = "Israel"
console.log("The navigator's name is "+hacker1)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
  console.log('The driver has the longest name, it has' +hacker1.length+" characters.")
}
else{
  if(hacker1.length==hacker2.length)
  {
    console.log("Wow, you both have equally long names, "+hacker1.length +"characters!.")
  }
  else
  {
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.")
  }
}

// Iteration 3: Loops

let compara=true
let i=0
while (compara && i<hacker1.length && i<hacker2.length){
if (hacker1[i]>hacker2[i]){
  console.log('Yo, the navigator goes first definitely.')
  compara=false
}
else{
  if(hacker1[i]==hacker2[i])
  {
    i++
  }
  else
  {
    console.log("The driver's name goes first.")
    compara=false
  }
}
}
if (compara==true )
{
  if (hacker1.length<hacker2.length)
  {
    console.log("The driver's name goes first.")
  }
  else if (hacker1.length>hacker2.length){
      console.log('Yo, the navigator goes first definitely.')
    }
    
    else if (i=hacker1.length && hacker1===hacker2)
	{
	  console.log('What?! You both have the same name?')
	}
}

//Bonus 1

const cadena ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius egestas orci quis placerat. Duis varius pretium rhoncus. Ut vitae suscipit tortor. Donec eu nibh interdum, pharetra diam at, finibus felis. Nullam sapien nibh, luctus id est quis, congue tincidunt lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor tellus eu molestie facilisis. Morbi faucibus augue at viverra dignissim. Etiam fermentum arcu quis massa consectetur consectetur. Praesent finibus lacus vitae lobortis ornare. Proin quis libero dui. \nSuspendisse consectetur egestas lorem, sed tempor lacus hendrerit ac. Proin vitae quam in turpis tincidunt vestibulum. Etiam at sapien at mauris convallis volutpat vel dignissim libero. Aenean mattis ornare sem ut porta. Proin ut neque vel arcu convallis volutpat. Proin sit amet elit nisl. Duis ut nibh maximus, maximus est eu, sollicitudin risus. Vestibulum ac eleifend neque, ut elementum nisi. In vehicula, metus ac dapibus fermentum, leo urna lobortis neque, sit amet tincidunt ante sem et magna. Nullam nec dui metus. Nam nec ullamcorper ante. Nunc quis ipsum eget purus aliquam mattis. Duis commodo rhoncus tortor vitae consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis consequat mollis. \nUt sed ante nec tortor vestibulum ultrices. Duis placerat risus ante, sit amet tincidunt nibh sagittis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed hendrerit erat ac nisl euismod fringilla. Vestibulum arcu quam, dignissim non lectus sed, facilisis maximus diam. Maecenas scelerisque, felis quis condimentum dapibus, elit ligula varius magna, at vulputate velit justo laoreet arcu. Morbi blandit lacus nec tristique commodo."
console.log(cadena)

console.log("Tiene :"+cadena.split(' ').length+" palabras")

let cadena2=cadena

cadena2=cadena2.replace(' et ',' ')
cadena2=cadena2.replace(' et. ',' ')
cadena2=cadena2.replace(' Et ',' ')

console.log("Tiene :"+(cadena.split(' ') .length-cadena2.split(' ').length)+" et")

//Bonus 2

let phraseToCheck = "Amor, Roma"
let phrase=phraseToCheck
phraseToCheck=phraseToCheck.replace(" ","")
phraseToCheck=phraseToCheck.replace(",","")
phraseToCheck=phraseToCheck.replace("!","")
phraseToCheck=phraseToCheck.replace("¡","")
phraseToCheck=phraseToCheck.replace("?","")
phraseToCheck=phraseToCheck.replace("¿","")
phraseToCheck=phraseToCheck.replace("'","")
phraseToCheck=phraseToCheck.toLowerCase()
phraseToCheck=phraseToCheck.replace("á","a")
phraseToCheck=phraseToCheck.replace("é","e")
phraseToCheck=phraseToCheck.replace("í","i")
phraseToCheck=phraseToCheck.replace("ó","o")
phraseToCheck=phraseToCheck.replace("ú","u")

if (phraseToCheck===phraseToCheck.split('').reverse().join(''))
{
  console.log(phrase+' ->Es palindromo')
}
else 
{
  console.log(phrase +' ->No es palindromo')
}
