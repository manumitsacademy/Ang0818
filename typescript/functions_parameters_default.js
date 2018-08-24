function add(a, i) {
    if (i === void 0) { i = 0; }
    return a + i;
}
console.log(add(23, 10));
console.log(add(44));
function greeting(fname) {
    if (fname === void 0) { fname = "Howdy"; }
    console.log("Hello ", fname);
}
greeting("Praveen");
greeting();
