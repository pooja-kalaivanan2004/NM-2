//Data type
var namee="Sita"
var regis=3194
var mail="sita@example.com"
var mat=55
var chem=64
var eng=87
var total= mat+chem+eng
var avg=(mat+chem+eng)/3

console.log("Name: "+ namee )
console.log("Registration Number: "+regis)
console.log("Email: "+mail)
console.log("Mathematics: "+mat)
console.log("Chemistry: "+chem)
console.log("English: "+eng)
console.log("Total Marks: "+total)
console.log("Average Marks: "+avg)

//Increment and Decrement
var a=1000
var b=100
var c=--a
b=++c
a=c
console.log(a)
console.log(b)
console.log(c)

//Conditional Statement
var date=27
if (date==27)
{
    console.log("Age is:", ++date)
}
else{
    console.log("Age is:", date)
}

//eg:
var a=100
var b=--a
var c=a
console.log(a)
console.log(b)
console.log(c)

//Function
function first(age)
{
    console.log("Her age is " + age);
}
first(18);

//Array
const fruits = ["grapes", "mango", "pineapple"];
console.log(fruits);
console.log(fruits[0]); 
fruits[1] = "blueberry";
fruits.push("date");     
fruits.unshift("avocado"); 
fruits.pop();   
fruits.shift();  
for (let fruit of fruits) {
  console.log(fruit);
}