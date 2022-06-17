export const build = (x) => {
    let i = 1
    let m = 2
    let a = setInterval(function(){
        let elem = document.createElement('div')
        elem.id = 'brick-'+i
        document.body.appendChild(elem)
        if (i==m) {
            document.getElementById(elem.id).setAttribute('data-foundation', "true");
            m += 3
        } else if (i == x) {
            clearInterval(a)
        }
        i++
    },100)
}

export const repair = () => {}

export const destroy = () => {}