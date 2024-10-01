// import { taskApi } from "@/api/tasksApi";
import { createSlice } from "@reduxjs/toolkit";

export type TaskType = {
  id: number;
  name: string;
  description: string;
  status: string;
  priority: string;
  due_date?: string;
};

export type Filters = {
  search: string;
  status: string;
  priority: string;
  due_date: string;
};

// export const loadTasks = createAsyncThunk(
//   'tasks/loadTasks',
//   async (_, thunkAPI) => {
//     try {
//       // Llamada a la API usando `taskApi` para obtener datos
//       const response = await thunkAPI.dispatch(taskApi.endpoints.getTasks.initiate(null)).unwrap();
//       return response; // Esto es lo que el thunk devolverá
//     } catch (error) {
//       // Asegúrate de manejar el error correctamente
//       if (error instanceof Error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//       return thunkAPI.rejectWithValue('An unknown error occurred');
//     }
//   }
// );

const initialState: { tasks: TaskType[], filters: Filters } =  {
  tasks: [
    {
      id: 1,
      name: 'Example Task 1',
      description: 'This is the description for Example Task 1',
      status: 'In Progress',
      priority: 'High',
      due_date: '2024-09-30',
    },
    {
      id: 2,
      name: 'Example Task 2',
      description: 'This is the description for Example Task 2',
      status: 'Pending',
      priority: 'Medium',
      due_date: '2024-10-15',
    },
    {
      id: 3,
      name: 'Example Task 3',
      description: 'This is the description for Example Task 3',
      status: 'Completed',
      priority: 'Low',
      due_date: '2024-09-10',
    },
    {
      id: 4,
      name: 'Example Task 4',
      description: 'This is the description for Example Task 4',
      status: 'Pending',
      priority: 'Low',
      due_date: '2024-09-10',
    },
    {
      id: 5,
      name: 'Example Task 5',
      description: 'This is the description for Example Task 5',
      status: 'Completed',
      priority: 'Medium',
      due_date: '2024-09-10',
    },
    {
      id: 6,
      name: 'Example Task 6',
      description: 'This is the description for Example Task 6',
      status: 'Completed',
      priority: 'High',
      due_date: '2024-09-10',
    },
    {
      id: 7,
      name: 'Example Task 7',
      description: 'This is the description for Example Task 7',
      status: 'Pending',
      priority: 'Low',
      due_date: '2024-09-10',
    },
    {
      id: 8,
      name: 'Example Task 8',
      description: 'This is the description for Example Task 8',
      status: 'In Progress',
      priority: 'Medium',
      due_date: '2024-09-10',
    },
  ],
  filters: {
    search: "",
    status: "",
    priority: "",
    due_date: "",
  },
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;  // Aquí ajustas las tareas que llegan al estado
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.tasks.find((task) => task.id === action.payload);
      if (taskFound) {
        state.tasks.splice(state.tasks.indexOf(taskFound), 1);
      }
    },
    updateTask: (state, action) => {
      const { id, name, description, status, priority } = action.payload;
      const foundTask = state.tasks.find((task) => task.id === id);
      if (foundTask) {
        foundTask.name = name;
        foundTask.description = description;
        if (status) {
          foundTask.status = status;
        }
        if (priority) {
          foundTask.priority = priority;
        }
      }
    },
    searchFilter: (state, action) => {
      state.filters.search = action.payload;
    },
    statusFilter: (state, action) => {
      state.filters.status = action.payload;
    },
    priorityFilter: (state, action) => {
      state.filters.priority = action.payload;
    },
    dueDateFilter: (state, action) => {
      state.filters.due_date = action.payload;
    },

  },
  // extraReducers: (builder) => {
  //   builder.addCase(loadTasks.fulfilled, (state, action) => {
  //     state.tasks = action.payload;
  //   });
  // },
});

export const {
  setTasks, // Nuevo reducer para establecer las tareas
  addTask,
  deleteTask,
  updateTask,
  searchFilter,
  statusFilter,
  priorityFilter,
  dueDateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;