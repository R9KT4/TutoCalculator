var list = [1,2,3,1,1,5,4,3];

var count = 0;
for (var i = 0; i< list.length; i++){
	if ( list[i] == 1){	count = count + 1;}}

//STUDENT INPUT ABOVE PHP
//KEEP THE TEMPLATE BELOW
exports.Count = function () {
    return Number(count);
}
    
