import { useDispatch } from "react-redux";
// import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import {
  priorityFilter,
  searchFilter,
  statusFilter,
} from "@/features/tasks/taskSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchFilter(e.target.value));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(statusFilter(e.target.value));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(priorityFilter(e.target.value));
  };

  // const handleDueDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(dueDateFilter(e.target.value));
  // };
  return (
    <div className="bg-background text-foreground p-4 rounded-md grid lg:grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-1">
      <input
        type="text"
        placeholder="Buscar tareas..."
        onChange={handleSearchChange}
        className="bg-metallicBeige text-black border border-metallicGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-copper focus:border-copper"
      />
      <select
        onChange={handleStatusChange}
        className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
      >
        <option value="">All State</option>
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
      <select
        onChange={handlePriorityChange}
        className="cursor-pointer bg-white text-darkSlateGray border border-lightGray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-focus-ring-blue focus:border-focus-ring-blue"
      >
        <option value="">All priority</option>
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
      {/* <input
        type="date"
        onChange={handleDueDateChange}
      /> */}
    </div>
  );
};
