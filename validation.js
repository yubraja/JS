var a=prompt("Enter your phone number");
console.log(a);
var patt= /^\d{10}$/;
if (a.match(patt) !=null)
{
    console.log("it is valid");
}
else{
    console.log("please enter a valid number");
}