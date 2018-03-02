const moment = require("moment");

const sortProduct = input => {

	var r = input
	.filter(val => moment(val.dateAdded).year() >= 2000)
	.reduce((acc,val) => {

		if(acc[val.name]){
			acc[val.name].push({
				[val.name] : {
					'name': val.name,
					'year': moment(val.dateAdded).year(),
					'mont': moment(val.dateAdded).month(),
					'quantity': val.quantity
				}
			});
		}else{
			acc.push({
				[val.name] : {
					'name': val.name,
					'year': moment(val.dateAdded).year(),
					'mont': moment(val.dateAdded).month(),
					'quantity': val.quantity
				}
			});
		}

		return acc;
	}, [{}])
	
	return r;
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
