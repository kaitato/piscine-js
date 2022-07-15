export function compose() {
    document.addEventListener("keydown", (e) => {
        let keyName = e.key;
        if (keyName === "Backspace") {
            document
                .querySelectorAll("div")
                [document.querySelectorAll("div").length - 1].remove();
        } else if (keyName === "Escape") {
            document.querySelectorAll("div").forEach((k) => {
                k.remove();
            });
        } else {
            let elem = document.createElement("div");
            elem.className = "note";
            let color = "#" + 99 + e.keyCode + e.keyCode;
            elem.style.background = color;
            document.body.appendChild(elem);
            elem.innerHTML = keyName;
        }
    });
}
