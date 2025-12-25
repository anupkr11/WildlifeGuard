const ClimateSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Climate Change & Wildlife
          </h2>
          <p className="text-lg text-gray-300">
            Climate change is one of the greatest threats to wildlife today.
            Rising temperatures and extreme weather events are disrupting ecosystems.
          </p>
          <p className="text-lg text-gray-300">
            Species are forced to adapt, migrate, or face extinction. We work on
            habitat protection and climate-resilient conservation strategies.
          </p>
          <a
            href="/blog"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
          >
            Read Our Climate Blogs
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Climate impact"
          className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
        />

      </div>
    </section>
  );
};

export default ClimateSection;
