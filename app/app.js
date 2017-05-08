const getPrimes =(n)=>{
	let generatedPrime =[];
	let counter = 1;
	 for(let count=1; count<=n; count++){
	 		for(let county=1; county<= count; county++){
	 		if ((count%county)==0){
	 			counter +=1;
	 		}
	 		if(counter==2){
	 			generatedPrime=count;
	 		}
	   }		
	 }

	return generatedPrime;
}