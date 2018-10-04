var str = {}()[];

function isValid(str) {
	
	if (!str) {
		return true;
	}
	
	var len = str.length;
	
	var map = {
		"{": 0,
		"}": 0,
		"[": 0,
		"]": 0,
		"(": 0,
		")": 0
	};
	
	for (var i = 0; i < len; i++) {
		var ch = str.charAt(i);
		
			map[ch] = map[ch] + 1;
		//}
		
		/*if (ch === "}" && map["{"] === 0 ) {
			return false;
		}*/
		
		if (map["}"] > map ["{"]) {
			return false;
		}
		
		if (map["]"] > map ["["]) {
			return false;
		}
		
		if (map[")"] > map ["("]) {
			return false;
		}
		
		/*if (ch === "]" && map["["] === 0 ) {
			return false;
		}
		if (ch === ")" && map["("] === 0 ) {
			return false;
		}*/
		
		
		//if
		
		
		
	}
	
	if (map["{"] === map["}"]  && map["["] === map["]"] && map ["("] === map[")"]) {
		return true;
	} else {
		return false;
	}
	
	/*if (map ["{"] != map ["}"]) {
		return false;
	}
	
	if (map ["["] != map ["]"]) {
		return false;
	}
	if (map ["("] != map [")"]) {
		return false;
	}*/
	
	return true;
}