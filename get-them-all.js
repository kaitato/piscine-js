export const getArchitects = () => {
    let arr1 = [Array.from(document.getElementsByTagName('a'))]
    let arr2 = [Array.from(document.getElementsByTagName('span'))]
    let arr = [arr1 + arr2]
    return arr
}

export const getClassical = () => {}

export const getActive = () => {}

export const getBonannoPisano = () => {}
