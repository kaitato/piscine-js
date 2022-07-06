const pyramid = (char,depth) => {
    let result = ""
    for (let i = 0; i < depth; i++) {
        for (let a = i; a < depth; a++) {
            result += " "
        }
        for (let p = 0; p < (2 * i) + 1; p++) {
            result += char
        }
        if (i !== depth - 1) {
            result += "\n"
        }
    }
    return result
}