const triangle = (char,depth) => {
    let result = ""
    for (i = 0; i < depth; i++) {
        for (a = 0; a < i + 1; a++) {
            result += char
        }
        result += "\n"
    }
    return result
}