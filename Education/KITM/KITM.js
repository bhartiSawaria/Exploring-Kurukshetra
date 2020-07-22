function displayIcon1()
{
    var icon = document.getElementById("icon1");
    icon.style.display="block";
}

function hideIcon1()
{
    var icon = document.getElementById("icon1");
    icon.style.display="none";
}

function displayIcon2()
{
    var icon = document.getElementById("icon2");
    icon.style.display="block";
}

function hideIcon2()
{
    var icon = document.getElementById("icon2");
    icon.style.display="none";
}

function displayIcon3()
{
    var icon = document.getElementById("icon3");
    icon.style.display="block";
}

function hideIcon3()
{
    var icon = document.getElementById("icon3");
    icon.style.display="none";
}

function displayIcon4()
{
    var icon = document.getElementById("icon4");
    icon.style.display="block";
}

function hideIcon4()
{
    var icon = document.getElementById("icon4");
    icon.style.display="none";
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
