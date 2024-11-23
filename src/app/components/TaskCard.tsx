import Link from "next/link";
import Image from "next/image";

type TaskCardProps = {
  task: Task;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="task-card flex p-4 rounded-lg mb-3 shadow-lg bg-customGray border border-customGray-light relative overflow-hidden">
      <div className="flex-shrink-0 w-5 h-5 flex justify-center mt-0.5">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id, task.completed)}
          className="appearance-none w-5 h-5 border-2 border-customBlue bg-customGray rounded-full checked:bg-customPurple relative checked:border-customPurple checked:after:content-[''] checked:after:absolute checked:after:w-full checked:after:h-full checked:after:bg-[url('/check.svg')] checked:after:bg-no-repeat checked:after:bg-center"
        />
      </div>
      <Link href={`/tasks/${task.id}/edit`} className="flex-grow mx-4">
        <p
          className={`font-semibold font-[400] ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </p>
      </Link>
      <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex justify-center">
        <button onClick={() => onDelete(task.id)}>
          <Image src="/delete.svg" alt="Delete" width={16} height={16} />
        </button>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1 ${task.color}`}
      ></div>
    </div>
  );
}
