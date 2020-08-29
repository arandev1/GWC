/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/
var fullItemList = document.getElementById("my-list");

/* TODO: Add a variable to store the "my-list" element */
if (fullItemList) {
  
fullItemList.addEventListener("click", checkOffItem, false); 

}
/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {
      clicked.target.classList.toggle("all-done");
  }
}

/* TODO: Declare the function checkOffList and add actions inside the { } */


