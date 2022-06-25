function interpolation ({step, start, end, callback, duration}) {
    let x = start;
    let y = duration/step;
    let timer = setInterval(() => {
        callback([x,y]);
        x += (end - start) / step
        y += duration / step
        if (Math.round(x * 100) / 100 === end) clearInterval(timer);
    }, duration / step);

}