import React from "react";
import { TaskType } from "@/features/tasks/taskSlice";
import { TaskCard } from "../taskCard/TaskCard";

interface CompletedTasksProps {
  tasks: TaskType[];
  onDropTask: (status: string) => void;
  onDragStart: (taskId: number) => void;

}

export const CompletedTasks: React.FC<CompletedTasksProps> = ({
  tasks,
  onDropTask,
  onDragStart
}) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-[8px] bg-white/30 backdrop-blur-md shadow-lg border border-white/10"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDropTask("Completed")}
    >
      <div className="h-[45px] relative flex gap-4 items-center rounded-lg border pr-4">
        <div className="h-full w-4 bg-defaultPrincipal rounded-l-lg"></div>
        <div className="flex w-full gap-4">
          <h2 className="text-lg font-bold text-defaultPrimary">
            Completed Tasks
          </h2>
          <h2 className="flex justify-center items-center text-xl font-bold text-defaultPrimary text-metallicBeige bg-[#cdcdcd] rounded-lg w-[28px]">
            {tasks.length}
          </h2>
        </div>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDragStart={onDragStart} />
      ))}
    </div>
  );
};
