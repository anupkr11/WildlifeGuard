import React from "react";

const CategoryFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">

      {/* SEARCH */}
      <div className="w-full md:w-2/3">
        <input
          type="text"
          placeholder="Search by animal name, habitat, diet or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl bg-white text-gray-900 shadow-lg outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* FILTER */}
      <div className="w-full md:w-1/3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-5 py-3 rounded-xl bg-white text-gray-900 shadow-lg outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All</option>
          <option value="Endangered">Endangered</option>
          <option value="Vulnerable">Vulnerable</option>
          <option value="Near Threatened">Near Threatened</option>
          <option value="Critically Endangered">
            Critically Endangered
          </option>
          <option value="Least Concern">Least Concern</option>
        </select>
      </div>

    </div>
  );
};

export default CategoryFilter;
