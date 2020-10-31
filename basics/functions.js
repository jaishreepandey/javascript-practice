var arr = ["mom", "momo", "awaa", "qaqqa"];

console.log("Printing the original string :--");
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

console.log("Reverse the string:--");
console.log(toReverse(arr));

function toReverse(arr){
	var rev = ' ';
	for (var i = arr.length-1; i >= 0; i--) 
       rev = rev + arr[i] + " ";
    return rev;
	   //console.log(arr[i]);
	}
