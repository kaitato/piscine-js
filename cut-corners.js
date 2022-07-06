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


function trunc(value) {
    let counter = 0
    if (value > 0xfffffffff) {
        value -= 0xfffffffff;
        return trun(value) + 0xfffffffff;
    } else {
        return trun(value);
    }
}
function trun(value) {
    let m = modulo(value, 1);
    if (m !== 0) {
        return value - m;
    } else {
        return value;
    }
}
function modulo(a, b) {
    let result = 0
    if (b === 0) {
        return
    }
    if (b > a) {
         result = a
    }
    if (a > 0 && b > 0) {
        for (let i = a; i > 0; i -= b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    if (a > 0 && b < 0) {
        for (let i = a; i > 0; i += b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    if (a < 0 && b > 0) {
        for (let i = a; i < 0; i += b) {
            result = i
        }
    }
    if (a < 0 && b < 0) {
        for (let i = a; i < 0; i -= b) {
            result = i
            if (b === result) {
                result = 0
            }
        }
    }
    return result
}