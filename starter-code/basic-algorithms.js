var haker1 = {
  name: "patrick"
};
var nav = prompt("put a name for a user");
var haker2 = {
  name: nav
};
console.log("user name is " + haker1.name);
console.log("driver name " + haker2.name);

if (haker1.name.length > haker2.name.length) {
  console.log(
    "The driver has the longest name " +
      haker1.name +
      " " +
      haker1.name.length +
      " characters"
  );
}
if (haker1.name.length < haker2.name.length) {
  console.log(
    "Yo, navigator got the longest name " +
      haker2.name +
      " " +
      haker2.name.length +
      " characters"
  );
}
if ((haker1.name.length = haker2.name.length)) {
  console.log(
    "wow, you both got equally long names " + haker2.name.length + " characters"
  );
}
//name of driver in capital
var tableDriver = [];
for (let i = 0; i <= haker1.name.length; i++) {
  var driver = haker1.name.charAt(i);
  console.log(driver.toUpperCase(i));
  tableDriver.push(driver.toUpperCase(i));
}
console.log(tableDriver.join(" "));
//name of navigator reverse
var tableNav = [];
for (let i = haker2.name.length; i >= 0; i -= 1) {
  var navName = haker2.name.charAt(i);
  console.log(navName);
  tableNav.push(navName.toUpperCase(i));
}
console.log(tableNav.join(" "));
//Depending on the lexicographic order of the strings, print:
if (tableDriver[0] > tableNav[0]) {
  console.log("The driver's name goes first");
}
if (tableDriver[0] < tableNav[0]) {
  console.log("Yo, the navigator goes first definitely");
}
if ((tableDriver[0] = tableNav[0])) {
  console.log("What?! You both got the same name?");
}
