const pyramid = (char,depth) => {
    let result = ""
    for (let i = 0; i < depth; i++) {
        for (let a = 0; a < depth; a++) {
            result += ' '
        }
        for (let p = 0; p < (2 * i) + 1; p++) {
            result += char
        }
        for (let b = 0; b < depth; b++) {
            result += ' '
        }
        if (i !== depth - 1) {
            result += "\n"
        }
    }
    return result
}