import Link from "next/link";
import { menuData } from "./data";

export function SideBar() {
  return (
    <nav>
      {menuData?.map((x) => (
        <Link
          key={x?.id}
          className="my-4 flex items-center gap-4 rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          href={x?.url}
        >
          {x?.icon}
          {x?.name}
        </Link>
      ))}
    </nav>
  );
}
