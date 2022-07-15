export function generateLetters() {
    for (let i = 1; i <= 120; i++) {
        let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
            Math.floor(Math.random() * 26)
        );
        let elem = document.createElement("div");
        elem.innerHTML = char;
        elem.style.fontSize = i + 10 + "px";
        if (i <= 40) {
            elem.style.fontWeight = "300";
        } else if (i <= 80) {
            elem.style.fontWeight = "400";
        } else {
            elem.style.fontWeight = "600";
        }
        document.body.append(elem);
    }
}
