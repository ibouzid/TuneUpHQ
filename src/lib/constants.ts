import { LayoutDashboard, Car, ClipboardList, Settings, Users } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard, roles: ['admin', 'tech'] },
  { label: 'Inventory', href: '/inventory', icon: Car, roles: ['admin'] },
  { label: 'Work Orders', href: '/orders', icon: ClipboardList, roles: ['admin', 'tech'] },
  { label: 'Customers', href: '/customers', icon: Users, roles: ['admin'] },
  { label: 'Settings', href: '/settings', icon: Settings, roles: ['admin', 'tech'] },
];

