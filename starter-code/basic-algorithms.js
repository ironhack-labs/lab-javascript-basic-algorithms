// Names and Input
var hacker1 = "Arthur"
var hacker2 = "Dax"
let newHacker1 = ""
let newHacker2 = ""
let n = 0
let i = hacker2.length
let namesort = [hacker2, hacker1]
let na = (namesort.sort())

//Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}else if(hacker1.length < hacker2.length){
    console.log("The driver has the longest name, it has " + hacker2.length + " characters")
}else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters")
}

while (n <= hacker1.length - 1){
    newHacker1 += hacker1[n] + " ";
    n += 1;
}

console.log(i)

while (i -1 >= 0){
    newHacker2 += hacker2[i-1];
    i -= 1;
}

if (na[0] === hacker1){
    console.log("The driver's name goes first");
}else if( na[0] === hacker2){
    console.log("Yo, the navigator goes first definitely")
}else{
    console.log("What?! You both got the same name?")
}



let phrase = "roma"
let inversePhrase = ""
let j = phrase.length -1

while (j >= 0){
    inversePhrase += phrase[j]
    j -= 1;
}

if (phrase === inversePhrase){
    console.log("That is a palindrome")
}else{
    console.log("Not a palindrome")
}




console.log(newHacker1)
console.log(newHacker2)

// Lorem ipsum generator
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, purus in mattis maximus, nisi erat auctor dolor, in malesuada purus odio eu sem. Integer tincidunt scelerisque ultricies. Suspendisse nec volutpat massa, eu aliquet urna. Donec molestie ipsum vel commodo viverra. Quisque eu tempor quam. Vivamus sodales diam eu est tempor, sed tincidunt ipsum aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent enim felis, iaculis id faucibus ac, sodales sit amet nisl. Donec imperdiet sem ligula, a euismod turpis pharetra ut. Quisque ullamcorper pretium interdum. In efficitur sagittis felis pretium semper. Pellentesque et sagittis ipsum. Sed varius arcu orci, et elementum justo posuere mollis. Sed ac diam blandit, maximus lacus et, sodales urna. Morbi lobortis risus a diam malesuada condimentum. Vivamus ac elit a nisi varius dapibus. In elit nisl, tempus ut ligula ac, congue tempor diam. Sed id vehicula neque, dapibus auctor neque. Praesent dictum a mauris ut varius. Sed suscipit risus ipsum, a ultricies arcu sagittis nec. Cras et efficitur purus, nec tristique est. Morbi posuere iaculis nibh, sed dictum felis pulvinar vitae. Donec nec nisi nunc. Morbi ultricies tempus turpis in mattis. Nulla faucibus ligula in neque aliquet congue. Sed vitae felis id felis consectetur ultrices. Duis ut arcu dui. Curabitur mattis, leo eu maximus pulvinar, purus neque efficitur quam, id interdum nisl justo eget leo. Ut sapien tellus, accumsan id dolor fringilla, fermentum convallis nibh. Quisque et metus ac lorem euismod luctus. Donec sit amet risus in magna placerat convallis. Morbi pulvinar ligula nec mauris consequat placerat. Nullam blandit erat pharetra nibh fringilla, id placerat nisl vulputate. Pellentesque sodales ligula ut elit suscipit ullamcorper. Suspendisse massa dui, maximus et vestibulum nec, porttitor eget lacus. Etiam in accumsan ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras accumsan a sem vitae facilisis. Fusce egestas quam felis, id viverra augue imperdiet ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin quis mattis erat. Nam pretium tortor rutrum ante ullamcorper viverra sed id mi. Sed in quam mattis, malesuada nulla non, eleifend quam. Cras non ex ac erat posuere volutpat.'

let lorem1 = lorem.split(" ");

let etnumber = 0

for (var k = 0; k <= lorem1.length - 1; k++) {
    if (lorem1[k] === 'et') {
        etnumber += 1;
    }
};

console.log(etnumber);