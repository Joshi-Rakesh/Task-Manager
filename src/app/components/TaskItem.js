'use client';
import styles from '../page.module.css';
export default function TaskItem({ task, onEditTask, onDeleteTask, onToggleComplete }) {
    let priorityClass;
    switch (task.priority) {
        case 'High':
            priorityClass = styles['high-priority'];
            break;
        case 'Medium':
            priorityClass = styles['medium-priority'];
            break;
        case 'Low':
            priorityClass = styles['low-priority'];
            break;
        default:
            priorityClass = '';
    }

    return (
        <tr className={task.completed ? styles.completed : ''}>
            <td data-label="Title">{task.title}</td>
            <td data-label="Description">{task.description}</td>
            <td className={priorityClass} data-label="Priority">{task.priority}</td>
            <td data-label="Status">{task.completed ? 'Completed' : 'Pending'}</td>
            <td data-label="Actions">
                <div className={styles.buttonGroup}>
                    <button className={styles.button} onClick={() => onToggleComplete(task.id)}>
                        {task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button className={styles.button} onClick={() => onEditTask(task)}>Edit</button>
                    <button className={styles.button} onClick={() => onDeleteTask(task.id)}>Delete</button>
                </div>
            </td>
        </tr>
    );
}
