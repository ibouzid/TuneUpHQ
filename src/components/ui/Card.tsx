import { BarChart, Car, Check, Clock, DollarSign, Forklift, HardHat, Receipt, Shovel, Truck, Users, Wrench } from "lucide-react";
import { Icon } from "./Icon";
import clsx from "clsx";
import { memo } from "react";

const metricColors = {
  positive: 'text-text-success',
  negative: 'text-text-error',
  neutral: 'text-text-secondary',
} as const;

const icons = {
  dollar: DollarSign,
  car: Car,
  users: Users,
  receipt: Receipt,
  bar: BarChart,
  wrench: Wrench,
  check: Check,
  clock: Clock,
  lift: Forklift,
  truck: Truck,
  crane: HardHat,
  excavator: Shovel
  
} as const;

interface CardProps {
  icon?: keyof typeof icons;
  title: string;
  value: string;
  subTitle?: string;
  metric?: string;
  metricValue?: keyof typeof metricColors;
}

export const Card =  memo(function Card({
  icon,
  title,
  value,
  subTitle,
  metric,
  metricValue = 'neutral',
}: CardProps) {
  return (
    <div className="flex justify-between rounded-lg p-5 bg-background-secondary hover:border-t hover:border-gold-500">
      <div className="flex flex-col gap-1">
        <label className="text-text-secondary text-sm font-medium">{title}</label>
        <h3 className="text-text-primary text-3xl font-semibold">{value}</h3>
        <label className="text-text-secondary text-sm">{subTitle}</label>
        <label className={clsx(metricColors[metricValue])}>{metric}</label>
      </div>
     {icon &&  <Icon className='text-gold-500' icon={icons[icon]} />}
    </div>
  );
})
