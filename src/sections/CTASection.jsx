import { Link } from "react-router-dom";
import { WhiteButton, OutlineWhiteButton } from "../components/ui/Buttons";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join the Movement to Save Wildlife
      </h2>
      <p className="text-xl mb-8">
        Together, we can protect biodiversity for generations to come
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/join-team">
          <WhiteButton>Become a Guardian</WhiteButton>
        </Link>
        <Link to="/contact">
          <OutlineWhiteButton>Contact Us</OutlineWhiteButton>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
