import { useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "./Icon";
import { useIsMobile } from "../../hooks/useIsMobile";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  title?: string;
  visibleItems?: number;
}

export function Carousel<T>({
  items,
  renderItem,
  title,
  visibleItems = 1,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isMobile = useIsMobile();
  const cardsPerPage = isMobile ? 1 : visibleItems;
  const maxIndex = Math.max(0, items.length - cardsPerPage);

  const minSwipeDistance = 50;

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  return (
    <div className="w-full space-y-4 overflow-hidden mb-6">
      <div className="flex items-center justify-between">
        {title && (
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        )}
        {!isMobile && (
          <div className="flex gap-2 shrink-0">
            <button onClick={prev} className="p-2 cursor-pointer">
              <Icon
                icon={ChevronLeft}
                className="size-5 text-text-primary hover:text-gold-500"
              />
            </button>
            <button onClick={next} className="p-2 cursor-pointer">
              <Icon
                icon={ChevronRight}
                className="size-5 text-text-primary hover:text-gold-500"
              />
            </button>
          </div>
        )}
      </div>

      <div
        className="relative w-full overflow-hidden rounded-lg touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
            width: "100%",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{
                width: `${100 / cardsPerPage}%`,
                padding: "0 8px",
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
