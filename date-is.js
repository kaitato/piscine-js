const isValid = date => date !== 'Invalid Date' && !isNaN(date) && date !== '' ? true : false;
const isAfter = (date1, date2) => date1 > date2 ? true : false;
const isBefore = (date1, date2) => date1 < date2 ? true : false; 
const isFuture = date => isValid(date) && date > Date.now();
const isPast = date => isValid(date) && date < Date.now();