import { TODO_URL } from './../utils/constants';
import axios from 'axios';

// A mock function to mimic making an async request for data
export function fetchTodo() {
  return axios.get(TODO_URL);
}

export function fetchDeleteTodo(id: number) {
  return axios.delete(`${TODO_URL}/${id}`);
}

export function fetchCompletedTodo(id: number, completed: boolean) {
  return axios.patch(`${TODO_URL}/${id}`, JSON.stringify({ completed }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function fetchChangeTodo(id: number, text: string) {
  return axios.patch(`${TODO_URL}/${id}`, JSON.stringify({ text }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function fetchCreateTodo(text: string) {
  const newTodo: {text: string, completed: boolean} = {
    text,
    completed: false
  };

  return axios.post(TODO_URL, JSON.stringify(newTodo), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
