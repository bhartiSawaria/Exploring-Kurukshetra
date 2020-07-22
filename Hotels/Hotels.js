var slideIndex1 = 1;
showSlide1(slideIndex1);



function plusSlides1(n)
{

    showSlide1(slideIndex1 += n);
}
function currentSlide1(n) 
{
    showSlide1(slideIndex1 = n);
}
function showSlide1(n)
{
    var i;
    var slides1 = document.getElementsByClassName("slide1");
    var dot1 = document.getElementsByClassName("dots1");
    if (n > slides1.length) { slideIndex1 = 1};
    if (n < 1) { slideIndex1 = slides1.length};
    for (i=0;i<slides1.length;i++) 
    {
        slides1[i].style.display = "none";
    };
    for (i=0;i<dot1.length;i++) 
    {
        dot1[i].className = dot1[i].className.replace(" active","");
    };
    slides1[slideIndex1-1].style.display = "block";
    dot1[slideIndex1-1].className += " active";
}


var slideIndex2 = 1;
showSlide2(slideIndex2);
function plusSlides2(n)
{
    showSlide2(slideIndex2 += n);
}
function currentSlide2(n) 
{
    showSlide2(slideIndex2 = n);
}
function showSlide2(n)
{
    var i;
    var slides2 = document.getElementsByClassName("slide2");
    var dot2 = document.getElementsByClassName("dots2");
    if (n > slides2.length) { slideIndex2 = 1};
    if (n < 1) { slideIndex2 = slides2.length};
    for (i=0;i<slides2.length;i++) 
    {
        slides2[i].style.display = "none";
    };
    for (i=0;i<dot2.length;i++) 
    {
        dot2[i].className = dot2[i].className.replace(" active","");
    };
    slides2[slideIndex2-1].style.display = "block";
    dot2[slideIndex2-1].className += " active";
}


var slideIndex3 = 1;
showSlide3(slideIndex3);
function plusSlides3(n)
{
    showSlide3(slideIndex3 += n);
}
function currentSlide3(n) 
{
    showSlide3(slideIndex3 = n);
}
function showSlide3(n)
{
    var i;
    var slides3 = document.getElementsByClassName("slide3");
    var dot3 = document.getElementsByClassName("dots3");
    if (n > slides3.length) { slideIndex3 = 3};
    if (n < 1) { slideIndex3 = slides3.length};
    for (i=0;i<slides3.length;i++) 
    {
        slides3[i].style.display = "none";
    };
    for (i=0;i<dot3.length;i++) 
    {
        dot3[i].className = dot3[i].className.replace(" active","");
    };
    slides3[slideIndex3-1].style.display = "block";
    dot3[slideIndex3-1].className += " active";
}


var slideIndex4 = 1;
showSlide4(slideIndex4);
function plusSlides4(n)
{
    showSlide4(slideIndex4 += n);
}
function currentSlide4(n) 
{
    showSlide4(slideIndex4 = n);
}
function showSlide4(n)
{
    var i;
    var slides4 = document.getElementsByClassName("slide4");
    var dot4 = document.getElementsByClassName("dots4");
    if (n > slides4.length) { slideIndex4 = 1};
    if (n < 1) { slideIndex4 = slides4.length};
    for (i=0;i<slides4.length;i++) 
    {
        slides4[i].style.display = "none";
    };
    for (i=0;i<dot4.length;i++) 
    {
        dot4[i].className = dot4[i].className.replace(" active","");
    };
    slides4[slideIndex4-1].style.display = "block";
    dot4[slideIndex4-1].className += " active";
}


var slideIndex5 = 1;
showSlide5(slideIndex5);
function plusSlides5(n)
{
    showSlide5(slideIndex5 += n);
}
function currentSlide5(n) 
{
    showSlide5(slideIndex5 = n);
}
function showSlide5(n)
{
    var i;
    var slides5 = document.getElementsByClassName("slide5");
    var dot5 = document.getElementsByClassName("dots5");
    if (n > slides5.length) { slideIndex5 = 1};
    if (n < 1) { slideIndex5 = slides5.length};
    for (i=0;i<slides5.length;i++) 
    {
        slides5[i].style.display = "none";
    };
    for (i=0;i<dot5.length;i++) 
    {
        dot5[i].className = dot5[i].className.replace(" active","");
    };
    slides5[slideIndex5-1].style.display = "block";
    dot5[slideIndex5-1].className += " active";
}


var slideIndex6 = 1;
showSlide6(slideIndex6);
function plusSlides6(n)
{
    showSlide6(slideIndex6 += n);
}
function currentSlide6(n) 
{
    showSlide6(slideIndex6 = n);
}
function showSlide6(n)
{
    var i;
    var slides6 = document.getElementsByClassName("slide6");
    var dot6 = document.getElementsByClassName("dots6");
    if (n > slides6.length) { slideIndex6 = 1};
    if (n < 1) { slideIndex6 = slides6.length};
    for (i=0;i<slides6.length;i++) 
    {
        slides6[i].style.display = "none";
    };
    for (i=0;i<dot6.length;i++) 
    {
        dot6[i].className = dot6[i].className.replace(" active","");
    };
    slides6[slideIndex6-1].style.display = "block";
    dot6[slideIndex6-1].className += " active";
}


var slideIndex7 = 1;
showSlide7(slideIndex7);
function plusSlides7(n)
{
    showSlide7(slideIndex7 += n);
}
function currentSlide7(n) 
{
    showSlide7(slideIndex7 = n);
}
function showSlide7(n)
{
    var i;
    var slides7 = document.getElementsByClassName("slide7");
    var dot7 = document.getElementsByClassName("dots7");
    if (n > slides7.length) { slideIndex7 = 1};
    if (n < 1) { slideIndex7 = slides7.length};
    for (i=0;i<slides7.length;i++) 
    {
        slides7[i].style.display = "none";
    };
    for (i=0;i<dot7.length;i++) 
    {
        dot7[i].className = dot7[i].className.replace(" active","");
    };
    slides7[slideIndex7-1].style.display = "block";
    dot7[slideIndex7-1].className += " active";
}


var slideIndex8 = 1;
showSlide8(slideIndex8);
function plusSlides8(n)
{
    showSlide8(slideIndex8 += n);
}
function currentSlide8(n) 
{
    showSlide8(slideIndex8 = n);
}
function showSlide8(n)
{
    var i;
    var slides8 = document.getElementsByClassName("slide8");
    var dot8 = document.getElementsByClassName("dots8");
    if (n > slides8.length) { slideIndex8 = 1};
    if (n < 1) { slideIndex8 = slides8.length};
    for (i=0;i<slides8.length;i++) 
    {
        slides8[i].style.display = "none";
    };
    for (i=0;i<dot8.length;i++) 
    {
        dot8[i].className = dot8[i].className.replace(" active","");
    };
    slides8[slideIndex8-1].style.display = "block";
    dot8[slideIndex8-1].className += " active";
}


var slideIndex9 = 1;
showSlide9(slideIndex9);
function plusSlides9(n)
{
    showSlide9(slideIndex9 += n);
}
function currentSlide9(n) 
{
    showSlide9(slideIndex9 = n);
}
function showSlide9(n)
{
    var i;
    var slides9 = document.getElementsByClassName("slide9");
    var dot9 = document.getElementsByClassName("dots9");
    if (n > slides9.length) { slideIndex9 = 1};
    if (n < 1) { slideIndex9 = slides9.length};
    for (i=0;i<slides9.length;i++) 
    {
        slides9[i].style.display = "none";
    };
    for (i=0;i<dot9.length;i++) 
    {
        dot9[i].className = dot9[i].className.replace(" active","");
    };
    slides9[slideIndex9-1].style.display = "block";
    dot9[slideIndex9-1].className += " active";
}


var slideIndex10 = 1;
showSlide10(slideIndex10);
function plusSlides10(n)
{
    showSlide10(slideIndex10 += n);
}
function currentSlide10(n) 
{
    showSlide10(slideIndex10 = n);
}
function showSlide10(n)
{
    var i;
    var slides10 = document.getElementsByClassName("slide10");
    var dot10 = document.getElementsByClassName("dots10");
    if (n > slides10.length) { slideIndex10 = 1};
    if (n < 1) { slideIndex10 = slides10.length};
    for (i=0;i<slides10.length;i++) 
    {
        slides10[i].style.display = "none";
    };
    for (i=0;i<dot10.length;i++) 
    {
        dot10[i].className = dot10[i].className.replace(" active","");
    };
    slides10[slideIndex10-1].style.display = "block";
    dot10[slideIndex10-1].className += " active";
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