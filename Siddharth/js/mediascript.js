document.addEventListener("DOMContentLoaded",

    function (event) {


        function myFunction(x) {



            if (x.matches) { // If media query matches

                function menuclick(event) {
                    document.getElementById("mainmed").style.display = "none";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../Siddharth/images/BG_MobileTab.png') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";

                }
                function closeclick(event) {
                    var mv = document.getElementById("mainmed");
                    mv.style.display = "block";
                    mv.style.width = "339px";
                    mv.style.height = "50vh";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../Siddharth/images/BG_MobileTab.png') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";


                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);



            }
            else {
                var mv = document.getElementById("mainmed");
                mv.style.display = "block";
                mv.style.width = "339px";
                mv.style.height = "50vh";
                var bo = document.querySelector("body");
                bo.style.background = "url('../Siddharth/images/BG_Media.png') no-repeat center  fixed";
                bo.style.backgroundSize = "cover";


            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))





    }


);





