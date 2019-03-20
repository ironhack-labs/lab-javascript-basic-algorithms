// Names and Input
var hacker1 = "Windows10";
console.log("The driver's name is"+" "+hacker1);

var hacker2 = prompt("What's your navigator");
console.log("Your navigator is "+hacker2);


//Conditionals
if (hacker1.length > hacker2.length){
   var i = hacker1.length - hacker2.length;
    console.log("The driver has the longest name, it has "+i+" more characters");
} 
else if(hacker1.length < hacker2.length){
    var a = hacker2.length - hacker1.length
    console.log("The navigator has the longest name, "+a+" more characters!!")
}


else {
    console.log("wow, you both got equally long names, "+hacker1.length+" characters!!")
}


// Lorem ipsum generator
var b = hacker1.split('').join() ; 
var c = b.replace(/,/g, " ")
console.log(c.toUpperCase());
var d = hacker2.split('').reverse().join('');
console.log(d);


var palindrom = prompt("Writte something")
/*function checkPalindrom(palindrom) {
    return palindrom.split('').reverse().join('');
 }*/
if (palindrom.replace(/ /g, '') === palindrom.split('').reverse().join('').replace(/ /g, '')){

console.log("What your wrotte is a palindrom") 

}
    
else {
    console.log("What you wrotte is not a palindrom")
}
 

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus dui tortor, in pretium dolor auctor nec. Proin feugiat efficitur diam a consequat. Maecenas laoreet nibh erat, in pellentesque nunc venenatis sit amet. Fusce suscipit neque in ultrices facilisis. Suspendisse sed purus a dui porttitor aliquet quis in ante. Pellentesque quis dolor id turpis auctor sollicitudin non vitae nisl. Curabitur fringilla accumsan commodo. Nullam commodo fermentum orci quis lobortis. Integer lacus justo, pellentesque vel commodo id, condimentum quis sem. Pellentesque posuere cursus libero, at auctor est dignissim ac. Fusce elit odio, gravida nec magna eget, viverra volutpat nunc. Praesent tempus vestibulum quam et maximus."

"Nunc sem diam, pellentesque ac interdum vel, faucibus in turpis. Pellentesque lacinia luctus ante, vel tempus sem bibendum sit amet. Praesent eu tristique purus. In congue ornare tempor. Praesent eu velit sapien. Phasellus eleifend, tortor ut tempor sollicitudin, mauris massa iaculis velit, non tempor ligula lacus at purus. Suspendisse nec eleifend ligula. Vivamus condimentum eros sed lorem fermentum, sit amet semper eros bibendum. Integer dolor lectus, pretium in urna sit amet, condimentum blandit lorem. Nunc luctus quam ut mattis elementum. Curabitur vitae euismod eros, quis semper mauris. Vestibulum ultricies quis urna nec faucibus. Cras magna neque, tempor sed sem ac, dictum pulvinar ante. Ut scelerisque urna non commodo sollicitudin. Nulla fermentum neque tristique, tempus orci vitae, congue diam. Vivamus fringilla lacus ac magna bibendum vestibulum vel id eros."

"Mauris commodo lectus elit, vitae tristique ipsum commodo at. In eget convallis dolor. Nunc nec ipsum sit amet sapien ultricies semper. Proin mollis dictum imperdiet. Proin sapien lectus, rhoncus in nisi sit amet, tristique egestas ex. Vestibulum dolor massa, venenatis vitae mauris sed, suscipit bibendum ligula. Ut quis velit tincidunt, finibus metus sit amet, pretium eros. Sed sodales neque nulla. Mauris tempus tempor magna, non consectetur sem laoreet eu. Sed efficitur faucibus turpis id elementum. Curabitur ante risus, fringilla ut maximus quis, ultricies eget turpis. Mauris in nibh ac velit consequat ultrices in tincidunt quam. Sed pellentesque iaculis diam aliquam dignissim. Nullam ut libero quis dolor aliquet ullamcorper ut ac elit."

console.log("The number of words in those 3 paragraphs is "+paragraph.length)
console.log(paragraph.search("et"))