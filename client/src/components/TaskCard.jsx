export default function TaskCard({ task, onToggle }) {
    return (
      <div
        className={`bg-white rounded-2xl shadow p-4 flex justify-between items-center cursor-pointer ${
          task.completed ? 'opacity-60' : ''
        }`}
        onClick={() => onToggle(task.id)}
      >
        <div>
          <h3 className={`text-lg font-semibold ${task.completed ? 'line-through' : ''}`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          {task.fileName && (
            <p className="text-xs text-gray-400 mt-1">📎 {task.fileName}</p>
          )}
        </div>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            task.completed ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
          }`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </div>
    );
  }
  