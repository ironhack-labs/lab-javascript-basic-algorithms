//task1
let hacker1 = "Ulvi";
console.log("The driver's name is " + hacker1);

let hacker2 = "Yunus"
console.log("The navigator's name is " + hacker2);

//task2
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//task3
let str="";
for(const ch of hacker1){
    str+=ch.toUpperCase();
    str+=" ";
}
console.log(str);

let reversed="";
for(let i=hacker2.length-1;i>=0;i--){
    reversed+=hacker2[i];
}
console.log(reversed)

if(hacker1>hacker2){
    console.log("The driver's name goes first.");
}
else if(hacker1<hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name?");
}

//bonus1
let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis semper quam, vitae varius nisl faucibus molestie. Fusce tristique rhoncus quam ac finibus. Proin convallis vehicula mauris in consectetur. Sed pulvinar libero at est pulvinar rhoncus. Etiam rhoncus non dolor et interdum. Vivamus sed neque commodo, varius orci quis, porttitor mi. Curabitur mollis placerat diam quis sollicitudin. Donec vitae sodales elit. Sed in odio blandit lectus aliquet egestas. Sed in tellus sem.

Etiam ac auctor tortor. In maximus nibh mauris, non tempus turpis gravida sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vel orci rutrum, sollicitudin purus id, vehicula urna. Pellentesque vel neque sem. Integer aliquet lacinia mi, at sollicitudin erat suscipit sit amet. Curabitur lacinia nunc est, a rutrum mauris sodales in. Suspendisse quis ligula fermentum, fringilla leo at, viverra elit. Morbi a mauris sit amet risus tincidunt vulputate vitae sit amet urna. Aliquam erat volutpat. In tristique finibus consequat. Curabitur ut ante dui.

Suspendisse sed fringilla odio. Fusce ultrices molestie quam, a ullamcorper sapien convallis eu. Quisque sit amet diam ac est volutpat placerat. Fusce pellentesque tellus id lorem elementum, sit amet tempor nibh vestibulum. Nulla feugiat massa ligula, ac malesuada nunc dignissim et. Sed dignissim, dui in pulvinar aliquam, nulla nulla ullamcorper nibh, ut egestas quam nulla at lectus. Ut vehicula interdum ante at fermentum. Pellentesque vel felis et magna pharetra efficitur a sagittis sem. Integer ut ligula at erat lacinia sodales. Curabitur varius tincidunt suscipit. Curabitur vehicula, magna non egestas iaculis, leo augue porta lectus, eget consectetur mi sapien a nibh. Praesent quis est eu felis pretium maximus. Cras tempus velit nibh, quis imperdiet enim placerat vel. Mauris est nunc, interdum nec dictum quis, imperdiet in enim.`

let count=0;
longText=longText.trim() ;
for(const num of longText){
    if(num==" ") count++;
}
//console.log(longText.split(" ").length)
console.log(count+1);


let words=longText.toLowerCase().split(/\s+/);
let countChar=0;
for(const word of words){
    if(word==="et") countChar++;
}
console.log(countChar);

// const count1=longText
// .toLowerCase()
// .split(/\s+/)
// .filter(wd => wd === "et")
// .length
// console.log(count1);

//bonus2
let phraseToCheck="Amor, Roma";
let cleaned="";
for(let c of phraseToCheck){
    c = c.toLowerCase();

    if (
        (c >= "a" && c <= "z") ||
        (c >= "0" && c <= "9")
    ) {
        cleaned += c;
    }
}

let isPoln=true;
for(let i=0;i<cleaned.length/2;i++){
    if(cleaned[i]!=cleaned[cleaned.length-1-i]){
        isPoln=false;
    }
}

if(isPoln){
    console.log("is Polindrome")
}
else{
    console.log("is not Polindrome")
}
