// Get the button first
const scrollUpBtn = document.getElementById("");

// When user moves down from the top of the doc, show the button
// Method will show button to scroll up by checking the document scroll distance
const toggleScrollUpBtn = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { scrollUpBtn.style.display = "block";} 
    else { scrollUpBtn.style.display = "none"; }
}

// Method to send user back to the top of the document
const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {toggleScrollUpBtn};

// const resizeToThird = () => {
//     window.resizeTo(1200, 900);
// }

const goToImg = () => {
   const e = document.getElementById("dance");
   e.scrollIntoView();
}