import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PrimaryButton, OutlineButton } from "../components/ui/Buttons";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34,51,34,0.7), rgba(45,66,45,0.8)), url('https://images.unsplash.com/photo-1617634667039-8e4cb277ab46')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl text-center space-y-8 px-6">
        <h1 className="text-8xl md:text-8xl font-bold">
          Guardians of Wildlife
        </h1>
        <p className="text-3xl md:text-3xl text-gray-100">
          Protecting India's Natural Heritage for Future Generations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/join-team">
            <PrimaryButton>
              Join Our Mission <ArrowRight className="ml-2 inline" />
            </PrimaryButton>
          </Link>

          <Link to="/wildlife">
            <OutlineButton>Explore Wildlife</OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
