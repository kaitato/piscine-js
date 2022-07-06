function RNA(str) {
    return str.split('')
        .map(elem => elem === 'G' ? 
        'C' :
        elem === 'C' ? 
            'G' :
            elem === 'T' ? 
                'A' : 
                'U')
                .join('');
}
function DNA(str) {
    return str.split('')
        .map(elem => elem === 'C' ? 
            'G' :
            elem === 'G' ? 
                'C' :
                elem === 'A' ? 
                    'T' :
                    'A')
                    .join('');
}