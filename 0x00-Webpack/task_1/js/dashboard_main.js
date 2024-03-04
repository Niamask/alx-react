import $ from "jquery";
import _ from "lodash";

let count = 0;

function updateCounter() {
  count++;
  $("#count").text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);

$(document).ready(() => {
  $("body").append($("<p>Holberton Dashboard</p>"));
  $("body").append($("<p>Dashboard data for the students</p>"));
  const button = $("<button>Click here to get started</button>");
  $("body").append(button);
  $("body").append($('<p id="count"></p>'));
  $("body").append($("<p>Copyright - Holberton School</p>"));

  button.click(debouncedUpdateCounter);
});
