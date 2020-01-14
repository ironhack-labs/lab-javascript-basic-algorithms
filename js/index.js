// Iteration 1: Names and Input
var hacker1 = "Tarek";
var hacker2 = "Uros";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`he driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
}

// Iteration 3: Loops
var result1="";
for (var i=0;i<hacker1.length;i++){
    
    result1=result1+" "+hacker1[i].toUpperCase();    
}
console.log(result1);
result2="";
for (var i=hacker2.length-1;i>=0;i--){
    result2=result2+" "+hacker2[i].toLowerCase();
}
console.log(result2);

for(var i=0;i<=hacker1;i++){
    if(hacker1===hacker2){
        console.log("What?! You both have the same name?");
    }
    else{
        if(hacker1[i]>hacker2[i]){
            console.log("Yo, the navigator goes first definitely.");
        }
        else if(hacker1[i]<hacker2[i]){
            console.log("The driver's name goes first.");
        }
        else{
            continue;
        }

    }
}
var str1=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus arcu quis gravida vehicula. Fusce sapien elit, molestie ut iaculis sed, pharetra sit amet nibh. Ut eu erat eu nibh gravida tincidunt feugiat in purus. Vestibulum fermentum maximus mi, quis ultricies leo porttitor sit amet. Donec a volutpat lectus. Nunc et iaculis ante, eu commodo leo. In vitae ante a odio elementum porta. Donec id porta risus, vitae interdum turpis. Nulla venenatis erat aliquet ornare fermentum. Quisque commodo, lacus ac pulvinar vehicula, arcu leo lacinia nulla, et hendrerit magna ipsum vitae felis. Sed eu purus leo. Vestibulum a tincidunt leo, facilisis maximus turpis. Phasellus hendrerit mi tristique, rhoncus nibh non, malesuada massa.

Vivamus mattis ligula at orci lacinia pulvinar. Nullam cursus in lorem eget mattis. In pellentesque nisi nec mollis gravida. Maecenas scelerisque orci eget blandit suscipit. Donec et aliquam orci. Aenean congue elementum tempus. Mauris rhoncus nisi vitae neque bibendum fermentum. Duis scelerisque pharetra commodo. Etiam pulvinar varius leo eget sodales. Aenean facilisis pulvinar massa, at finibus ante tincidunt nec. Praesent lectus nibh, ultrices ac purus id, fermentum suscipit arcu. Duis interdum eros non dolor maximus porttitor. Praesent volutpat libero in ornare aliquet.

Integer convallis, neque nec imperdiet laoreet, ante odio aliquet tellus, nec tempor nisl neque a dui. Praesent et sapien finibus dolor bibendum efficitur nec et enim. Quisque posuere leo orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut turpis blandit nisi rhoncus bibendum at non elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur, nisl scelerisque tempus placerat, lacus sapien gravida justo, sit amet fermentum lorem nisl id tellus. Maecenas a ipsum gravida, euismod ante ac, pharetra felis. Nullam convallis urna dui, eget luctus justo placerat eget.`;
var numOfWards=0;
for (var i=0;i<=str1.length;i++){
    if(str1[i]===" "){
        numOfWards=numOfWards+1;
    }
}
console.log(numOfWards);
var count=0;
for(i=0;i<=str1.length;i++){
    if(str1[i]==" " && str1[i+1]=="e" && str1[i+2]=="t" && str1[i+3]==" "){
        count++;
    }
}
console.log(count);



