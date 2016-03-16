/*
	Colin Maykish (colin.maykish@leadingedje.com)
	Leading EDJE
	March 2016
*/

var existingTasks = '[{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }]';

const SUBMIT_BUTTON = "#add-task-button";
const TASK_TABLE = ".tasks-list";

$(document).ready(function(){
	// Register the add task function to a click even on the submit button
	$(SUBMIT_BUTTON).click(addTask);

	// Preload existing tasks from JSON
	var tasks = jQuery.parseJSON(existingTasks);
	$(tasks).each(function(){
		appendTaskRow(this.name, this.date, this.assigned);
	});
});

// Add a new task entry
function addTask(){
	var name = $("#task-name");
	var date = $("#task-date");
	var assigned = $("#task-assigned-to");

	// Append a new row to the table with values from the creation form
	appendTaskRow(name.val(), date.val(), assigned.val());

	// Clear the creation form inputs
	name.val("");
	date.val("");
	assigned.val("");
}

// Format and append a row to the task table with the given data
function appendTaskRow(name, date, assigned){
	var newRow = '<div class="task-row">';
	newRow += '<div class="task-name"><p>' + name + "</p></div>";
	newRow += '<div class="task-date"><p>' + date + "</p></div>";
	newRow += '<div class="task-assigned"><p>' + assigned + "</p></div>";
	newRow == '</div>';
	
	$(TASK_TABLE).append(newRow);
}