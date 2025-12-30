import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-6">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-7xl font-extrabold text-green-700 mb-4">
            404
          </h1>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Oops! The page you’re looking for doesn’t exist or has been moved.
            But don’t worry — you can continue exploring wildlife conservation
            efforts with us 🌿
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Go to Home
            </Link>

            <Link
              to="/programs"
              className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block relative">
          <img
            src="https://www.azolifesciences.com/images/Article_Images/ImageForArticle_714_16449362895935733.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center">
            <p className="text-white text-lg font-semibold tracking-wide">
              Protect • Preserve • Sustain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
