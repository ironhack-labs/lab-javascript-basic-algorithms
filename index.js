// Iteration 1: Names and Input

let hacker1 = "jahn";
console.log("The driver's name is " + hacker1);

let hacker2 = "johna";
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1bis = []
hacker1.split('').forEach(e => hacker1bis.push(e + ' '))
console.log(hacker1bis.join('').toUpperCase())

console.log(hacker2.split('').reverse().join(''))

if (hacker1 < hacker2) {
    console.log("The driver's name goes first")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat consectetur fringilla. Sed in massa ipsum. Vestibulum tincidunt ex vel purus tempor, eget mattis diam vulputate. Maecenas quis faucibus neque. Nulla rhoncus scelerisque finibus. In hac habitasse platea dictumst. Praesent in auctor felis. Sed hendrerit elit id massa vulputate ultricies sit amet sed ante. Fusce ipsum leo, tincidunt non dictum hendrerit, feugiat nec elit. Praesent tincidunt tristique fermentum. Proin et arcu dui. Mauris elementum mollis mollis. Vivamus eleifend ex id nunc finibus, sit amet dignissim urna tempus. Etiam nunc lectus, pellentesque ut magna eget, commodo dictum lorem. Nullam eu pharetra turpis, eget posuere quam. Etiam imperdiet suscipit aliquet. Praesent a lectus fermentum, tristique elit nec, pulvinar ante. Aliquam erat volutpat. Quisque et metus et quam suscipit tincidunt. Etiam sollicitudin maximus gravida. Duis ut nisl at neque vulputate tincidunt. Proin vulputate malesuada massa in placerat. Integer dapibus tellus eu quam commodo, nec pretium ante auctor. Duis tincidunt risus ligula, vel dictum velit fermentum rutrum. Aenean quis arcu augue. Integer varius sed diam ut tempus. Aenean suscipit magna eget neque suscipit fringilla. Suspendisse vitae elit aliquet, ullamcorper mauris in, auctor ligula. Morbi malesuada mauris vitae semper suscipit. Cras maximus tristique nisi, vitae dignissim ipsum consequat vitae. Ut tempor a ligula consectetur dictum. Cras ligula ipsum, elementum nec tortor eu, laoreet tincidunt nibh. Nunc rutrum eros eu ultrices tincidunt. Donec ex augue, fringilla vel scelerisque et, pulvinar non leo. Phasellus volutpat lacinia arcu, eget semper tortor fringilla vitae. Nulla turpis elit, molestie tempus ligula in, ultricies molestie ante. Integer at porttitor nisl. Vestibulum dictum mi nisi, non pretium lorem pharetra sit amet. Phasellus lobortis ante sit amet augue condimentum, sit amet ultrices sem ultricies. Integer cursus, nisi sit amet ultricies aliquet, risus eros efficitur ex, non pulvinar ex lorem vel lacus. Suspendisse non libero fringilla, mollis turpis id, maximus urna."

console.log(longText.trim().split(/\s+/).length)

// Bonus 2

// Bonus 3