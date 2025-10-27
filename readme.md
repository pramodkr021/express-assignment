# Assignment 7 : Identifying APIs for To-Do List App

# FEATURES
1. Add a new to-do task<br>
2. View all tasks<br>
3. Delete a task<br>
4. Update a task<br>
5. Mark task as completed / toggle completion status<br>

# API Endpoints
| Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| POST   | `/`      | Adds a new task to the list |

<b>Request Body:</b> <br>
{<br>
  "task": "TASK TO BE ADDED"<br>
}

<b>Response</b><br>
{<br>
  "success":true,<br>
  "data":{<br>
    "task": "TASK TO BE ADDED",<br>
    "completed": false,<br>
    "createdAt": "DATE"<br>
  }<br>
}<br>
<hr>

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| GET    | `/`      | Returns all the tasks |

<b>Response</b><br>
{<br>
    "success":true,<br>
    "data":<br>
    [{<br>
    "_id": "id",<br>
        "task": "Sample",<br>
        "completed": false,<br>
        "createdAt": "DATE"<br>
    }]
}
<br>
<hr>


| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| DELETE | `/delete/:id` | Deletes a task by ID |

<b>Response</b><br>
{<br>
    "success": true,<br>
    "message": "Task deleted successfully"<br>
}<br>
<hr>

| Method | Endpoint      | Description                              |
| ------ | ------------- | ---------------------------------------- |
| PATCH  | `/toggle/:id` | Toggles the `completed` status of a task |

<b>Response</b><br>
{<br>
  "success": true,<br>
  "data": [{<br>
    <!-- ENTIRE TASK OBJECT --><br>
  }]<br>
}<br>
<hr>


| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| PUT    | `/update/:id` | Updates the task text |

<b>Request Body:</b> <br>
{<br>
  "task": "UPDATED TASK"<br>
}<br>

<b>Response</b><br>
{<br>
    "success":true,<br>
    "data": {<br>
        "_id": "id",<br>
        "task": "UPDATED TASK",<br>
        "completed": false<br>
    }<br>
}
<br>


# Requirements
1. Node.js
2. MongoDB (Local or Atlas)


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
