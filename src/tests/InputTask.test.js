import React from "react";
import { render } from "@testing-library/react";
import InputTask from '../components/InputTask'

test("InputTask renders without crashing", () => {
  render(<InputTask />)
});


