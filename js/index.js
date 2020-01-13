//it 1 
var hacker1 = 'Jason';
console.log(`"The driver's name is ${hacker1}"`);

var hacker2 = 'Alexander';
console.log(`"The navigator's name is ${hacker2}"`);

//it 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

//it 3
for (i = 0; i <= hacker1.length - 1; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (var x = hacker2.length - 1; x >= 0; x--) {
  console.log(hacker2[x]);
}

for (var i = 0; i < 1; i++){
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
  }
  else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}

//bonus 1
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat, orci et tempor dignissim, sem mauris vehicula lacus, non porta tellus purus ac diam. Ut molestie ultrices efficitur. Donec vitae tincidunt est. Nunc rutrum odio quis diam facilisis tempor. Donec maximus tristique quam sit amet vulputate. Fusce ut odio at ligula convallis semper eget eu tellus. Morbi sollicitudin congue elit, vitae faucibus est aliquet et. Maecenas ultricies mollis purus convallis porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam posuere ex elit, eu luctus mi varius ac. Donec vehicula sem orci, a sollicitudin sapien condimentum id. Aliquam cursus euismod odio, rutrum eleifend nibh. Maecenas vitae mauris scelerisque, tempor mi vitae, sollicitudin lectus. Fusce non elit turpis. Ut sapien justo, vestibulum mollis bibendum et, condimentum et dolor. Vestibulum gravida molestie mi porttitor fringilla. Suspendisse in quam in eros sagittis feugiat. Sed volutpat suscipit eleifend. Morbi ac tellus pharetra, accumsan tellus ac, tincidunt mauris. In pretium, orci vitae scelerisque maximus, velit est pharetra quam, a molestie odio mi nec lorem. Duis hendrerit urna dui, et egestas nunc venenatis eget. Maecenas placerat sodales tortor, sit amet facilisis sem ultrices sed. Morbi risus magna, dictum in velit sit amet, iaculis porttitor ipsum. Cras et magna et augue lobortis suscipit. Ut tristique, nunc sed semper condimentum, diam tellus dictum metus, a dictum sapien elit eget augue. Duis cursus mollis augue et mattis. Sed viverra tempus sodales. Aenean sem quam, varius quis facilisis eget, laoreet vel erat. Nullam nec congue dolor. Vivamus efficitur nunc orci, vitae aliquam leo congue posuere. Maecenas mattis diam nec nulla pharetra volutpat et in tellus. Proin elementum pretium libero quis commodo. Praesent porttitor pulvinar semper. Donec mollis, felis et dictum egestas, mauris ante ornare massa, vel aliquet neque purus sit amet diam. Nulla velit augue, eleifend eu consequat ut, ornare a nunc. Aenean ullamcorper nec dolor a convallis. Maecenas eu pulvinar sem. Curabitur nibh quam, sagittis vel rhoncus nec, suscipit convallis massa. Praesent molestie metus nec dolor vehicula tincidunt. Sed euismod, risus sit amet accumsan scelerisque, purus lectus pulvinar massa, bibendum lacinia dui nunc eu elit. Fusce eget imperdiet massa. Cras ut nibh ullamcorper massa tincidunt pulvinar at nec odio.";
var numberOfWords  =0;
for (var i = 0; i <= loremIpsum.length; i++) {
    if (loremIpsum[i] == " ") {
        numberOfWords++;
    }
}
console.log(numberOfWords);
console.log(loremIpsum.indexOf("et"));