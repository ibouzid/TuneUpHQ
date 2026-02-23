import { Card } from "../../../../components/ui/Card";
import { Carousel } from "../../../../components/ui/Carousel";
import { useOverview } from "../../hooks/useOverview";

export function OverviewSection() {
  const { data } = useOverview();
  return data ? (
    <Carousel
      title="Overview"
      items={data}
      visibleItems={3}
      renderItem={(card) => (
        <Card
          title={card.title}
          value={card.value}
          subTitle={card.subTitle}
          metric={card.metric}
          icon={card.icon}
          metricValue={card.metricValue}
        />
      )}
    />
  ) : (
    <></>
  );
}
