app.factory("myfactory",()=>{
    var object = {
        
        arr:[],
        id:1,
        itemOperations(name,desc){
	    var itemObject = new Item(this.id, name, desc);
		this.arr.push(itemObject);
	    this.id ++;
	}
	
   
        
    }
    return object;

    });
