# ToDo List App

Simple todo app made with PERN(postgres, express, reactjs and nodejs), on it you are able to create, edit and delete tasks.
All tasks are stored on a heroku postgres database.

Application frontend deployed on vercel and backend deployed on heroku. Links bellow:

### Frontend

https://talapp.vercel.app

### Backend

http://task-list-app-bck.herokuapp.com

#

# NodeJS

### `Database Schema`

- `id` (string)

- `description` (string)

- `completed` (boolean)

- `createdAt` (date)

- `updatedAt` (date)

#

### `Controllers`

- Task

#

### `Endpoints`:

- getOne(id) - get one task
  |  `route`: get(/task/:id)

- getAll() - get all tasks
  |  `route`: get(/tasks)

- getCompleted() - get the completed tasks
  |  `route`: get(/tasks/completed)

- getUncompleted() - get the uncompleted tasks
  |  `route`: get(tasks/uncompleted)

- create(description) - create one task
  |  `route` : post(task)

- update(id, description) - update description of one task
  |  `route`: put(task/:id)

- complete(id) - change status of one task
  |  `route`: put(task/complete/:id)

- delete(id) - delete one task
  |  `route`: delete(task/:id)

- deleteAll() - delete all tasks
  |  `route`: delete(tasks)

#

# ReactJS

## Components

### `InputTask` ( component responsable of new tasks )

- handleSubmit() - used to create a new task

### `TaskWrapper` ( component responsable for wrapping and showing the tasks )

- fetchAll() - to fetch all tasks
- fecthCompleted() - to fetch only the completed tasks
- fetchUncompleted() - to fetch only the uncomplete tasks
- handleDeleteAll() - to delete all tasks

### `Task` ( component responsable of actions on existing tasks )

- handleDelete(id) - to delete one specific task
- handleComplete(id) - to complete one specific task
- handleEdit(id, description) - to edit a specific task
- handleOpenModal() - to open the modal that shows the edit input
- handleCloseModal() - to close the modal

#

# Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\

### `pnpm test`

Launches the test runner in the interactive watch mode.\

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
