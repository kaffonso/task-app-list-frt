import React from "react";
import { render } from "@testing-library/react";
import Task from '../components/Task'

const mockedTodo = {
  "id": 8,
	"completed": true,
	"createdAt": "2022-07-17T09:48:33.745Z",
	"updatedAt": "2022-07-17T09:50:43.159Z",
	"description": "This is very nice my friend, congratz"
}

test("InputTask renders without crashing", () => {
  render(<Task data={mockedTodo}/>)
});

