/* BulletConfig filed desic: (5 fileds)
	id: string
	bulletName: string
	killValue: int
	speed: int
	coinCost: int
*/

var filed_data = {
	key_1: ["1", "你好", 100, 100, 100, ], 
	key_2: ["2", "bullet", 120, 100, 100, ], 
	key_3: ["3", "bullet", 140, 100, 100, ], 
	key_4: ["4", "bullet", 160, 100, 100, ], 
	key_5: ["5", "bullet", 170, 100, 100, ], 
	key_6: ["6", "bullet", 180, 100, 100, ], 
	key_7: ["7", "bullet", 190, 100, 100, ], 
	key_8: ["8", "bullet", 200, 100, 100, ], 
	key_9: ["9", "bullet", 210, 100, 100, ], 
	key_10: ["10", "bullet", 220, 100, 100, ], 
	key_11: ["11", "bullet", 230, 100, 100, ], 
	key_12: ["12", "bullet", 240, 100, 100, ], 
	key_13: ["13", "bullet", 250, 100, 100, ], 
	key_14: ["14", "bullet", 260, 100, 100, ], 
	key_15: ["15", "bullet", 270, 100, 100, ], 
	key_16: ["16", "bullet", 280, 100, 100, ], 
	key_17: ["17", "bullet", 290, 100, 100, ], 
	key_18: ["18", "bullet", 300, 100, 100, ], 
	key_19: ["19", "bullet", 310, 100, 100, ], 
	key_20: ["20", "bullet", 320, 100, 100, ], 
}; // total data record: 20

function get_record(id) {
	var key = "key_" + id;
	var record_array = filed_data[key];
	if(!record_array) {
		 return null;
	}

	var record = {
		id: record_array[0],
		bulletName: record_array[1],
		killValue: record_array[2],
		speed: record_array[3],
		coinCost: record_array[4],
	}; 

	return record; 
}

var BulletConfig = { 
	filed_data_array: filed_data, 
	get_record: get_record, 
}; 

module.exports = BulletConfig;