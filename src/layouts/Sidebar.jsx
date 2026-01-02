import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, MapPin, Settings, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Staff", path: "/staff" },
    { icon: MapPin, label: "Locations", path: "/locations" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen fixed left-0 top-0 flex flex-col z-50 transition-all duration-300">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b">
        <span className="text-xl font-bold text-indigo-600 tracking-wide">
          AdminPanel
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-100">
        <button
          onClick={() => dispatch(logout())}
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 w-full rounded-xl transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
