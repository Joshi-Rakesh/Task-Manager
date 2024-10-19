'use client';
import { useState } from 'react';
import TaskItem from './TaskItem';
import EditTaskModal from './EditTaskModal';
import styles from '../page.module.css';

export default function TaskList({ tasks, onEditTask, onDeleteTask, onToggleComplete }) {
    const [editingTask, setEditingTask] = useState(null);

    const handleEditTask = (task) => {
        setEditingTask(task);
    };

    const handleCloseModal = () => {
        setEditingTask(null);
    };

    const handleSaveTask = (updatedTask) => {
        onEditTask(updatedTask);
    };

    return (
        <>
            <table className={styles.taskTable}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onEditTask={handleEditTask}
                            onDeleteTask={onDeleteTask}
                            onToggleComplete={onToggleComplete}
                        />
                    ))}
                </tbody>
            </table>

            {editingTask && (
                <EditTaskModal
                    task={editingTask}
                    onClose={handleCloseModal}
                    onSave={handleSaveTask}
                />
            )}
        </>
    );
}
