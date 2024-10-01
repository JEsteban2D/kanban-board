import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "@/features/tasks/taskSlice";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import { useState } from "react";
import GenericButton from "../ui/GenericButton";
import pencil from "@/assets/pencil.svg";

interface TaskCardProps {
  task: {
    id: number;
    name: string;
    description: string;
    completed?: boolean;
    status: string;
    priority: string;
    due_date?: string;
  };
  onDragStart: (taskId: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart }) => {
  const dispatch = useDispatch();

  const [editedTask, setEditedTask] = useState({
    id: task.id,
    name: task.name,
    description: task.description,
    status: task.status,
    priority: task.priority,
    due_date: task.due_date,
    completed: task.completed,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTask.id) {
      dispatch(updateTask(editedTask));
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      draggable={true}
      onDragStart={() => {
        onDragStart(task.id);
      }}
      className="cursor-grab active:cursor-grabbing"
    >
      <div
        className="flex flex-col bg-slate-50 text-metallicBeige p-4 w-full rounded-[8px] text-left  border-[2px] border-gray-200 "
        key={task.id}
      >
        <div>
          <h2 className="text-lg font-bold text-[#282828]">{task.name}</h2>
        </div>
        <p className="text-[#282828]">{task.description}</p>
        <div className="flex justify-between mt-4">
          <div className="flex space-x-2 mt-2">
            <span>{task.completed}</span>
            <span className="bg-defaultPrincipal text-metallicBeige px-2 py-1 rounded">
              {task.status}
            </span>
            <span className="bg-defaultSecundary text-metallicBeige px-2 py-1 rounded">
              {task.priority}
            </span>
            <span className="bg-defaultTerciary text-metallicBeige px-2 py-1 rounded">
              {task.due_date}
            </span>
          </div>
          <div className="flex justify-center items-center mt-2">
            <Dialog>
              <DialogTrigger
                className="w-full"
                onClick={() =>
                  setEditedTask({
                    id: task.id,
                    name: task.name,
                    description: task.description,
                    status: task.status,
                    priority: task.priority,
                    due_date: task.due_date,
                    completed: task.completed,
                  })
                }
              >
                <img
                  className="bg-black p-[4px] rounded-lg"
                  src={pencil}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </DialogTrigger>
              <DialogContent className="flex flex-col gap-4 bg-white">
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                  <div className="ml-0 flex self-start">
                    <GenericButton onClick={() => handleDelete(task.id)}>
                      Delete
                    </GenericButton>
                  </div>
                  <label>Title:</label>
                  <input
                    className="bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
                    name="name"
                    type="text"
                    value={editedTask.name}
                    onChange={handleChange}
                    placeholder={task.name}
                  />
                  <label>Stado:</label>
                  <select
                    name="status"
                    onChange={handleChange}
                    value={editedTask.status}
                    className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
                  >
                    <option value="">Filtrar por estado</option>
                    <option value="Pending" className="cursor-pointer">
                      Pending
                    </option>
                    <option value="In Progress" className="cursor-pointer">
                      In Progress
                    </option>
                    <option value="Completed" className="cursor-pointer">
                      Completed
                    </option>
                  </select>
                  <label>Prioridad:</label>
                  <select
                    name="priority"
                    onChange={handleChange}
                    value={editedTask.priority}
                    className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
                  >
                    <option value="">Filtrar por prioridad</option>
                    <option value="Low" className="cursor-pointer">
                      Low
                    </option>
                    <option value="Medium" className="cursor-pointer">
                      Medium
                    </option>
                    <option value="High" className="cursor-pointer">
                      High
                    </option>
                  </select>
                  <label>Description:</label>
                  <textarea
                    className="bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
                    name="description"
                    value={editedTask.description}
                    onChange={handleChange}
                    placeholder={task.description}
                  ></textarea>
                  <DialogClose asChild>
                    <GenericButton type="submit">Save</GenericButton>
                  </DialogClose>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
