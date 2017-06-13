/*
Glue B/w View and Model
1. Get All Operation Buttons
*/
window.addEventListener("load",bindEvents);
function bindEvents(){
	var btArray = document.getElementsByClassName("operation");
	for(var i = 0; i<btArray.length; i++){
		btArray[i].addEventListener("click",doOperation);
	}
}
function doOperation(){
	
	var opr = this.innerHTML;
	var firstNo = document.getElementById("firstno").value;
	var secondNo = document.getElementById("secondno").value;
	var result= 0;
	result= commonOperation(firstNo,secondNo,opr);
	document.getElementById("result").innerHTML = result;
}

