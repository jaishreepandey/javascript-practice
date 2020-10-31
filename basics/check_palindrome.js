var x = "MOMA";
var y = 0;

console.log("Print the original string",x);

console.log(checkPalindrome(x));

function checkPalindrome(x){
	for (var i = 0, j = x.length-1; i < x.length, j >= 0; i++, j--) {
		 if (x[i] != x[j]) 
		 	return false;
		 }
		 	return true;
		}
	

