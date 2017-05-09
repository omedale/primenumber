module.exports = {



	 getPrimes: (n)=>{

	 	if(typeof n == 'string' ){
		    return "not valid";
		  }
		  else if(Array.isArray(n) === true ){
		    return "array is not required";
		  }
		  else if(n === 1 ){
		    return "one is not prime";
		  }
		  else if(n === true ){
		    return "is it true";
		  }
		  else if(n === false ){
		    return "is it false";
		  }
		  else if(n < 0 ){
		    return "less than zero";
		  }
		  else if(n === 0 ){
		    return "equal to zero";
		  }

		  else if(n > 100 ){
		    return "greater than 100";
		  }
		  else if(n === null ){
		    return "Output is null";
		  }

	 	let generatedPrime =[];
	 for(let count=0; count<=n; count++){
	 	   let counter = 0;
	 		for(let county=1; county <= count; county++){
	 		if (count%county == 0){
	 			counter +=1;
	 		}
	 		
	   }
	   
	   	if(counter==2){
	 			generatedPrime.push(count);
	 		}	
	 }
	return generatedPrime.toString();
}

}
