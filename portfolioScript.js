// change pic color when hover
function picHoverOn(id) {
  document.getElementById(id).className = "container blur";
}

function picHoverOff(id) {
  document.getElementById(id).className = "container";
}

function showTitle(id) {
  // document.getElementById(id).style.display = "block";
  document.getElementById(id).className = "show";
}

function hideTitle(id) {
  // document.getElementById(id).style.display = "none";
  document.getElementById(id).className = "hide";
}




// new
function displayQuote() {
    document.getElementById("picTitle").textContent = "Project Name Title Thing";
}

function showTitleAndBlur(id) {
  document.getElementById(id).className = "container blur";
  displayQuote();
  // document.getElementById(picTitle).style.display = "block";
  // document.getElementById(titleId).className = "show";
}

function hideTitleNoBlur(id) {
  document.getElementById(id).className = "container";

  // document.getElementById(titleId).className = "hide";
  // document.getElementById(picTitle).style.display = "none";

}
