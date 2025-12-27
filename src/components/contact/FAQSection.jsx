import React from "react";

const faqs = [
  {
    q: "How can I join wildlife conservation programs?",
    a: "You can join by registering through the Join Team page and selecting suitable initiatives.",
  },
  {
    q: "Who can volunteer?",
    a: "Any Indian citizen above 18 years with valid ID can volunteer.",
  },
  {
    q: "Is this a government initiative?",
    a: "Yes, the platform is aligned with government-backed wildlife initiatives.",
  },
  {
    q: "How do I track my query?",
    a: "Our team will respond to your registered email within 48 working hours.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-semibold mb-2 text-2xl">{item.q}</h4>
              <p className="text-gray-600 text-xl">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
