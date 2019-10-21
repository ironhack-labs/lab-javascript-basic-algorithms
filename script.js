console.log("I'm ready!");

let hacker1 = 'Robbie';

console.log('The drivers name is ' + hacker1);

let hacker2 = 'Nick';

console.log('The navigators name is ' + hacker2);

if (hacker1.length > hacker2.length) {
  console.log(hacker1 + ' has the longest name, it has ' + hacker1.length + ' characters')
}
else if (hacker2.length > hacker1.length) {
  console.log('Yo, ' + hacker2 + ' got the longest name, it has ' + hacker2.length + ' characters')
}
else {
  console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!')
}

let hack = '';
for (let i=0; i < hacker1.length; i++) {
  let upper = hacker1[i].toUpperCase();
  hack += upper + ' ';
}
console.log(hack);

let hack2 = '';
for (let i = hacker2.length-1; i >= 0; i--) {
  let lower = hacker2[i];
  hack2 += lower;
}
console.log(hack2);

if (hacker1.localeCompare(hacker2) < 0 ) {
  console.log(hacker1 + "'s name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, " + hacker2 + " goes first definetly.");
} else ("What?! You both got the same name?")

let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque ex ut nulla finibus elementum. Fusce condimentum nibh eget suscipit iaculis. Nullam sapien eros, ultricies nec erat quis, aliquet feugiat enim. Vivamus mollis, nisi tristique pulvinar elementum, turpis metus placerat libero, et maximus elit mauris sed neque. In accumsan velit at est congue cursus. Quisque tempus sem vel nisi pulvinar commodo. Maecenas tincidunt odio eu nunc mattis aliquam.

Ut in tellus sodales, volutpat nisl eget, sodales ante. Proin viverra massa nec diam aliquam, sed vehicula eros tristique. Suspendisse rutrum odio massa, eu facilisis arcu iaculis vel. Quisque dictum bibendum ligula. Maecenas egestas est eget tristique scelerisque. Aliquam lobortis, tortor at vehicula eleifend, turpis orci ornare ipsum, sit amet accumsan justo dolor a diam. Mauris pellentesque lacus massa, ut dignissim eros condimentum ut. Integer et elit ac elit malesuada varius. Praesent feugiat placerat enim, id blandit tellus sollicitudin tempor. Nam ultrices ex eget est laoreet aliquam eget a diam. Nullam venenatis, odio vitae maximus tincidunt, leo ipsum ornare libero, id aliquam nunc orci a est. Phasellus a tortor condimentum, tempor mauris in, ornare purus. Nam sit amet metus sapien.

Aliquam erat volutpat. Praesent mauris dolor, mattis sed elit quis, venenatis vehicula lacus. Quisque at dui non sapien rhoncus posuere. Mauris rutrum condimentum venenatis. Mauris justo risus, commodo eu pretium non, tempus ut augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce velit arcu, vestibulum nec tincidunt non, ultrices nec ipsum."

