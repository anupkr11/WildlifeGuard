const ContributeSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How You Can Contribute
          </h2>
          <p className="text-lg text-gray-700">
            Every action counts in the fight to protect our wildlife
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            ["Become a Volunteer", "Join our team of dedicated conservationists"],
            ["Report Wildlife Crime", "Help us combat poaching and trafficking"],
            ["Spread Awareness", "Educate others about conservation"],
            ["Support Programs", "Participate in conservation initiatives"],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContributeSection;
