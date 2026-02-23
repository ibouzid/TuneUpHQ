interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  title?: string;
}

export function Grid<T>({ items, renderItem, title }: CarouselProps<T>) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {title && (
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        )}
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-6">
          {items.map((item, index) => (
            <div key={index} className="">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
