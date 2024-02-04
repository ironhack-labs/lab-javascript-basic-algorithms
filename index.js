// Iteration 1: Names and Input
let hacker1 = "Antonio";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Pedro";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that teh navigator has teh longest name, ist has ${hacker2.length} characters.`)
} else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
    }


// Iteration 3: Loops
let result = ""
for (let i = 0; i < hacker1.length; i++) {
result += (hacker1.toUpperCase()[i]); 
if (i !== hacker1.length - 1) {
    result += " "
}
}
console.log(result)

let result2 = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
    result2 += (hacker1[i]); 
}
console.log(result2)

if (hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first")
} else if (hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name")   
}

let count = 0
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet tempus libero, a dignissim velit sagittis eget. Ut maximus, ante ac consequat faucibus, nisi felis sollicitudin orci, at fermentum elit sapien ac dolor. In fermentum risus purus, in cursus nunc lacinia et. Praesent et tellus ut augue feugiat lacinia. Curabitur tempor augue vel semper lacinia. Cras fringilla ante mauris, ac consequat enim dapibus at. Vestibulum sit amet nibh non leo volutpat imperdiet vitae vitae augue. Curabitur laoreet a mi eget scelerisque. Quisque eros risus, mollis non faucibus vel, vulputate in lectus. Integer velit sapien, iaculis quis ligula quis, porttitor pulvinar ipsum. Nunc pretium diam nec aliquam aliquet. Vestibulum non condimentum arcu. Curabitur consequat erat vitae nulla fermentum, sed ullamcorper augue rhoncus. Sed luctus ligula sit amet lacus interdum molestie. Etiam et ipsum sollicitudin, posuere ipsum non, facilisis diam. Sed quis nulla maximus, laoreet urna ut, commodo massa.

Phasellus a dui non ipsum hendrerit maximus at at nisi. Sed quis mauris mattis, ullamcorper magna sit amet, lacinia eros. Integer vestibulum, nisl sed hendrerit dapibus, mauris elit suscipit turpis, vel tristique ipsum odio a erat. Nam maximus odio non lorem consectetur, quis elementum diam aliquet. Sed sem felis, maximus ut varius id, placerat vitae sapien. Fusce ex mauris, congue a dui eget, blandit convallis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec est metus, auctor ac arcu sit amet, condimentum gravida enim. Cras pharetra vitae nisl nec consectetur. Phasellus sollicitudin dictum maximus.

Donec egestas turpis vel elit varius, non malesuada mi auctor. Nullam volutpat tellus quis urna scelerisque facilisis. Donec commodo nibh a diam accumsan, congue ultricies orci iaculis. Suspendisse eu faucibus elit, dignissim auctor quam. Integer molestie consectetur risus sit amet interdum. Etiam vitae libero ac metus tempor euismod in non est. Praesent sodales purus at neque molestie, vitae suscipit urna lacinia. Etiam orci lectus, auctor quis pretium at, malesuada et nibh. Proin sed dolor quis sem molestie imperdiet. Etiam finibus, ex non vehicula cursus, erat ipsum vulputate enim, nec lacinia turpis odio eget est. Nullam dolor massa, porta vel accumsan et, euismod egestas diam. Donec libero magna, porttitor sed feugiat vel, aliquam eget erat.`

for (let i = 0; i < longText.length - 1; i++) {
    const char = longText.slice(i, i + 2);

if (char === "et") {
    count++;
    }
}
console.log(count)