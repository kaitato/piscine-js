function split(str, pos) {
    let arr = []
    let temp = ""
    let index = 0
    if (pos.length === 0) {
        for (let a = 0; a < str.length; a++) {
            arr.push(str.slice(a, a+1))
        }
         return arr
    }
    for (let a = 0; a < str.length; a++) {
        if (str.slice(a, a+pos.length) === pos) {
            if (str.slice(index, a) === "") {
                arr.push("")
            } else {
                arr.push(str.slice(index, a))
            }
            index = a+pos.length
            if (pos.length !== 0) {
                a = a+pos.length-1
            }
        }
    }
    if (pos !== str.slice(index, str.length)) {
        arr.push(str.slice(index, str.length))
    } else if (pos === str.slice(index, str.length)) {
        arr.push("")
    }
    return arr 
}

function join(arr, val) {
    let res = ""
    for (let a = 0; a < arr.length-1; a++) {
        res += arr[a] + val
    }
    res += arr[arr.length-1]
    return res
}