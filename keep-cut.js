const cutFirst = (str) => {
    let i = 2
    let result = ""
    while (i < str.length) {
        result += str[i]
        i++
    }
    return result
}

const cutLast = (str) => {
    let i = 0
    let result = ""
    while (i < str.length - 2) {
        result += str[i]
        i++
    }
    return result
}

const cutFirstLast = (str) => {
    let i = 2
    let result = ""
    while (i < str.length - 2) {
        result += str[i]
        i++
    }
    return result
}

const keepFirst = (str) => {
    let i = 0
    let result = ""
    if (str.length < 2) {
        return str
    }
    while (i < 2) {
        result += str[i]
        i++ 
    }
    return result
}

const keepLast = (str) => {
    let i = str.length - 2
    let result = ""
    if (str.length < 2) {
        return str
    }
    while (i < str.length) {
        result += str[i]
        i++
    }
    return result
}

const keepFirstLast = (str) => {
    let result = keepFirst(str) + keepLast(str)
    if (str.length < 4) {
        return str
    }
    return result
}