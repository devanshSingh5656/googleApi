import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import HeaderOptionSingle from "./HeaderOptionSingle";
function HeaderOption() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] ">
      <div className="flex space-x-6">
        <HeaderOptionSingle Icon={SearchIcon} text="All" selected />
        <HeaderOptionSingle Icon={PhotographIcon} text="Images" />
        <HeaderOptionSingle Icon={PlayIcon} text="Videos" />
        <HeaderOptionSingle Icon={NewspaperIcon} text="News" />
        <HeaderOptionSingle Icon={MapIcon} text="Maps" />
        <HeaderOptionSingle Icon={DotsVerticalIcon} text="More" />
      </div>
      <div className="flex space-x-4">
        <p>Setting</p>
        <p>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOption;
