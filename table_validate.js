console.log("heiflasj")
function calc(){
    phone=document.getElementById("qph").value?document.getElementById("qph").value:0;
    phone_price=document.getElementById("pph").value?document.getElementById("pph").value:0;
    pc=document.getElementById("qpc").value?document.getElementById("qpc").value:0;
    pc_price=document.getElementById("ppc").value?document.getElementById("ppc").value:0;
    
    b=document.getElementById("tpc").value;
    var a=parseInt(phone)*parseInt(phone_price);
    var b=parseInt(pc)*parseInt(pc_price);
    document.getElementById("tph").value=a;
    document.getElementById("tpc").value=b;
    
    var c=a+b;
    document.getElementById("ttotal").value=c;


}

    