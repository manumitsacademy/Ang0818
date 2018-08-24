

function add(x,y,z?,p?){
	if(z==undefined){
		return x+y;
	}
	else{
		return x+y+z;
	}		
}
	

var res = add(10,30,40);
console.log(res);


var res2 = add(99,33);
console.log(res2);