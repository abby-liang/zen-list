var noSnack = "";

function yesFunction() {

	document.getElementById("nextButton").innerHTML = "<a href = 'result.html' class = 'nextStyle'>Next > </a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	document.getElementById("snackResult").innerHTML = "<h3><strong>That's great to hear! 🤩</h3></strong>Eating consistently throughout the day provides your brain and body with a steady supply of fuel. It also prevents your blood sugar from dropping, which can cause nervousness, irritability and other problems.";

	document.getElementById('snackResult').setAttribute("class", "style1");

	localStorage.setItem("noSnack", '<s>I will eat a healthy snack.</s>');

}

function noFunction() {

  document.getElementById("snackResult").innerHTML = "<h3><strong>Oh no! 😭</h3></strong>Eating consistently throughout the day provides your brain and body with a steady supply of fuel. It also prevents your blood sugar from dropping, which can cause nervousness, irritability and other problems.";
  
	document.getElementById('snackResult').setAttribute("class", "style1");
  
  document.getElementById("nextButton").innerHTML = "<a href = 'result.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noSnack", 'I will eat a healthy snack.');

	console.log(localStorage);
}