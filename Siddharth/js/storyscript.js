document.addEventListener("DOMContentLoaded",

    function (event) {

        function menuclick(event) {
            document.getElementById("mainstory").style.display = "none";
        }
        function closeclick(event) {
            document.getElementById("mainstory").style.display = "block";
            bo.style.background = "url('../images/BG_MobileTab.png') no-repeat center  fixed";
            bo.style.backgroundSize = "cover";
            bo.style.backgroundColor = "transparent";
        }
        document.getElementById("menubutton")
            .addEventListener("click", menuclick);

        document.getElementById("close")
            .addEventListener("click", closeclick);
    }
);
