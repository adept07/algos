Node = function(data, nextRef) {
	this.data = data;
	this.nextRef = nextRef;
}


MyLinkedList = function(head) {
	this.head = head;
}

isEmpty = function(node) {
	if (node === null || typeof node === "undefined") {
		return true;
	}
	
	return false;
}

MyLinkedList.prototype.add = function(value) {
	var _head = this.head,
		_temp = null;

	if (isEmpty(_head)) {
		this.head = new Node(value);
		console.log('created head and assigned value to it');
	} else if (isEmpty(_head.nextRef)) {
		_head.nextRef = new Node(value);
		console.log('added a node to the head node');
	} else {
		_temp = _head.nextRef;
		
		while (_temp != null) {
			if (isEmpty(_temp.nextRef)) {
				_temp.nextRef = new Node(value);
				_temp = null; // break loop
			} else {
				_temp = _temp.nextRef;
			}
		}
	}
};

MyLinkedList.prototype.get = function(position) {
	/*if (isEmpty(this.head)) {
		console.log('List is empty');
		return -1;
	}*/
    //debug
   // var str = 'headValue: ' + this.head.data + ' pos1:' + this.head.nextRef;
   // return str;

	var current = this.head,
		counter = 0;
	
    if (position === 0) {
        
        if (isEmpty(current)) {
            return -1;
        }

        return current.data;
    }
    
	while (current != null && counter < position) {
		current = current.nextRef;
		counter++;
	}
	
	if (isEmpty(current)) {
		return -1;
	} else {
		return current.data
	}
};

MyLinkedList.prototype.addAtIndex = function(position, value) {
	/*if (isEmpty(value)) {
		console.log('Value is empty, nothing added');
		return;
	}
	
	if (isEmpty(position) || parseInt(position, 10) < 0) {
		console.log('position is empty, nothing added');
		return;
	}*/

	var current = this.head,
		//position = parseInt(position, 10),
		counter = 0,
		prev;
	
	if (position === 0) { // replace head;
		var temp = this.head;
		this.head = new Node(value, temp);
	} else {
		while (current != null && counter < position) {
			prev = current;
			current = current.nextRef;
			counter++;
		}
		
        if ( prev ) {
            prev.nextRef = new Node(value, current);    
        }
		
	}
	
};

MyLinkedList.prototype.addAtHead = function(value) {
	if (isEmpty(this.head)) {
		this.head = new Node(value, null);
	} else if (!isEmpty(value)) {
		var temp = this.head;
		this.head = new Node(value, temp);
	}
};

MyLinkedList.prototype.addAtTail = function(val) {
    var current = this.head,
    	prev;
    
    while (current != null) {
    	prev = current;
    	current = current.nextRef;
    }

    if (!isEmpty(prev)) {
    	prev.nextRef = new Node(val, null); 
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (isEmpty(index)) {
    	return;
    }

    var current = this.head,
    	counter = 0,
    	prev = current;
    
    
    while (counter < index && current != null) {
    	prev = current;
    	current = current.nextRef;
    	counter++;
    }
    
    if (current != null) {
        prev.nextRef = current.nextRef;    
    }
    

};
MyLinkedList.prototype.displayList = function() {
	if (isEmpty(this.head)) {
		console.log('List is empty');
	} else {
		var temp = this.head.nextRef,
			arr = [];

		arr.push(this.head.data);
		
		if (isEmpty(temp)) {
			console.log(arr.join(' '));
			return;
		}

		while (temp != null) {
			arr.push(temp.data);
			temp = temp.nextRef
		}

		console.log(arr.join(' '));
	}
};

MyLinkedList.prototype.displayList = function() {
	if (isEmpty(this.head)) {
		console.log('List is empty');
	} else {
		var temp = this.head.nextRef,
			arr = [];

		arr.push(this.head.data);
		
		if (isEmpty(temp)) {
			console.log(arr.join(' '));
			return;
		}

		while (temp != null) {
			arr.push(temp.data);
			temp = temp.nextRef
		}

		console.log(arr.join(' '));
	}
};

/*["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[1],[1]]*/

//var headNode = new Node(100);
var list = new MyLinkedList();

list.addAtHead(1);

//list.addAtTail(3);

list.addAtIndex(1,2);


list.displayWrapper('add at index');


console.log(list.get(1));
console.log(list.get(0));
console.log(list.get(2));

//list.displayWrapper('get(1)');
//list.deleteAtIndex(1);

//list.get(1);



/*list.addAtHead(100);

list.add(200);
list.add(300);
list.add(400);
list.add(500);
list.add(600);
list.add(700);
list.add(800);
list.add(900);
list.add(1000);


list.displayWrapper();

console.log('----------------Node at position-----------------');
console.log(list.get(10));

list.addAtIndex(9, 333);
list.displayWrapper();

list.addAtHead(null);
list.displayWrapper();


list.addAtTail(1);
list.displayWrapper('insert at tail');

list.deleteAtIndex(2);
list.displayWrapper('after delete');

*/


