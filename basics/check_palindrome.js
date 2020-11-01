

function checkPalindrome(x){
	console.log("Print the original string",x);
	for (var i = 0, j = x.length-1; i < x.length, j >= 0; i++, j--) {
		 if (x[i] != x[j]) 
		 	return false;
		 }
		 	return true;
		}
	

