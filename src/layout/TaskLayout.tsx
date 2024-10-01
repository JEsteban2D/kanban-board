import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TaskType, updateTask } from "@/features/tasks/taskSlice";
import { PendingTasks } from '../components/pendingTasks/PendingTasks';
import { InProgressTasks } from '../components/inProgressTask/InProgressTasks';
import { CompletedTasks } from '../components/completedTask/CompletedTasks';
import { useState } from "react";

export const TaskLayout = () => {
  const dispatch = useDispatch();
  const { tasks, filters } = useSelector((state: RootState) => state.tasks);

  // Filtra las tareas de acuerdo a los filtros establecidos
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = (task.name || '')
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesStatus = filters.status
      ? task.status === filters.status
      : true;
    const matchesPriority = filters.priority
      ? task.priority === filters.priority
      : true;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const pendingTasks = filteredTasks.filter((task: TaskType) => task.status === "Pending");
  const inProgressTasks = filteredTasks.filter((task: TaskType) => task.status === "In Progress");
  const completedTasks = filteredTasks.filter((task: TaskType) => task.status === "Completed");

  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);

  const handleDragStart = (taskId: number) => {
    setDraggedTaskId(taskId);
  };

  const handleDropTask = (newStatus: string) => {
    if (draggedTaskId !== null) {
      const taskToUpdate = tasks.find((task: TaskType) => task.id === draggedTaskId);
      if (taskToUpdate && taskToUpdate.status !== newStatus) {
        dispatch(updateTask({ ...taskToUpdate, status: newStatus }));
      }
      setDraggedTaskId(null);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <PendingTasks tasks={pendingTasks} onDropTask={handleDropTask} onDragStart={handleDragStart} />
      <InProgressTasks tasks={inProgressTasks} onDropTask={handleDropTask} onDragStart={handleDragStart} />
      <CompletedTasks tasks={completedTasks} onDropTask={handleDropTask} onDragStart={handleDragStart} />
    </div>
  );
};