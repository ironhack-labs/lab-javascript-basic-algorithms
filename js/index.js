console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Pepe";
console.log("The driver's name is " + hacker1);

let hacker2 = "Luna";
console.log("The navigator's name is " + hacker2);
//
// Iteration 2: Conditionals
length1 = hacker1.length;
length2 = hacker2.length;
if (length1 > length2){
    console.log("The driver has the longest name, it has " + length1 + " characters.");
} else if (length1 < length2){
    console.log("It seems that the navigator has the longest name, it has " + length2 + " characters.");
}else{
    console.log("Wow, you both have equally long names, " + length1 + " characters!");
}

// Iteration 3: Loops
let result = "";
for (let i = 0; i < hacker1.length; i++){
    result = result + hacker1[i].toUpperCase() + " "; 
}

console.log(result);

let reverse = "";
for (let x = hacker2.length - 1; x >= 0; x--){
    reverse = reverse + hacker2[x];
}

console.log(reverse);

cadena = [hacker1, hacker2];
ordenar = cadena.sort();
console.log(ordenar);

if (ordenar[0] === hacker1){
    console.log("The driver's name goes first.");
}else if(ordenar[1] === hacker1) {
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
}

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc quis lorem ornare sodales. Morbi volutpat purus vel rutrum ultricies. Donec quis nulla facilisis, congue sem eu, aliquet ex. Etiam gravida vehicula justo eu feugiat. Donec ut dolor consectetur, suscipit ex eu, sagittis nisl. Fusce vitae placerat libero, et faucibus justo. Curabitur et consectetur purus, nec venenatis nibh. Pellentesque a faucibus leo. Nam pretium ut mauris sed cursus. Proin sit amet augue semper, pellentesque nunc id, pellentesque tortor. Suspendisse felis ipsum, porttitor et rhoncus id, iaculis quis est. Donec eros dui, condimentum at erat vitae, luctus dictum mi. Cras sed metus sit amet lectus vehicula fermentum eu sit amet nunc. Ut eget venenatis magna Integer sollicitudin diam a sem blandit, at aliquet dui condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eget odio pellentesque dolor vehicula bibendum. Mauris malesuada, nulla ac consectetur convallis, magna eros lobortis augue, ac ultricies nisi erat vitae ante. Sed suscipit mauris id risus finibus sollicitudin. Etiam vel enim vel ex consequat tincidunt a nec tellus. Mauris quis commodo nisl. Nam quis erat semper, placerat tortor vel, rhoncus velit. Quisque porttitor dui dolor, nec malesuada elit dictum in. Sed pellentesque eros eget augue cursus, vitae convallis diam maximus. Sed rhoncus felis sed accumsan eleifend. Nulla eget dui ut felis egestas accumsan ac eu tortor. Pellentesque ut faucibus ipsum. Nulla facilisi. Nulla dignissim tellus et nunc consectetur, et tempus nulla ultrices. Etiam vulputate ipsum consectetur lacus tempus sagittis. Duis imperdiet vitae felis eget tincidunt. Suspendisse potenti. Morbi nec est pellentesque, pellentesque turpis ut, ultrices lacus. Aenean urna ex, maximus vel augue eu, pulvinar euismod arcu. Pellentesque arcu lorem, venenatis et elit ut, imperdiet facilisis erat. Curabitur ipsum nibh, fringilla nec scelerisque at, ultrices sed erat.";

let palabras1 = 0;
let palabraset = 0;

for (let y = 0; y < texto.length; y++){
    
    if (texto[y] === " "){
        palabras1++;
    }else if ((texto[y] === "t") && (texto[y-1] === "e") && (texto[y-2] === " ")){
        palabraset++;
    }
}

console.log (palabras1);
console.log (palabraset);

const palabras = texto.split(" ");
numeropalabras = palabras.length;