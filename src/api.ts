import axios from "axios";
import { Target, ToDo } from "./types";

const API_BASE_URL = "https://todo-caio.azurewebsites.net/api";

export const fetchTargets = async (): Promise<Target[]> => {
  const response = await axios.get<Target[]>(`${API_BASE_URL}/Targets`);
  return response.data;
};

export const fetchTargetById = async (id: number): Promise<Target> => {
  const response = await axios.get<Target>(`${API_BASE_URL}/Targets/${id}`);
  return response.data;
};

export const addTarget = async (
  title: string,
  description: string
): Promise<void> => {
  await axios.post(`${API_BASE_URL}/Targets`, {
    title,
    description,
    isComplete: false,
  });
};

export const updateTarget = async (
  id: number,
  title: string,
  description: string
): Promise<void> => {
  await axios.put(`${API_BASE_URL}/Targets/${id}`, {
    title,
    description,
    isComplete: false,
  });
};

export const deleteTarget = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/Targets/${id}`);
};

export const fetchToDos = async (targetId: number): Promise<ToDo[]> => {
  const response = await axios.get<ToDo[]>(
    `${API_BASE_URL}/Todo?targetId=${targetId}`
  );
  return response.data;
};

export const addToDo = async (
  targetId: number,
  title: string,
  description: string
): Promise<void> => {
  await axios.post(`${API_BASE_URL}/Todo`, {
    targetId,
    title,
    description,
    isComplete: false,
  });
};

export const updateToDo = async (
  id: number,
  title: string,
  description: string,
  isComplete: boolean
): Promise<void> => {
  await axios.put(`${API_BASE_URL}/Todo/${id}`, {
    title,
    description,
    isComplete,
  });
};

export const deleteToDo = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/Todo/${id}`);
};
