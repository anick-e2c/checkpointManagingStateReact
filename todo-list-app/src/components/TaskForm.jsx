import { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, editingTask, setEditingTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [errors, setErrors] = useState({});

  // Pré-remplir le formulaire si on est en mode édition
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description || '');
    } else {
      setTaskName('');
      setTaskDescription('');
    }
  }, [editingTask]);

  /**
   * Valide les champs du formulaire
   * @returns {boolean} True si le formulaire est valide
   */
  const validateForm = () => {
    const newErrors = {};
    if (!taskName.trim()) newErrors.name = 'Le nom de la tâche est requis';
    if (!taskDescription.trim()) newErrors.description = 'La description est requise';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Gère la soumission du formulaire
   * @param {Event} e - L'événement de soumission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const taskData = {
      name: taskName,
      description: taskDescription
    };

    if (editingTask) {
      // Mode édition - mise à jour
      updateTask({ ...editingTask, ...taskData });
    } else {
      // Mode création - ajout
      addTask(taskData);
    }

    // Réinitialiser le formulaire
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{editingTask ? 'Modifier la tâche' : 'Ajouter une nouvelle tâche'}</h2>
      
      <div className="form-group">
        <label htmlFor="taskName">Nom de la tâche:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="taskDescription">Description:</label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      
      <button type="submit" className="submit-btn">
        {editingTask ? 'Mettre à jour' : 'Ajouter'}
      </button>
      
      {editingTask && (
        <button 
          type="button" 
          className="cancel-btn"
          onClick={() => {
            setEditingTask(null);
            setTaskName('');
            setTaskDescription('');
          }}
        >
          Annuler
        </button>
      )}
    </form>
  );
}

export default TaskForm;