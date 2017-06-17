window.addEventListener("load", () => {
    document.getElementById("add").addEventListener("click", addItem);
    document.getElementById("cl").addEventListener("click", clearClass);
    document.getElementById("delete").addEventListener("click", deleteRecord);
    clearFields();
});

function clearClass() {
    var tbody = document.getElementById("itemlist");
    tbody.childNodes
}

function deleteRecord() {
    itemOperations.delete();

    printTable(itemOperations.itemList);

}

function printTable(itemArray) {
    document.getElementById("itemlist").innerHTML = "";
    itemArray.forEach(printRecord)

}

function addItem() {
    var itemNo = document.getElementById("itemno").value;
    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var qt = document.getElementById("qt").value;
    var url = document.getElementById("url").value;
    var tbody = document.getElementById("itemlist");
    itemOperations.addNewItem(name, desc, price, qt, url);

    var tr = tbody.insertRow();
    var itemObject = itemOperations.getLastObject();
    var index = 0;
    for (var key in itemObject) {
        tr.insertCell(index).innerHTML = itemObject[key];
        index++;
    }

    var deleteImg = document.createElement("img");
    deleteImg.src = '../images/delete.png';
    deleteImg.className = "showcursor";
    deleteImg.addEventListener("click", markForDeletion);
    tr.insertCell(index).append(deleteImg);
    tr.insertCell(index).innerHTML = "<img src='../images/edit.png'>";
    clearFields();

}

function markForDeletion(event) {
    var tr = event.srcElement.parentElement.parentElement;

    tr.classList.toggle("red");
}

function clearFields() {
    var allfields = document.getElementsByClassName("clearfields");
    for (var i = 0; i < allfields.length; i++) {
        allfields[i].value = "";
    }
    document.getElementById("itemno").innerHTML = itemOperations.getId();
    document.getElementById("name").focus();

}
