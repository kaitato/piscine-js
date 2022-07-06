const round = (n) => {
    let count = 0
    let newn = n * 100
    if (n === 0) {
        return n
    }
    if (n < 0) {
        newn = -newn
    }
    for (let i = newn; i > 100; i -= 100) {
        count++
        newn = i
    }
    newn -= 100
    if (newn > -51 && newn < 0) {
        return count
    } else if (newn > 50) {
        count++
    }else if (newn < -50) {
        count--
    }
    if (n < 0) {
        count = -count
    }
    return count
}

function ceil(value) {
    if (value === 0) {
        return value
    }
    if (value === 0) {
        return value
    }

    let newVal = value * 100
    let counter = 0
    if (value > 0) {
        for (let a = newVal; a > 100; a -= 100) {
            counter++
        }
        return counter + 1
    } else if (value < 0) {
        for (let a = newVal; a < -100; a += 100) {
            counter--
        }
    }
        return counter--
}

const floor = (n) => {
    let count = 0
    let newn = n * 100
    if (n < 0) {
        newn = -newn
    }
    for (let i = newn; i > 100; i -= 100) {
        count++
    }
    if (n < 0) {
        count = -count -1
    }
    return count
}


const trunc = (n) => {
    let count = 0
    let newn = n * 100
    if (n > 0xfffffffff) {
        let a = n - 0xfffffffff
        for (let i = a; i > 100; i -= 100) {
            count++
        }
        return count + 0xfffffffff
    }
    if (n < 0) {
        newn = -newn
    }
    for (let i = newn; i > 100; i -= 100) {
        count++
    }
    if (n < 0) {
        count = -count
    }
    return count
}
//one more pls