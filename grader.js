 function average(scores) {
	 var sum = 0;
	 for (i = 0; i < scores.length; i++) {
		 sum += scores[i];		 
	 }
	 return Math.round(sum/scores.length);
 }