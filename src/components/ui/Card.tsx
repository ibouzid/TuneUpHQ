import { type LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import clsx from "clsx";

const metricColors = {
  positive: 'text-text-success',
  negative: 'text-text-error',
  neutral: 'text-text-secondary',
} as const;

interface CardProps {
  icon?: LucideIcon;
  title: string;
  value: string;
  subTitle?: string;
  metric?: string;
  metricValue?: keyof typeof metricColors;
}

export function Card({
  icon,
  title,
  value,
  subTitle,
  metric,
  metricValue = 'neutral',
}: CardProps) {
  return (
    <div className="flex justify-between rounded-lg p-5 bg-background-secondary">
      <div className="flex flex-col gap-1">
        <label className="text-text-secondary text-sm font-medium">{title}</label>
        <h3 className="text-text-primary text-3xl font-semibold">{value}</h3>
        <label className="text-text-secondary text-sm">{subTitle}</label>
        <label className={clsx(metricColors[metricValue])}>{metric}</label>
      </div>
     {icon &&  <Icon className='text-gold-500' icon={icon} />}
    </div>
  );
}
