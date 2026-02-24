import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";
import { NAV_ITEMS } from "../../lib/constants";
import { useIsMobile } from "../../hooks/useIsMobile";
import Logo from '../../assets/logos/tuneUpHQLogo.svg';
import { Icon } from "../ui/Icon";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const sidebarWidth = isMobile
    ? mobileOpen
      ? "w-64"
      : "w-0"
    : isOpen
      ? "w-64"
      : "w-20";

  return (
    <>
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-30 p-2 bg-background-card rounded-md border border-border-subtle"
        >
          <Menu className="text-gold-500" />
        </button>
      )}
      <aside
        className={`
        ${sidebarWidth} 
        fixed inset-y-0 left-0 z-50 shrink-0
        transition-all duration-300 ease-in-out
        bg-background-secondary border-r border-border-subtle
        flex flex-col overflow-hidden
        ${isMobile && !mobileOpen ? "-translate-x-full" : "translate-x-0"}
        lg:relative lg:translate-x-0
      `}
      >
        <div className="h-16 flex items-center px-6 border-b justify-between border-border-subtle shrink-0">
          <div className="flex items-center">
            <img src={Logo} alt="TuneUp Logo" className="w-10 h-10" />
            <span
              className={clsx("ml-3 font-bold text-gold-500 transition-opacity", !isOpen && !isMobile ? "opacity-0" : "opacity-100")}
            >
              TuneUp HQ
            </span>
          </div>
        </div>
        <nav className="flex-1 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              isCollapsed={!isOpen && !isMobile}
              isActive={location.pathname === item.href}
              href={item.href}
              roles={item.roles}
            />
          ))}
        </nav>
         {!isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 border-t border-border-subtle hover:bg-background-subtle flex justify-center cursor-pointer"
          >
            <Icon icon={isOpen ? ChevronRight : ChevronLeft}  className={"text-text-primary transition-transform rotate-180"} />
          </button>
        )}
      </aside>
    </>
  );
}
