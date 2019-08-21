let hacker1 = 'Perrito'
let hacker2 = prompt(`What's your name? `, 'Your name goes here...')
let hack1 = `the driver has the longest name, it has ${hacker1.length}` 
let hack2 = `the navigators name ${hacker2}`
let hack3 = `wow, you both got equally long names, `
if(hacker1.length>hacker2.length){console.log(hack1)}else if(hack2.length>hacker1){console.log(hack2)} else{console.log(hack3)}
let upperName = hacker1.toUpperCase()
let arr = upperName.split("")
console.log(arr)
let unorder
let nuevoArr = []
let lowerName
for (let i =hacker1.length-1 ; i>=0; i--){
  unorder = arr[i]
  nuevoArr.push(unorder)

  lowerName = nuevoArr.toString().replace(/,/g,"").toLowerCase()
  console.log(unorder, i)
}

console.log(nuevoArr)
console.log(lowerName)
let arrNombres = []
arrNombres.push(hacker1, hacker2)
console.log(arrNombres)
arrNombres.sort()
console.log(arrNombres)
arrNombres[0]===hacker2?console.log('sirol'):console.log(`nel pastel`)

if (arrNombres[0]===arrNombres[1]){
  console.log(`What?! you both got the same name?`)
}else if (hacker1===arrNombres[0]){
  console.log(`The driver's name goes first ${hacker1}`)
}else if(hacker2===arrNombres[0]){
   console.log(`Yo, the navegator goes first definetely ${hacker2}`)
}
let newText = prompt(`Insert a set of words and I'll check them if ther're a palindrome`, 'test me here')
console.log(`Se introdujo el siguiente texto: ${newText}`)
let newTextLowerCase = newText.toLowerCase()
//console.log(`Si funciono el lowercase? ${newTextLowerCase}`)

let newTextArr = []
for (let i = newText.length-1; i>=0; i--){

  newTextArr.push(newTextLowerCase[i])
  //console.log(newText[i], i)
}

let newTextToString = newTextArr.toString().replace(/,/g,'').replace(/ /g,'').replace(/\?/g,'').replace(/\!/g,'').replace(/\./g,'')
console.log(newTextToString)
let newTextArr2 = []
for (let i = 0; i<newText.length; i++){

  newTextArr2.push(newTextLowerCase[i])
  //console.log(newText[i],i)
}
let newTextToString2 =newTextArr2.toString().replace(/,/g,'').replace(/ /g,'').replace(/\?/g,'').replace(/\!/g,'').replace(/\./g,'')
console.log(newTextToString2)

let newTextArr3de1 =[]
for (let i = newTextArr.length-1; i>=0; i--){
  newTextArr3de1.push(newTextToString[i])
  //console.log(newTextToString[i], i)
  /*console.log(i) */
}
//console.log(newTextArr3de1)
let newTextToString3= newTextArr3de1.toString().replace(/,/g,'').replace(/ /g,'').replace(/\?/g,'').replace(/\!/g,'').replace(/\./g,'')
//console.log(newTextToString3, 'hi')

if (newTextToString === newTextToString3){
  console.log(`Si es un palindromo `)
} else {
  console.log(`No es un palindromo`)
}

