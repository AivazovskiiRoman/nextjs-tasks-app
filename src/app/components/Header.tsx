import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0D0D0D] h-[200px] flex justify-center items-center relative">
      <Link
        href="/home"
        className="flex items-center"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width={25}
          height={25}
          className="mr-2 mt-2"
        />
        <h1 className="text-3xl font-extrabold text-[30px] sm:text-[40px]">
          <span className="text-customBlue">Todo</span>{' '}
          <span className="text-customPurple">App</span>
        </h1>
      </Link>
    </header>
  );
}
