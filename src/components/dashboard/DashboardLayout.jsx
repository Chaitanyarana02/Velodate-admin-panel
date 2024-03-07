import { Outlet } from "react-router-dom";
import SideNavBar from "./pages/SideNavBar";
import TopNavBar from "./pages/TopNavBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex w-full min-h-screen bg-black">
        <div className="flex flex-col max-h-screen sticky top-0 opacity-100 z-50">
          <SideNavBar />
        </div>

        <div className="w-full flex flex-col flex-1">
          <TopNavBar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
