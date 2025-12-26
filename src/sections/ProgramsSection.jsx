const ProgramsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Conservation Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Government initiatives protecting wildlife and preserving natural habitats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Wildlife Protection Initiative",
              image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
              desc: "24/7 wildlife emergency response and protection program",
            },
            {
              title: "Habitat Restoration Program",
              image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
              desc: "Restoring and protecting natural habitats across the country",
            },
            {
              title: "Anti-Poaching Task Force",
              image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              desc: "Elite unit combating wildlife crime and illegal trafficking",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <button className="w-full border border-green-700 text-green-700 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold">
            View All Programs →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
