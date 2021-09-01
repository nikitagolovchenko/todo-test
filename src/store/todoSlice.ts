import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import {
  fetchChangeTodo,
  fetchCompletedTodo,
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchTodo,
} from '../services/todoAPI';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const getTodo = createAsyncThunk('todo/getTodo', async () => {
  const response = await fetchTodo();
  return response.data;
});

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id: number) => {
    const response = await fetchDeleteTodo(id);
    return id;
  }
);

export const completedTodo = createAsyncThunk(
  'todo/completedTodo',
  async ({ id, completed }: { id: number; completed: boolean }) => {
    const response = await fetchCompletedTodo(id, completed);
    return response.data;
  }
);

export const changeTodo = createAsyncThunk(
  'todo/changeTodo',
  async ({ id, text }: { id: number; text: string }) => {
    const response = await fetchChangeTodo(id, text);    
    return response.data;
  }
);

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (text: string) => {
    const response = await fetchCreateTodo(text);    
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.error = null;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(completedTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        completedTodo.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.loading = false;
          state.error = null;
          state.todos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return action.payload;
            }
            return todo;
          });
        }
      )
      .addCase(completedTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(changeTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        changeTodo.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.loading = false;
          state.error = null;
          state.todos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return action.payload;
            }
            return todo;
          });
        }
      )
      .addCase(changeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        createTodo.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.loading = false;
          state.error = null;
          state.todos.push(action.payload)
        }
      )
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  },
});

export const {} = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
