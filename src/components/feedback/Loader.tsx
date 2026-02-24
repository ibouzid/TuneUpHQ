export function Loader() {
  return (
    <div className="flex items-center justify-center bg-background-secondary">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-yellow-400 border-t-[#E6B800] border-b-gray-700 border-l-gray-700 border-r-gray-700 rounded-full animate-spin"></div>
        <p className="text-text-primary text-lg font-semibold">
          Loading...
        </p>
        <div className="w-80 h-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="w-64 h-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="w-96 h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
}