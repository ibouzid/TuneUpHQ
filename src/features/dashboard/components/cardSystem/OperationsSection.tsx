import { Card } from "../../../../components/ui/Card";
import { Carousel } from "../../../../components/ui/Carousel";
import { useTab } from "../../../../hooks/useTab";
import { useOperations } from "../../hooks/useOperations";

export function OperationsSection() {
  const { activeTab } = useTab();
  const { data, isFetching } = useOperations(activeTab ?? "day");
  return (
    <div
      className={`transition-opacity duration-100 ${
        isFetching ? "opacity-60" : "opacity-100"
      }`}
    >
      <Carousel
        title="Overview"
        items={data ?? []}
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
    </div>
  );
}
