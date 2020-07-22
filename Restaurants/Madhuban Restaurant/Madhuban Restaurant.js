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