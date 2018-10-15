// Names and Input

console.log("I'm ready!");
var hacker1 = "Helen"
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is your name, navigator?");
console.log("navigator' s name is " + hacker2);


if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters ")
} else if (hacker2.length  > hacker1.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + " characters ")
} else {
  console.log("wow, you both got equally long names " +hacker1.length + " characters " )
};

//Conditionals

var spaceDriverName = ""
for ( var i = 0; i < hacker1.length; i++) {
 spaceDriverName += " " + hacker1.toUpperCase()[i];
 console.log(spaceDriverName)
} 
console.log(spaceDriverName);

var reverseNavigatorName = "";
for ( var l = hacker2.length-1; l >= 0; l--) {
  reverseNavigatorName += hacker2[l];
}
  console.log(reverseNavigatorName)

console.log(hacker2.split('').reverse().join(''));
var Order =[hacker1, hacker2];

console.log(Order.sort());

// Lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae lacinia eros. Curabitur molestie arcu sit amet lectus consequat, ac rutrum ligula mattis. Ut pharetra interdum sem, vel bibendum neque. Nam dolor tortor, luctus vel pulvinar non, ultricies id nisi. Nulla porta, risus sed sodales convallis, diam velit feugiat neque, sed maximus orci massa quis urna. Phasellus pellentesque dignissim erat, in ultricies est ornare ut. Pellentesque ut diam consectetur, facilisis felis ac, blandit quam. Morbi nibh nulla, porttitor et faucibus ac, ultrices quis velit.Vivamus consectetur sapien luctus lobortis aliquam. Cras nec interdum lectus, id placerat massa. Morbi tristique vehicula enim, eget dignissim nisl varius non. Phasellus ornare suscipit urna, at aliquam felis euismod sed. Vestibulum varius dolor nulla, a bibendum dolor varius a. Nunc eu erat ante. Aenean nunc eros, euismod quis tortor non, condimentum tempus lorem. Aenean vulputate faucibus mauris nec tempor. Curabitur et placerat felis. Nam iaculis dignissim lorem, at accumsan quam luctus sed. Nulla dignissim ullamcorper libero venenatis ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras nec dui sit amet odio volutpat mattis ut vitae nulla. In ullamcorper enim vel risus rutrum, et tristique sem accumsan. Nunc eget ipsum vitae augue vulputate laoreet et ac est. Integer quis augue nulla. In volutpat tincidunt laoreet. Proin lectus neque, finibus finibus commodo id, eleifend nec justo. Suspendisse ac purus sagittis, facilisis nibh ac, elementum elit. Curabitur sapien enim, dapibus in diam id, gravida sollicitudin mi. Aliquam pharetra arcu a lectus consequat ultricies. Suspendisse semper urna eu est dignissim, vitae commodo libero efficitur. In in elit et ipsum volutpat pretium. Aliquam magna diam, vehicula ut velit non, mollis vehicula lectus. Etiam ac lobortis risus. Aliquam sit amet massa eget libero fringilla interdum ut lobortis urna.";
console.log(loremIpsum.split(" ").length);
console.log(loremIpsum.split("et").length-1)




