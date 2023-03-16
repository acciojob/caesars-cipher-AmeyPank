// Your Script here.
function rot13(encryptedString){

	var lookup = {
		A: "N",
		B: "O",
		C: "P",
		D: "Q",
		E: "R",
		F: "S",
		G: "T",
		H: "U",
		I: "V",
		J: "W",
		K: "X",
		L: "Y",
		M: "Z",
		N: "A",
		O: "B",
		P: "C",
		Q: "D",
		R: "E",
		S: "F",
		T: "G",
		U: "H",
		V: "I",
		X: "J",
		Y: "K",
		Z: "L",
		
	}
	var words = encryptedString.split(" ");
	var decreptedWords = [];
	for(var index = 0; index<words.length; index++){
		var encryptedWord = words[i];
		var decryptedWord = "";
		for(var j = 0;j<encryptedWord.length; j++){
			decreptedWord +=LOOKUP[encryptedWord.charAt(j)];
		}
		decreptedWords.push(decryptedWord)
	}
	return decreptedWords.join(" ");
}