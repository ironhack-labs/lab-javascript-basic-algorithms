

const hacker1 = "Agus";
console.log(`the driver name is ${hacker1}`);
const hacker2 = "Hannah";
console.log(`the navigator name is ${hacker2}`);


if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name it has ${hacker1.length} characters`);
  }else if (hacker1.lenght < hacker2.length) {
    console.log(`The navigator has the longest name it has ${hacker2.length} characters`);
  }else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }

let name= "";
for (let i = 0;i<hacker1.length;i++){
  name +=hacker1[i].toUpperCase();
  name += " ";
}console.log(name);


 let inverseName = '';
for(let i = 1; i <= hacker1.length; i++) {
  inverseName += hacker1[hacker1.length - i];
}
console.log(inverseName);

