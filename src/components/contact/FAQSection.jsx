import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              className="bg-gray-300 rounded-xl shadow-sm border overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg md:text-xl hover:bg-gray-50 transition"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER  */}
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 text-base md:text-lg">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
