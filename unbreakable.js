const split = (str,sep) => {
    let arr = []
    for (let i = 0 ; i < str.length ; i++) {
        let newstr = ""
        if (str[i] === sep[0]) {
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