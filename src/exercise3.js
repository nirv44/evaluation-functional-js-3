const _ = require("lodash");

const meeteek = input => {

	// pour chaque personne
	var r = input.reduce((acc, val)=> {
			
		//console.log(val)
		var persoEnCommun = checkIfInterestCommun(val, input);
		console.log(persoEnCommun);


		//var liste = checkIfSexeDiff(val, persoEnCommun);

		//acc = liste;

		return acc;
	});
	//console.log(r);
  return r;
};


// retourne la liste des interets
function checkIfInterestCommun(perso, liste){
	// pour chaque interet du perso en cours
	return perso.interests.map(valInterest => {
		// on check si interet existe pas dans un autre
		var ret = liste
		.filter(valOtherPerso => _.includes(valOtherPerso.interests, valInterest))
		.filter(valOther => valOther.name ==! perso.name);

		if(ret) return valInterest;

	});
}

function checkIfSexeDiff(perso, liste){
	return liste.filter(val => _.includes(sexPartnerApproved, perso.sexPartnerApproved));
}

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
