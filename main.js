ImageCloseUp = document.getElementById("ImageCloseUp");

function Expand(Link1, Link2) {
    let Link = Link1 + Link2;
    document.getElementById("Image").src = Link;
    ImageCloseUp.style.display = "block";
}

function Shrink() {
    ImageCloseUp.style.display = "none";
    document.getElementById("Image").src = "";
}

window.addEventListener("keydown", (e) => {
    KeyPressed = e.key;
    if (KeyPressed == "Escape") {
        Shrink();
    }
});