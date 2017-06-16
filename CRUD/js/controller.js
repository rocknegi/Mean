window.addEventListener("load",()=>{
document.getElementById("add").addEventListener("click",addItem);
clearFields();
});

function addItem(){
	var itemNo = document.getElementById("itemno").value;
	var name = document.getElementById("name").value;
	var desc = document.getElementById("desc").value;
	var price = document.getElementById("price").value;
	var qt = document.getElementById("qt").value;
	var url = document.getElementById("url").value;
	var tbody = document.getElementById("itemlist");
	itemOperations.addNewItem(name,desc,price,qt,url);

	var tr = tbody.insertRow();
	var itemObject = itemOperations.getLastObject();
	var index = 0;
	for(var key in itemObject){
		tr.insertCell(index).innerHTML = itemObject[key];
		index++;
	}
	tr.insertCell(index).innerHTML = "<img src='../images/delete.png'>&nbsp;<img src='../images/edit.png'>";
	clearFields();

}

function clearFields(){
	var allfields = document.getElementsByClassName("clearfields");
	for(var i = 0; i<allfields.length; i++){
		allfields[i].value="";
	}
	document.getElementById("itemno").innerHTML=itemOperations.getId();
document.getElementById("name").focus();

}
