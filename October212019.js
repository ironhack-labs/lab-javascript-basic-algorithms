let hacker1 = "Dan"
console.log("The drivers name is "+ hacker1)
let hacker2 ="The coldest that ever was"
console.log("The navigator's name is "+hacker2)

if(hacker1.length==hacker2.length){
    console.log("Wow, you both got equally long names, "+hacker1.length+" characters!")
}

else if(hacker1.length >hacker2.length){
    console.log("The Driver has the longest name, it has "+ hacker1.length+  " characters")
}
else{
    console.log("Yo, navigator got the longest name, it has "+hacker2.length+" characters")
}

function nameSpace(name){
let capitalName = name.toUpperCase()
let spaceName=""
for(i=0;i<name.length;i++){
spaceName +=(capitalName[i] + " ")

}
return spaceName

}

function backwardsName(name){
let backward=""
for(i=0;i<=name.length-1;i++){
backward +=(name[name.length-1-i] + " ")

}
return backward
}
console.log(nameSpace(hacker1))
console.log(backwardsName(hacker2))

let a = hacker1.localeCompare(hacker2)
if(a>0)
console.log("The driver's name goes first.")
else if (a<0)
console.log("Yo, the navigator goes first definitely.")
else 
console.log("What?! You both got the same name?")

