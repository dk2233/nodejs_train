randomstr = require("randomstring");

let NUMBER = 200

function printf(x)
{
	console.log(x)
}

var obj = {
obj1 : 'aa',
	number : 10,
	aa: "name"
}


let array = [
{price: 10},
{price:20},
{price:30},
	]

console.time("testing time ")
console.log(obj)

printf(obj)

printf(process.execPath)	
console.timeEnd("testing time ")

console.time("forEach time")
array.forEach((item) => {console.log(item)})
console.timeEnd("forEach time")


console.time("for time")
for( let i=0; i < array.length ; i++)
{
	console.log(array[i])
}
console.timeEnd("for time")


let arr_random=[]

console.time("generating random")
for(let i=0; i< NUMBER; i++)
{
arr_random.push(randomstr.generate())
}
console.timeEnd("generating random")
//console.log(arr_random)	

console.time("for show")
for(let i=0; i< arr_random.length ; i++)
{
	console.log(arr_random[i])
}
str=console.timeEnd("for show")
console.log("\n")
console.time("foreach show")
arr_random.forEach( (item) => { console.log(item);
		});
console.timeEnd("foreach show")
console.log(str)
