import React from "react";
import VolunteerForm from "../components/joinTeam/VolunteerForm.jsx";
import MotivationCard from "../components/joinTeam/MotivationCard.jsx";
import StatsBox from "../components/joinTeam/StatsBox.jsx";
import WhyJoinUs from "../components/jointeam/WhyJoinUs.jsx";
import VolunteerStories from "../components/jointeam/VolunteerStories.jsx";

const JoinTeam = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section
        className="relative h-[360px] md:h-[420px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Mission to Protect Wildlife
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Become a volunteer and contribute towards conservation, animal
            welfare, and environmental protection across India.
          </p>

          <a
            href="#volunteer-form"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      <WhyJoinUs />

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <VolunteerForm />
          </div>

          {/* SIDE CONTENT */}
          <div className="space-y-6">
            <StatsBox />

            <MotivationCard
              title="Serve the Nation"
              text="Be a part of government-backed initiatives protecting wildlife."
            />

            <MotivationCard
              title="Adopt & Protect"
              text="Help in animal adoption, rescue missions, and habitat protection."
            />

            <MotivationCard
              title="Work with Officials"
              text="Collaborate with forest officers, NGOs, and local authorities."
            />
          </div>
        </div>
      </section>
      <VolunteerStories />
    </div>
  );
};

export default JoinTeam;
