const repeat = (string, nbr) => {
    let count = 0
    let result = ''
    while (count < nbr) {
        count += 1
        result += string
    }
    return result
}