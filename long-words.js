function longWords(arr) {
    arr.every((value) => value.length >= 5);
}
function oneLongWord(arr) {
    arr.some((value) => value.length >= 10);
}
function noLongWords(arr) {
    arr.every((value) => value.length < 7);
}
