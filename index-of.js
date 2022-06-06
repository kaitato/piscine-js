const indexOf = (arr,val,start) => {
    if (start === undefined) {
        start = 0
    }

    let i = start
    while (i < arr.length) {
        if (arr[i] === val) {
            return i
        }
        i++
    }
    return -1
}

const lastIndexOf = (arr,val,start) => {
    if (start === undefined) {
        start = arr.length
    }

    let i = start
    while (i >= 0) {
        if (arr[i] == val) {
            return i
        }
        i--
    }
    return -1
}

const includes = (arr,val) => {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === val) {
            return true
        }
        i++
    }
    return false
}