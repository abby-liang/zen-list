function showResults() {
	var noFriend = localStorage.getItem("noFriend");
	var noWater = localStorage.getItem("noWater");
	var noWalk = localStorage.getItem("noWalk");
	var noRelax = localStorage.getItem("noRelax");
	var noSnack = localStorage.getItem("noSnack");

	document.getElementById("result").innerHTML = noWater + "<br>" + noFriend + "<br>" + noWalk + "<br>" + noRelax + "<br>" + noSnack;

	document.getElementById('result').setAttribute("class", "resultStyle");

	// For Restart
	localStorage.clear();
}