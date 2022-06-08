const split = (str,sep) => {
    let arr = []
    let newstr = ""
    for (let i = 0 ; i < str.length ; i++) {
        if (str[0] === sep[0]) {
            arr.push("")
            arr.push(sep)
            i++
        }
        if (str[i] !== sep[0]) {
            newstr += str[i]
        }
        if (str[i] === sep[0]) {
            arr.push(newstr)
        }
    }
    return arr
}