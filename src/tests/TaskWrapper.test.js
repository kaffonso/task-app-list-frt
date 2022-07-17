import React from "react";
import { render } from "@testing-library/react";
import TaskWrapper from '../components/TaskWrapper'

test("InputTask renders without crashing", () => {
  render(<TaskWrapper />)
});

