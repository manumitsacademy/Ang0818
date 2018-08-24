function add(x, y, z) {
    if (z == undefined) {
        return x + y;
    }
    return x + y + z;
}
var res = add(10, 30, 40);
console.log(res);
var res2 = add(99, 33);
console.log(res2);
