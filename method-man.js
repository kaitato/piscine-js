const words = (string) => string.split(' ');
const sentence = (sentence) => sentence.join(' ');
const yell = (yell) => yell.toUpperCase();
const whisper = (whisper) => `*` + whisper.toLowerCase() + `*`;
const capitalize = (capitalize) => capitalize.toUpperCase()[0] + (capitalize.substring(1)).toLowerCase();