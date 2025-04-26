import TaskItem from './TaskItem';

function TaskList({ tasks, setEditingTask, deleteTask, toggleComplete }) {
  return (
    <div className="task-list">
      <h2>Mes Tâches ({tasks.length})</h2>
      
      {tasks.length === 0 ? (
        <p>Aucune tâche pour le moment. Ajoutez-en une !</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              setEditingTask={setEditingTask}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;