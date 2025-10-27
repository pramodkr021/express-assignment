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

Request Body <br>
{
  "task": "TASK TO BE ADDED"
}

Response<br>
{
  "success":true,
  "data":{
    "task": "TASK TO BE ADDED",
    "completed": false,
    "createdAt": "DATE"
  }
}<br>


| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| GET    | `/`      | Returns all the tasks |

Response<br>
{
    "success":true,
    "data":
    [{
        "_id": "id",
        "task": "Sample",
        "completed": false,
        "createdAt": "DATE"
    }]
}
<br>


| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| DELETE | `/delete/:id` | Deletes a task by ID |

Response<br>
{
    "success": true,
    "message": "Task deleted successfully"
}<br>


| Method | Endpoint      | Description                              |
| ------ | ------------- | ---------------------------------------- |
| PATCH  | `/toggle/:id` | Toggles the `completed` status of a task |

Response<br>
{
  "success": true,
  "data": [{
    <!-- ENTIRE TASK OBJECT -->
  }]
}<br>


| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| PUT    | `/update/:id` | Updates the task text |

Request Body<br>
{
  "task": "UPDATED TASK"
}<br>

Response<br>
{
    "success":true,
    "data": {
        "_id": "id",
        "task": "UPDATED TASK",
        "completed": false
    }
}



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