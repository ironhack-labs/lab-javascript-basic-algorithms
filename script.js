let hacker1 = "Zohn";

console.log(`The hacker's name is ${hacker1}`);

let hacker2 = "Zohn";

console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length){
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
} else{
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}

let arr = hacker1.split('');
let real = arr.join (" ");
let arr2 = [];
console.log(real.toUpperCase());
for (i = 0; i < hacker1.length; i++){
  arr2.unshift(arr[i]);
}
let backwardsStr = arr2.join('');
console.log(backwardsStr);

if(hacker1 < hacker2){
  console.log("The driver's name goes first.");
} else if(hacker1 === hacker2){
  console.log("What?! You both got the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.")
}


let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis turpis risus, eu condimentum elit luctus ut. Sed maximus felis et libero condimentum imperdiet. Aenean eget magna id lorem euismod pretium. Duis ut auctor justo. Vestibulum interdum tortor quis mauris accumsan, vitae blandit nisi posuere. Aliquam interdum neque eget est semper auctor. Nulla mattis pulvinar elementum. Maecenas gravida elit tellus, ut bibendum lectus tincidunt et. Maecenas a ligula eget ex condimentum pellentesque vel a lectus. Praesent lacus nibh, varius at sapien sed, fringilla imperdiet mauris. Integer rhoncus ultrices elit ut interdum. Vestibulum imperdiet aliquet nisl, in vehicula diam tincidunt sed. Donec sagittis ipsum enim, non placerat purus tempor in. Fusce aliquet sapien sem, eu varius nulla mollis ut. Donec lobortis vestibulum convallis. Aliquam suscipit metus eu ipsum pulvinar, at convallis diam hendrerit. Praesent finibus ultrices nibh non facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eu risus at magna commodo finibus nec et arcu. Nunc blandit placerat odio, nec sollicitudin ipsum euismod a. Curabitur sed dapibus nisl. Curabitur a vestibulum nulla, eget imperdiet purus. Fusce mi erat, lacinia at eros sit amet, pharetra finibus massa. Curabitur mattis ornare lacinia. Proin semper dapibus mauris. Maecenas ultrices vulputate est eu blandit. Mauris luctus lobortis volutpat. Donec lacinia at massa a commodo. In porttitor mi nec purus ultrices, id euismod tellus sagittis. Vestibulum posuere ipsum at elit tempus ultricies. Nam mi felis, porta at scelerisque at, sollicitudin in massa. Pellentesque sodales libero dolor, id pellentesque tortor egestas ut."

loremArr = lorem.split(" ");
console.log(loremArr.length);
let etCounter = 0;
for(i = 0; i < loremArr.length; i++){
  if(loremArr[i] === "et"){
    etCounter++;
  }
}
console.log(etCounter);