/* MultiFishGen filed desic: (13 fileds)
	id: string
	fishName: string
	roadIndex: int
	isRevert: int
	genTime: int
	isRandom: int
	scale: int
	min_speed: int
	max_speed: int
	hp: int
	coinValue: int
	expValue: int
	use_AI: int
*/

var filed_data = {
	key_1: ["1", "tianshiyu", 0, 0, 0, 0, 600, 10000, 10000, 300, 500, 100, 0, ], 
	key_2: ["2", "tianshiyu", 1, 0, 500, 0, 700, 10000, 10000, 300, 500, 100, 0, ], 
	key_3: ["3", "tianshiyu", 2, 0, 500, 0, 800, 10000, 10000, 300, 500, 100, 0, ], 
	key_4: ["4", "cheqiyu", 3, 0, 0, 0, 1000, 10000, 10000, 300, 500, 100, 0, ], 
	key_5: ["5", "cheqiyu", 3, 0, 500, 0, 900, 10000, 10000, 300, 500, 100, 0, ], 
	key_6: ["6", "cheqiyu", 3, 0, 1000, 0, 800, 10000, 10000, 300, 500, 100, 0, ], 
	key_7: ["7", "cheqiyu", 3, 0, 1500, 0, 700, 10000, 10000, 300, 500, 100, 0, ], 
}; // total data record: 7

function get_record(id) {
	var key = "key_" + id;
	var record_array = filed_data[key];
	if(!record_array) {
		 return null;
	}

	var record = {
		id: record_array[0],
		fishName: record_array[1],
		roadIndex: record_array[2],
		isRevert: record_array[3],
		genTime: record_array[4],
		isRandom: record_array[5],
		scale: record_array[6],
		min_speed: record_array[7],
		max_speed: record_array[8],
		hp: record_array[9],
		coinValue: record_array[10],
		expValue: record_array[11],
		use_AI: record_array[12],
	}; 

	return record; 
}

var MultiFishGen = { 
	filed_data_array: filed_data, 
	get_record: get_record, 
}; 

module.exports = MultiFishGen;