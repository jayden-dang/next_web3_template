'use client'

import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header className="grid grid-cols-2 gap-x-4 w-full mx-auto z-10 border-b-[1px] border-gray-900 pb-4">
      {/* Left */}
      <div className="flex space-x-8 items-center justify-start">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <h2 className="font-extrabold hidden lg:flex text-xl leading-[24px] text-primary items-center">
            <span className="text-black font-bold text-xl items-center">_</span>
            <span className="text-secondary font-bold text-3xl items-center"> . </span>
            <span className="underline">JAYDEN</span>
            <span className="text-secondary font-bold text-3xl items-center"> . </span>
            <span className="text-black font-bold text-xl items-center">_</span>
          </h2>
        </Link>{" "}
        <div className="px-4 py-2 w-1/2 border border-gray-800 rounded-xl text-gray-900 font-light text-sm hidden md:flex relative">
          Just for Fun
          <button className="cursor-not-allowed absolute right-2">
            <CiSearch className="text-[22px]" />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end">
        <nav>
          <ul className="hidden lg:flex items-center justify-between space-x-4 font-light text-[14px]">
            <Link
              href="https://www.youtube.com/channel/UCZgkg3cHyFehjU97Y-ecuXQ"
              target="_blank"
              className="flex flex-col items-end justify-end group"
            >
              <p className="text-[12px] text-gray-500 group-hover:animate-ping">
                01 //
              </p>
              <li className="text-[15px] text-gray-600 group-hover:underline">
                Youtube
              </li>
            </Link>
            <Link
              href="https://t.me/jayden_dangvu"
              target="_blank"
              className="flex flex-col items-end justify-end group"
            >
              <p className="text-[12px] text-gray-500 group-hover:animate-ping">
                02 //
              </p>
              <li className="text-[15px] text-gray-600 group-hover:underline">
                Contact
              </li>
            </Link>
            <Link
              href="https://github.com/jayden-dang"
              target="_blank"
              className="flex flex-col items-end justify-end group"
            >
              <p className="text-[12px] text-gray-500 group-hover:animate-ping">
                03 //
              </p>
              <li className="text-[15px] text-gray-600 group-hover:underline">
                Github
              </li>
            </Link>
          </ul>
        </nav>
        <ConnectKitButton showAvatar={true} />
      </div>
    </header>
  );
};

export default Header;
