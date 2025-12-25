export const PrimaryButton = ({ children }) => (
  <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
    {children}
  </button>
);

export const OutlineButton = ({ children }) => (
  <button className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-green-900 transition">
    {children}
  </button>
);

export const WhiteButton = ({ children }) => (
  <button className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
    {children}
  </button>
);

export const OutlineWhiteButton = ({ children }) => (
  <button className="border border-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-green-700 transition">
    {children}
  </button>
);
