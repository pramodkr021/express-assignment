# SETUP INSTRUCTIONS
1. git clone <repo-url>
2. cd <project-folder>
3. npm install
4. Create a .env file in the root and set:
5. MONGODB_URI=mongodb://127.0.0.1:27017/toDoList<br>
OR<br>
Use your MongoDB Atlas URL.
6. npm start


# URL
http://localhost:8000/tasks/  
<!-- use get or post for respective api endpoint -->


# Assignment 7 : Identifying APIs for To-Do List App

# Requirements
1. Node.js
2. MongoDB (Local or Atlas)

<hr>
<b>Functionalities</b>

1. Add a todo item
endpoint: "/add"
method: POST
description: allows the user to add the item to an empty array list
request body: {
    id: "to be provided",
    item : "TASK TO BE ADDED"
    }
response: Returns the created task with auto-generated fields (completed = false, createdAt = new Date()).

<hr>
2. Remove a todo item
endpoint: "/remove/:id"
method: DELETE
description: allows the user to remove the item from the list in case of accidental add.
request body: None
params: "id"
response: Returns a success message or error if task not found.

<hr>
3. Get the entire list of todo items
endpoint: "/"
method: GET
description: get all the items from a to do list
request body: None
response: Returns an array of all tasks.

<hr>
4. Mark a task completed
endpoint: "/complete/:id"
method: PATCH
description: set a task completed value to true or viceversa
params: id
response: Returns the updated task object.
<hr>
5. Update a task / rename the task
endpoint: "/update/:id"
method: PUT
description: update the task
params: id
response: return the updated object
<hr>
# WORKFLOW
initialize the node application using express. The task are stored in array

tasks = [{},{}]

Each task will contain the all the task, where individula task will be an object as followed 
{
    id: <unique identifier>,
    item: <task description>,
    completed: false,       // default value
    createdAt: <timestamp>   // system generated
}

