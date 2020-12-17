function main() {
    let newColor = document.getElementById("main").value;
    document.documentElement.style
        .setProperty('--main-color', newColor);
}

function sec() {
    let newColor = document.getElementById("secondry").value;
    document.documentElement.style
        .setProperty('--secondry-color', newColor);
}