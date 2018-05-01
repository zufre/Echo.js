 function average(scores) {
	 var sum = 0;
	 for (i = 0; i < scores.length; i++) {
		 sum += scores[i];		 
	 }
	 return Math.round(sum/scores.length);
 }
 
 var scores = [ 90, 98, 89 10, 10, 86, 94];
 average(scores);
 
 var scores2 = [ 40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
 average(scores);
 