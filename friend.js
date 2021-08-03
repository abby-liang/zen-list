var noFriend = "";

function yesFunction() {

	document.getElementById("nextButton").innerHTML = "<a href = 'takeWalk.html' class = 'nextStyle'>Next > </a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	document.getElementById("friendResult").innerHTML = "<h3><strong>That's great to hear! 🤩</h3></strong>Friendship is a crucial element in protecting our mental health. Our friends can keep us grounded, help us get things in perspective, and help us manage the problems that life throws at us. Strong social relationships support mental health, and that ties into better immune function, reduced stress and less cardiovascular activation.";

	document.getElementById('friendResult').setAttribute("class", "style1");

	localStorage.setItem("noFriend", '<s>I will call a friend today.</s>');

}

function noFunction() {
	//console.log("hello");
  document.getElementById("friendResult").innerHTML = "<h3><strong>Oh no! 😭</h3></strong>Friendship is a crucial element in protecting our mental health. Our friends can keep us grounded, help us get things in perspective, and help us manage the problems that life throws at us. Strong social relationships support mental health, and that ties into better immune function, reduced stress and less cardiovascular activation.";
  
	document.getElementById('friendResult').setAttribute("class", "style1");
  
  document.getElementById("nextButton").innerHTML = "<a href = 'takeWalk.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noFriend", 'I will call a friend today.');

	console.log(localStorage);
}