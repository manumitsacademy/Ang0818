function add(...c){
	
	var sum=0;
	
	for(let i=0;i<c.length;i++){
		sum=sum+c[i];
	}
	return sum;
}

console.log(add(10,20,34,98,75,66));