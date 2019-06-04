document.addEventListener("DOMContentLoaded",

    function (event) {

        function myFunction(x) {
            if (x.matches) { // If media query matches
                document.getElementById("fx-icon").style.display = "none";
                document.getElementById("menunav").style.display = "none";
                document.getElementById("cross").style.display = "none";


                function menuclick(event) {
                    var men = document.querySelector("#fx-container");
                    men.style.display = "none";
                    document.getElementById("fx-icon").style.display = "block";
                    document.getElementById("menunav").style.display = "block";
                    document.getElementById("cross").style.display = "block";
                    var bo = document.querySelector("#main-content");
                    bo.style.background = "none";
                    bo.style.backgroundColor = "#0A1938";
                    bo.style.opacity = "1";
                }
                function closeclick(event) {
                    var men = document.querySelector("#fx-container");
                    men.style.display = "block";
                    document.getElementById("fx-icon").style.display = "none";
                    document.getElementById("menunav").style.display = "none";
                    document.getElementById("cross").style.display = "none";
                    var bo = document.querySelector("#main-content");
                    bo.style.background = "url('../images/BG_LandingPage.png') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";
                    bo.style.backgroundColor = "transparent";

                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("fx-icon").style.display = "block";
                document.getElementById("menunav").style.display = "block";
                document.getElementById("cross").style.display = "none";
            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);





