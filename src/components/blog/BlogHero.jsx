const BlogHero = () => {
  return (
    <section
      className="h-[300px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')",
      }}
    >
      <div className="text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Wildlife & Conservation Blogs
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Stay informed about conservation efforts, wildlife protection programs,
          and government initiatives.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
