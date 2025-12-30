const blogImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

const BlogCard = ({ blog, index }) => {
  const image = blogImages[index % blogImages.length];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* IMAGE */}
      <img
        src={image}
        alt={blog["Blog Title"]}
        className="h-48 w-full object-cover"
      />

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        {/* FOCUS TAG */}
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
          {blog["Focus Area"].split(",")[0]}
        </span>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {blog["Blog Title"]}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-4">{blog.Description}</p>

        {/* INFO */}
        <div className="mt-auto text-sm text-gray-700 space-y-1">
          <p>
            <strong>Author:</strong> {blog["Author/Organization"]}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(blog["Last Updated"]).toLocaleDateString()}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${blog["Website URL"]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              {blog["Website URL"]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
