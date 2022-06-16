export const getArchitects = () => {
    let arr1 = Array.from(document.getElementsByTagName('a'))
    let arr2 = Array.from(document.getElementsByTagName('span'))
    return [arr1].concat([arr2])
    // console.log(arr)

}

export const getClassical = () => {
    let arr1 = Array.from(document.querySelectorAll('a.classical'))
    let arr2 = Array.from(document.querySelectorAll('classical:not(.a)'))
    return [arr1].concat([arr2])
}

export const getActive = () => {
    let arr1 = Array.from(document.getElementsByClassName('classical active'))
    let arr2 = Array.from(document.querySelectorAll('.active:not(.classical)'))
    return [arr1].concat([arr2])
}

export const getBonannoPisano = () => {
    let arr1 = Array.from(document.querySelectorAll('#BonannoPisano'))
    let arr2 = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'))
    return arr1.concat([arr2])
}
