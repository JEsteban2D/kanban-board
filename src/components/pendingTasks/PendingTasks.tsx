import { TaskType } from "@/features/tasks/taskSlice";
import React from "react";
import { TaskCard } from "../taskCard/TaskCard";

interface PendingTaskProps {
  tasks: TaskType[];
  onDropTask: (status: string) => void;
  onDragStart: (taskId: number) => void;
}

export const PendingTasks: React.FC<PendingTaskProps> = ({
  tasks,
  onDropTask,
  onDragStart
}) => {


  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-[8px] bg-white/30 backdrop-blur-md shadow-lg border border-white/10"
      onDragOver={(e) => e.preventDefault()} // Permite el drop
      onDrop={() => onDropTask("Pending")}
    >
      <div className="h-[45px] relative flex gap-4 items-center rounded-lg border pr-4">
        <div className="h-full w-4 bg-defaultTerciary rounded-l-lg"></div>
        <div className="flex w-full gap-4">
          <h2 className="text-lg font-bold text-defaultPrimary">
            Pending Tasks
          </h2>
          <h2 className="flex justify-center items-center text-xl font-bold text-defaultPrimary bg-[#cdcdcd] rounded-lg text-metallicBeige w-[28px]">
            {tasks.length}
          </h2>
        </div>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDragStart={onDragStart}/>
      ))}
    </div>
  );
};
