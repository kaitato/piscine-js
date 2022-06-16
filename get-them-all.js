export const getArchitects = () => {
    let arr1 = [Array.from(document.getElementsByTagName('a'))]
    let arr2 = [Array.from(document.getElementsByTagName('span'))]
    let arr = [arr1, arr2]
    return arr
}

export const getClassical = () => {
    let arr1 = [Array.from(document.querySelectorAll('a.classical'))]
    let arr2 = [Array.from(document.querySelectorAll('a:not(.classical)'))]
    let arr = [arr1, arr2]
    return arr
}

export const getActive = () => {
    let arr1 = [Array.from(document.getElementsByClassName('classical active'))]
    let arr2 = [Array.from(document.querySelectorAll('.active:not(.classical)'))]
    let arr = [arr1, arr2]
    return arr
}

export const getBonannoPisano = () => {
    let arr1 = [Array.from(document.querySelectorAll('#BonannoPisano'))]
    let arr2 = [Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'))]
    let arr = [arr1, arr2]
    return arr
}
