import React, { useEffect, useState } from 'react';
import { fetchToDos, addToDo, deleteToDo } from '../api';
import { ToDo } from '../types';

interface ToDoFormProps {
    targetId: number;
    onUpdate: () => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ targetId, onUpdate }) => {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchAndSetToDos = async () => {
        const data = await fetchToDos(targetId);
        setToDos(data);
    };

    useEffect(() => {
        fetchAndSetToDos();
    }, [targetId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addToDo(targetId, title, description);
        setTitle('');
        setDescription('');
        onUpdate();
    };

    return (
        <div>
            <h2>ToDos for Target ID: {targetId}</h2>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    type="text"
                    placeholder="ToDo Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="ToDo Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Add ToDo</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.description}
                        <button onClick={async () => {
                            await deleteToDo(todo.id);
                            onUpdate();
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoForm;
