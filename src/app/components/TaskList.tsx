import axios from "axios";
import { useEffect, useState } from "react";
import { TASKS_API } from "@/lib/constants/tasks";
import TaskCard from "@/app/components/TaskCard";
import SearchTasksWithFilter from "@/app/components/SearchTasksWithFilter";
import SearchClientTasksFuse from "@/app/components/SearchClientTasksFuse";
import SearchTasksWithAPI from "@/app/components/SearchTasksWithAPI";
import Image from "next/image";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [activeTab, setActiveTab] = useState("filter");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get<Task[]>(
      TASKS_API.endpoints.list() as string
    );
    setTasks(response.data);
    setFilteredTasks(response.data);
    setCompletedCount(
      response.data.filter((task: Task) => task.completed).length
    );
  };

  const onToggle = async (id: number, completed: boolean) => {
    await axios.put(TASKS_API.endpoints.update(id.toString()), {
      completed: !completed,
    });
    fetchTasks();
  };

  const onDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      await axios.delete(TASKS_API.endpoints.delete(id.toString()));
      fetchTasks();
    }
  };

  const handleSearch = (filtered: Task[]) => {
    setFilteredTasks(filtered);
  };

  const handleTabChange = (tab: string) => {
    setFilteredTasks(tasks);
    setActiveTab(tab);
  };

  return (
    <div className="max-w-740 w-full mx-auto mt-20 p-[1rem] md:p-0">
      <div className="py-4">
        <span className="text-customBlue font-[600]">Search</span>
        <div className="tabs flex space-x-4 my-4">
          <button
            onClick={() => handleTabChange("filter")}
            className={`py-2 px-4 rounded bg-customBlue-light ${activeTab === "filter" ? "" : "opacity-40"}`}
          >
            JS filter
          </button>
          <button
            onClick={() => handleTabChange("client")}
            className={`py-2 px-4 rounded bg-customBlue-light ${activeTab === "client" ? "" : "opacity-40"}`}
          >
            Fuse client
          </button>
          <button
            onClick={() => handleTabChange("api")}
            className={`py-2 px-4 rounded bg-customBlue-light ${activeTab === "api" ? "" : "opacity-40"}`}
          >
            API
          </button>
        </div>
        {activeTab === "filter" && <SearchTasksWithFilter tasks={tasks} onSearch={handleSearch} />}
        {activeTab === "client" && <SearchClientTasksFuse tasks={tasks} onSearch={handleSearch} />}
        {activeTab === "api" && <SearchTasksWithAPI tasks={tasks} onSearch={handleSearch} />}
      </div>

      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <span className="text-customBlue font-[600]">Tasks:</span>
          <span className="bg-customGray-light text-white rounded-full px-2 h-6 flex items-center justify-center">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-customPurple-light font-[600]">Completed:</span>
          <span className="bg-customGray-light text-white rounded-full px-2 h-6 flex items-center justify-center">
            {completedCount > 0
              ? `${completedCount} of ${tasks.length}`
              : completedCount}
          </span>
        </div>
      </div>
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="flex items-center h-[200px]">
            <div className="max-w-740 w-full mx-auto flex flex-col items-center justify-center">
              <Image
                src="/no-tasks.svg"
                alt="No tasks"
                width={60}
                height={60}
                className="my-5"
              />
              <p className="text-center text-gray-500 font-bold">
                You don&apos;t have any tasks registered yet.
              </p>
              <br />
              <p className="text-center text-gray-500">
                Create tasks and organize your to-do items.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
