function displayQuote(display) {
    document.getElementById("picTitle").className = display;
}

function showTitleAndBlur(id) {
  displayQuote("show");
  document.getElementById(id).className = "container blur";
}

function hideTitleNoBlur(id) {
  displayQuote("hide");
  document.getElementById(id).className = "container";
}
