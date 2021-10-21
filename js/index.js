// Iteration 1: Names and Input
// 

let hacker1 = "lisa"
console.log(`The driver's name is ${hacker1}`)
let hacker2 ="lis"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length)
{
  console.log("It seems that the driver has the longest name, it has " + hacker1.length +" characters."  )
}
else if(hacker2.length>hacker1.length)
{
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length +" characters.")
} 
else
{
  console.log("Wow, you both have equally long names, " + hacker1.length +  " characters!")
}

// Iteration 3: Loops


function separate(name){
  
  return name.split("")

}

let driver , navigator

driver=hacker1.toUpperCase()
navigator=hacker2

driver=separate(driver)
navigator=separate(navigator)

console.log(driver)
console.log(navigator.reverse())

navigator.reverse()

let initalsOrder = [];

initalsOrder[0]=driver[0]
initalsOrder[1]=navigator[0]

initalsOrder.sort();

if(driver[0] === navigator[0])
{
  console.log("What?! You both have the same name?")
}
else if (initalsOrder[0]===driver[0])
{
  console.log("The driver's name goes first.")
}
else if(initalsOrder[0]===navigator[0])
{
    console.log("Yo, the navigator goes first definitely.")
}

// BONUS

let paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit mi, ultricies id faucibus sit amet, aliquam ac lorem. Curabitur lobortis turpis ultrices suscipit dapibus. Cras ante neque, ullamcorper ultricies nulla ac, euismod interdum felis. Pellentesque quis facilisis ipsum, at consectetur enim. Donec tempus venenatis nisl, quis luctus velit pulvinar et. Etiam ac erat quam. Nulla vel eros tristique, commodo risus ut, posuere massa. Nunc metus mi, commodo eu ornare sed, dictum ut arcu. Donec eget nisi in lorem luctus molestie et et justo. Nulla volutpat euismod turpis et interdum. Mauris tristique at nunc at feugiat.Quisque pulvinar, purus eu tincidunt molestie, mi nulla tempus massa, tincidunt commodo nunc enim porta justo. Morbi nec dui blandit, dignissim turpis nec, pretium nunc. Nam in scelerisque purus, sit amet consequat sem. Proin eget bibendum elit. Ut gravida tortor elementum ultrices condimentum. Sed bibendum, magna non dapibus scelerisque, nibh arcu semper mauris, et pellentesque libero massa scelerisque erat. Maecenas posuere, quam et commodo egestas, nibh libero tempus arcu, a tincidunt tellus dui vel nunc. Aenean in dui hendrerit, luctus ante a, consequat ligula. Duis gravida et sapien nec vehicula.In ac nibh mattis, tincidunt libero id, aliquet ante. Aliquam ut posuere enim. Nullam tempus aliquet augue sit amet aliquet. Sed porta dolor diam. Curabitur pellentesque rhoncus est vitae tempus. Integer sit amet ullamcorper nulla. Nunc hendrerit, eros sit amet tincidunt viverra, ex ligula feugiat ante, a hendrerit lectus urna eu elit. Aenean dignissim aliquet ex et suscipit. Etiam eleifend tempor ipsum, at feugiat turpis. Nam dignissim ante vitae nulla luctus euismod."

console.log(paragraph1.split(" ").length)
let array=paragraph1.split(" ")

let cont=0;

for(let i=0;i<array.length;i++)
{

  if (array[i].includes("et"))
  {
    cont=cont+1;
  }
}
console.log(cont)