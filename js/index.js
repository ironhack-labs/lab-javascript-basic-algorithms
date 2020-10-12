console.log("I'm ready!");
// Iteration 1: Names and Input
var hacker1 = 'Ricardo';
console.log(`The driver's name is ${hacker1}`);
var hacker2 = 'Rute';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characteres.`)
}

// Iteration 3: Loops

var hacker1Up = '';
for(var i=0; i < hacker1.length; i++){
  hacker1Up = hacker1Up + hacker1[i] + ' ';
  if(hacker1Up.length === hacker1.length*2){
    console.log(hacker1Up.toUpperCase())
  }
}

var hacker2Rev = '';
for(var i=hacker2.length - 1; i >= 0; i--){
  hacker2Rev = hacker2Rev + hacker2[i];
  if(hacker2Rev.length === hacker2.length){
    console.log(hacker2Rev)
  }
}

if(hacker1.localeCompare(hacker2) < hacker2.localeCompare(hacker1)){
  console.log(`The driver's name goes first.`)
}else if(hacker1.localeCompare(hacker2) > hacker2.localeCompare(hacker1)){
  console.log(`Yo, the navigator goes first definitely.`)
}else{
  console.log(`What?! You both have the same name?`)
}

var paragrafos = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus velit ipsum. Phasellus suscipit mauris eget ipsum lobortis, nec imperdiet nulla sagittis. Nunc eu tincidunt felis, id posuere lectus. Maecenas hendrerit, urna nec mattis blandit, risus libero commodo mi, a eleifend nisi turpis nec erat. In porta tortor vel ante eleifend, vel ullamcorper elit commodo. Nunc volutpat, orci a efficitur hendrerit, diam enim aliquam ligula, ac sollicitudin magna ex nec leo. Nunc posuere tincidunt odio quis suscipit. Sed sed leo tortor. Quisque semper ante quam, eget cursus tellus euismod sit amet. Nulla vehicula, ante egestas tincidunt vehicula, ex eros viverra purus, eu malesuada tortor diam non ex. Aliquam erat volutpat. In ut urna nisi. Pellentesque nec viverra ante. Curabitur blandit tristique nisi, tincidunt tristique velit dictum ut. Nullam volutpat tortor ut efficitur feugiat. Fusce suscipit lacus leo, eu dictum mauris volutpat non. Praesent tincidunt, erat at elementum egestas, ligula turpis malesuada neque, vitae volutpat ligula turpis nec felis. Maecenas aliquet nulla sem, eleifend fringilla orci iaculis vitae. In hac habitasse platea dictumst. In vulputate vulputate odio eget bibendum. In eget rhoncus libero. Praesent consectetur lacus ornare congue porttitor. Pellentesque fermentum congue maximus. Suspendisse consectetur varius elit commodo condimentum. Duis bibendum ante id velit vestibulum sodales. Nulla lobortis dui vel sapien placerat pretium. In pharetra eget tellus quis feugiat. Sed pharetra volutpat metus, in scelerisque neque. Nullam rutrum odio quis ante vulputate, at sodales nisi mattis. Ut et ex porttitor, volutpat elit ut, rutrum tortor. Suspendisse non semper ante, nec vestibulum nisi. Nam et arcu nec dolor ultrices dignissim. Sed vitae neque in nibh efficitur facilisis et ac turpis. Nam eget risus vehicula, venenatis lorem at, egestas massa. Vestibulum varius mattis sagittis. Quisque a hendrerit ipsum. Donec condimentum porttitor mauris sed elementum. Donec consectetur ullamcorper arcu, ut egestas quam sagittis vitae. Vivamus eu orci at ligula eleifend tincidunt. Ut finibus, risus tempus laoreet dapibus, lectus erat blandit nunc, id sollicitudin mauris nunc sit amet lorem. Duis porttitor mauris a urna vehicula ultricies. Sed in tellus sed ligula dignissim vulputate. Mauris viverra eros vel neque hendrerit condimentum. In vulputate ipsum nunc, ac imperdiet lectus consectetur at."

//bonus1
var res = paragrafos.match(/le/gi);
console.log(res.length)


