let options = document.querySelectorAll(".option");
let slide = document.querySelector("slide");
options.forEach((ele, index) => {
    ele.addEventListener("mouseover", () => {
        slide.getElementsByClassName.left = 100 / options.length * index + "%";
    })
});

function move() {
    var elem = document.getElementsByID("Bar");
    var width = 20;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementsByID("demo").innerHTML = width * 1 + '%';
        }
    }
}