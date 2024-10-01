import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Filter } from "@/components/filter/Filter";
import { TaskLayout } from "@/layout/TaskLayout";
import { AddTask } from "@/components/addTask/AddTask";
// import { getTasks } from "@/api/tasksApi";

export const HomePage = () => {

  // getTasks()
  return (
    <div>
      <Header />
      <div className="flex gap-4">
        <Filter />
        <AddTask/>
      </div>
      <TaskLayout />
      <Footer />
    </div>
  );
};
