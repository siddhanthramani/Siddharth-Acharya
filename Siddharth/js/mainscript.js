document.addEventListener("DOMContentLoaded",

    function (event) {
        function iimgenter(event) {
            var anime = document.getElementById("insta")
            anime.style.height = "22px";
            anime.style.maxwidth = "22px";
        };
        function fbimgenter(event) {
            var anime = document.getElementById("fbb")
            anime.style.height = "22px";
            anime.style.maxwidth = "22px";
        };
        function timgenter(event) {
            var anime = document.getElementById("tb")
            anime.style.height = "18px";
            anime.style.maxwidth = "18px";
        };
        function amimgenter(event) {
            var anime = document.getElementById("amb")
            anime.style.height = "22px";
            anime.style.maxwidth = "22px";
        };
        function simgenter(event) {
            var anime = document.getElementById("sb")
            anime.style.height = "22px";
            anime.style.maxwidth = "22px";
        };
        function bcimgenter(event) {
            var anime = document.getElementById("bcb")
            anime.style.height = "15px";
            anime.style.maxwidth = "15px";
        };
        function scimgenter(event) {
            var anime = document.getElementById("scb")
            anime.style.height = "12px";
            anime.style.maxwidth = "12px";
        };
        /////////////////////////////////////////////////////////
        function iimgleave(event) {
            var anime = document.getElementById("insta")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function fbimgleave(event) {
            var anime = document.getElementById("fbb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function timgleave(event) {
            var anime = document.getElementById("tb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function amimgleave(event) {
            var anime = document.getElementById("amb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function simgleave(event) {
            var anime = document.getElementById("sb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function bcimgleave(event) {
            var anime = document.getElementById("bcb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };
        function scimgleave(event) {
            var anime = document.getElementById("scb")
            anime.style.height = "25px";
            anime.style.maxwidth = "25px";
        };

        ////////////////////////////////////////////////////////
        var docimgenter = document.querySelectorAll(".Icons ul li");



        var j;
        for (j = 0; j < docimgenter.length; j++) {
            if (j == 0) {
                docimgenter[j].addEventListener("mouseenter", iimgenter);
            }
            else if (j == 1) {
                docimgenter[j].addEventListener("mouseenter", fbimgenter);
            }
            else if (j == 2) {
                docimgenter[j].addEventListener("mouseenter", timgenter);
            }
            else if (j == 3) {
                docimgenter[j].addEventListener("mouseenter", amimgenter);
            }
            else if (j == 4) {
                docimgenter[j].addEventListener("mouseenter", simgenter);
            }
            else if (j == 5) {
                docimgenter[j].addEventListener("mouseenter", bcimgenter);
            }
            else if (j == 6) {
                docimgenter[j].addEventListener("mouseenter", scimgenter);
            }


        }




        var docimgleave = document.querySelectorAll(".Icons ul li");

        for (j = 0; j < docimgenter.length; j++) {
            if (j == 0) {
                docimgleave[j].addEventListener("mouseleave", iimgleave);
                docimgleave[j].addEventListener("click", iimgleave);
                docimgleave[j].addEventListener("dblclick", iimgleave);
            }
            else if (j == 1) {
                docimgleave[j].addEventListener("mouseleave", fbimgleave);
                docimgleave[j].addEventListener("click", fbimgleave);
                docimgleave[j].addEventListener("dblclick", fbimgleave);
            }
            else if (j == 2) {
                docimgleave[j].addEventListener("mouseleave", timgleave);
                docimgleave[j].addEventListener("click", timgleave);
                docimgleave[j].addEventListener("dblclick", timgleave);
            }
            else if (j == 3) {
                docimgleave[j].addEventListener("mouseleave", amimgleave);
                docimgleave[j].addEventListener("click", amimgleave);
                docimgleave[j].addEventListener("dblclick", amimgleave);
            }
            else if (j == 4) {
                docimgleave[j].addEventListener("mouseleave", simgleave);
                docimgleave[j].addEventListener("click", simgleave);
                docimgleave[j].addEventListener("dblclick", simgleave);
            }
            else if (j == 5) {
                docimgleave[j].addEventListener("mouseleave", bcimgleave);
                docimgleave[j].addEventListener("click", bcimgleave);
                docimgleave[j].addEventListener("dblclick", bcimgleave);
            }
            else if (j == 6) {
                docimgleave[j].addEventListener("mouseleave", scimgleave);
                docimgleave[j].addEventListener("click", scimgleave);
                docimgleave[j].addEventListener("dblclick", scimgleave);
            }


        }




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
                    var mc = document.querySelector("#main-content");
                    mc.style.background = "none";
                    mc.style.backgroundColor = "#0A1938";
                    mc.style.opacity = "0.7";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../Siddharth/images/BG_LandingPage.png') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";

                }
                function closeclick(event) {
                    var men = document.querySelector("#fx-container");
                    men.style.display = "block";
                    document.getElementById("fx-icon").style.display = "none";
                    document.getElementById("menunav").style.display = "none";
                    document.getElementById("cross").style.display = "none";
                    var mc = document.querySelector("#main-content");

                    mc.style.backgroundColor = "transparent";
                    mc.style.opacity = "1";
                    // mc.style.background = "url('../images/BG_LandingPage.png') no-repeat center  fixed";
                    // mc.style.backgroundSize = "cover";
                    // var bo = document.querySelector("body");
                    // bo.style.background = "none";
                    // Dont know why it doesnt work with bg pc set on main content and not body


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
                var men = document.querySelector("#fx-container");
                men.style.display = "block";
                document.getElementById("fx-icon").style.display = "block";
                document.getElementById("menunav").style.display = "block";
                document.getElementById("cross").style.display = "none";
                var mc = document.querySelector("#main-content");
                mc.style.backgroundColor = "transparent";
                mc.style.opacity = "1";




            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);





