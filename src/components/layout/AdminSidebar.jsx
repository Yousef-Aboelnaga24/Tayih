import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Settings, Baby, Filter, ShieldCheck, PowerIcon } from "lucide-react";

export default function AdminSidebar({ isSidebarOpen, setSidebarOpen }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here later if needed
        navigate("/login");
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 bottom-0 right-0 z-50 w-64 bg-primary-darker text-white h-screen transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
                }`}
            >
                {/* Brand */}
                <div className="flex items-center justify-center h-20 border-b border-white/10 bg-black/10">
                    <ShieldCheck className="text-primary-light w-8 h-8 ml-3" />
                    <h2 className="text-2xl font-bold tracking-wider text-white">
                        تائه - <span className="text-primary-light text-sm">للإدارة</span>
                    </h2>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`
                        }
                    >
                        <LayoutDashboard className="w-5 h-5 ml-3" />
                        اللوحة الرئيسية
                    </NavLink>

                    <NavLink
                        to="/admin/childs"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`
                        }
                    >
                        <Baby className="w-5 h-5 ml-3" />
                        سجل المفقودين
                    </NavLink>

                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`
                        }
                    >
                        <Settings className="w-5 h-5 ml-3" />
                        الإعدادات
                    </NavLink>
                </nav>

                {/* Footer / Logout */}
                <div className="p-4 border-t border-white/10 bg-black/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3 text-red-400 bg-red-400/10 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
                    >
                        <PowerIcon className="w-5 h-5 ml-3" />
                        تسجيل الخروج
                    </button>
                </div>
            </aside>
        </>
    );
}
