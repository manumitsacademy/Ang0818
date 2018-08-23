class Employee{
	public firstname:string;
	public lastname:string;
	public getFullName():string{
		return this.firstname+this.lastname;
	}
}

var e1 = new Employee();
e1.firstname="Praveen";
e1.lastname="Gubbala";
var full = e1.getFullName();
console.log(full);