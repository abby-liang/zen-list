var noRelax = "";

function yesFunction() {

	document.getElementById("nextButton").innerHTML = "<a href = 'eatSnack.html' class = 'nextStyle'>Next > </a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	document.getElementById("relaxResult").innerHTML = "<h3><strong>That's great to hear! 🤩</h3></strong>Daily stress can take a toll on both physical and mental health. Studies show that various forms of relaxation can help reduce many chronic health concerns as well as restore energy and encourage a more positive sense of self.";

	document.getElementById('relaxResult').setAttribute("class", "style1");

	localStorage.setItem("noRelax", '<s>I will take a break today.</s>');

}

function noFunction() {
	console.log("No Relaxation");
  document.getElementById("relaxResult").innerHTML = "<h3><strong>Oh no! 😭</h3></strong>Daily stress can take a toll on both physical and mental health. Studies show that various forms of relaxation can help reduce many chronic health concerns as well as restore energy and encourage a more positive sense of self. Try putting a break in your schedule for the purpose of relaxation.";
  
	document.getElementById('relaxResult').setAttribute("class", "style1");
  
  document.getElementById("nextButton").innerHTML = "<a href = 'eatSnack.html' class = 'nextStyle'>Next ></a>";

	document.getElementById('nextButton').setAttribute("class", "nextButtonStyle");

	localStorage.setItem("noRelax", 'I will take a break today.');

	console.log(localStorage);
}