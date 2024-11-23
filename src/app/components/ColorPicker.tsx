import { COLORS } from '@/lib/constants/colors';
import { Control, UseFormRegister, useWatch } from 'react-hook-form';

interface ColorPickerProps {
  register: UseFormRegister<Task>;
  control: Control<Task>;
}

export function ColorPicker({ register, control }: ColorPickerProps) {
  const currentColor = useWatch({
    control,
    name: 'color',
  });

  return (
    <div className="my-10">
      <p className="text-customBlue font-[600]">Color</p>
        <div className="flex gap-2 my-2 md:flex-nowrap flex-wrap">
          {COLORS.map((color) => (
            <label key={color} className="cursor-pointer">
              <input
                type="radio"
                {...register('color')}
                value={color}
                className="sr-only"
              />
              <div
                className={`w-12 h-12 rounded-full 
              ${color}
              transition-all duration-200 hover:scale-110
              ${
                currentColor === color ? 'ring-1 ring-white ring-offset-1' : ''
              }`}
              />
            </label>
          ))}
        </div>
    </div>
  );
}
