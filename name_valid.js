function ram()
{   
    console.log("hi")
    var patt= /^[A-Za-z]+ ([A-Za-z]+(\.)?\s)?[A-Za-z]+$/;
    if (a.match(patt) !=null)
    {
        console.log("it is valid");
    }
    else{
        console.log("please enter a valid name");
    }
}