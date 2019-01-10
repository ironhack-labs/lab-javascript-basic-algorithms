var hacker1 = "Fulano";

console.log("The drive's name is " + hacker1);

var hacker2 = prompt("what is your name");

console.log("The navigator's name is " + hacker2);

    if (hacker1.length>hacker2.length) {
        console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
    }
    else if (hacker2.length>hacker1.length) {
        console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
    }
    else {
        console.log("wow, you both got equally long names, " + hacker2.length + " characters!!")
    }

   
console.log(hacker1.split('').join(" ").toUpperCase());
console.log(hacker2.split("").join(" ").toUpperCase());
console.log(hacker2.split("").reverse().join(""));

console.log()


    for (i=0;i<hacker1.length;i+=1){
        if (hacker1[i]>hacker2[i]) {
            console.log("The driver's name goes first")
            break;
        }
        else if (hacker1[i]<hacker2[i]) {
            console.log("Yo, the navigator goes first definitely")
            break;
        }
        else if (hacker1[hacker1.length]===hacker2[hacker1.length]){
            console.log("What?! You both got the same name?")
            break;
        }

    }





        