function nasa(n) {
    let res = ""
    for (let a = 1; a < n + 1; a++) {
        if ((a % 3 === 0) && (a % 5 === 0)) {
            res += 'NASA' + ' '
        } else if (a % 3 === 0) {
            res += 'NA' + ' '
        } else if (a % 5 === 0) {
            res += 'SA' + ' '
        } else {
            res += a + ' '
        }
    }
    return res
}