const get = (src,path) => {
    let res
    let arr = path.split(".")
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            res = src[arr[i]]
        } else {
            res = res[arr[i]]
        }
        if (res == undefined) {
            return res
        }
    }
    return res
}