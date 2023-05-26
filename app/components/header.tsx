import Link from "next/link";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <header className="w-full flex items-center py-5 px-9 bg-[#0C8499] top-0 sticky z-10">
      <div className="grow">
        <img src="/logo.png" alt="not found" className="w-44" />
      </div>
      <div className="flex items-center">
        <div className="flex gap-3 mr-5 font-bold text-white">
          <MenuItem title={"Dashboard"} link={"/"}/>
          <MenuItem title={"Course"} link={"/courses"}/>
          <MenuItem title={"Rank"} link={"/"}/>
        </div>
        <div className="flex gap-2">
          <button className="bg-amber-400 p-1 rounded-full">btn</button>
          <button className="bg-amber-400 p-1 rounded-full">btn</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
