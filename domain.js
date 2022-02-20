var a=prompt("enter your domain name");
console.log(a);
var patt= /^[a-z]+\.[a-z]{2,3}(\.)?([a-z]{2,3}(\.)?)?$/;
if (a.match(patt)!=null)
{
    console.log("it is valid");
}
else{
    console.log("it is unvalid");
}