import { useParams } from "react-router-dom";
import TopNav from "../components/top_nav";

const SearchPage = () => {
  const { query } = useParams();
  return (
    <div className="px-32 my-6 flex flex-col items-center">
      <TopNav selected_key="search" search_value={query} />
      <div className="flex justify-center gap-4 flex-wrap">{query}</div>
    </div>
  );
};

export default SearchPage;
