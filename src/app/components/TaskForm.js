'use client';
import { useState } from 'react';

export default function TaskForm({ onSaveTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTask({ title, description, priority });
        setTitle('');
        setDescription('');
        setPriority('Low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Title"
                    required
                    style={{ flex: '70%', padding: '10px', }}


                />

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    style={{ flex: '30%', padding: '10px', }}

                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
            />

            <button type="submit">Add Task</button>
        </form>
    );
}
