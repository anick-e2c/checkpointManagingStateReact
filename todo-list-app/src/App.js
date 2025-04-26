import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // État pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);
  // État pour suivre la tâche en cours d'édition
  const [editingTask, setEditingTask] = useState(null);

  // Charger les tâches depuis localStorage au montage du composant
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Sauvegarder les tâches dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Ajoute une nouvelle tâche à la liste
   * @param {Object} newTask - La nouvelle tâche à ajouter
   */
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  /**
   * Met à jour une tâche existante
   * @param {Object} updatedTask - La tâche avec les modifications
   */
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  /**
   * Supprime une tâche de la liste
   * @param {number} taskId - L'ID de la tâche à supprimer
   */
  const deleteTask = (taskId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  /**
   * Bascule l'état de complétion d'une tâche
   * @param {number} taskId - L'ID de la tâche à modifier
   */
  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <h1>Ma Liste de Tâches</h1>
      
      {/* Formulaire pour ajouter ou modifier une tâche */}
      <TaskForm 
        addTask={addTask} 
        updateTask={updateTask} 
        editingTask={editingTask}
      />
      
      {/* Liste des tâches */}
      <TaskList 
        tasks={tasks} 
        setEditingTask={setEditingTask} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;