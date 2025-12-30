import React from "react";

const volunteers = [
  {
    name: "Rajesh Kumar",
    text: "Volunteering with Guardians of Wildlife has been incredibly rewarding. I've learned so much about conservation.",
    icon: "🧑‍🌾",
  },
  {
    name: "Priya Sharma",
    text: "Being part of wildlife rescue operations has given me purpose and connected me with amazing people.",
    icon: "🧑‍🎓",
  },
  {
    name: "Arjun Patel",
    text: "I spend my weekends monitoring forest areas. It's amazing to see the impact we're making together.",
    icon: "🧑‍💼",
  },
];

const VolunteerStories = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Volunteers Making a Difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-200 flex items-center justify-center text-3xl">
                {v.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">{v.name}</h3>

              <p className="text-gray-600 leading-relaxed text-xl">
                “{v.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerStories;
