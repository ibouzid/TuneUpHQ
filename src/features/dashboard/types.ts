import type { LucideIcon } from "lucide-react";

export interface MetricCard {
    title: string;
    value: string;
    subTitle?: string;
    metric?: string;
    icon?: LucideIcon;
    metricValue?: 'positive' | 'negative' | 'neutral';
}