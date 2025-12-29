import React from "react";
import ProgramCard from "./ProgramCard";

const ProgramList = ({ programs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {programs.map((program) => (
        <ProgramCard key={program.ID} program={program} />
      ))}
    </div>
  );
};

export default ProgramList;
