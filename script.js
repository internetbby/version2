
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let header = document.getElementById("header");

let firstGrid = document.getElementById("firstGrid");

var userNumber = Math.floor(Math.random() * 5);

var userNumberString = userNumber.toString();

const sessionStorageCheck = sessionStorage.getItem("userColour");

if (sessionStorageCheck) {
} else {
  sessionStorage.userColour = userNumberString;
} //creates a sessionstorage if no one was found

if (sessionStorage.userColour == "0") {
  header.classList.add("red");
  navbar.classList.add("red");
  firstGrid.classList.add("red");

  console.log("default");
}

if (sessionStorage.userColour == "1") {
  header.classList.add("blue");
  navbar.classList.add("blue");
  console.log("blue");
}

if (sessionStorage.userColour == "2") {
  header.classList.add("green");
  navbar.classList.add("green");
  console.log("green");
}

if (sessionStorage.userColour == "3") {
  header.classList.add("yellow");
  navbar.classList.add("yellow");
  console.log("yellow");
}

if (sessionStorage.userColour == "4") {
  header.classList.add("purple");
  navbar.classList.add("purple");
  console.log("purple");
}

var seconds = 0;

function incrementSeconds() {
  seconds += 1;
  console.log(seconds)
}

var cancel = setInterval(incrementSeconds, 1000);
var update = setInterval(ifOnHomePage, 1000)

if (sessionStorage.getItem("aboutTimer") === null) {
  sessionStorage.setItem("aboutTimer", 0)
}
if (sessionStorage.getItem("firstPageTimer") === null) {
  sessionStorage.setItem("firstPageTimer", 0)
}
if (sessionStorage.getItem("storyTimer") === null) {
  sessionStorage.setItem("storyTimer", 0)
}



function ifOnHomePage() {
  if (document.URL.includes("home.html")) {
    var intHolder = parseInt(sessionStorage.firstPageTimer); 
    intHolder++
 
    sessionStorage.setItem("firstPageTimer", intHolder);



  }
  if (document.URL.includes("about.html")) {


    var intHolder = parseInt(sessionStorage.aboutTimer);
    intHolder ++



    sessionStorage.setItem("aboutTimer", intHolder);
  }

  if (document.URL.includes("story.html")) {


    var intHolder = parseInt(sessionStorage.storyTimer);
    intHolder ++



    sessionStorage.setItem("storyTimer", intHolder);
  }
}

console.log("index " + sessionStorage.firstPageTimer)

console.log("about " + sessionStorage.aboutTimer)
console.log("story "+ sessionStorage.storyTimer);

let button = document.getElementById("finished");

function NewSite(){
  window.location.href="done.html";
}

button.addEventListener("click", NewSite)

