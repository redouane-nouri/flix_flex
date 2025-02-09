import TopNav from "../components/top_nav";

const SearchPage = () => {
  return (
    <div className="px-32 my-4 flex flex-col items-center">
      <div className="w-[580px] my-6">
        <TopNav selected_key="search" />
      </div>
      <div className="flex justify-center gap-4 flex-wrap">Search</div>
    </div>
  );
};

export default SearchPage;
