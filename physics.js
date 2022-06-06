const getAcceleration = ({f, m, Δv, Δt, t, d}) => f !== undefined && m !== undefined ? 
    f / m :
    Δv !== undefined && Δt !== undefined ?
        Δv / Δt :
        d !== undefined && t != undefined ?
            (2 * d) / (t * t) :
            'impossible';