// Iteration 1: Names and Input
let hacker1= "bilel"
console.log(`the driver's name is ${hacker1}`)
let hacker2 = "maria"
console.log(`the  driver's name is ${hacker2}`)

// :)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let driverUpperCased =hacker1.toUpperCase()
console.log(driverUpperCased)
let spacedName=""
for(let i=0; i<driverUpperCased.length;i++){
    spacedName= spacedName+driverUpperCased[i]+ " ";
}
console.log(spacedName)
let reversedNavigatorName=""
for(let i=hacker2.length-1; i>=0;i--){
     reversedNavigatorName =reversedNavigatorName+hacker2[i]
}
console.log(reversedNavigatorName)

if(hacker1.localeCompare(hacker2, 'en')===-1){
    console.log("The driver's name goes first.")
}else if(hacker1.localeCompare(hacker2, 'en')===1){
    console.log("Yo, the navigator goes first, definitely.")

}else{
    console.log("What?! You both have the same name?")
}

let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at arcu sed magna luctus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut dui est. Mauris eget nibh ut urna pulvinar porttitor. Donec nec justo ligula. Aenean mollis feugiat purus, a gravida erat finibus sit amet. Aenean vitae leo ante. Nullam venenatis, risus vitae condimentum vestibulum, purus ante convallis libero, vitae tempus purus nulla ac ex. Mauris felis justo, euismod a eros vitae, placerat fringilla nisl. Donec eu dui nec nibh tincidunt malesuada eget at est. Suspendisse in mauris vel tortor sodales posuere sit amet eget ex. Proin placerat nibh quis pulvinar pellentesque. Sed leo tellus, vestibulum non dignissim vitae, tincidunt nec felis.

Donec blandit in dui et pretium. Nunc ullamcorper tortor tortor, gravida dignissim quam efficitur at. Aliquam eleifend quis nibh at dapibus. Phasellus eget nulla ante. Vestibulum at placerat est, in ornare est. Donec accumsan justo id massa tincidunt, quis pulvinar diam efficitur. Sed volutpat elit id scelerisque rhoncus. Phasellus quam arcu, ullamcorper eu ligula non, vulputate dapibus elit. Mauris interdum pharetra sapien eget feugiat. Nunc pretium, turpis ac consequat auctor, felis justo placerat libero, quis porttitor metus mauris id dolor. Etiam sodales quis ligula fermentum ultrices. Proin sit amet semper neque. Sed eget felis mauris. Nullam lobortis mauris imperdiet nulla fringilla dignissim. Donec metus ex, rhoncus quis pretium vitae, elementum vitae turpis.

Duis cursus nulla eget quam auctor, in sollicitudin turpis porttitor. Aenean vestibulum libero tellus, at faucibus arcu fringilla et. Donec lorem urna, gravida ac arcu nec, dapibus interdum lorem. Nullam iaculis magna a lacus feugiat placerat. Ut consequat tortor sodales arcu ornare aliquet. In at interdum nibh. Morbi et tellus eu ligula lacinia gravida. Fusce risus arcu, fermentum vel nulla non, tempus condimentum est. Donec consectetur enim sed ante molestie dapibus. Ut lacus leo, condimentum nec felis sit amet, cursus mollis nulla.`
console.log(longText)

const longTextWordCount = longText.trim().split(/\s+/).length;

console.log(longTextWordCount);

console.log(longText.match(/et/g).length);
/*let array=[];
for(let i=0;i<longText.length;i++){
    let index = longText.indexOf('et')
    array.push(index)
    
}
console.log(array.length)*/
