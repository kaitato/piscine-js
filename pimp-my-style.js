import { styles } from "./pimp-my-style.data.js";

export const pimp = e => {
    let button = e.srcElement;
    if (!button.classList.contains('unpimp')) {
        button.classList.add(styles[button.classList.length-1]);
        if (button.classList.length === styles.length + 1 && !button.classList.contains('unpimp')) {
            button.classList.toggle('unpimp');
            return;
        }
        return;
    }
    if (button.classList.contains('unpimp')) {
        let classes = Array.from(button.classList);
        button.classList.remove(classes[classes.length-2]);
        if (button.classList.length === 2) {
            button.classList.toggle('unpimp');
            return;
        }
    }
} 