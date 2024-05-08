import { SideBar } from "@/features/admin";

type TProps = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: TProps) {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <div className="flex flex-1 flex-wrap">
        <div
          className="hidden w-full flex-col bg-white p-2 md:flex md:w-60"
          id="sideNav"
        >
          <SideBar />
        </div>

        <div className="w-full flex-1 p-4 md:w-1/2">
          <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
