// by eval() method  this is evil :P
function commonOperation(firstno, secondno, operator){
	var expr = firstno + operator + secondno;
	return eval(expr);
}