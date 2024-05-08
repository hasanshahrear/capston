import { TbCategoryPlus, TbMovie } from "react-icons/tb";
import { TSidebar } from "./type";

export const menuData: TSidebar[] = [
  {
    id: 1,
    name: "Categories",
    url: "/admin/categories",
    icon: <TbCategoryPlus />,
  },
  {
    id: 2,
    name: "Movies",
    url: "/admin/movies",
    icon: <TbMovie />,
  },
];
