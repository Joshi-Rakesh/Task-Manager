"use client";
import { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import styles from '../page.module.css';

const TaskManager = ({ initialTasks }) => {
    const [tasks, setTasks] = useState(initialTasks);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    const addTask = (newTask) => {
        const newId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
        const updatedTasks = [...tasks, { ...newTask, id: newId, completed: false }];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    };

    const editTask = (updatedTask) => {
        const updatedTasks = tasks.map(task => (task.id === updatedTask.id ? updatedTask : task));
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    };

    const toggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    };

    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        return (a.priority === 'High' ? 1 : a.priority === 'Medium' ? 2 : 3) -
            (b.priority === 'High' ? 1 : b.priority === 'Medium' ? 2 : 3);
    });

    const filteredTasks = sortedTasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <TaskForm onSaveTask={addTask} />
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
            />
            <TaskList
                tasks={filteredTasks}
                onEditTask={editTask}
                onDeleteTask={deleteTask}
                onToggleComplete={toggleComplete}
            />
        </div>
    );
};

export default TaskManager;
