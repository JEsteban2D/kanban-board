import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Header = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <h1 className="font-bold from-neutral-800 text-[42px] mt-8">
        Task App
      </h1>
      <div className="flex gap-3">
        <p className="font-bold from-neutral-800 text-[28px]">No.Tasks:</p>
        <span className="font-bold text-lime-700 text-[28px]">
          {tasks.length}
        </span>
      </div>
    </div>
  );
};
