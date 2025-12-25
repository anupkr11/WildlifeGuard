import { Heart, Users, TreePine, Award } from "lucide-react";

const StatCard = ({ icon, number, label }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition">
    <div className="flex justify-center mb-4 text-green-700">
      {icon}
    </div>
    <h3 className="text-4xl font-bold">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StatsSection = () => {
  return (
    <section className="py-28 bg-stone-50">
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <StatCard icon={<Users size={48} />} number="10,000+" label="Volunteers" />
        <StatCard icon={<Heart size={48} />} number="15,000+" label="Animals Rescued" />
        <StatCard icon={<TreePine size={48} />} number="500,000" label="Hectares Restored" />
        <StatCard icon={<Award size={48} />} number="50+" label="Species Protected" />
      </div>
    </section>
  );
};

export default StatsSection;
