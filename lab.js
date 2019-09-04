let hacker1 = 'Felipe'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Rafael'
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
     console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
}

let arr = hacker1.split("")

console.log(arr)

let newHacker1 = ""

arr.forEach(function(c){
    newHacker1 = newHacker1 + c + " "
})

console.log(newHacker1)

arr = hacker2.split("")

let arr2 = arr.reverse()

console.log(arr2)

let newHacker2 = ""

arr2.forEach(function(c){
    newHacker2 = newHacker2 + c 
})

console.log(newHacker2)

if(hacker1.localeCompare(hacker2) == 1){
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2)){
    consdole.log("What?! You both got the same name?")
}

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ultrices mi sit amet tincidunt. Quisque vitae laoreet libero. Fusce rutrum nibh non tortor tempor, non faucibus dui accumsan. Fusce hendrerit pretium elit, vel sollicitudin purus molestie sit amet. Vivamus ac quam augue. Cras sed felis vitae est rhoncus auctor. Nulla efficitur dictum leo in ultrices. In nec condimentum purus. Curabitur euismod eu tellus eu malesuada. Maecenas sed mi pellentesque, vehicula dui id, semper lacus. In tempor, nisl vitae tempor suscipit, ipsum quam scelerisque est, non vestibulum magna ex scelerisque urna. Donec a ex magna. Aliquam at placerat felis. Quisque dapibus nulla sed lacinia commodo. Maecenas tempus lacus elit, et efficitur sem rhoncus ut. Nulla facilisi. Sed hendrerit ut ligula non porttitor. Nunc vulputate suscipit molestie. Sed molestie tempus aliquam. Etiam tortor velit, sagittis efficitur nulla eget, malesuada pharetra lacus. Suspendisse mattis, ipsum id pretium aliquet, elit purus interdum risus, sed porta dolor dolor vitae augue. Mauris ac odio magna. Fusce blandit dignissim ante at dignissim. Nam gravida urna odio, et posuere sapien aliquet et. Phasellus mattis libero quis tellus consequat tempor. Curabitur bibendum mi id elit aliquam congue. Curabitur tristique quam vel nunc tincidunt, eu sodales ligula tempor. Nulla at nulla facilisis, porta mi dictum, posuere sapien. Pellentesque rhoncus, massa feugiat suscipit aliquet, nibh velit consequat justo, ut eleifend augue ligula ut neque. Duis ligula elit, vulputate ut pulvinar mattis, elementum id nisi. Integer commodo congue diam. Nunc augue enim, placerat ac diam nec, vehicula congue elit. Morbi dictum, enim ac vestibulum sodales, ligula quam fringilla sem, finibus venenatis purus tortor sit amet magna. Cras dictum lectus eu nunc accumsan, eget facilisis purus auctor rafael."

console.log(paragraphs.split(" ").length) 

let arr3 = paragraphs.split(" ")

let ocorrencia = 0

for(let count = 0; count < paragraphs.length; count+=1){
    if (arr3[count] === "et"){
        ocorrencia +=1
    }
}

console.log(ocorrencia)
