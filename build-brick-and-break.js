export function build(x) {
    let i = 1;
    let m = 2;
    let interval = setInterval(function () {
        let block = document.createElement("div");
        block.id = "brick-" + i;
        document.body.append(block);
        if (i === m) {
            block.dataset.foundation = true;
            m += 3;
        } else if (i === x) clearInterval(interval);
        i++;
    }, 100);
}
export function repair(...repairs) {
    for (let i = 0; i < repairs.length; i++) {
        let elem = document.getElementById(repairs[i]);
        let n = repairs[i].replace("brick-", "");
        if (n % 3 === 2) {
            elem.setAttribute("data-repaired", "in progress");
            elem.innerHTML = n;
        } else {
            elem.setAttribute("data-repaired", "true");
            elem.innerHTML = n;
        }
    }
}

export function destroy() {
    let elements = document.querySelectorAll('div[id^="brick"]');
    elements[elements.length - 1].remove();
}
