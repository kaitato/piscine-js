const split = (str,sep) => {
    let arr = []
    let newstr = ""
    let i = 0
    while (i < str.length) {
        if (str[i] === sep) {
            arr.push(newstr)
            i++
        }
        newstr += str[i]
        i++
    }
    console.log(arr)
    return arr
}