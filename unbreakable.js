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
        if (str[i] === str[str.length -1] && str[i] === sep[sep.length -1]) {
            arr.push("")
        }
    }
    return arr
}