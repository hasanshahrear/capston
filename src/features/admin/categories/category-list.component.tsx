"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { IoIosAdd } from "react-icons/io";

export function CategoryList() {
  const { push } = useRouter();
  return (
    <div className="flex w-full justify-between">
      <p>Category List</p>
      <Button
        size="small"
        icon={<IoIosAdd />}
        onClick={() => push("categories/add")}
      >
        Add
      </Button>
    </div>
  );
}
