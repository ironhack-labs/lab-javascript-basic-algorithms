let hacker1= "Eustaquio";
let hacker2= "Anselmo";
i=0;
j=hacker2.length -1;
k=0;
longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi dui, ultricies vitae erat sed, tincidunt condimentum ante. Aliquam erat volutpat. In tempor, sapien et sagittis fermentum, felis neque iaculis dolor, quis pellentesque nibh diam dapibus ipsum. Etiam semper elementum tellus, ac blandit justo sagittis vitae. Vivamus non neque viverra, tempor felis vel, dapibus mi. Phasellus suscipit ligula ac imperdiet auctor. Aliquam id porttitor ipsum, eu egestas magna. Donec nec fermentum neque. Nam pellentesque arcu sit amet diam fringilla, eu aliquet turpis accumsan. Proin sodales enim tristique, placerat tellus a, interdum odio. Vestibulum eget tellus gravida metus congue accumsan ut sed urna. Vestibulum quis condimentum sem, vel egestas lacus. Vivamus egestas neque ex, nec condimentum nulla aliquam ut. Sed sem mauris, eleifend eu molestie eget, placerat semper tellus.Praesent at vestibulum ante, id ullamcorper tortor. Nullam vitae pellentesque purus, ut scelerisque nisi. Fusce laoreet, elit sed congue porta, erat arcu pulvinar nibh, vitae semper nunc enim id leo. Integer quis libero nisl. Mauris non dolor auctor, iaculis mauris id, pellentesque mauris. Suspendisse faucibus mollis urna, eget molestie libero. Donec eleifend eros at consequat commodo. Proin sed ipsum tellus. Etiam et leo at arcu iaculis mollis. Vivamus laoreet magna id fermentum ultricies.Duis commodo metus non mi viverra dictum. Nulla facilisi. Praesent porttitor nisl in elit lobortis efficitur. In eget bibendum est, nec pharetra diam. Vestibulum vel molestie purus. Maecenas tincidunt, leo a pretium tempor, mi enim fermentum risus, et interdum urna quam sed nisl. Nulla euismod tempor euismod. Aenean scelerisque at metus non aliquet. Ut id faucibus dolor, at placerat ex. Aliquam mollis mauris in bibendum semper. Pellentesque non orci vel massa sagittis ullamcorper non sit amet mi. Vestibulum ligula neque, porttitor et molestie laoreet, imperdiet quis purus. Phasellus ac sagittis augue, quis bibendum justo. Nam nec varius ipsum, non porta augue."
etWords=0;

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if(hacker1.length > hacker2.length){

    console.log( hacker1 +", the driver, has the longest name with " + hacker1.length +" characters.");

}

if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + "characters." );
}

if(hacker1.length == hacker2.length){
    console.log("Wow, you both have equally long names," + hacker2.length + " characters!");
}


while(i < hacker1.length){
    console.log("Main driver's name letters:" + hacker1[i].toUpperCase());
    i++;
}

while(j >= 0){
    console.log("Reversed navigator's name letters:" + hacker2[j]);
    j--;
}


if(hacker1 === hacker2){
    console.log("What?! Do you have the same name?!");
}

while (longText.length > k ){
    if( (longText[k] + longText[k+1] ) == "et"){
        etWords++;
    }
    k++;
}

console.log("The Lorem block have " + k + " words.");
console.log("The et words are " + etWords + " words.");

