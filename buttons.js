(function () {
    const GREEN = document.querySelector(".button__container--green")
    const PINK = document.querySelector(".button__container--pink")
    const YELLOW = document.querySelector(".button__container--yellow")
    const CONTAINER = document.querySelector(".button__container")


    GREEN.addEventListener("click", changeColorGreen)
    PINK.addEventListener("click", changeColorPink)
    YELLOW.addEventListener("click", changeColorYellow)

    function changeColorGreen() {
        CONTAINER.style.backgroundColor = "#DBF7BB"
    }

    function changeColorPink() {
        CONTAINER.style.backgroundColor = "#F88379"
    }
    function changeColorYellow() {
        CONTAINER.style.backgroundColor = "#FFC300"
    }

})()