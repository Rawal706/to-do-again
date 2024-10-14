var main = document.getElementById("main");

var div1 = document.createElement("div");
main.appendChild(div1);

// Creating h1 in div
var heading = document.createElement("h1");
div1.appendChild(heading);
heading.innerHTML = "Add Daily Tasks";
heading.setAttribute("id", "Heading1");

// Creating Div for input field
var div2 = document.createElement("div");
main.appendChild(div2);
div2.setAttribute("class", "div2");

// Creating input field for task
var inputField = document.createElement("input");
div2.appendChild(inputField);
inputField.setAttribute("type", "text");
inputField.setAttribute("class", "taskInput");

// Creating button for adding task
var button = document.createElement("button");
div2.appendChild(button);
button.innerHTML = "Add Task";
button.setAttribute("class", "addTaskButton");
button.setAttribute("onclick", "addTask()");

// Creating Show Task Button to show list of tasks
var showTaskButton = document.createElement("button");
div2.appendChild(showTaskButton);
showTaskButton.innerHTML = "Show Tasks";
showTaskButton.setAttribute("class", "showTaskButton addTaskButton");
// showTaskButton.setAttribute("onclick", "showTasks()"); // Show ----------------------------------------------------------------

var ul1 = document.createElement("ul");
main.appendChild(ul1);
ul1.setAttribute("id", "taskList");

// Creating Function for adding task to list in li on clicking add task button
function addTask() {
    var taskText = inputField.value;
    // using if statement in shortcut
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    var li1 = document.createElement("li");
    ul1.appendChild(li1);
    li1.innerHTML = taskText;
    inputField.value = ""; // Clear the input field after adding task
    li1.setAttribute("class", "taskItem"); // Adding class to each task item for styling purposes
    li1.setAttribute("id", li1.innerHTML)
    li1.style.display = "none"; // Hide the--------------------------------------------------------

    // Show List Item
    showTaskButton.addEventListener("click", function () {
        li1.style.display = "block";
    });

    // Creating Div for Edit/Delete Task Button
    var div3 = document.createElement("div");
    li1.appendChild(div3);
    div3.setAttribute("class", "onlyBTNs");

    // Creating Edit Button
    var img1 = document.createElement("img");
    div3.appendChild(img1);
    img1.setAttribute("src", "https://cdn-icons-png.freepik.com/256/8679/8679951.png");
    img1.setAttribute("class", "defaultBTN");

    img1.addEventListener("click", function () {
        var UpdateTask = prompt("Update The Task", li1.id);
        if (UpdateTask === "" || UpdateTask === null) {
            alert("Please enter a task");
            return;
        }
        li1.innerHTML = UpdateTask;
        li1.appendChild(div3);
        div3.appendChild(img1);
        div3.appendChild(img2);
        li1.setAttribute("id", UpdateTask)
    });

    // Creating Delete Button
    var img2 = document.createElement("img");
    div3.appendChild(img2);
    img2.setAttribute("src", "https://images.freeimages.com/fic/images/icons/99/office/256/close.png");
    img2.setAttribute("class", "defaultBTN");

    img2.addEventListener("click", function () {
        li1.remove();
    });
}