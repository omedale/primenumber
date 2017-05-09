module.exports = {



	 getPrimes: (n)=>{
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
