/* LevelConfig filed desic: (5 fileds)
	id: string
	headName: string
	exp: int
	cannonIconName: string
	bycw: string
*/

var filed_data = {
	key_1: ["1", "photo_hetun", 0, "icon_weapon_1", "blake", ], 
	key_2: ["2", "photo_hetun", 200, "icon_weapon_5", "blake", ], 
	key_3: ["3", "photo_hetun", 1000, "icon_weapon_10", "blake", ], 
	key_4: ["4", "photo_hetun", 2000, "icon_weapon_15", "blake", ], 
	key_5: ["5", "photo_douyu", 3000, "icon_weapon_30", "blake", ], 
	key_6: ["6", "photo_douyu", 4000, "icon_weapon_40", "blake", ], 
	key_7: ["7", "photo_douyu", 5000, "icon_weapon_50", "blake", ], 
	key_8: ["8", "photo_douyu", 6000, "icon_weapon_60_1", "blake", ], 
	key_9: ["9", "photo_dianman", 7000, "icon_weapon_70", "blake", ], 
	key_10: ["10", "photo_dianman", 8000, "icon_weapon_70", "blake", ], 
}; // total data record: 10

function get_record(id) {
	var key = "key_" + id;
	var record_array = filed_data[key];
	if(!record_array) {
		 return null;
	}

	var record = {
		id: record_array[0],
		headName: record_array[1],
		exp: record_array[2],
		cannonIconName: record_array[3],
		bycw: record_array[4],
	}; 

	return record; 
}

var LevelConfig = { 
	filed_data_array: filed_data, 
	get_record: get_record, 
}; 

module.exports = LevelConfig;