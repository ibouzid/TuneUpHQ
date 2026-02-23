import { Card } from "../../../../components/ui/Card";
import { Carousel } from "../../../../components/ui/Carousel";
import { useOperations } from "../../hooks/useOperations";

export function OperationsSection() {
  const { data } = useOperations();
  return data ? (
    <Carousel
      title="Overview"
      items={data}
      visibleItems={2}
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