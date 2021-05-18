import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption";
function Header() {
  const router = useRouter();
  const Input = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = Input.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center flex-grow">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={Input}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              Input.current.value = "";
            }}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="data:image/jpeg;base64,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"
        />
      </div>
      <HeaderOption />
    </header>
  );
}

export default Header;