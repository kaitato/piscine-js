let box;
let x;
let y;
let flag = true;
export function createCircle() {
    addEventListener("click", function () {
        let elem = document.createElement("div");
        elem.className = "circle";
        elem.style.left = x;
        elem.style.top = y;
        if (flag) {
            elem.style.background = "white";
        } else {
            elem.style.background = "var(--purple)";
        }
        document.body.appendChild(elem);
        flag = true;
    });
};
export function moveCircle() {
    addEventListener("mousemove", (e) => {
        document.querySelectorAll(".circleRem").forEach((el) => {
            el.remove();
        });
        x = e.clientX - 25 + "px";
        y = e.clientY - 25 + "px";
        let elem = document.createElement("div");
        elem.className = "circle";
        elem.classList.add("circleRem");
        if (flag) {
            elem.style.background = "white";
        } else {
            elem.style.background = "var(--purple)";
        }
        elem.style.left = x;
        elem.style.top = y;
        document.body.appendChild(elem);
        if (
            e.clientX >= box.getBoundingClientRect().left + 25 &&
            e.clientX <= box.getBoundingClientRect().right - 25 &&
            e.clientY >= box.getBoundingClientRect().top + 25 &&
            e.clientY <= box.getBoundingClientRect().bottom - 25
        ) {
            document.querySelector(".circle").style.background =
                "var(--purple)";
            flag = false;
        }
        if (!flag) {
            if (e.clientX - 25 < box.getBoundingClientRect().left) {
                circle.style.left = box.getBoundingClientRect().left + "px";
            }
            if (e.clientX + 25 > box.getBoundingClientRect().right) {
                circle.style.left =
                    box.getBoundingClientRect().right - 50 + "px";
            }
            if (e.clientY - 25 < box.getBoundingClientRect().top) {
                circle.style.top = box.getBoundingClientRect().top + "px";
            }
            if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
                circle.style.top =
                    box.getBoundingClientRect().bottom - 50 + "px";
            }
            document.querySelector(".circle").style.background =
                "var(--purple)";
        }
    });
};
export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
};
