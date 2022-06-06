const sign = (nbr) => {
    if (nbr > 0) return 1
    if (nbr < 0) return -1
    if (nbr === 0) return 0
}
const sameSign = (a,b) => {
    if ((a > 0 && b > 0) || (a < 0 && b < 0) || (a === 0 && b === 0)) {
        return true 
    } else {
        return false
    }
}