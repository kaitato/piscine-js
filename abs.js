const isPositive = (number) => {
    if (number > 0) {
        return true
    } else {
        return false
    }
}
const abs = (number) => {
    if (number < 0) {
        return number * -1
    } else {
        return number
    }
}