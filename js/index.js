// Iteration 1: Names and Input
let hacker1 = "driver name"
console.log("The driver's name is ", hacker1,".")
let hacker2 = "navigator name"
console.log("The navigator's name is ", hacker2,".")

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length)
{
	console.log("The driver has the longest name, it has ",hacker1.length," characters.")
}
else if (hacker1.length < hacker2.length)
{
	console.log("It seems that the navigator has the longest name, it has " hacker2.length," characters.")
}
else if (hacker1.length == hacker2.length)
{
	console.log("Wow, you both have equally long names, ", hacker1.length," characters!")
}

// Iteration 3: Loops
let driverName ""
for ( i = 0; i < hacker1.length; i++)
{	
	driverName += hacker[i].toUpperCase() + ' '
}
console.log(driverName)

let backwardsName = ""
for ( i=hacker1.length-1; i>=0; i--)
{
	backwardsName+=hacker1[i]
}
console.log(backwardsName)

let shortestLength

if(hacker1.length<hacker2.length)
{
	shortestLength = hacker1.length
}
else
{
	shortestLength = hacker2.length
}

let sameNameCheck = 0

if(hacker1.length == hacker2.length)
{
	sameNameCheck = 1
}

for(i = 0; i < shortestLength; i++)
{
	if(hacker1[i] < hacker2[i])
	{
		console.log()
	}
	else if(hacker1[i] == hacker2[i]
	{
		if(i == shortestLength-1 && sameNameCheck == 1)
		{
			console.log()
		}
		continue
	}
	else
	{
		console.log()
	}
}