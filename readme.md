# Assignment 7 : Identifying APIs for To-Do List App

# add a todo item
endpoint: "/add"<br>
method: POST<br>
description: allows the user to add the item to an empty array list<br>
request body: {<br>
    id: "to be provided",<br>
    item : "TASK TO BE ADDED"<br>
    }<br>
response: Returns the created task with auto-generated fields (completed = false, createdAt = new Date()).<br>


# remove a todo item
endpoint: "/remove/:id"<br>
method: DELETE<br>
description: allows the user to remove the item from the list in case of accidental add.<br>
request body: None<br>
params: "id"<br>
response: Returns a success message or error if task not found.<br>


# get the entire list of todo items
endpoint: "/"<br>
method: GET<br>
description: get all the items from a to do list<br>
request body: None<br>
response: Returns an array of all tasks.<br>


# mark a task completed
endpoint: "/complete/:id"<br>
method: PATCH<br>
description: update a task completed value to true<br>
params: id<br>
response: Returns the updated task object.<br>


# WORKFLOW
initialize the node application using express. The task are stored in array<br>

tasks = [{},{}]<br>

Each task will contain the all the task, where individula task will be an object as followed<br>
{<br>
    id: <unique identifier>,<br>
    item: <task description>,<br>
    completed: false,       // default value<br>
    createdAt: <timestamp>   // system generated<br>
}<br>

When a task is added:<br>
    Id check is done to avoid same id for two different task.<br>
    The completed property is automatically set to false.<br>
    The createdAt property is automatically set using new Date().<br>

