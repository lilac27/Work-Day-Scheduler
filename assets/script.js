var timeDisplayEl = $('#currentDay');
var saveButton = $('.saveBtn');
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');



$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. 

$(saveButton).on("click", function (){

var value = $(this).siblings(".description").val();

var timeBlockId = $(this).parent().attr("id");

console.log(value, timeBlockId)
console.log(localStorage)

localStorage.setItem(timeBlockId, value);
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  var time = dayjs().format('H');
  console.log(time);

  $(".time-block").each(function(){
    console.log($(this).attr("id"));

// write function that compares time in id to time given by dayjs

  var idHour = parseInt($(this).attr("id").split('-')[1]);

  if (idHour < time) {
    $(this).addClass("past");
  }
  else if (idHour === time){
    $(this).addClass("present");
  }
  else 
    $(this).addClass("future");
  });










  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));

  $('#hour-10 .description').val(localStorage.getItem('hour-10'));

  $('#hour-11 .description').val(localStorage.getItem('hour-11'));

  $('#hour-12 .description').val(localStorage.getItem('hour-12'));

  $('#hour-13 .description').val(localStorage.getItem('hour-13'));

  $('#hour-14 .description').val(localStorage.getItem('hour-14'));

  $('#hour-15 .description').val(localStorage.getItem('hour-15'));

  $('#hour-16 .description').val(localStorage.getItem('hour-16'));

  $('#hour-17 .description').val(localStorage.getItem('hour-17'));



  // TODO: Add code to display the current date in the header of the page.

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
  displayTime()
});

