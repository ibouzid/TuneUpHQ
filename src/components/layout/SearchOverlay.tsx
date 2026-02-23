import { SearchBar } from "../ui/Search";

export function SearchOverlay({
  closeOverlay,
}: {
  closeOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div
        onClick={() => closeOverlay(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
      />
      <div className="relative z-10 m-6 w-full max-w-md rounded-2xl shadow-xl animate-slide-down-fade">
        <SearchBar />
      </div>
    </div>
  );
}
