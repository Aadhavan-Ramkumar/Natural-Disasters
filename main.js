ImageCloseUp = document.getElementById("ImageCloseUp");
let Link;

function Expand(Link1, Link2, Title) {
    Link = Link1 + Link2;
    document.getElementById("Image").src = Link;
    document.getElementById("Image").setAttribute("title", Title + "—Click to open in a new tab.");
    ImageCloseUp.style.display = "block";
}

function Close() {
    ImageCloseUp.style.display = "none";
    document.getElementById("Image").src = "";
}

function Open() {
    window.open(Link, "_blank");
}

window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        Close();
    }
});