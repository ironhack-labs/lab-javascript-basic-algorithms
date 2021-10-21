// Iteration 1: Names and Input
let hacker1 = "Manuel"
console.log("The driver's name is: " + hacker1);
let hacker2 = "Fernando"
console.log("The navigator's name is: " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length ){
    console.log("The driver" + hacker1 + " has the longest name, it has " + hacker1.length + " characters");
}
else if(hacker2.length > hacker1.length){
    console.log("The navigator " + hacker2 + " has the longest name, it has " + hacker2.length + " characters");
}
else{
    console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");
}
// Iteration 3: Loops
    


        let space = ""

        for (let i=0; i < hacker1.length; i++) {
            //space += hacker1[i]+" "
            space = space+hacker1[i]+" "
            
        }
        console.log(space)
        

        let reverse = " "
    for (let i = hacker2.length-1; i >=0 ; i--) {
        reverse = reverse+hacker2[i]
    }
    console.log(reverse);

    

// var a = "Test"
// var b = ""

// for (let i = a.length-1; i >=0 ; i--) {
// 	b = b+a[i]
// }
// console.log(b)
