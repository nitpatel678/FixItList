import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import Navbar from '../components/Navbar';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', dueDate: '' });
  const [file, setFile] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.dueDate) return;

    const newEntry = {
      id: Date.now(),
      title: newTask.title,
      dueDate: newTask.dueDate,
      completed: false,
      fileName: file ? file.name : null,
    };

    setTasks([...tasks, newEntry]);
    setNewTask({ title: '', dueDate: '' });
    setFile(null);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <>
      <Navbar />
      <section className="py-10 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">My Task List</h1>

          {/* Task Form */}
          <form onSubmit={handleAdd} className="mb-6 bg-white rounded-xl shadow p-4 space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              className="w-full p-2 border rounded"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
            >
              Add Task
            </button>
          </form>

          {/* Task List */}
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onToggle={toggleComplete} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
