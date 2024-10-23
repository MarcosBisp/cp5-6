import axios from 'axios';
import { Target, ToDo } from './types';

const API_BASE_URL = 'https://todo-caio.azurewebsites.net/api';

export const fetchTargets = async (): Promise<Target[]> => {
    const response = await axios.get<Target[]>(`${API_BASE_URL}/Targets`);
    return response.data;
};

export const addTarget = async (title: string, description: string) => {
    await axios.post(`${API_BASE_URL}/Targets`, { title, description, isComplete: false });
};

export const deleteTarget = async (id: number) => {
    await axios.delete(`${API_BASE_URL}/Targets/${id}`);
};

export const fetchToDos = async (targetId: number): Promise<ToDo[]> => {
    const response = await axios.get<ToDo[]>(`${API_BASE_URL}/Todo?targetId=${targetId}`);
    return response.data;
};

export const addToDo = async (targetId: number, title: string, description: string) => {
    await axios.post(`${API_BASE_URL}/Todo`, { targetId, title, description, isComplete: false });
};

export const deleteToDo = async (id: number) => {
    await axios.delete(`${API_BASE_URL}/Todo/${id}`);
};
