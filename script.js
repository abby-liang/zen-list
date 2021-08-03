var noWater = "";

function yesFunction() {

  document.getElementById("waterResult").innerHTML = "<h3><strong>That's great to hear! 🤩</h3></strong> Make sure that you drink enough because water helps you stay mindful. Researchers have found that as little as 1% dehydration negatively impacts your mood, memory, and motor coordination.";

	document.getElementById('waterResult').setAttribute("class", "style1");

	document.getElementById("nextButton").innerHTML = "<a href = 'talkToFriend.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noWater", '<s>I will make sure I drink water.</s>');

}

function noFunction() {
  document.getElementById("waterResult").innerHTML = "<h3><strong>Oh no! 😭</h3></strong>Water helps you stay mindful. Researchers have found that as little as 1% dehydration negatively impacts your mood, memory, and motor coordination.  When you lose water in your body and you do not replace it with more water, bad things happens inside your body.";

	document.getElementById('waterResult').setAttribute("class", "style1");

  document.getElementById("nextButton").innerHTML = "<a href = 'talkToFriend.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noWater", 'I will make sure I drink water.');

	console.log(localStorage);

}