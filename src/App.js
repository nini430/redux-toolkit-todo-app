import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo/AddToDo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
     <h1 className="text-center bg-purple-500 p-4 text-2xl text-white mb-20">RTK todo List</h1>
     <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
