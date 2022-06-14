function addWeek(time) {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let day = ((time.getTime()-new Date('0001-01-01').getTime())/(1000*3600*24))%14
    return day <= 6 ? week[day] : 'second'+week[day-week.length]
}

function timeTravel({date, hour, minute, second}) {    
    date.setHours(hour, minute, second)
    return date
}