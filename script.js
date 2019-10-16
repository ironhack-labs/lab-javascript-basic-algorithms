

let hacker1 = "Bruce Lee driver"
let hacker2 = "Chack Norris the danger itself"

let driver_id = "driver"

function hackName(s){
    if(s.includes(driver_id))
    {
        console.log("The driver's name is '" + s +"'")
    }
    else
    {
        console.log("The navigator's name is '" + s + "'")
    }
}

hackName(hacker1)
hackName(hacker2)


function nameLength(s1,s2){

    if(s1.length > s2.length)
    {
        if(s1.includes(driver_id))
        {
            console.log("The Driver has the longest name, it has " + s1.length + " characters")
        }
        else
        {
            console.log("Yo, navigator got the longest name, it has " + s1.length + " characters")
        }
    }
    else if(s1.length < s2.length)
    {
        if(s1.includes(driver_id))
        {
            console.log("Yo, navigator got the longest name, it has " + s2.length + " characters")
        }
        else
        {
            console.log("The Driver has the longest name, it has " + s2.length + " characters")
        }
    }
    else console.log("Wow, you both got equally long names, "+s1.length+" characters!")

}

nameLength(hacker1,hacker2)


function nameTrans(s){
    let nm = ""
    if(s.includes(driver_id)){
        for( let i = 0; i < s.length; i++)
        {
            nm = nm + s.charAt(i).toUpperCase()+ " "
        }
    }
    else
    {
        for( let i = 0; i < s.length; i++)
        {
            nm = nm + s.charAt(s.length-i-1)
        }

    }
    console.log(nm)
}

nameTrans(hacker2)
nameTrans(hacker1)


function alphaName(s1,s2)
{
    lnght = (s1.length<s2.length) ? s1.length : s2.length
    let n=2
    for( let i = 0; i < lnght; i++)
    {
        if(s1.charAt(i)<s2.charAt(i))
        {
            n=1
            break
        }
        if(s1.charAt(i)>s2.charAt(i))
        {
            break
        }
        if((i===(lnght-1))&&(n===2))
        {
            n=0
            console.log("What?! You both got the same name?")
        }
    }
    if ((n===1)&&(s1.includes(driver_id)))
    {
        console.log("The driver's name goes first.")
    }
    if ((n===2)&&(s2.includes(driver_id)))
    {
        console.log("The driver's name goes first.")
    }
    if ((n===1)&&(s2.includes(driver_id)))
    {
        console.log("Yo, the navigator goes first definitely.")
    }
    if ((n===2)&&(s1.includes(driver_id)))
    {
        console.log("Yo, the navigator goes first definitely.")
    }
}
alphaName(hacker1,hacker2)
