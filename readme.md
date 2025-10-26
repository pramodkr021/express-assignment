# Assignment 7 : Identifying APIs for To-Do List App

# add a todo item
endpoint: "/add"
method: POST
description: allows the user to add the item to an empty array list
request body: {
    id: "to be provided",
    item : "TASK TO BE ADDED"
    }
response: Returns the created task with auto-generated fields (completed = false, createdAt = new Date()).


# remove a todo item
endpoint: "/remove/:id"
method: DELETE
description: allows the user to remove the item from the list in case of accidental add.
request body: None
params: "id"
response: Returns a success message or error if task not found.


# get the entire list of todo items
endpoint: "/"
method: GET
description: get all the items from a to do list
request body: None
response: Returns an array of all tasks.


# mark a task completed
endpoint: "/complete/:id"
method: PATCH
description: update a task completed value to true
params: id
response: Returns the updated task object.


# WORKFLOW
initialize the node application using express. The task are stored in array