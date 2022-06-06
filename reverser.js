const reverse = (n) => {
    let i = n.length
    if (typeof n === 'string') {
        let result = ""
        while (i > 0) {
            result += n[i-1]
            i--
        }
        return result
    }
    if (Array.isArray(n)) {
        let arr = []
        while (i > 0) {
            arr.push(n[i-1])
            i--
        }
        return arr
    }
}