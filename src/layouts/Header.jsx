import React from "react";
import { useSelector } from "react-redux";
import { UserCircle } from "lucide-react";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b fixed top-0 right-0 left-64 z-40 px-8 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-slate-700">
        Welcome back, {user?.name || "Admin"}
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
          <UserCircle className="w-5 h-5 text-slate-400" />
          <span className="text-sm font-medium text-slate-600">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
