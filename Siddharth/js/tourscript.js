document.addEventListener("DOMContentLoaded",

    function (event) {
        var hid = 1;
        var first = document.querySelectorAll(".firsttour");
        var second = document.querySelectorAll(".secondtour");
        var j;
        for (j = 0; j < first.length; j++) {
            first[j].style.display = "block";
        };
        for (j = 0; j < second.length; j++) {
            second[j].style.display = "none";
        };

        function rightclick(event) {

            console.log("before right" + hid);
            if (hid == 2) {
                hid = 0;
            }
            hid++;

            console.log("after right" + hid);
            if (hid == 1) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "block";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };
            }
            else if (hid == 2) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "block";
                };
            }
        };
        document.getElementById("right")
            .addEventListener("click", rightclick);

        function leftclick(event) {

            console.log("before left" + hid);
            if (hid == 1) {
                hid = 3;
            }
            hid--;

            console.log("after left " + hid);
            if (hid == 1) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "block";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "none";
                };

            }
            else if (hid == 2) {
                for (j = 0; j < first.length; j++) {
                    first[j].style.display = "none";
                };
                for (j = 0; j < second.length; j++) {
                    second[j].style.display = "block";
                };
            }
        };
        document.getElementById("left")
            .addEventListener("click", leftclick);

        function myFunction(x) {



            if (x.matches) { // If media query matches

                function menuclick(event) {
                    document.getElementById("maintour").style.display = "none";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../Siddharth/images/BG_MobileTab.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";

                }
                function closeclick(event) {
                    document.getElementById("maintour").style.display = "block";
                    var bo = document.querySelector("body");
                    bo.style.background = "url('../Siddharth/images/BG_MobileTab.jpg') no-repeat center  fixed";
                    bo.style.backgroundSize = "cover";


                }
                document.getElementById("menubutton")
                    .addEventListener("click", menuclick);

                document.getElementById("close")
                    .addEventListener("click", closeclick);

            }
            else {
                document.getElementById("maintour").style.display = "block";
                var bo = document.querySelector("body");
                bo.style.background = "url('../Siddharth/images/BG_Tour.jpg') no-repeat center  fixed";
                bo.style.backgroundSize = "cover";
            }
        }

        var x = window.matchMedia("(max-width: 767px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction); // Attach listener function on state changes
        document.addEventListener("resize", myFunction(x))
    }


);










