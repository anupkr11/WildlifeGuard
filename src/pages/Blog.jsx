import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/blogSlice";
import BlogList from "../components/blog/BlogList";

const MAX_VISIBLE_FILTERS = 8;

const Blog = () => {
  const dispatch = useDispatch();
  const { data: blogs, loading } = useSelector((state) => state.blogs);

  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllFilters, setShowAllFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  /* BUILD FILTER LIST */
  const allFilters = [
    "All",
    ...new Set(
      blogs.flatMap((b) =>
        b["Focus Area"]
          ? b["Focus Area"].split(",").map((f) => f.trim())
          : []
      )
    ),
  ];

  const visibleFilters = showAllFilters
    ? allFilters
    : allFilters.slice(0, MAX_VISIBLE_FILTERS);

  /* FILTER BLOGS */
  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter((blog) =>
          blog["Focus Area"]?.includes(activeFilter)
        );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTER BAR */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3">

            {visibleFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border font-semibold transition ${
                  activeFilter === filter
                    ? "bg-green-700 text-white border-green-700"
                    : "border-green-600 text-green-700 hover:bg-green-50"
                }`}
              >
                {filter}
              </button>
            ))}

            {allFilters.length > MAX_VISIBLE_FILTERS && (
              <button
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                {showAllFilters ? "Show Less ↑" : "More Filters ↓"}
              </button>
            )}
          </div>
        </div>

        {/* BLOG LIST */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-72 bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <BlogList blogs={filteredBlogs} />
        )}
      </div>
    </section>
  );
};

export default Blog;
