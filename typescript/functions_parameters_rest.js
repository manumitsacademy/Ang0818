function add() {
    var c = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        c[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < c.length; i++) {
        sum = sum + c[i];
    }
    return sum;
}
console.log(add(10, 20, 34, 98, 75, 66));
