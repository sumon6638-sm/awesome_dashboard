<script type="text/javascript">
    const backgroundColorActive = document.getElementById("misc").style.backgroundColor;
    console.log(backgroundColorActive);

    const dashboard_links = document.querySelectorAll(".dashboard li");

    const active_tab = document.querySelector(".active-tab");


    // const cornerBottom = document.querySelector(".li.active .lists-item.after");

    let activeIndex;

    function moveActiveTab() {


        /* const backgroundColorActive = document.querySelector("pickBackground");
         */

        /* let myDivObjBgColor = backgroundColorActive.dataset.themeBg; */

        let colorTimeout = setTimeout(showColor, 5000);

    function showColor() {
        // let myDivObjBgColor = window.getComputedStyle(backgroundColorActive).backgroundColor;

        // console.log(myDivObjBgColor);

        // return myDivObjBgColor;
    }

    console.log(colorTimeout);



    /* let shadow = document.getElementsByClassName(".lists-item"); */

    let topPosition = activeIndex * 44 + 44;
            // console.log(topPosition);

            if (activeIndex > 20) {
        topPosition += shortcuts.clientHeight;
            }

    active_tab.style.top = `${topPosition}px`;

            // active_tab.dataset.themeBg = myDivObjBgColor;

            /* shadow.style.boxShadow = `15px 15px 0 ${myDivObjBgColor}`; */

            // cornerBottom.style.boxShadow = `15px -15px 0 ${myDivObjBgColor}`;
    // console.log(myDivObjBgColor);

    active_tab.style.backgroundColor = colorTimeout;
            // active_tab.style.transition = 'all 2s ease-in-out';
        }

    function changeLink() {
        // console.log("hello");
        dashboard_links.forEach(sideLink => sideLink.classList.remove("active"));
    this.classList.add("active");

    activeIndex = this.dataset.active;
    // console.log(activeIndex);

    moveActiveTab();
        }

        dashboard_links.forEach(link => link.addEventListener("click", changeLink));
</script>
</body >

</html >