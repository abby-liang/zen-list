var noWalk = "";

function yesFunction() {

	document.getElementById("nextButton").innerHTML = "<a href = 'shouldRelax.html' class = 'nextStyle'>Next > </a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	document.getElementById("walkResult").innerHTML = "<h3><strong>That's great to hear! 🤩</h3></strong>Research shows that getting outside in nature has many mental health benefits. Walking has been proven effective in reducing anxiety and depression, and there is further evidence that walking in nature improves those results even further. That's because different parts of our brain activate in nature. Good job for going out and getting fresh air!";

	document.getElementById('walkResult').setAttribute("class", "style1");

	localStorage.setItem("noWalk", '<s>I will take a walk today.</s>');

}

function noFunction() {
	console.log("hello");
  document.getElementById("walkResult").innerHTML = "<h3><strong>Oh no! 😭</h3></strong>Research shows that getting outside in nature has many mental health benefits. Walking has been proven effective in reducing anxiety and depression, and there is further evidence that walking in nature improves those results even further. That's because different parts of our brain activate in nature. Therefore, make sure to get outside soon!";
  
	document.getElementById('walkResult').setAttribute("class", "style1");
  
  document.getElementById("nextButton").innerHTML = "<a href = 'shouldRelax.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noWalk", 'I will take a walk today.');

	console.log(localStorage);
}