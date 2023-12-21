import { Outlet } from 'react-router-dom';
import DashBroadLayout from './DashBroadLayout';

const DrawerLayout = () => {
  return (
    <div>
      <div className="flex">
        <DashBroadLayout />
        <div className="flex-1 p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DrawerLayout;