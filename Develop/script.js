// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');


$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 $('#hour9',).on("click", function (){
localStorage.setItem('hour9', JSON.stringify(this));
 });

$('#hour10',).on("click", function (){
localStorage.setItem('hour10', JSON.stringify(this));
  });

$('#hour11',).on("click", function (){
localStorage.setItem('hour11', JSON.stringify(this));
  });

$('#hour12',).on("click", function (){
localStorage.setItem('hour12', JSON.stringify(this));
  });

 $('#hour13',).on("click", function (){
localStorage.setItem('hour13', JSON.stringify(this));
  });

 $('#hour14',).on("click", function (){
  localStorage.setItem('hour14', JSON.stringify(this));
   });

$('#hour15',).on("click", function (){
  localStorage.setItem('hour15', JSON.stringify(this));
  });

 $('#hour16',).on("click", function (){
  localStorage.setItem('hour16', JSON.stringify(this));
  });

$('#hour17',).on("click", function (){
  localStorage.setItem('hour17', JSON.stringify(this));
  });

  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
  displayTime()
});

