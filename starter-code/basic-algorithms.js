//driver
let hacker1 = "Arthur"
console.log("Drivers name is " + hacker1.toUpperCase())
let hacker2 = prompt("your name please?");
console.log("navigator is " + hacker2)

if (hacker1.length > hacker2.length) {
  console.log("driver has a longer name " + hacker1.length)
} else if (hacker1.length < hacker2.length) {
  console.log("other has a longer name " + hacker2.length)
} else {
  console.log("both have same length " + hacker1.length)
}