import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  roles: string[];
  isActive?: boolean;
  isCollapsed?: boolean;
}

export const SidebarItem =  memo(function SidebarItem({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
  href,
}: SidebarItemProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(href)}
      className={clsx(
        isActive
          ? "bg-background-subtle text-gold-500"
          : "text-text-secondary hover:bg-background-subtle hover:text-text-primary",
        "relative flex items-center h-11 px-3 mx-2 cursor-pointer rounded-md transition-colors group",
      )}
    >
      <div className="flex items-center justify-center min-w-10">
        <Icon size={20} />
      </div>
      <span
        className={`
        ml-2 font-medium text-sm sidebar-text-clip transition-all duration-300
        ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-48"}
      `}
      >
        {label}
      </span>
      {isActive && (
        <div className="absolute left-0 w-1 h-5 bg-gold-500 rounded-r-full" />
      )}
    </div>
  );
})
