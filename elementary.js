const multiply = (a,b) => {
    let count = 0
    let result = 0
    if (b > 0) {
        while (count < b) {
            count += 1
            result += a
        }
        return result
    }
    if (b < 0) {
        while (count > b) {
            count -= 1
            result -= a
        }
        return result
    }
    if (b === 0) {
        return 0
    }
}

const divide = (a,b) => {
    let result = 0
    let count = 0
    let num1 = a
    let num2 = b
    if (a < 0) {
        num1 = -num1
    }
    if (b < 0) {
        num2 = -num2
    }
    while (result < num1) {
        if (result < num1) {
            result += num2
            if (result > num1) return ((a < 0 && b > 0) || (b < 0 && a > 0)) ?
                -count :
                count;
            count += 1
        }
    }
}

const modulo = (a,b) => {
    let result = 0
    let count = 0
    let num1 = a
    let num2 = b
    if (a < 0) {
        num1 = -num1
    }
    if (b < 0) {
        num2 = -num2
    }
    while (result < num1) {
        if (result < num1) {
            result += num2
            if (result > num1) return (a < 0 && b < 0) ?
            -(num1 - (result - num2)) :
            !((a < 0 && b > 0) || (b < 0 && a > 0)) ?
                (num1 - (result - num2)) :
                (a < 0 && b > 0) ?
                    -(num1 - (result - num2)) :
                    (num1 - (result - num2)) 
            count += 1
        }
    }
}