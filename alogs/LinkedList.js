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
		
		/*if (_temp == null) {
			_temp.nextRef = new Node(value);
		}*/

		while (_temp != null) {
			if (isEmpty(_temp.nextRef)) {
				_temp.nextRef = new Node(value);
				_temp = null; // break loop
			} else {
				_temp = _temp.nextRef;
			}
		}

		
		//console.log('node added to the end');
	}
}

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
}

var headNode = new Node(100);
var list = new MyLinkedList(headNode);

list.add(200);
list.add(300);
list.add(400);
list.add(500);
list.add(600);
list.add(700);
list.add(800);
list.add(900);
list.add(1000);

console.log('----------------calling display-----------------');
list.displayList();
console.log('----------------end of display-----------------');