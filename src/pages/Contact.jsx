import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import FAQSection from "../components/contact/FAQSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* BANNER */}
      <section
        className="relative h-[320px] md:h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="px-6">
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-xl text-gray-200 max-w-2xl mx-auto">
            Reach out to us for queries, support, or guidance on wildlife
            conservation initiatives.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <ContactInfo />

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
};

export default Contact;
