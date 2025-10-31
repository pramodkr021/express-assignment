# Assignment 7 : Identifying APIs for To-Do List App

<h3>Functionalities</h3>

1. <b>Add a todo item</b><br>
endpoint: "/add"<br>
method: POST<br>
description: allows the user to add the item to an empty array list<br>
request body: {<br>
    item : "TASK TO BE ADDED"<br>
    }<br>
response: Returns the created task with auto-generated fields (completed = false, createdAt = new Date()).<br>

<hr>
2. <b>Remove a todo item</b><br>
endpoint: "/remove/:id"<br>
method: DELETE<br>
description: allows the user to remove the item from the list<br>
request body: None<br>
params: "id"<br>
response: Returns a success message or error if task not found.<br>

<hr>
3. <b>Get the entire list of todo items</b> <br>
endpoint: "/"<br>
method: GET<br>
description: get all the items from a to do list<br>
request body: None<br>
response: Returns an array of all tasks.<br>

<hr>
4. <b>Mark a task completed</b> <br>
endpoint: "/complete/:id"<br>
method: PATCH<br>
description: set a task completed value to true or viceversa<br>
params: id<br>
response: Returns the updated task object.<br>

<hr>
5. <b>Update a task / rename the task</b> <br>
endpoint: "/update/:id"<br>
method: PUT<br>
description: update the task<br>
params: id<br>
response: return the updated object<br>

<hr>

<h3>WORKFLOW</h3>
initialize the node application using express. The task are stored in array

tasks = [{},{}]

Each task will contain the all the task, where individual task will be an object as followed<br>
{<br>
    id: //unique identifier,<br>
    item: //task description,<br>
    completed: false,       // default value<br>
    createdAt: <timestamp>   // system generated<br>
}<br>

Before adding a new task will check for the id duplication so that no two task have the same id value
