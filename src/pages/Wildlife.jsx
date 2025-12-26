import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWildlife } from "../redux/wildlifeSlice";

import AnimalCard from "../components/wildlife/AnimalCard";
import CategoryFilter from "../components/wildlife/CategoryFilter";
import Pagination from "../components/wildlife/Pagination";

const ITEMS_PER_PAGE = 9;

const Wildlife = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.wildlife);

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchWildlife());
  }, [dispatch]);

  /* FILTER + SEARCH */
  const filteredData = data.filter((item) => {
    const matchesFilter =
      filter === "All" ||
      item["Conservation Status"]?.toLowerCase() === filter.toLowerCase();

    const searchText = search.toLowerCase();
    const matchesSearch =
      item["Animal Name"]?.toLowerCase().includes(searchText) ||
      item.Habitat?.toLowerCase().includes(searchText) ||
      item.Diet?.toLowerCase().includes(searchText) ||
      item["Conservation Status"]?.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  /* PAGINATION */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, search]);

  /* LOADING ANIMATION */
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-white/30 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-600 mt-10">
        Failed to load wildlife data
      </p>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')",
      }}
    >
      <div className="bg-black/50 min-h-screen py-14">
        <div className="max-w-7xl mx-auto px-6">
          <CategoryFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
          />

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paginatedData.map((animal) => (
              <AnimalCard key={animal.ID} animal={animal} />
            ))}
          </div>

          {paginatedData.length === 0 && (
            <p className="text-center text-white mt-10">No animals found</p>
          )}

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Wildlife;
