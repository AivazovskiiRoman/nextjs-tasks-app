import Link from 'next/link';
import Image from 'next/image';

export default function CreateButton() {
  return (
    <div className="absolute w-full flex justify-center -translate-y-1/2 top-[200px] p-[1rem] md:p-0">
      <Link
        href="/tasks/create"
        className="bg-customBlue-light hover:bg-[#2f78a3] active:bg-[#1A5F76] active:scale-95 transition-all duration-300 text-white font-[600] py-3 rounded-[8px] flex items-center justify-center shadow-md max-w-740 w-full"
      >
        <span className="text-center">Create Task</span>
        <Image
          src="/plus.svg"
          alt="Create Task"
          width={18}
          height={18}
          className="ml-2"
        />
      </Link>
    </div>
  );
}
