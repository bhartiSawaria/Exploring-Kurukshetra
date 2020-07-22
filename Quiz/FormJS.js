

function onlyLettersInName (input)
{
    var toReplace1 = /[^a-z]/gi;
    input.value = input.value.replace(toReplace1, "");
}

function checkName()
{
    var name = document.getElementById("name");
    var  nameSpan = document.getElementById("nameSpan");
    
    if (name.value.length < 3)
    {
        
        nameSpan.innerHTML = "Please enter atleast 3 characters";
        name.style.borderColor = "red";
        name.style.borderStyle="solid";
        name.style.borderWidth = "2px";
    }
    else
        name.value = name.value.toUpperCase();
}

function normalName()
{    
    var name = document.getElementById("name");
    var  nameSpan = document.getElementById("nameSpan");
    name.style.borderColor = "black";
    name.style.borderStyle="solid";
    name.style.borderWidth = "1px";

    nameSpan.innerHTML = "";

}

function onlyNumbers(input)
{
    var toReplace2 = /[^0-9]/gi;
    input.value = input.value.replace( toReplace2, "");
}

function checkNo()
{
    var MobileNo = document.getElementById("MobileNo");
    if (MobileNo.value.length != 10)
    {
        var MobileNoSpan = document.getElementById("MobileNoSpan");
        MobileNoSpan.innerHTML = "Please enter a valid mobile number";
        MobileNo.style.borderColor = "red";
        MobileNo.style.borderStyle="solid";
        MobileNo.style.borderWidth = "2px";
    }
}

function normalNo()
{
    var MobileNo = document.getElementById("MobileNo");
    var MobileNoSpan = document.getElementById("MobileNoSpan");
    MobileNo.style.borderColor = "black";
    MobileNo.style.borderStyle="solid";
    MobileNo.style.borderWidth = "1px";

    MobileNoSpan.innerHTML = "";

}

function onlyEMail(input)
{
    var toReplace3 = /[^0-9 a-z @ .]/gi;
    input.value = input.value.replace( toReplace3, "");
}

function checkMail()
{
    var mail = document.getElementById("email");
    var mailSpan = document.getElementById("emailSpan");
    if (mail.value.indexOf('@')<=0)
    {
        mail.style.borderColor = "red";
        mail.style.borderStyle="solid";
        mail.style.borderWidth = "2px";

        mailSpan.innerHTML = "Invalid email";
    }

    else if (mail.value.charAt(mail.value.length - 4) != '.' && mail.value.charAt(mail.value.length - 3) != '.')
    {
        mail.style.borderColor = "red";
        mail.style.borderStyle="solid";
        mail.style.borderWidth = "2px";

        mailSpan.innerHTML = "Invalid email";
    }
}

function normalMail()
{
    var mail = document.getElementById("email");
    var mailSpan = document.getElementById("emailSpan");

    mail.style.borderColor = "black";
    mail.style.borderStyle="solid";
    mail.style.borderWidth = "1px";

    mailSpan.innerHTML = "";
}










function showMenu1()
{
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("toggleButton1").style.display = "none";
    document.getElementById("toggleButton2").style.display = "flex";
    document.getElementById("sideBar").style.transition = "5";
}

function showMenu2()
{
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("toggleButton2").style.display = "none";
    document.getElementById("toggleButton1").style.display = "flex";
    document.getElementById("sideBar").style.transition = "5";
}