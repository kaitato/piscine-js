const triangle = (char,depth) => {
    let result = ""
    for (let i = 0; i < depth; i++) {
        for (let a = 0; a < i + 1; a++) {
            result += char
        }
        result += "\n"
    }
    return result
}