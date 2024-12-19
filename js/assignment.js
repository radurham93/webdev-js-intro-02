"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year")
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.

const resolution = "Learn JavaScript";
const currentYear = "2024";
let willMeetResolution = true;

function updateYear() {
    // write the logic
yearElement.innerText = currentYear;
}

function updateResolution() {
    // Update this function 
resolutionElement.innerText = resolution;
}

function updateWillMeetResolution() {
    // Update this function
willMeetResolutionElement.innerText = willMeetResolution ? "Yes.": "No.";
}


function render() {
    // Finish writing this function
    updateResolution();
    updateYear();
    updateWillMeetResolution();

}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
render();
})
