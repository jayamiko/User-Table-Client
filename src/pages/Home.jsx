import { useEffect, useState } from "react";
import axios from "axios";
import UserListTable from "../components/Table/UserListTable";

function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const itemPerPage = 10;
  const [limit, setLimit] = useState(itemPerPage);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const result = response.data;
      setCount(result.length);
      const dataSlice = result?.slice(offset, limit);

      setData(dataSlice);
      setIsLoading(false);
    });
  }, [limit, offset]);

  useEffect(() => {
    function onSearch(query) {
      if (query) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            setLimit(itemPerPage);
            setOffset(0);

            const result = response.data;
            const dataSlice = result?.slice(offset, limit);
            const filterData = dataSlice.filter((user) =>
              user.title.includes(query)
            );
            setData(filterData);
          });
      }
    }
    onSearch(query);
  }, [query, limit, offset]);

  const handlePrevPage = () => {
    setLimit(limit - itemPerPage);
    setOffset(offset - itemPerPage);
  };

  const handleNextPage = () => {
    setLimit(limit + itemPerPage);
    setOffset(offset + itemPerPage);
  };

  return (
    <div className="container mx-auto h-screen sm:p-5 lg:p-10">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search.."
        className="border px-2 w-60 py-2 border-black rounded-md"
      />

      {/* USER TABLE DATA */}
      {isLoading ? (
        <div className="w-full flex justify-center h-[50vh] items-center">
          Loading...
        </div>
      ) : (
        <UserListTable data={data} />
      )}

      <div id="pagination" className="w-full flex justify-between items-center">
        <button
          className={`${
            offset ? "bg-[#333] text-white" : "bg-slate-300 opacity-50"
          } font-bold text-xl px-4 py-2 border rounded-md`}
          onClick={handlePrevPage}
          disabled={offset === 0 && limit === itemPerPage ? true : false}
        >
          Prev
        </button>
        <button
          className={`${
            limit < count ? "bg-[#333] text-white" : "bg-slate-300 opacity-50"
          } font-bold text-xl px-4 py-2 border rounded-md`}
          onClick={handleNextPage}
          disabled={limit < count ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
