function Generate() {
    var length = 15,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890{}()!",
        retVal = "";
        for (var i=0,n=charset.length;i<length;i++)
        {
            retVal+=charset.charAt(Math.floor(Math.random()*n));
        }
        console.log(retVal);
        document.getElementById("password").value=retVal;
}



function copyPassword(){
    var copyText=document.getElementById("password");
    copyText.ariaSelected();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
    document.getElementById("copied").textContent="PassWord Copied: "+copyText.value;
}