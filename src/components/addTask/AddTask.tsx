import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { addTask } from "@/features/tasks/taskSlice";
import { v4 as uuidv4 } from "uuid";
import GenericButton from "../ui/GenericButton";

export const AddTask = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Pending",
    priority: "Low",
    // imageUrl: "",
    due_date: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(now.getDate()).padStart(2, "0")}T${String(
        now.getHours()
      ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    };

    setTask((prevTask) => ({
      ...prevTask,
      due_date: getCurrentDateTime(),
    }));

    const interval = setInterval(() => {
      setTask((prevTask) => ({
        ...prevTask,
        due_date: getCurrentDateTime(),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuidv4(),
      })
    );
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <GenericButton>+ Add Task</GenericButton>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-4 bg-white">
          <DialogHeader>
            <DialogTitle>Create Task</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-[8px]">
            <label>Title:</label>
            <input
              name="name"
              type="text"
              placeholder="name"
              onChange={handleSave}
              className="bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
            />
            <label>Estado:</label>
            <select
              name="status"
              onChange={handleSave}
              className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
              value={task.status}
            >
              <option value="">Filtrar por estado</option>
              <option value="Pending" className="cursor-pointer" selected>
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
              onChange={handleSave}
              className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
              value={task.priority}
            >
              <option value="">Filtrar por prioridad</option>
              <option value="Completed" className="cursor-pointer" selected>
                Completed
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
              name="description"
              placeholder="description"
              onChange={handleSave}
              className="bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
            ></textarea>
            <label>Due Date:</label>
            <input
              type="datetime-local"
              name="due_date"
              value={task.due_date}
              onChange={handleSave}
              disabled
              className="bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
            />
            <DialogClose asChild>
              <GenericButton
                type="submit"
              >
                Save
              </GenericButton>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
