const statusColors = {
  Endangered: "bg-red-100 text-red-700",
  Vulnerable: "bg-orange-100 text-orange-700",
  "Near Threatened": "bg-yellow-100 text-yellow-700",
  "Critically Endangered": "bg-red-200 text-red-800",
  "Least Concern": "bg-green-100 text-green-700",
};

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition">

      <h3 className="text-2xl font-bold text-gray-900 mb-1">
        {animal["Animal Name"]}
      </h3>

      <p className="italic text-gray-500 mb-3">{animal.Species}</p>

      <span
        className={`inline-block px-3 py-1 text-xs rounded-full font-semibold mb-3 ${
          statusColors[animal["Conservation Status"]] || "bg-gray-200"
        }`}
      >
        {animal["Conservation Status"]}
      </span>

      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Habitat:</strong> {animal.Habitat}</p>
        <p><strong>Diet:</strong> {animal.Diet}</p>
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>🕒 {animal["Average Lifespan (Years)"]} yrs</span>
        <span>⚡ {animal["Speed (km/h)"]} km/h</span>
      </div>
    </div>
  );
};

export default AnimalCard;
