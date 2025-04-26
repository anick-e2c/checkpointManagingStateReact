function TaskItem({ task, setEditingTask, deleteTask, toggleComplete }) {
    /**
     * Gère la suppression d'une tâche
     */
    const handleDelete = () => {
      deleteTask(task.id);
    };
  
    /**
     * Gère le basculement de l'état de complétion
     */
    const handleToggleComplete = () => {
      toggleComplete(task.id);
    };
  
    return (
      <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <div className="task-content">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
        
        <div className="task-actions">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="complete-checkbox"
          />
          
          <button 
            onClick={() => setEditingTask(task)}
            className="edit-btn"
          >
            Modifier
          </button>
          
          <button 
            onClick={handleDelete}
            className="delete-btn"
          >
            Supprimer
          </button>
        </div>
      </li>
    );
  }
  
  export default TaskItem;