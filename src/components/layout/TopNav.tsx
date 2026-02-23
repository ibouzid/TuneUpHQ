import { Icon } from "../ui/Icon";
import { Bell, ChevronDown, PlusCircleIcon, Search } from "lucide-react";
import { useAuthStore } from "../../stores/authStore";
import { SearchBar } from "../ui/Search" ;
import { ThemeToggle } from "../ui/ThemeToggle";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useState } from "react";
import { SearchOverlay } from "./SearchOverlay";
import { useLogout } from "../../features/login/hooks/useLogout";

export function TopNav() {
  const user = useAuthStore((state) => state.user);
    const isMobile = useIsMobile();
    const [mobileOpen, setMobileOpen] = useState(false);
  const { mutate: logout } = useLogout();

  return (
    <div className="flex items-center justify-between px-4 border-b border-border-subtle shadow-sm">
      {!isMobile && <SearchBar />}
      {isMobile && mobileOpen && <SearchOverlay closeOverlay={setMobileOpen} />}
      <div className="flex w-full gap-4 h-16 items-center justify-end">
        <ThemeToggle />
        {isMobile && <button onClick={() => setMobileOpen(true)}><Icon className="text-gold-500 cursor-pointer hover:text-gold-200" icon={Search} /></button>}
        <Icon className="text-gold-500 cursor-pointer hover:text-gold-200" icon={PlusCircleIcon} />
        <Icon className="text-gold-500 cursor-pointer hover:text-gold-200" icon={Bell} />
        <button onClick={() => logout()} className="text-text-primary hover:text-gold-500 flex text-sm cursor-pointer border-l border-gold-700 h-[100%] items-center justify-center pl-4" >
          {user?.name}
          <Icon className="text-gold-500" icon={ChevronDown} />
        </button>
      </div>
    </div>
  );
}
