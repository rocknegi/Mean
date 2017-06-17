window.addEventListener("load", () => {
    document.getElementById("add").addEventListener("click", addItem);
    document.getElementById("cl").addEventListener("click", clearClass);
    document.getElementById("delete").addEventListener("click", deleteRecord);
    document.getElementById("sort").addEventListener("click", sortRecord);
    document.getElementById("save").addEventListener("click", save);
    document.getElementById("load").addEventListener("click", load);
    load();
    clearFields();
});

function clearClass() {
    var tbody = document.getElementById("itemlist");
    localStorage.clear();

}

function deleteRecord() {
    itemOperations.delete();

    printTable(itemOperations.itemList);

}

function printTable(itemArray) {
    document.getElementById("itemlist").innerHTML = "";
    itemArray.forEach(printRecord)

}

function sortRecord() {
    printTable(itemOperations.sortByPrice());
}

function printRecord(itemObject) {
    var tbody = document.getElementById("itemlist");
    var tr = tbody.insertRow();
    var index = 0;
    for (var key in itemObject) {
        if (key == 'markForDeletion') {
            continue;
        }
        tr.insertCell(index).innerHTML = itemObject[key];
        index++;
    }
}

function save() {
    var json = JSON.stringify(itemOperations.itemList);
    localStorage.items = json;
}

function load() {
    if (localStorage) {
        if (localStorage.items) {
            var items = JSON.parse(localStorage.items);
            itemOperations.itemList = items;
            printTable(itemOperations.itemList);
        } else {
            alert("there is no data to get...");
        }
    } else {
        alert("Ur Browser Doesnot Support HTML5 LocalStorage...");
    }
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
