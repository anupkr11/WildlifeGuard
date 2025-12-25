const ReasonCard = ({ title, description, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition hover:-translate-y-1">
    <img src={image} alt={title} className="h-70 w-100 object-cover" />
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyMattersSection = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          Why Wildlife Conservation Matters
        </h2 >
        <p className="text-center text-2xl text-gray-700 mb-12">
            Every species plays a crucial role in maintaining the balance of our ecosystem
        </p>

        <div className="grid md:grid-cols-3 gap-15">
          <ReasonCard
            title="Biodiversity Preservation"
            image="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7"
            description="Protecting diverse species ensures ecosystem stability and resilience against environmental changes."
          />
          <ReasonCard
            title="Climate Regulation"
            image="https://images.unsplash.com/photo-1596238120156-5973b6839240"
            description="Healthy ecosystems regulate climate, purify air and water, and prevent natural disasters."
          />
          <ReasonCard
            title="Human Survival"
            image="https://images.unsplash.com/photo-1535338454770-8be927b5a00b"
            description="Our food, medicine, and resources depend on healthy wildlife populations and ecosystems."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
