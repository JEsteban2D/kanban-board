// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// type Task = {
//   id: number;
//   name: string;
//   description: string;
//   status: string;
//   priority: string;
//   due_date?: string;
// };

// export const taskApi = createApi({
//   reducerPath: "taskApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://tasks-manager-test.fly.dev/api/",
//   }),
//   endpoints: (builder) => ({
//     getTasks: builder.query<Task[], null>({
//       query: () => "tasks",
//     }),
//     getTasksById: builder.query<Task, {id: string}>({
//       query: ({id}) => `tasks/${id}`,
//     }),
//   }),
// })

// export const { useGetTasksQuery, useGetTasksByIdQuery} = taskApi;