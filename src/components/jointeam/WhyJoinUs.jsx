import React from "react";
import { Heart, Users, TreePine, Shield } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Make an Impact",
    text: "Directly contribute to saving endangered species",
  },
  {
    icon: Users,
    title: "Join Community",
    text: "Connect with passionate conservationists",
  },
  {
    icon: TreePine,
    title: "Learn & Grow",
    text: "Gain hands-on conservation experience",
  },
  {
    icon: Shield,
    title: "Protect Nature",
    text: "Be part of wildlife protection initiatives",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADING */}
        <h2 className="text-5xl font-bold mb-4">Why Join Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-2xl">
          Your contribution can make a real difference in protecting India's wildlife
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-6">
                  <Icon size={36} className="text-green-700" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
