import { Control, UseFormRegister } from 'react-hook-form';
import { ColorPicker } from '@/app/components/ColorPicker';
import Image from 'next/image';
import Link from 'next/link';

interface TaskFormProps {
  register: UseFormRegister<Task>;
  control: Control<Task>;
  error: string | null;
  submitLabel: string;
  onSubmit: (e: React.FormEvent) => void;
}

export function TaskForm({
  register,
  control,
  error,
  submitLabel,
  onSubmit,
}: TaskFormProps) {
  return (
    <div className="max-w-740 w-full mx-auto p-[1rem] md:p-0">
      <Link href="/home" className='block w-[25px]'>
        <Image src="/back.svg" alt="Back" width={25} height={25} className="mt-5 md:mt-10" />
      </Link>
      <form onSubmit={onSubmit} className="mt-10 md:mt-20">
        <p className="text-customBlue font-[600] mb-2">Title</p>
        <input
          className="bg-customGray text-grey py-3 px-3 rounded-[8px] shadow-md max-w-740 w-full border border-customGray-light outline-none"
          {...register('title')}
          placeholder="Ex. Brush you teeth"
        />
        <ColorPicker register={register} control={control} />
        {error && <div className="text-red-500 my-5">{error}</div>}
        <button
          className="bg-[#1E6F9F] hover:bg-[#2f78a3] active:bg-[#1A5F76] active:scale-95 transition-all duration-300 text-white font-[600] py-3 rounded-[8px] flex items-center justify-center shadow-md max-w-740 w-full"
          type="submit"
        >
          {submitLabel}
          <Image
            src="/plus.svg"
            alt={submitLabel}
            width={18}
            height={18}
            className="ml-2"
          />
        </button>
      </form>
    </div>
  );
}
