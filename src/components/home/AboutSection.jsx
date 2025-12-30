import { Link } from "react-router-dom";
import { PrimaryButton } from "../ui/Buttons";

const AboutSection = () => {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-10xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1589556183130-530470785fab"
          alt="Wildlife Conservation"
          className="rounded-2xl shadow-2xl w-2xl mx-50 h-96 object-cover"
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold text-gray-900">
            What is Wildlife Conservation?
          </h2>
          <p className="text-xl text-gray-600">
            Wildlife conservation is the practice of protecting plant and animal
            species and their habitats. As India's population grows, our natural
            ecosystems face increasing pressure from habitat destruction,
            pollution, and climate change.
          </p>
          <p className="text-xl text-gray-600">
            Our mission is to preserve biodiversity, protect endangered species,
            and create sustainable coexistence between humans and wildlife
            through education, policy, and community engagement.
          </p>
          <Link to="/wildlife">
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
