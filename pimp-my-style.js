import { styles } from "./pimp-my-style.data.js";

export const pimp = (e) => {
    let b = e.querySelector("button");
    if (b.classList.contains("unpimp")) {
        let classes = Array.from(b.classList);
        b.classList.remove(classes[classes.length - 2]);
        if (b.classList.length === 2) {
            b.classList.toggle("unpimp");
            return;
        }
    }
    if (!b.classList.contains("unpimp")) {
        b.classList.add(styles[b.classList.length - 1]);
        if (
            b.classList.length === styles.length + 1 &&
            !b.classList.contains("unpimp")
        ) {
            b.classList.toggle("unpimp");
            return;
        }
        return;
    }
};
