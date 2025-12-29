const ProgramHero = () => {
  return (
    <section
      className="h-[380px] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
      }}
    >
      <div className="px-6">
        <h1 className="text-5xl font-bold text-white mb-4">
          Government Wildlife Programs
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Initiatives, rescue operations, and conservation programs aimed at
          protecting India’s wildlife and ecosystems.
        </p>
      </div>
    </section>
  );
};

export default ProgramHero;
