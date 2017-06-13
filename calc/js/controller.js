/*
Glue B/w View and Model
1. Get All Operation Buttons
*/
window.addEventListener("load",bindEvents);
function bindEvents(){
	var btArray = document.getElementsByTagName("button");
	for(var i = 0; i<btArray.length; i++){
		btArray[i].addEventListener("click",doOperation);
	}
}
function doOperation(){
	var opr = this.getAttribute("data-opr");
	console.log("Opr is ",opr);
	var firstNo = document.getElementById("firstno").value;
	var secondNo = document.getElementById("secondno").value;
	var result= 0;
	
	result = calcObject[opr](firstNo,secondNo);

	document.getElementById("result").innerHTML = result;
}
