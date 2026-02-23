import { Card } from "../../../../components/ui/Card";
import { Carousel } from "../../../../components/ui/Carousel";
import type { MetricCard } from "../../types";
import { DollarSign, Receipt, Users, Car} from 'lucide-react';

// Example Data
const overviewData: MetricCard[]= [
  { title: 'REVENUE', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: DollarSign, metricValue: 'positive'},
  { title: 'AVG REPAIR ORDER', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Receipt, metricValue: 'negative'},
  { title: 'TOTAL CUSTOMERS', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Users, metricValue: 'neutral'},
  { title: 'CARS IN SHOP', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Car, metricValue: 'positive'},
  { title: 'CARS IN SHOP', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Car, metricValue: 'positive'},
  { title: 'CARS IN SHOP', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Car, metricValue: 'positive'},
  { title: 'CARS IN SHOP', value: '$24,860', subTitle: 'Total revenue this month', metric: '▲ +8% vs last month', icon: Car, metricValue: 'positive'},
  
];

export function OverviewSection() {
  return (
    <Carousel
      title="Overview"
      items={overviewData}
      visibleItems={3}
      renderItem={(card) => (
        <Card title={card.title} value={card.value} subTitle={card.subTitle} metric={card.metric} icon={card.icon} metricValue={card.metricValue} />
      )} 
    />
  );
}