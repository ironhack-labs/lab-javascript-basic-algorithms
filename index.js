// Iteration 1: Names and Input
let hacker1 = "Rocio"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Lucia"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let separatedBySpaceAndCapital = "";

for(let i=0; i<hacker1.length;i++){
    let capitalized = hacker1[i].toUpperCase()
    separatedBySpaceAndCapital+=capitalized+=" "
}

console.log(separatedBySpaceAndCapital)

let reversedOrdered = "";

for(let i=hacker2.length -1; i>=0; i-- ){
    reversedOrdered+=hacker2[i]
}

console.log(reversedOrdered)

if(separatedBySpaceAndCapital[0]>reversedOrdered[0]){
    console.log("The driver's name goes first.")
}else if(separatedBySpaceAndCapital[0]<reversedOrdered[0]){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}

// BONUS 1

let longText = "Lorem et ipsum dolor sit et amet consectetur adipiscing elit magnis tristique lectus, quis commodo nullam eu urna nam curae nascetur libero et, pretium laoreet natoque tempor rutrum mattis orci porta facilisi. Convallis dignissim eu donec aliquam quam nisl suscipit, ligula senectus blandit cursus vitae faucibus semper viverra, lacus inceptos malesuada nostra per urna. Tempor risus non ac nisi lectus odio magnis blandit faucibus facilisi hendrerit, aptent litora pellentesque molestie netus enim condimentum tempus natoque maecenas montes magna, auctor mi curabitur pretium pulvinar aenean varius ante vehicula proin. Pellentesque elementum nisi odio tempus egestas ultricies volutpat, natoque inceptos cum cursus conubia primis, taciti penatibus porta nunc auctor lacus. Interdum convallis risus placerat iaculis commodo phasellus, nisl nullam pellentesque auctor rutrum, rhoncus egestas laoreet suspendisse mus. Imperdiet curabitur aenean libero duis cum nisl massa cras sodales, vitae diam fames nam quis penatibus accumsan blandit bibendum magna, inceptos commodo non montes augue nascetur nunc platea. Cras eleifend ad class curabitur dignissim eu mauris eros, viverra malesuada non ullamcorper rhoncus massa enim ornare praesent, curae dui lacinia lacus sem conubia varius. Maecenas libero volutpat himenaeos porta nullam nostra mus ut cras, magnis sollicitudin ornare nec mollis pharetra tellus vulputate, egestas eget per rutrum dui viverra ridiculus accumsan. Etiam nascetur risus magna varius leo a, fermentum posuere tortor sodales aenean ridiculus nostra, dictumst nulla sapien primis curae."

function checkNumOfWords(string){
    let count = 1;
    
    for(let i=0; i<longText.length; i++){
        if(string[i]===" "){
            count++
        }
    }

    console.log(count)
}

checkNumOfWords(longText)

function checkNumOfEtTimes(string){
    let temp = "";
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i]===" " || string[i]==="." || string[i]===","){
            let lowerTemp = temp.toLowerCase()
            if(lowerTemp==="et"){
                count++
                temp=""
            }else{
                temp=""
            }
        }else{
            temp+=string[i]
        }
    }
    return count
}

console.log(checkNumOfEtTimes(longText))

// BONUS 2

function checkIfPalindrome(str){
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
      }
    let stringWithoutSpacesOrCharacters = ""
    for(let i =0; i<str.length; i++){
        if(isLetter(str[i])){
            stringWithoutSpacesOrCharacters+=str[i].toLowerCase()
        }
    }
    let middle;
    if(stringWithoutSpacesOrCharacters.length % 2 == 0){
        let middle = stringWithoutSpacesOrCharacters.length/2 
    }else{
        let ave = stringWithoutSpacesOrCharacters.length/2
        let middle = Math.floor(ave)
    }
    let firstHalf = ""
    for(let i=0; i<middle; i++){
        firstHalf+=stringWithoutSpacesOrCharacters[i]
    }
    let secondHalf =""
    for(let i=stringWithoutSpacesOrCharacters.length-1; i>middle; i--){
        secondHalf+=stringWithoutSpacesOrCharacters[i]
    }
    return firstHalf === secondHalf;
    
}

console.log(checkIfPalindrome("A man, a plan, a canal, Panama!"))