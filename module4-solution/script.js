(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var item in names){
		var name = names[item];
		var firstLetter = names[item].charAt(0).toLowerCase();

		if (firstLetter == "j"){
			helloSpeaker.speak(name);
		}
		else{
			byeSpeaker.speak(name);
		}

	}

})();