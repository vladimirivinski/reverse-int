module.exports = function reverse(n) {
    let x = Math.abs(n); // убираем минусы у Number
    let y = String(x); //Приводим значение к String
    let result = y.split("").reverse().join("");
    return result;
};
