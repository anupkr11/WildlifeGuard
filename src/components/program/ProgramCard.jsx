import React from "react";
import { Link } from "react-router-dom";

const programImages = {
  "Project Tiger":
    "data:image/jpeg;base64,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",

  "African Elephant Protection Initiative":
    "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",

  "The Panda Conservation Program":
    "https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI=",

  "National Endangered Species Act (ESA)":
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

  "Great Barrier Reef Protection Program":
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  "Amazon Rainforest Protection Program":
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
};

const fallbackImg =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col md:flex-row">

      {/* IMAGE */}
      <div className="md:w-2/5 h-60 md:h-auto">
        <img
          src={programImages[program["Program Name"]] || fallbackImg}
          alt={program["Program Name"]}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="md:w-3/5 p-6 flex flex-col justify-between">

        <div>
          {/* DURATION BADGE */}
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
            {program.Duration || "Ongoing"}
          </span>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {program["Program Name"]}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {program.Description}
          </p>

          {/* INFO */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Launched:</strong> {program["Year Launched"]}
            </p>
            <p>
              <strong>Target:</strong> {program["Target Species/Ecosystems"]}
            </p>
            <p>
              <strong>Status:</strong> {program["Current Status"]}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Link
            to={`/programs/${program.ID}`}
            className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
