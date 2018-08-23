var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getFullName = function () {
        return this.firstname + this.lastname;
    };
    return Employee;
}());
var e1 = new Employee();
e1.firstname = "Praveen";
e1.lastname = "Gubbala";
var full = e1.getFullName();
console.log(full);
