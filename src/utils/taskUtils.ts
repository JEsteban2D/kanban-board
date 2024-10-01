import { Filters, TaskType } from "@/features/tasks/taskSlice";

export const filterTasks = (tasks: TaskType[], filters: Filters) => {

    return tasks.filter((task) => {
        const matchesSearch = filters.search ? task.name.toLowerCase().includes(filters.search.toLowerCase()) : true;
        const matchesStatus = filters.status ? task.status === filters.status : true;
        const matchesPriority = filters.priority ? task.priority === filters.priority : true;
        const matchesDueDate = filters.due_date ? task.due_date === filters.due_date : true;

        return matchesSearch && matchesStatus && matchesPriority && matchesDueDate;
    });
};