import InputTask from "./components/InputTask";
import TaskWrapper from "./components/TaskWrapper";
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <h1>TODO LIST APP</h1>
      <InputTask />
      <TaskWrapper />
    </div>
  );
}

export default App;
