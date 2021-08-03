function showResults() {
	var noFriend = localStorage.getItem("noFriend");
	var noWater = localStorage.getItem("noWater");
	var noWalk = localStorage.getItem("noWalk");
	var noRelax = localStorage.getItem("noRelax");
	var noSnack = localStorage.getItem("noSnack");

	// if localStorage.getItem("noFriend") == null {
	// 	noFriend = localStorage.setItem("noFriend", "");
	// }
	// console.log(noFriend);
	// if localStorage.getItem("noWater") !== null {
	// 	var noWater = localStorage.getItem("noWater");
	// }

	document.getElementById("result").innerHTML = noWater + "<br>" + noFriend + "<br>" + noWalk + "<br>" + noRelax + "<br>" + noSnack;

	document.getElementById('result').setAttribute("class", "resultStyle");
	localStorage.clear();
}