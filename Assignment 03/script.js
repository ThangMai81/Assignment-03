"use strict";
// --------create constant value ------
// +++ personal info hidden +++
// this will add class hidden when the email is correct
const emailRequiredEl = document.querySelector(".email-required");
// this two will check the email
const emailInputEl = document.querySelector(".email-input");
const emailBtnEl = document.querySelector(".email-btn");
// this will add hidden class when condition is satisfied
const mtUlEl = document.querySelector(".mt-40");

// +++ job-info hover handling +++
// + deal with 3 first boxes
// this two will deal with getting h1 from first 3 boxes of job-info
const flexEl = document.querySelectorAll(".ex-flexbox");
let expHeadEl;
let nextHeadEl;
// this will get the content of boxes through parent class "border-adjust"
const borderAdjustEl = document.querySelectorAll(".border-adjust");
console.log(borderAdjustEl);
let ulContentEl;
let hobbyContentEl;
let languageContentEl;
let skillContentEl;
// Button view more:
const viewMoreEl = document.querySelectorAll(".view-more-btn");
const viewLessEl = document.querySelectorAll(".view-less-btn");

let emailInputValue;

// --- email handling ----
emailBtnEl.addEventListener("click", function () {
  emailInputValue = String(emailInputEl.value);
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInputValue.match(regex)) {
    mtUlEl.classList.remove("hidden");
    emailRequiredEl.classList.add("hidden");
  } else {
    window.alert("Please enter a valid email!");
  }
});
// --- hover handling for first 3 boxes ---
// This following function codes will make other boxes not exist ViewMore
// when 1 box headding is hovered
const viewMoreUnique = (i) => {
  viewMoreEl[i].classList.remove("hidden");
  if (i === 0) {
    for (let k = 1; k < 5; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
  }
  if (i === 1) {
    for (let k = 2; k < 5; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
    viewMoreEl[0].classList.add("hidden");
  }
  if (i === 2) {
    for (let k = 3; k < 5; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
    viewMoreEl[0].classList.add("hidden");
    viewMoreEl[1].classList.add("hidden");
  }
  if (i === 3) {
    for (let k = 0; k <= 2; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
    viewMoreEl[4].classList.add("hidden");
    viewMoreEl[5].classList.add("hidden");
  }
  if (i === 4) {
    for (let k = 0; k <= 3; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
    viewMoreEl[5].classList.add("hidden");
  }
  if (i === 5) {
    for (let k = 0; k <= 4; k++) {
      viewMoreEl[k].classList.add("hidden");
    }
  }
};

// This following function codes will change the visible of content of the last 3 boxes
// due to view more or view less is clicked
// * Show again the content
const viewMoreClickedChange = (j, nameClass) => {
  let ContentEl = borderAdjustEl[j].querySelectorAll(nameClass);
  for (let m = 0; m < ContentEl.length; m++) {
    // Remove display: none from language content
    ContentEl[m].style.removeProperty("display");
  }
};

// * Make the content disappear
const viewLessClickedChange = (j, nameClass) => {
  let ContentEl = borderAdjustEl[j].querySelectorAll(nameClass);
  for (let m = 0; m < ContentEl.length; m++) {
    ContentEl[m].style.display = "none";
  }
};

// This following function codes will transform the viewmore -> viewless when click view more and reverse
const cLickViewMore = (i) => {
  viewMoreEl[i].classList.add("hidden");
  viewLessEl[i].classList.remove("hidden");
};

const clickViewLess = (i) => {
  viewMoreEl[i].classList.remove("hidden");
  viewLessEl[i].classList.add("hidden");
};

// ----------- our main code -----------------
// loop 0->2
for (let i = 0; i < flexEl.length; i++) {
  expHeadEl = flexEl[i].querySelector("h1");
  console.log(expHeadEl);
  console.log(ulContentEl);
  expHeadEl.addEventListener("mouseover", function () {
    viewMoreUnique(i);
  });
  viewMoreEl[i].addEventListener("click", function () {
    ulContentEl = borderAdjustEl[i].querySelector("ul");
    ulContentEl.classList.remove("hidden");
    cLickViewMore(i);
  });

  viewLessEl[i].addEventListener("click", function () {
    ulContentEl = borderAdjustEl[i].querySelector("ul");
    ulContentEl.classList.add("hidden");
    clickViewLess(i);
  });
}
// ---hover handling for next 3 boxes---
// + Make hobby box content hidden
hobbyContentEl = borderAdjustEl[3].querySelectorAll(".bs-hobby");
for (let m = 0; m < hobbyContentEl.length; m++) {
  hobbyContentEl[m].style.display = "none";
}
// + Make language box content hidden
languageContentEl = borderAdjustEl[4].querySelectorAll(".language-content");
for (let m = 0; m < languageContentEl.length; m++) {
  languageContentEl[m].style.display = "none";
}

// + Make skill box content hidden
skillContentEl = borderAdjustEl[5].querySelectorAll(".skill-content");
for (let m = 0; m < skillContentEl.length; m++) {
  skillContentEl[m].style.display = "none";
}
// loop 3->5

for (let j = 3; j < borderAdjustEl.length; j++) {
  // hobby content
  nextHeadEl = borderAdjustEl[j].querySelector("h1");
  nextHeadEl.addEventListener("mouseover", function () {
    viewMoreUnique(j);
  });
  viewMoreEl[j].addEventListener("click", function () {
    // Hobby box
    // I don't know exactly why i have to put this query borderAdjustEl into eventListener
    // to make the code work instead of outside the eventlistener, the only thing I guess
    // is I have to put the query that we use inside the event listener to make the event realise,
    // the same when we put script.js at the end of the body tag
    hobbyContentEl = borderAdjustEl[j].querySelectorAll(".bs-hobby");
    for (let m = 0; m < hobbyContentEl.length; m++) {
      // Change display from none to grid to show content again
      hobbyContentEl[m].style.display = "grid";
    }
    // Language box
    viewMoreClickedChange(j, ".language-content");

    // Skill box
    viewMoreClickedChange(j, ".skill-content");

    // Change to view less when click view more, and reverse
    cLickViewMore(j);
  });
  viewLessEl[j].addEventListener("click", function () {
    // Hobby box
    viewLessClickedChange(j, ".bs-hobby");

    // Language box
    viewLessClickedChange(j, ".language-content");

    // Skill box
    viewLessClickedChange(j, ".skill-content");
    // Change to view less when click view more, and reverse

    clickViewLess(j);
  });
}
